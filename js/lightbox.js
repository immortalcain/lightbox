/* Project: LightBox
 * Code name: Chimeara
 * Version: 1.3
 * Author: Boris Damevin
 * Author URL:
 * Release Date: 11/10/2012
 *
 * Description: LightBox
 * jQuery: 1.8+
 * Browsers: IE7+, Firefox 5+, Chrome 20+, Safari 3+, Opera 10+
 */

(function($){
    $.fn.LightBox = function(opts){

        // Defaults options
        var defaults = {
            openFirst   : false,
            openSpeed   : 500,
            openEffect  : 'fade',
            openEasing  : 'linear',
            closeSpeed  : 500,
            closeEffect : 'fade',
            closeEasing : 'linear',
            aroundEffect: true
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            // Add HTML
            $(this).wrap('<div class="lightbox" />');

            // Global variables
            var $centerElem = $(this);
            var $globalDiv = $(".lightbox");

            // Center variables
            var $windowHeight = $(window).height(); // The actual window height
            var $windowWidth = $(window).width(); // The actual window width
            var $elementHeight = $($centerElem).height();  // The element height
            var $elementWidth = $($centerElem).width(); // The element width




            // Center element
            $($centerElem).css({
                "top" : (($windowHeight / 2) - ($elementHeight / 2)),
                "left": (($windowWidth / 2) - ($elementWidth / 2))
            });

            // Keep center with the window resize
            window.onresize = alignResize;
            function alignResize(){

                var $windowHeight = $(window).height(); // The new window height
                var $windowWidth = $(window).width(); // The new window width

                $($centerElem).css({
                    "top" : (($windowHeight / 2) - ($elementHeight / 2)),
                    "left": (($windowWidth / 2) - ($elementWidth / 2))
                });

            }

            // The open function
            $('a[rel="lightbox"]').click(function(){
                $($globalDiv).show(param.openEffect, param.openEasing, param.openSpeed);
            });

            // The close function
            $(".lightbox .close").click(function(){
                $($globalDiv).hide(param.closeEffect, param.closeEasing, param.closeSpeed)
            });

            // Boolean parameters
            if(param.openFirst){
                $($globalDiv).show();
            }
            else{
                $($globalDiv).hide();
            }

            if(param.aroundEffect){
                $(".lightbox").css("height", "100%", "width", "100%");
            }
            else{
                $(".lightbox").css("height", 0, "width", 0);
            }

        });

    };
})(jQuery)