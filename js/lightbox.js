/* Project: Lightbox.js
 * Code name: Chimeara
 * Version: 1.4.6
 * Author: Agence Epsilon
 * Author URL: http://www.agenceepsilon.com
 * Git URL: https://github.com/agenceepsilon/lightbox
 * Plugin URL: http://plugins.jquery.com/lightbox/
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
            openSpeed: 500,
            openEffect: 'fade',
            openEasing: 'linear',
            closeSpeed: 500,
            closeEffect: 'fade',
            closeEasing: 'linear',
            aroundEffect: true,
            aroundClose: false,
            globalClass: 'lightbox-overlay'
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            // -------- //
            // Add HTML //
            // -------- //
            $("body").append('<div class="' + param.globalClass + '" style="display: none;"><div class="lightbox-block"><div class="lightbox-content"><span id="close"></span></div></div></div>');

            // Global variables
            var $centerElem = $(".lightbox-block");
            var $globalDiv = $("." + param.globalClass);
            var $closeId = $("#close");

            // --------------- //
            // Center function //
            // --------------- //

            var $windowHeight = $(window).height(); // The actual window height
            var $windowWidth = $(window).width(); // The actual window width
            var $elementHeight = $($centerElem).height();  // The element height
            var $elementWidth = $($centerElem).width(); // The element width

            // --------- //
            // Functions //
            // --------- //
            function centerItem($elemH, $elemW){
                $($centerElem).css({
                    "top": (($windowHeight / 2) - ($elemH / 2)),
                    "left": (($windowWidth / 2) - ($elemW / 2))
                });
            }

            function itemResize(){
                if($elementHeight > $windowHeight){
                    var $newHeight = ($windowHeight * (90 / 100));
                    var $newWidth = ($windowWidth * (90 / 100));
                    $($centerElem).css({
                        "height": $newHeight,
                        "width": $newWidth
                    });
                    centerItem($newHeight, $newWidth);
                } else{
                    centerItem($elementHeight, $elementWidth);
                }
            }

            itemResize();

            window.onresize = alignResize;
            function alignResize(){
                var $windowHeight = $(window).height();
                var $windowWidth = $(window).width();

                centerItem($windowHeight, $windowWidth);
            }

            // -------------------- //
            // Open/Close functions //
            // -------------------- //

            function openItem(){
                $($globalDiv).show(param.openEffect, {
                    duration: param.openSpeed,
                    easing: param.openEasing
                });
            }

            function closeItem(){
                $($globalDiv).hide(param.closeEffect, {
                    duration: param.closeSpeed,
                    easing: param.closeEasing
                });
            }

            // The open function
            $(this).click(function(){
                openItem();
                return false
            });
            // The close function
            $($closeId).click(function(){
                closeItem();
            });

            // ------------------ //
            // Boolean parameters //
            // ------------------ //

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
            // Around Close (aroundClose)
            if(param.aroundClose){
                $($globalDiv).click(function(){
                    closeItem();
                });
            }
        });
    };
})(jQuery);