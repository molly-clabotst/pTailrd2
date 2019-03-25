window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var side = document.getElementById("mySidenav");
var sticky = navbar.offsetTop;
var bStick = side.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky&& window.pageYOffset>=bStick) {
        navbar.classList.add("sticky");
        // side.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        // side.classList.remove("sticky")
    }
}