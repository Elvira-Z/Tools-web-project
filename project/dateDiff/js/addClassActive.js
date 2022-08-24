export const addActive = (element, index, className = 'is-active') => {
    element[index].classList.add(`${className}`)
}