let menuButton = document.querySelector("#buttonMenu");
let menuTransition = document.querySelector("#menuTransitionOff");

menuButton.addEventListener("click", toggleMenu)

function toggleMenu() {
    menuTransition.classList.toggle("showMenu");
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navBar").style.top = "0";
  } else {
    document.querySelector("#navBar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
} 