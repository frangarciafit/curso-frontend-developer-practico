const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuMail.addEventListener('click', changeDesktopMenu);

function changeDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
