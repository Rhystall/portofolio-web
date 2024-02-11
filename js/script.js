const navbarNav = document.querySelector('.nav-list');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', (e) => {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const navListLinks = document.querySelectorAll('.nav-list li a');
navListLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
    });
});