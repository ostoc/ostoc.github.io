const footerElement = document.createElement('div')

const copyrightElement = document.createElement('div')
copyrightElement.innerText = "2021"
const emailElement = document.createElement('input')

emailElement.setAttribute('placeholder', 'Email')



const submitteButton = document.createElement('button')
submitteButton.textContent = 'submit'
submitteButton.onclick = function changeContent() {
    console.log('cliked')
}

footerElement.setAttribute('class', 'newsletter')

footerElement.appendChild(emailElement)
footerElement.appendChild(submitteButton)

document.getElementById('footer').appendChild(copyrightElement)
document.getElementById('footer').appendChild(footerElement)
