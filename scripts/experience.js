// 'use strict';

import experienceList from "./experienceList.js";


const listElement = document.createElement('ul')

experienceList.map(experience => {
    const itemElement = document.createElement('li')

    const titleElement = document.createElement('div')
    titleElement.innerText = experience.title
    const decriptionElement = document.createElement('div')
    decriptionElement.innerHTML = experience.description
    decriptionElement.className = "description"
    itemElement.appendChild(titleElement)
    itemElement.appendChild(decriptionElement)
    listElement.appendChild(itemElement)

})

document.getElementById('experience-list').appendChild(listElement)