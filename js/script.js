const hamburger = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.nav-list');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

document.addEventListener('click', (e) => {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const navListLinks = document.querySelectorAll('.nav-list li a');
navListLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navbarNav.classList.remove('active');

        // Prevent automatic scrolling when the hamburger menu is open
        if(window.innerWidth <= 768 && navbarNav.classList.contains('active')) {
            e.preventDefault();
        }
    });
});