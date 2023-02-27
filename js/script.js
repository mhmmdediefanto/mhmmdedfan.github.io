let menuToggle = document.querySelector('#toggle');
let nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})