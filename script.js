const Btn = document.querySelector('.hamburger');
const Nav = document.querySelector('nav');

function active() {
	Btn.classList.toggle('hamburger-active');
	Nav.classList.toggle('active');
}

Btn.addEventListener('click', active);
