let navBar = document.getElementById("nav__btn__menu");
let navList = document.getElementById("nav__list");
let backtop = document.getElementById("backtop")
let header = document.getElementById("header");


window.addEventListener("scroll",function() {
    showBacktop();
    showHeadershrink();
})
navBar.addEventListener("click", function(){
    navList.classList.toggle("show-nav__list");
})
function showBacktop(){
    if(scrollY>50){
        backtop.classList.add("show-backtop");
    }
    else{
        backtop.classList.remove("show-backtop");
    }
}
function showHeadershrink(){
    if(scrollY>0){
        header.classList.add("show-header");
    }
    else{
        header.classList.remove("show-header");
    }
}   