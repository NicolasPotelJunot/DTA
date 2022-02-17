"use strict"
window.addEventListener("load",function(){
// Box 1 servicios
function showText(){
    document.getElementById("pServicios1").classList.toggle ("pServiciosShow");

    document.getElementById("div-content-servicios").classList.toggle ("--div-content-servicios-click");

    document.getElementById("--box-servicios").classList.toggle ("--box-servicios-click");

    document.getElementById("--box-servicios-figure").classList.toggle ("--box-servicios-figure-click");

    document.getElementById("--servicios-title").classList.toggle ("--servicios-title-click");

    var button = document.getElementById("buttonServicios");
    button.classList.toggle ("buttonServicios-click");

    document.getElementById("p-general-down1").classList.toggle ("p-general-down");
}

document.getElementById("buttonServicios").onclick = function (){
    showText();
}

// Box 2 servicios
function showText2(){
    document.getElementById("pServicios2").classList.toggle ("pServiciosShow");

    document.getElementById("div-content-servicios2").classList.toggle ("--div-content-servicios-click");

    document.getElementById("--box-servicios2").classList.toggle ("--box-servicios-click");

    document.getElementById("--box-servicios-figure2").classList.toggle ("--box-servicios-figure-click");

    document.getElementById("--servicios-title2").classList.toggle ("--servicios-title-click");

    document.getElementById("buttonServicios2").classList.toggle ("buttonServicios-click");

    document.getElementById("p-general-down2").classList.toggle ("p-general-down");
}

document.getElementById("buttonServicios2").onclick = function (){
    showText2();
}

// box 3 servicios
function showText3(){
    document.getElementById("pServicios3").classList.toggle ("pServiciosShow");

    document.getElementById("div-content-servicios3").classList.toggle ("--div-content-servicios-click");

    document.getElementById("--box-servicios3").classList.toggle ("--box-servicios-click");

    document.getElementById("--box-servicios-figure3").classList.toggle ("--box-servicios-figure-click");

    document.getElementById("--servicios-title3").classList.toggle ("--servicios-title-click");

    document.getElementById("buttonServicios3").classList.toggle ("buttonServicios-click");

    document.getElementById("p-general-down3").classList.toggle ("p-general-down");
}

document.getElementById("buttonServicios3").onclick = function (){
    showText3();
}

// box 4 servicios
function showText4(){
    document.getElementById("pServicios4").classList.toggle ("pServiciosShow");

    document.getElementById("div-content-servicios4").classList.toggle ("--div-content-servicios-click");

    document.getElementById("--box-servicios4").classList.toggle ("--box-servicios-click");

    document.getElementById("--box-servicios-figure4").classList.toggle ("--box-servicios-figure-click");

    document.getElementById("--servicios-title4").classList.toggle ("--servicios-title-click");

    document.getElementById("buttonServicios4").classList.toggle ("buttonServicios-click");

    document.getElementById("p-general-down4").classList.toggle ("p-general-down");
}

document.getElementById("buttonServicios4").onclick = function (){
    showText4();
}

})