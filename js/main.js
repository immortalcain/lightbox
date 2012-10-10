$(document).ready(function(){

    $(".lightbox-block").LightBox();

    $(window).resize(function(){
        $(".lightbox-block").LightBox();
    });

});