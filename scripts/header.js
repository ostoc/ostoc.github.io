const navElement = document.getElementById('nav')
const homeElement = document.createElement('div')
const dividerElement = document.createElement('div')
const articleElement = document.createElement('div')

homeElement.innerHTML = '__'
dividerElement.innerHTML = '/'
articleElement.innerHTML = 'Articles'

homeElement.onclick = () => {
    document.location = '/'
}
articleElement.onclick = () => {
    document.location = '/articles/'
}

navElement.appendChild(homeElement)

if (navElement.getAttribute('data') === 'articles') {

    navElement.appendChild(dividerElement)
    navElement.appendChild(articleElement)
}
