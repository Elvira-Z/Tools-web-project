import { clearActive } from './clearClassActive.js'
import { addActive } from './addClassActive.js'

const navSelect = Array.from(document.querySelectorAll('.nav'))
console.log(navSelect)
const toggleSelect = Array.from(document.querySelectorAll('.toggle'))

export const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('is-active'))
            clearActive(navSelect)
        clearActive(toggleSelect)
        addActive(navSelect, index)
        addActive(toggleSelect, index)
    })
}
navSelect.forEach(checkoutTabs)