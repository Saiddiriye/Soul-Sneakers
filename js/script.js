const toggleButton = document.querySelector('.toggle-button');
const navbarWrapper = document.querySelector('.navbar-wrapper');

toggleButton.addEventListener('click', function () {
    navbarWrapper.classList.toggle('nav-mobile-show');
});

