/*
 * V1.0
 * Author : Boris Damevin
 * Licence CC-BY http://creativecommons.org/licenses/by/3.0/fr/
 */

$(document).ready(function(){

    var centerElem = ".popup-block";

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var elementHeight = $(centerElem).height();
    var elementWidth = $(centerElem).width();

    $(centerElem).css({
        "top": ((windowHeight / 2) - (elementHeight / 2)),
        "left": ((windowWidth / 2) - (elementWidth / 2))
    });

});
