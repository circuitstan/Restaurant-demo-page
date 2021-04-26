import dinner from "../img/dinner.png"

const pageload = () => {
    const content = document.getElementById('content')
    const title = document.createElement('p')
    title.innerText= "The Restaurant"
    content.appendChild(title)

    const menu = document.createElement('p')
    menu.innerText = "Menu"
    menu.className = "menuitem"
    content.appendChild(menu)

    const contact = document.createElement('p')
    contact.innerText = "Contact"
    contact.className = "menuitem"
    content.appendChild(contact)

    const photo = document.createElement('img')
    photo.src = dinner
    content.appendChild(photo)
}

export default pageload