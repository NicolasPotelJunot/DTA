$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $(".scrollToTop").fadeIn();
        }else {
            $(".scrollToTop").fadeOut();
        }
    });
});