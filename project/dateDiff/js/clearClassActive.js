export const clearActive = (element, className = "is-active") => {
    element.find(item => item.classList.remove(`${className}`))
}