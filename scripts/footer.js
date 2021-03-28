
const contacts = [
    {
        "title": "GitHub↗",
        "url": "https://github.com/ostoc"
    },
    {
        "title": "Twitter↗",
        "url": "https://twitter.com/jpu__"
    },
    {
        "title": "LinkedIn↗",
        "url": "http://linkedin.com/in/pujunyu/"
    }
]

const pages = [
    {
        "title": "Articles",
        "url": "/articles/"
    },
    {
        "title": "Projects",
        "url": "#"
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

const copyrightElement = document.createElement('div')
copyrightElement.className = "copyright"
copyrightElement.innerText = "▲ © 2021"

copyrightElement.onclick = () => {
    window.scrollTo(0, 0)
}
const linksElement = document.createElement('div')
linksElement.className = "links"
const linksContactElement = document.createElement('div')
const linksPageElement = document.createElement('div')

linksElement.appendChild(createLinkElement(pages))
linksElement.appendChild(createLinkElement(contacts))



document.getElementById('footer').appendChild(copyrightElement)
document.getElementById('footer').appendChild(linksElement)
