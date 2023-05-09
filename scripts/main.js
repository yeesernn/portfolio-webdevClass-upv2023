let menuButton = document.querySelector("#buttonMenu");
let menuTransition = document.querySelector("#menuTransitionOff");

menuButton.addEventListener("click", toggleMenu)

function toggleMenu() {
    menuTransition.classList.toggle("showMenu");
}


/*
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("#navBar").style.top = "0";
  } else {
    document.querySelector("#navBar").style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
} 
*/

/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */