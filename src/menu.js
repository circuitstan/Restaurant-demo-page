const menuload = () => {
    const content = document.getElementById('content')

    const menudiv = document.createElement('div')
    content.appendChild(menudiv)
    menudiv.className = "menudiv"

    const antipasti = document.createElement('p')
    antipasti.innerText = "ANTIPASTI"
    antipasti.className = "title1"
    menudiv.appendChild(antipasti)

    const antipasto = document.createElement('p')
    antipasto.innerText = "ANTIPASTO 10€"
    antipasto.className = "title2"
    antipasti.appendChild(antipasto)

    const bruschetta = document.createElement('p')
    bruschetta.innerText = "BRUSCHETTA 8€"
    bruschetta.className = "title2"
    antipasti.appendChild(bruschetta)

    const pizza = document.createElement('p')
    pizza.innerText = "PIZZA"
    pizza.className = "title1"
    menudiv.appendChild(pizza)

    const marinara = document.createElement('p')
    marinara.innerText = "MARINARA 7€"
    marinara.className = "title2"
    pizza.appendChild(marinara)

    const margherita = document.createElement('p')
    margherita.innerText = "MARGHERITA 9€"
    margherita.className = "title2"
    pizza.appendChild(margherita)

}

export default menuload