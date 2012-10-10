// Project: LightBox
// Version: v1.1
// Author: Boris Damevin
// Release Date: 10/10/2012
//
// Description: LightBox
// jQuery: 1.8.2
//

jQuery(function(){
    function($){
        $.fn.LightBox = function(args){
            args = $.extend({
                centerElem: "default_1"
            }, args);

            var centerElem = ".popup-block";

            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var elementHeight = $(centerElem).height();
            var elementWidth = $(centerElem).width();

            $(centerElem).css({
                "top": ((windowHeight / 2) - (elementHeight / 2)),
                "left":((windowWidth / 2) - (elementWidth / 2))
            });

            // eoc
            return this;
        };
    }(jQuery);
});