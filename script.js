/* global $ */


$(document).ready(function() {

    // CLICK LOGO TO SCROLL TO TOP
    $('#logo').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });


    // MOBILE NAV
    $('.fa-bars').on("click", function() {
        $("#content, header, #overlay").toggleClass('slide');
        $('#mobileNav').css("width") === "0px" ? $('#mobileNav').css("width", "200px") : $('#mobileNav').css("width", "0px");
        console.log($('html, body').css("overflow"));
        $('html, body').css("overflow") === "visible" ? $('html, body').css("overflow", "hidden") : $('html, body').css("overflow", "visible");
    });

    //CLOSE MOBILE NAV
    $('#mobileNav li').on("click", function() {
        $('.fa-bars').click();
    });

    //MAP
    $('#map').addClass('scrollOff');

    $('#overlay').on("mouseup", function() {
        $('#map').addClass('scrollOff');
    });
    $('#overlay').on("mousedown", function() {
        $('#map').removeClass('scrollOff');
    });
    $("#map").mouseleave(function() {
        $('#map').addClass('scrollOff');

    });


});
