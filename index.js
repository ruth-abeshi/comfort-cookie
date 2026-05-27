

let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

sideNav.style.right = "-250px";


menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src= "Images/close.png";
    } 
    
    else {
        sideNav.style.right = "-250px";
        menu.src= "Images/menu.png";
    }
}
