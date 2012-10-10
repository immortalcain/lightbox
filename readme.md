LightBox.js

Call the plugin:

$(".lightbox-block").LightBox();

Realignment when resizing the window:

$(window).resize(function() {
    $(".lightbox-block").LightBox();
});