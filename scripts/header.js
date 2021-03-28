const navElement = document.getElementById('nav')
const homeElement = document.createElement('div')
const dividerElement = document.createElement('div')
const articleElement = document.createElement('div')

homeElement.innerHTML = '__'
dividerElement.innerHTML = '/'
articleElement.innerHTML = 'Stories'

homeElement.onclick = () => {
    document.location = '/'
}
articleElement.onclick = () => {
    document.location = '/stories/'
}

navElement.appendChild(homeElement)

if (navElement.getAttribute('data') === 'article') {

    navElement.appendChild(dividerElement)
    navElement.appendChild(articleElement)
}
