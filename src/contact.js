const contact = () => {
    const content = document.getElementById('content')

    const contactdiv = document.createElement('div')
    contactdiv.className = "contactdiv"
    content.appendChild(contactdiv)

    const address = document.createElement('p')
    address.innerText = "Address - Sunset Blvd 50"
    address.className = "title2"
    contactdiv.appendChild(address)

    const phone = document.createElement('p')
    phone.innerText = "Contact nr. 5175110"
    phone.className = "title2"
    contactdiv.appendChild(phone)

}

export default contact