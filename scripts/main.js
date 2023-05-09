let menuButton = document.querySelector("#buttonMenu");
let menuTransition = document.querySelector("#menuTransitionOff");

menuButton.addEventListener("click", toggleMenu)

function toggleMenu() {
    menuTransition.classList.toggle("showMenu");
}