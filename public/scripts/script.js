const wrapCard = document.getElementById('wrapCard');
const firstCard = document.getElementById('firstCard');
const owlCheck = document.querySelectorAll('.item');

const navClick = document.getElementById('navClick');
const rightSide = document.getElementById('rightSide');
const burger = document.getElementById('burger');

// console.log(owlCheck);

burger.addEventListener('click', () => {
    rightSide.classList.toggle('right-0');
    rightSide.classList.toggle('right-[-100%]');
})

navClick.addEventListener('click', () => {
    rightSide.classList.toggle('right-0');
    rightSide.classList.toggle('right-[-100%]');
})

if (firstCard.classList.contains('active')) {
    wrapCard.classList.add('ml-[88px]');
    console.log('Has');
} else {
    wrapCard.classList.remove('ml-[88px]');
    console.log('no')
}