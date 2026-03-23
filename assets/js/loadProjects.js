fetch('projects.json')
.then(response => response.json())
.then(data => {

const container = document.getElementById("projects")

data.forEach(project => {

const div = document.createElement("div")
div.className = "project"

div.innerHTML = `
<img src="${project.image}">
<h3>${project.title}</h3>
<p>${project.category}</p>
`

container.appendChild(div)

})

})