const projects = [
  {
    id: "case-001",
    title: "修樹整理案例",
    category: "tree-care",
    categoryLabel: "樹木修整",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    note: "可替換成你的精選修樹案例封面",
    location: "花蓮",
    style: "自然整理",
    featured: true,
  },
  {
    id: "case-002",
    title: "中式庭院氛圍",
    category: "chinese-courtyard",
    categoryLabel: "中式庭院",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    note: "建議放庭院整體完成照",
    location: "花蓮",
    style: "中式庭院",
    featured: true,
  },
  {
    id: "case-003",
    title: "日式庭院改造",
    category: "japanese-garden",
    categoryLabel: "日式庭院",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    note: "建議放前後對比照",
    location: "花蓮",
    style: "日式庭院",
    featured: true,
  },
  {
    id: "case-004",
    title: "植栽與販樹",
    category: "plants",
    categoryLabel: "販樹植栽",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    note: "建議放樹種與植栽素材照",
    location: "花蓮",
    style: "植栽配置",
    featured: true,
  },
  {
    id: "case-005",
    title: "石景與留白",
    category: "stone-layout",
    categoryLabel: "景觀細節",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    note: "建議放石景細節與路徑照片",
    location: "花蓮",
    style: "中日式混合",
    featured: false,
  },
  {
    id: "case-006",
    title: "花蓮在地庭園",
    category: "local-project",
    categoryLabel: "在地案例",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    note: "建議放在地案場實拍",
    location: "花蓮",
    style: "庭院改造",
    featured: false,
  },
];

const services = [
  {
    title: "樹木修整",
    subtitle: "Tree Pruning & Care",
    description:
      "針對庭院、民宿、農舍與社區提供樹型整理、危險枝修剪、老樹照護與日常維護，兼顧安全、採光與景觀美感。",
    bullets: ["危險枝修剪", "樹型整理", "老樹照護", "定期維護"],
  },
  {
    title: "販樹植栽",
    subtitle: "Plants & Garden Trees",
    description:
      "精選適合花蓮氣候的喬木、灌木與景觀植栽，提供搭配建議、運送與種植，讓庭院更快形成完整風景。",
    bullets: ["喬木選配", "觀賞樹販售", "原生植栽建議", "配送與種植"],
  },
  {
    title: "庭院改造",
    subtitle: "Courtyard Renovation",
    description:
      "以中、日式庭院語彙結合石景、留白、植栽層次與動線規劃，打造安靜、自然、可長久維護的庭院空間。",
    bullets: ["中日式庭院規劃", "老庭院翻新", "景觀動線整理", "整體施工建議"],
  },
];

const process = [
  {
    step: "01",
    title: "傳送現況照片",
    description: "先提供庭院、樹木或空地現況照片，讓我們初步了解空間條件。",
  },
  {
    step: "02",
    title: "說明需求與預算",
    description: "告訴我們是要修樹、買樹、整理庭院，或希望改造成中日式景觀。",
  },
  {
    step: "03",
    title: "安排現場評估",
    description: "依案件狀況安排到場勘查，評估樹況、動線、土壤與施工方式。",
  },
  {
    step: "04",
    title: "提供建議與報價",
    description: "根據需求提供施作建議、時程規劃與正式報價，確認後安排施工。",
  },
];

const features = [
  "深耕花蓮，熟悉在地氣候與植栽條件",
  "中、日式庭院風格，重視留白與整體氣質",
  "從修樹、販樹到庭院改造，一站式整合",
  "兼顧美感、實用性與後續維護成本",
];

const palette = {
  ink: "#1a1a1a",
  green: "#2d5134",
  greenSoft: "#647a5f",
  beige: "#f5f0e7",
  sand: "#ede6da",
  line: "#d8cfbf",
  red: "#b63a2f",
};

const featuredProjects = projects.filter((project) => project.featured);

function BrandMark() {
  return (
    <div className="relative flex h-[220px] w-full items-center justify-center md:h-[280px]">
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <div
          className="h-[150px] w-[150px] rounded-full border-[5px] md:h-[190px] md:w-[190px] md:border-[6px]"
          style={{
            borderColor: palette.ink,
            borderLeftColor: "transparent",
            borderBottomColor: "transparent",
            transform: "rotate(28deg) translate(18px, -8px)",
          }}
        />
      </div>
      <div className="relative z-10 text-center">
        <div
          className="font-serif text-[74px] leading-none tracking-[-0.08em] md:text-[108px]"
          style={{ color: palette.ink }}
        >
          綠化苑
        </div>
        <div
          className="mt-4 font-serif text-[22px] uppercase tracking-[0.32em] md:text-[34px]"
          style={{ color: palette.green }}
        >
          Green Courtyard
        </div>
      </div>
      <div className="absolute bottom-2 left-6 md:bottom-4 md:left-10">
        <div
          className="flex h-10 w-10 items-center justify-center border-2 text-sm font-bold md:h-12 md:w-12"
          style={{ borderColor: palette.red, color: palette.red }}
        >
          印
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div>
      <div className="text-sm uppercase tracking-[0.24em]" style={{ color: palette.greenSoft }}>
        {eyebrow}
      </div>
      <h2 className="mt-4 font-serif text-3xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-8 md:text-lg" style={{ color: "#454545" }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className="group overflow-hidden rounded-[28px] border"
      style={{ borderColor: palette.line, backgroundColor: "#fffdf9" }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.22em]" style={{ color: palette.greenSoft }}>
          {project.categoryLabel}
        </div>
        <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
        <p className="mt-2 text-sm" style={{ color: "#6a6a6a" }}>
          {project.location}｜{project.style}
        </p>
        <p className="mt-3 leading-7" style={{ color: "#555" }}>
          {project.note}
        </p>
      </div>
    </article>
  );
}

export default function GreenCourtyardPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.beige, color: palette.ink }}>
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{ backgroundColor: "rgba(245,240,231,0.86)", borderColor: palette.line }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <div className="font-serif text-2xl tracking-[0.2em]">綠化苑</div>
            <div className="text-xs uppercase tracking-[0.35em]" style={{ color: palette.greenSoft }}>
              Green Courtyard
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm tracking-[0.18em] md:flex">
            <a href="#about" className="hover:opacity-70">品牌理念</a>
            <a href="#services" className="hover:opacity-70">服務項目</a>
            <a href="#gallery" className="hover:opacity-70">作品案例</a>
            <a href="#process" className="hover:opacity-70">預約流程</a>
            <a href="#contact" className="hover:opacity-70">聯絡我們</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
            alt="中日式庭院背景"
            className="h-full w-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245,240,231,0.7), rgba(245,240,231,0.9), rgba(245,240,231,1))",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]"
              style={{ borderColor: palette.line, color: palette.greenSoft }}
            >
              Hualien Garden Artisan Brand
            </div>
            <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              深耕花蓮的
              <br />
              中日式庭園職人
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 md:text-lg" style={{ color: "#3a3a3a" }}>
              專注於修樹、販樹植栽與庭院改造，結合中式庭院的層次與日式庭園的留白，讓自然真正回到生活之中。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-sm tracking-[0.18em] text-white"
                style={{ backgroundColor: palette.green }}
              >
                預約免費評估
              </a>
              <a
                href="#gallery"
                className="rounded-full border px-6 py-3 text-sm tracking-[0.18em]"
                style={{ borderColor: palette.ink }}
              >
                查看作品案例
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              {["修樹整枝", "販樹植栽", "庭院改造", "花蓮在地"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border px-4 py-4 text-center"
                  style={{ borderColor: palette.line, backgroundColor: "rgba(255,255,255,0.35)" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[32px] border p-5 shadow-sm md:p-8"
            style={{ borderColor: palette.line, backgroundColor: "rgba(255,255,255,0.45)" }}
          >
            <BrandMark />
            <div className="mt-6 border-t pt-6 text-sm leading-7" style={{ borderColor: palette.line, color: "#4a4a4a" }}>
              以新 Logo 的狂草書法氣質為視覺核心，融合庭園的弧線、留白、石景與植栽層次，建立具有東方自然美學的品牌形象。
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow="About Brand" title="讓庭院回到自然的樣子" />
            <p className="mt-6 text-base leading-8 md:text-lg" style={{ color: "#3e3e3e" }}>
              綠化苑以花蓮的山、海、風與土地為靈感，將中式庭院的層疊、框景與氣韻，結合日式庭園的留白、秩序與靜謐，形成屬於在地氣候與生活方式的庭園美學。
            </p>
            <p className="mt-5 text-base leading-8 md:text-lg" style={{ color: "#3e3e3e" }}>
              我們不只處理樹木與景觀工程，更希望幫客戶整理出一個能長久維護、實際好住、同時兼具風格與價值的庭院空間。
            </p>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-[24px] border p-5 md:p-6"
                style={{ borderColor: palette.line, backgroundColor: palette.sand }}
              >
                <div className="text-lg leading-8">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24" style={{ backgroundColor: "#efe8dc" }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Services"
            title="服務項目"
            description="從單純修樹到整體庭院改造，我們提供可以直接進入洽談與報價的服務內容，讓客戶快速理解自己適合哪一種方案。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-[28px] border p-6 md:p-7"
                style={{ borderColor: palette.line, backgroundColor: palette.beige }}
              >
                <div className="text-sm uppercase tracking-[0.2em]" style={{ color: palette.greenSoft }}>
                  {service.subtitle}
                </div>
                <h3 className="mt-3 font-serif text-2xl">{service.title}</h3>
                <p className="mt-4 leading-8" style={{ color: "#444" }}>
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border px-3 py-2 text-sm"
                      style={{ borderColor: palette.line }}
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm tracking-[0.16em] text-white"
                  style={{ backgroundColor: palette.green }}
                >
                  洽詢此服務
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Portfolio"
            title="精選作品"
            description="這一版已改成資料驅動結構。後續你只要更新 projects 陣列，或把它獨立成 projects.json，就能批次替換作品內容，不必再一直改版面程式。"
          />
          <a
            href="https://www.icloud.com/photos/#/sharedalbums/sa,B2AB24A1-5245-4C67-AE8B-6753B502FBF9/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-5 py-3 text-center text-sm tracking-[0.16em]"
            style={{ borderColor: palette.ink }}
          >
            打開原始作品連結
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ backgroundColor: "#f0eadf" }}>
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[360px] overflow-hidden rounded-[30px]">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80"
              alt="庭園景觀"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="rounded-[30px] border p-7 md:p-10"
            style={{ borderColor: palette.line, backgroundColor: palette.beige }}
          >
            <SectionTitle eyebrow="Aesthetic Direction" title="中、日式庭院語彙" />
            <p className="mt-6 text-base leading-8 md:text-lg" style={{ color: "#454545" }}>
              中式庭院講究層次、借景與空間氣韻；日式庭園講究留白、安定與細節秩序。綠化苑將兩者轉化為更適合現代住宅、民宿與庭院使用的景觀方式，讓空間看起來自然，住起來也舒服。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["石景配置", "松柏修形", "枯山水語彙", "植栽層次", "自然留白", "動線整理"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{ borderColor: palette.line }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <SectionTitle
          eyebrow="Order Process"
          title="服務流程與訂單引導"
          description="把詢問流程設計得清楚，客戶更容易主動留下資料，也更願意進一步進入估價與現場評估。"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-[26px] border p-6"
              style={{ borderColor: palette.line, backgroundColor: "#fffdf9" }}
            >
              <div className="text-sm tracking-[0.28em]" style={{ color: palette.greenSoft }}>
                {item.step}
              </div>
              <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
              <p className="mt-4 leading-8" style={{ color: "#555" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24" style={{ backgroundColor: "#e9e0d2" }}>
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div
            className="rounded-[34px] border p-8 text-center md:p-12"
            style={{ borderColor: palette.line, backgroundColor: palette.beige }}
          >
            <SectionTitle eyebrow="Contact" title="免費初步評估" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg" style={{ color: "#454545" }}>
              歡迎提供庭院現況照片、所在地區與預計需求。無論是修樹、選樹植栽，或是想把庭院整理成中日式風格，都可以先從 LINE 或電話開始諮詢。
            </p>
            <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
              {[
                { label: "服務地區", value: "花蓮為主，可再洽詢其他區域" },
                { label: "主要項目", value: "修樹 / 販樹植栽 / 庭院改造" },
                { label: "建議準備", value: "現況照片 / 尺寸 / 預算方向" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border p-5"
                  style={{ borderColor: palette.line, backgroundColor: "#fffdf9" }}
                >
                  <div className="text-sm" style={{ color: palette.greenSoft }}>
                    {item.label}
                  </div>
                  <div className="mt-2 text-lg leading-8">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-7 py-3 text-sm tracking-[0.18em] text-white"
                style={{ backgroundColor: palette.green }}
              >
                LINE 諮詢
              </a>
              <a
                href="tel:0900000000"
                className="rounded-full border px-7 py-3 text-sm tracking-[0.18em]"
                style={{ borderColor: palette.ink }}
              >
                電話聯絡
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="rounded-[28px] border p-6 md:p-8" style={{ borderColor: palette.line, backgroundColor: "#fffdf9" }}>
          <h3 className="font-serif text-2xl">下一步整理建議</h3>
          <div className="mt-5 overflow-x-auto">
            <pre className="text-sm leading-7" style={{ color: "#444", whiteSpace: "pre-wrap" }}>{`1. 從 1000+ 素材先挑 30~50 份精選
2. 上傳到 Cloudinary / R2 / NAS 公開路徑
3. 把 projects 陣列獨立成 projects.json
4. 之後只更新資料，不改版型

projects.json 範例：
[
  {
    "id": "case-001",
    "title": "花蓮日式庭院改造",
    "category": "japanese-garden",
    "categoryLabel": "日式庭院",
    "image": "https://your-cdn.com/gc/case-001-cover.jpg",
    "note": "完工照 / 前後對比可延伸成案例內頁",
    "location": "花蓮吉安",
    "style": "日式庭院",
    "featured": true
  }
]`}</pre>
          </div>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: palette.line, backgroundColor: palette.beige }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <div className="font-serif text-2xl tracking-[0.2em]">綠化苑</div>
            <div className="text-sm uppercase tracking-[0.3em]" style={{ color: palette.greenSoft }}>
              Green Courtyard
            </div>
          </div>
          <div className="text-sm leading-7" style={{ color: "#555" }}>
            花蓮中日式庭園職人｜修樹・販樹植栽・庭院改造
          </div>
        </div>
      </footer>
    </div>
  );
}
