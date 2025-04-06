const buttonOpen = document.querySelector('.btn-open')
const buttonClose = document.querySelector('.btn-close')
const burgerMenu = document.querySelector('.mobile-menu')

buttonClose.addEventListener('click', () => {
    burgerMenu.classList.remove('mobile-menu--active')
})

buttonOpen.addEventListener('click', () => {
    burgerMenu.classList.add('mobile-menu--active')
})