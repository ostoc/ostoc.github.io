// 'use strict';

import projectList from "./projectList.js";


const listElement = document.createElement('ul')

projectList.map(project => {
    const itemElement = document.createElement('li')
    const linkElement = document.createElement('a')
    const descriptionElement = document.createElement('div')
    linkElement.href = project.url
    linkElement.target = "_blank"
    linkElement.text = project.title
    descriptionElement.innerHTML = project.description
    descriptionElement.className = 'description'
    itemElement.appendChild(linkElement)
    itemElement.appendChild(descriptionElement)
    const tagsElement = document.createElement('div')
    tagsElement.className = 'tags'
    project.tags.map(tag => {
        const tagElement = document.createElement('span')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    })
    itemElement.appendChild(tagsElement)
    listElement.appendChild(itemElement)

})

document.getElementById('project-list').appendChild(listElement)