"use strict"
window.addEventListener("load",function(){
const showMenu = (toggleId, navId) => {
    const toggle =document.getElementById(toggleId),
     nav =document.getElementById(navId)
    if (toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show");
            document.getElementById("header").style.top = "0";   
        })
    }
}  
showMenu("header-toggle","header-nav");
})