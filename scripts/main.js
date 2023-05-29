// JS menu in MOBILE
let menuButton = document.querySelector("#buttonMenu");
let menuTransition = document.querySelector("#menuTransitionOff");

menuButton.addEventListener("click", toggleMenu)

function toggleMenu() {
    menuTransition.classList.toggle("showMenu");
}


// JS menu in TABLET + DESKTOP
/*
let imageButton = document.querySelector("#imageBtn");

imageButton.addEventListener("click", showSeries)

function showSeries() {
    document.querySelectorAll(".seriesMenu").style.display="flex";
}
*/

// WORKS NOW! But can't alternate back
/*
let x = document.getElementById("imageBtn");
x.addEventListener("click", test);
function test() {
    let y = document.querySelectorAll(".seriesMenu");
    console.log(y);
    y.forEach(function (element) {
        element.style.display = "block";
    });
}
*/

// https://www.tutorialstonight.com/javascript-queryselectorall-foreach 
let x = document.getElementById("imageBtn");
x.addEventListener("click", test);
function test() {
    let y = document.querySelectorAll(".seriesMenu");
    // console.log(y);
    y.forEach(function (element) {
        if (element.style.display === "inline-flex") {
        element.style.display = "none";
        } else {
        element.style.display = "inline-flex";
        } 
    });
}

//------------------------------------------------------------------UNWANTED BEHAVIOR IS HERE RIGHT NOW!
// javascript override css display property after change of media queries
//https://stackoverflow.com/questions/46054334/javascript-overriding-css-display-property-after-change-of-media-query
// ----------------resize on MOBILE auto revert to display TRUE
window.addEventListener("resize", function() {
    if (window.innerWidth < 600) {
        let z = document.querySelectorAll(".seriesMenu");
        z.forEach(function (tests) {
            tests.style.display = "inline-flex";
        })
    } else if (window.innerWidth > 600) {
        let z = document.querySelectorAll(".seriesMenu");
        z.forEach(function (tests) {
            tests.style.display = "none";
        })
    }
});

/*
let x = document.getElementById("imageBtn");
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", test);
    function test() {
    let y = document.getElementsByClassName("seriesMenu");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    } 
  }
}
*/

/*
//single can work...
let x = document.getElementById("imageBtn");
x.addEventListener("click", test);
function test() {
    //   let x = document.getElementById("imageBtn");
    let y = document.querySelector(".seriesMenu");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    } 
}
*/

/*
let misBotones = document.getElementsByClassName("titulos")

					for(let i = 0; i < misBotones.length; i++){
						misBotones[i].addEventListener("click", desplegar)

						function desplegar () {
							let misPaneles = this.nextElementSibling
							if (misPaneles.style.maxHeight) {
								misPaneles.style.maxHeight = null
							}else {
								misPaneles.style.maxHeight = misPaneles.scrollHeight + "px"
							}
						}
					}
*/

/*
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
*/

/*
let misBotones = document.querySelector("#imageBtn");

    misBotones.addEventListener("click", desplegar)

	function desplegar () {
	let misPaneles = this.nextElementSibling
	if (misPaneles.style.maxHeight) {
		misPaneles.style.maxHeight = null
	}else {
	misPaneles.style.maxHeight = misPaneles.scrollHeight + "px"
		}
	}
*/