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


//CARROUSEL 


//Cuando hago CLICK en .carrousel__btn
//Calcular el translate = INDEX * (Ancho de las imgenes) 100/12
//.carrousel__grande STYLE transform translateX()

const carrouselBtn = document.querySelectorAll('.carrousel__btn')
const carrouselGr = document.querySelector('.carrousel__grande')

console.log(carrouselBtn)
console.log(carrouselGr)

carrouselBtn.forEach(function (eachBtn, index) {
    carrouselBtn[index].addEventListener('click', function () {

        console.log(index)
        let calculo = index * (100 / carrouselBtn.length)
        console.log(calculo)

        carrouselGr.style.transform = `translateX(-${calculo}%)`
    })
})

//funciona, pero no logré atomatizar que muestre 2 imagenes por botón