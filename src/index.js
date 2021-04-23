console.log("heyy")

const content = document.getElementById('content')
const title = document.createElement('p')
title.innerText= "The Restaurant"
content.appendChild(title)

const photo = document.createElement('img')
import dinner from "../img/dinner.jpg"
photo.src = dinner
content.appendChild(photo)