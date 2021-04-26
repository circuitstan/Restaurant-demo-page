const contact = () => {
    const content = document.getElementById('content')

    const address = document.createElement('p')
    address.innerText = "Address - Sunset Blvd 50"
    address.className = "title2"
    content.appendChild(address)

    const phone = document.createElement('p')
    phone.innerText = "Contact nr. 5175110"
    phone.className = "title2"
    content.appendChild(phone)

}

export default contact