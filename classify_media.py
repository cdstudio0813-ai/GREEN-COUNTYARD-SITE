import os
import json
import base64
from pathlib import Path
from PIL import Image
import cv2
import numpy as np
from tqdm import tqdm
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI()

ROOT = Path(".")
RAW_IMAGES = ROOT / "assets" / "raw" / "images"
RAW_VIDEOS = ROOT / "assets" / "raw" / "videos"
OUTPUT = ROOT / "output"
OUTPUT.mkdir(exist_ok=True)

PROJECTS_JSON = ROOT / "projects.json"

ALLOWED_IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_VIDEO_EXT = {".mp4", ".mov", ".m4v", ".avi"}

def encode_image(path: Path) -> str:
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

def image_quality_score(path: Path) -> float:
    img = cv2.imread(str(path))
    if img is None:
        return 0.0

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    sharpness = cv2.Laplacian(gray, cv2.CV_64F).var()
    brightness = float(np.mean(gray))
    contrast = float(np.std(gray))

    sharpness_score = min(sharpness / 500, 1.0) * 40
    brightness_score = max(0, 1 - abs(brightness - 128) / 128) * 30
    contrast_score = min(contrast / 64, 1.0) * 30

    return round(sharpness_score + brightness_score + contrast_score, 2)

def extract_video_frame(video_path: Path, out_path: Path, ratio=0.5):
    cap = cv2.VideoCapture(str(video_path))
    total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    target = int(total * ratio)
    cap.set(cv2.CAP_PROP_POS_FRAMES, target)
    success, frame = cap.read()
    if success:
        cv2.imwrite(str(out_path), frame)
    cap.release()
    return success

def classify_and_describe_image(path: Path):
    b64 = encode_image(path)

    prompt = """
你是一位專門整理園藝造景作品集的策展編輯。
請根據圖片內容，輸出 JSON，不要輸出其他文字。

分類 category 只能是以下之一：
- garden_before
- garden_process
- garden_final
- tree_pruning
- tree_selling
- unknown

請同時輸出：
- category
- title
- short_description
- website_description
- style_tags (陣列)
- seo_keywords (陣列)
- visual_rating (1~10)

判斷標準：
- 庭園造景施工前：空地、未整理、改造前
- 庭園造景施工中：工班、器具、施工畫面
- 庭園造景完工：景觀完成、可展示
- 修樹：正在修剪或修整樹木
- 販樹：單棵樹、樹苗、可作為販售展示
- 若不明確則 unknown

title 請用繁體中文，適合放網站。
short_description 30字內。
website_description 60~120字。
"""

    response = client.responses.create(
        model="gpt-5",
        input=[
            {
                "role": "user",
                "content": [
                    {"type": "input_text", "text": prompt},
                    {
                        "type": "input_image",
                        "image_url": f"data:image/jpeg;base64,{b64}"
                    }
                ]
            }
        ]
    )

    text = response.output_text.strip()
    return json.loads(text)

def normalize_category(category: str) -> str:
    mapping = {
        "garden_before": "庭園造景｜施工前",
        "garden_process": "庭園造景｜施工過程",
        "garden_final": "庭園造景｜完工",
        "tree_pruning": "修樹",
        "tree_selling": "販樹",
        "unknown": "未分類"
    }
    return mapping.get(category, "未分類")

def main():
    results = []
    temp_frames = OUTPUT / "video_frames"
    temp_frames.mkdir(exist_ok=True)

    image_files = [p for p in RAW_IMAGES.rglob("*") if p.suffix.lower() in ALLOWED_IMAGE_EXT]
    video_files = [p for p in RAW_VIDEOS.rglob("*") if p.suffix.lower() in ALLOWED_VIDEO_EXT]

    print(f"找到 {len(image_files)} 張照片")
    print(f"找到 {len(video_files)} 支影片")

    for image_path in tqdm(image_files, desc="分析照片"):
        try:
            ai_result = classify_and_describe_image(image_path)
            quality = image_quality_score(image_path)

            results.append({
                "type": "image",
                "source": str(image_path).replace("\\", "/"),
                "coverImage": str(image_path).replace("\\", "/"),
                "title": ai_result["title"],
                "category": normalize_category(ai_result["category"]),
                "raw_category": ai_result["category"],
                "location": "花蓮",
                "visualScore": quality,
                "aiVisualRating": ai_result.get("visual_rating", 5),
                "shortDescription": ai_result["short_description"],
                "websiteDescription": ai_result["website_description"],
                "styleTags": ai_result.get("style_tags", []),
                "seoKeywords": ai_result.get("seo_keywords", []),
                "featured": False
            })
        except Exception as e:
            print(f"照片分析失敗: {image_path} | {e}")

    for video_path in tqdm(video_files, desc="分析影片"):
        try:
            frame_path = temp_frames / f"{video_path.stem}_frame.jpg"
            ok = extract_video_frame(video_path, frame_path, ratio=0.5)
            if not ok:
                continue

            ai_result = classify_and_describe_image(frame_path)
            quality = image_quality_score(frame_path)

            results.append({
                "type": "video",
                "source": str(video_path).replace("\\", "/"),
                "coverImage": str(frame_path).replace("\\", "/"),
                "title": ai_result["title"],
                "category": normalize_category(ai_result["category"]),
                "raw_category": ai_result["category"],
                "location": "花蓮",
                "visualScore": quality,
                "aiVisualRating": ai_result.get("visual_rating", 5),
                "shortDescription": ai_result["short_description"],
                "websiteDescription": ai_result["website_description"],
                "styleTags": ai_result.get("style_tags", []),
                "seoKeywords": ai_result.get("seo_keywords", []),
                "featured": False
            })
        except Exception as e:
            print(f"影片分析失敗: {video_path} | {e}")

    # 綜合排序
    for item in results:
        item["totalScore"] = round(item["visualScore"] * 0.7 + item["aiVisualRating"] * 10 * 0.3, 2)

    results.sort(key=lambda x: x["totalScore"], reverse=True)

    # 前 24 筆標成精選
    for i, item in enumerate(results):
        if i < 24:
            item["featured"] = True

    with open(PROJECTS_JSON, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"完成，共輸出 {len(results)} 筆到 {PROJECTS_JSON}")

if __name__ == "__main__":
    main()