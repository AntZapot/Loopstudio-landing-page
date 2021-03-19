// Restablecer menu 
const checkedBox = document.querySelector('#toggler');

// Ocultar menu al seleccionar un enlace
const links = document.querySelectorAll('#link').forEach(element => {
    element.addEventListener('click', e => {
        checkedBox.checked = false;
    });
});

// Cambio color a menu
window.addEventListener('scroll', function(){
    const hamburger = document.querySelector('#hamburger');
    hamburger.classList.toggle('sticky', window.scrollY > 650);
});