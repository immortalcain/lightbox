/* Project: Lightbox.js
 * Code name: Chimeara
 * Version: 1.4.3
 * Author: Agence Epsilon
 * Author URL: http://www.agenceepsilon.com
 * Git URL: https://github.com/agenceepsilon/lightbox
 * Release Date: 11/10/2012
 *
 * Description: Lightbox.js
 * jQuery: 1.8+
 * jQuery UI: 1.9+
 * Plugin(s):
 *  - jquery-cookie.js (https://github.com/carhartl/jquery-cookie)
 * Browsers: IE7+, Firefox 5+, Chrome 20+, Safari 3+, Opera 10+
 */

(function($){
    $.fn.lightbox = function(opts){

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
            globalClass: 'lightbox',
            relAttr: 'lightbox',
            cookieName: 'lightbox',
            cookieTime: 7
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            // Add HTML
            $(this).wrap('<div class="' + param.globalClass + '" style="display: none;" />');
            $(this).append('<span id="close" />');

            // Global variables
            var $centerElem = $(this);
            var $globalDiv = $("." + param.globalClass);
            var $relAttr = $('a[rel="' + param.relAttr + '"]');
            var $closeId = $("#close");

            // --------------- //
            // Center function //
            // --------------- //

            var $windowHeight = $(window).height(); // The actual window height
            var $windowWidth = $(window).width(); // The actual window width
            var $elementHeight = $($centerElem).height();  // The element height
            var $elementWidth = $($centerElem).width(); // The element width

            function centerItem($elem, $windowH, $windowW){
                $($elem).css({
                    "top": (($windowH / 2) - ($elementHeight / 2)),
                    "left": (($windowW / 2) - ($elementWidth / 2))
                });
            }

            centerItem($centerElem, $windowHeight, $windowWidth);

            // ---------------------- //
            // Window Resize function //
            // ---------------------- //

            window.onresize = alignResize;
            function alignResize(){
                var $windowHeight = $(window).height(); // The new window height
                var $windowWidth = $(window).width(); // The new window width

                centerItem($centerElem, $windowHeight, $windowWidth);
            }

            // -------------------- //
            // Open/Close functions //
            // -------------------- //

            // The open function
            $($relAttr).click(function(){
                $($globalDiv).show(param.openEffect, {
                    duration: param.openSpeed,
                    easing: param.openEasing
                });
            });

            // The close function
            $($closeId).click(function(){
                $($globalDiv).hide(param.closeEffect, {
                    duration: param.closeSpeed,
                    easing: param.closeEasing
                });
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