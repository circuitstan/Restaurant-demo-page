import dinner from "../img/dinner.png"

const pageload = () => {
    const content = document.getElementById('content')
    content.className = "container"
    const title = document.createElement('p')
    title.innerText= "Luigi's Pizza"
    title.id = "title"
    content.appendChild(title)

    const menutabs = document.createElement('div')
    menutabs.className = "menutabs"
    content.appendChild(menutabs)

    const menu = document.createElement('label')
    menu.innerText = "Menu"
    menu.className = "menuitem"
    menu.id = "menu"
    menutabs.appendChild(menu)

    const contact = document.createElement('label')
    contact.innerText = "Contact"
    contact.className = "menuitem"
    contact.id = "contact"
    menutabs.appendChild(contact)

    const photo = document.createElement('img')
    photo.src = dinner
    photo.className = "logo"
    content.appendChild(photo)
}

export default pageload