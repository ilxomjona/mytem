const elHamburgerIcon = document.querySelector('.mytem-icon');
const elNavbar = document.querySelector('.site-header__list');
const elCloseNavbar = document.querySelector('.site-nav__header-btn');

elHamburgerIcon.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
});

elCloseNavbar.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
});
