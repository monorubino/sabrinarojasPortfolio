const burgerButton = document.querySelector('#burger-menu')
const activeMenu = document.querySelector('.menu');
const ipadSize = window.matchMedia('screen and (max-width:767px)');

ipadSize.addListener(validation)

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', deployMenu)
    }
    else {
        burgerButton.removeEventListener('click', deployMenu)
    }
}
validation (ipadSize);

function deployMenu() {
    if (activeMenu.classList.contains('is-active')) {
        activeMenu.classList.remove('is-active')
    }
    else {
        activeMenu.classList.add('is-active')
    }
}
