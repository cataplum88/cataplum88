'use strict'
//Menu responsive
// Cuando hago CLICK en .header__button, .header__nav LE TOGGLE active

const headerButton = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')

console.log(headerButton)
console.log(headerNav)

headerButton.addEventListener('click', function () {
    headerNav.classList.toggle('active')
})


