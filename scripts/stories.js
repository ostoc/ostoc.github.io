// 'use strict';

import storyList from "./storyList.js";

function urlString(url) {
    return `/stories/${url}.html`
}

const listElement = document.createElement('ul')

storyList.map(article => {
    const itemElement = document.createElement('li')
    const linkElement = document.createElement('a')
    linkElement.href = urlString(article.url)
    linkElement.text = article.title
    itemElement.appendChild(linkElement)
    const tagsElement = document.createElement('div')
    tagsElement.className = 'tags'
    article.tags.map(tag => {
        const tagElement = document.createElement('span')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    })
    itemElement.appendChild(tagsElement)
    listElement.appendChild(itemElement)

})

document.getElementById('story-list').appendChild(listElement)