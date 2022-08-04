// hamburger menu
// for the hamburger menu
function toggleMenu() {
    console.log('It worked')
    document.getElementById("primaryNav").classList.toggle("change");
    document.getElementById("hamburger_btn").classList.toggle("change");
    document.getElementById("outer").classList.toggle("change");
}

const x = document.getElementById("hamburger_btn")
x.onclick = toggleMenu;

// to get the header to stick when scrolled

window.onscroll = function() {myFunction()};

var navBar = document.getElementById("head");
var main = document.getElementById("main1");
var sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
    main.classList.add("sticky1")
    
  } else {
    navBar.classList.remove("sticky");
    main.classList.remove("sticky1");
  }
}