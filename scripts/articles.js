// 'use strict';

import articlesList from "../data/articlesList.js";

function urlString(url) {
    return `/articles/${url}.html`
}

const listElement = document.createElement('ul')

articlesList.map(article => {
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

document.getElementById('article-list').appendChild(listElement)