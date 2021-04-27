import pageload from './page-load'
import menuload from './menu.js'
import contact from './contact'

pageload()

const tabs = (() => {
    const content = document.getElementById('content')
    function refresh() {
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
        pageload()
        let logo = document.querySelector('.logo')
        content.removeChild(logo)
    }
    function refreshAll() {
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
    }
    function checked(e) {
        let menu = document.querySelector('#menu')
        let contact = document.querySelector('#contact')
        if (e.target.id == "menu") {
            menu.className = "checked"
        } else if (e.target.id == "contact") {
            contact.className = "checked"
        }
    }
    document.addEventListener('click', (e) => {
        if (e.target.id == "menu") {
            refresh()
            checked(e)
            menuload()
        } else if (e.target.id == "contact") {
            refresh()
            checked(e)
            contact()
        } else if (e.target.id == "title") {
            refreshAll()
            pageload()
        }
    })
})()

