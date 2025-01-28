/* Add class to hamburger */

function toggleMenu(){
    const menu = document.querySelector('.menu-links')
    const icons = document.querySelector('.hamburger-icon')
    menu.classList.toggle("open")
    icons.classList.toggle("open")
}

function clearField(){
    const nameField = document.querySelector('.js-name');
    const emailField = document.querySelector('.js-email');
    const MessageField = document.querySelector('.js-message');

    nameField.value="";
    emailField.value="";
    MessageField.value="";
}
