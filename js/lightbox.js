/* Project: LightBox
 * Code name: Chimeara
 * Version: 1.5
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
            openSpeed   : 500,
            openEffect  : 'fade',
            openEasing  : 'linear',
            closeSpeed  : 500,
            closeEffect : 'fade',
            closeEasing : 'linear'
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            var $centerElem = $(this);
            var $windowHeight = $(window).height(); // The actual window height
            var $windowWidth = $(window).width(); // The actual window width
            var $elementHeight = $($centerElem).height();  // The element height
            var $elementWidth = $($centerElem).width(); // The element width

            $($centerElem).css({
                "top"  : (($windowHeight / 2) - ($elementHeight / 2)),
                "left" : (($windowWidth / 2) - ($elementWidth / 2))
            });

            // Keep center with the window resize
            window.onresize = alignResize;
            function alignResize(){

                var $windowHeight = $(window).height(); // The new window height
                var $windowWidth = $(window).width(); // The new window width

                $($centerElem).css({
                    "top":  (($windowHeight / 2) - ($elementHeight / 2)),
                    "left": (($windowWidth / 2) - ($elementWidth / 2))
                });

            }

            // The open function
            $('a[rel="lightbox"]').click(function(){
                $(".lightbox").show(param.openEffect, param.openEasing, param.openSpeed).css("opacity", "100");
            });

            // The close function
            $(".lightbox .close").click(function(){
                $(".lightbox").hide(param.closeEffect, param.closeEasing, param.closeSpeed);
            });
        });

    };
})(jQuery)