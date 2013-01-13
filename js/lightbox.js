/* Project: LightBox
 * Code name: Chimeara
 * Version: 1.4
 * Author: Agence Epsilon
 * Author URL:
 * Git URL: https://github.com/agenceepsilon/lightbox
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
            openFirst: false,
            openSpeed: 500,
            openEffect: 'fade',
            openEasing: 'linear',
            closeSpeed: 500,
            closeEffect: 'fade',
            closeEasing: 'linear',
            aroundEffect: true,
            relAttribut: 'lightbox',
            cookieName: 'lightbox',
            cookieTime: 7
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            // Add HTML
            $(this).wrap('<div class="lightbox" style="display: none;" />');
            $(this).append('<span id="close" />');

            // Global variables
            var $centerElem = $(this);
            var $globalDiv = $(".lightbox");
            var $relAttr = $('a[rel="' + param.relAttribut + '"]');
            var $closeId = $("#close");

            // Center variables
            var $windowHeight = $(window).height(); // The actual window height
            var $windowWidth = $(window).width(); // The actual window width
            var $elementHeight = $($centerElem).height();  // The element height
            var $elementWidth = $($centerElem).width(); // The element width

            // ------------------------ //
            // LightBox center function //
            // ------------------------ //

            // Center element
            $($centerElem).css({
                "top": (($windowHeight / 2) - ($elementHeight / 2)),
                "left": (($windowWidth / 2) - ($elementWidth / 2))
            });

            // ---------------------- //
            // Window Resize function //
            // ---------------------- //

            // Keep center with the window resize
            window.onresize = alignResize;
            function alignResize(){

                var $windowHeight = $(window).height(); // The new window height
                var $windowWidth = $(window).width(); // The new window width

                $($centerElem).css({
                    "top": (($windowHeight / 2) - ($elementHeight / 2)),
                    "left": (($windowWidth / 2) - ($elementWidth / 2))
                });
            }

            // -------------------- //
            // Open/Close functions //
            // -------------------- //

            // The open function
            $($relAttr).click(function(){
                $($globalDiv).show(param.openEffect, param.openEasing, param.openSpeed);
            });

            // The close function
            $($closeId).click(function(){
                $($globalDiv).hide(param.closeEffect, param.closeEasing, param.closeSpeed);
                if(param.openFirst){
                    $.cookie(param.cookieName, 1, {expires: param.cookieTime});
                }
            });

            // ------------------ //
            // Boolean parameters //
            // ------------------ //

            // Open First (openFirst)
            if(param.openFirst){
                if($.cookie(param.cookieName) != '1'){
                    $($globalDiv).show();
                }
            }
            else{
                $($globalDiv).hide();
            }
            // Around Effect (aroundEffect)
            if(param.aroundEffect){
                $($globalDiv).css({
                    "height": "100%",
                    "width": "100%",
                    "position": "fixed",
                    "top": "0",
                    "left": "0"
                });
            }
            else{
                $($globalDiv).css("height", 0);
            }
        });
    };
})(jQuery);