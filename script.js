const Btn = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

function active() {
	Btn.classList.toggle('hamburger-active');
	nav.classList.toggle('active');
}

Btn.addEventListener('click', active);
