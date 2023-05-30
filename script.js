const burgerBtn = document.querySelector('.hamburger_icon');
burgerBtn.addEventListener("click", addclass)

const burgerline1 = document.querySelector('.line1');
const burgerline2 = document.querySelector('.line2');
const burgerline3 = document.querySelector('.line3');
const menu = document.querySelector('.menu');

function addclass () { 

    burgerline1.classList.toggle('line1_active');
    burgerline2.classList.toggle('line2_active');
    burgerline3.classList.toggle('line3_active');
    menu.classList.toggle('unactive');
}




