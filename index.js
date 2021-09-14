var btn1 = document.getElementById("btn1");
var btnCloseDrawer = document.getElementById("btn-close-drawer");
var beautyProdut = document.getElementById("beauty-produt");
var menuItem = document.getElementById("menu-item");
var beautyProductDecs = document.getElementById("beauty-product-decs");
var nav = document.getElementById("nav");
var menu = document.getElementById("menu");
var iconWrapper = document.getElementById("icon-wrapper");
var navbar = document.getElementsByClassName("navbar");
btn1.onclick = function() {
    nav.style.display = "block";
    nav.style.transform = "translateX(0%)";
    menu.style.display = "block";
    menuItem.style.display = "block";
    menu.style.transform = "translateX(-120%)";
    iconWrapper.style.display = "block";
    beautyProductDecs.style.display = "none";
    //alert("clicked");  
}
btnCloseDrawer.onclick = function() {
    nav.style.transform = "translateX(-100%)";
    beautyProductDecs.style.display = "block";
}
