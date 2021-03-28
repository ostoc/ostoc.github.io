
const contacts = [
    {
        "title": "Email",
        "url": "mailto:pujunyu@gmail.com"
    },
    {
        "title": "GitHub",
        "url": "#"
    },
    {
        "title": "Twitter",
        "url": "#"
    },
    {
        "title": "LinkedIn",
        "url": "#"
    }
]

const pages = [
    {
        "title": "Archive",
        "url": "/articles/"
    },
    {
        "title": "Projects",
        "url": "#"
    },
    {
        "title": "Tools",
        "url": "/tools.html"
    },
    {
        "title": "About",
        "url": "/about.html"
    }
]

function createLinkElement(links) {
    const linksColumnElement = document.createElement('div')
    linksColumnElement.className = "links-column"
    links.forEach(link => {
        const linkElement = document.createElement('a')
        linkElement.text = link.title
        linkElement.href = link.url
        linksColumnElement.appendChild(linkElement)
    })
    return linksColumnElement
}

const copyrightElement = document.createElement('a')
copyrightElement.className = "copyright"
copyrightElement.text = "© 2021"
copyrightElement.href = "/"
const linksElement = document.createElement('div')
linksElement.className = "links"
const linksContactElement = document.createElement('div')
const linksPageElement = document.createElement('div')

linksElement.appendChild(createLinkElement(contacts))
linksElement.appendChild(createLinkElement(pages))


document.getElementById('footer').appendChild(copyrightElement)
document.getElementById('footer').appendChild(linksElement)
