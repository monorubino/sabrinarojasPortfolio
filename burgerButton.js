const burgerButton = document.querySelector('#burger-menu')
const activeMenu = document.querySelector('.menu');

burgerButton.addEventListener('click', deployMenu)

function deployMenu() {
    if (activeMenu.classList.contains('is-active')) {
        activeMenu.classList.remove('is-active')
    }
    else {
        activeMenu.classList.add('is-active')
    }
}
