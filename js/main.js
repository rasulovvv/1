let elHeader = document.querySelector(".site-header");
let elHeaderHamburgBtn = document.querySelector(".site-header__hamburg-btn");
let elHero = document.querySelector(".hero")


elHeaderHamburgBtn.addEventListener('click', function(){
  elHeader.classList.toggle("site-header--open");
});