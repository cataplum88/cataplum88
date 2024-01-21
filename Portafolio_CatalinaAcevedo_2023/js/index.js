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






//Container Tabs index

//Cuando hago click en tabs__btn,
// A TODOS .tabs__text le REMOVE 'active'
//.tabs__text CON EL MISMO INDEX se le ADD 'active'
//.tabs__btn del mismo index se le ADD 'active'

const tabsBtn = document.querySelectorAll('.tabs__btn')
const tabsText = document.querySelectorAll('.tabs__text')

console.log(tabsBtn)
console.log(tabsText)

tabsBtn.forEach(function (eachBtn, index) {
    tabsBtn[index].addEventListener('click', function () {

        tabsText.forEach(function (eachText, index) {
            tabsText[index].classList.remove('active')
        })
        tabsText[index].classList.add('active')

        tabsBtn.forEach(function (eachBtn, index) {
            tabsBtn[index].classList.remove('active')
        })

        tabsBtn[index].classList.add('active')
    })
})


//texto inicial aparece por defecto, 

