/* global $ */


$(document).ready(function() {

    // HEADER UL LINKS
    $('.sms').on('click', function() {
        window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&type=xml&mapping=spsa&author=adsa&medias=sms&id=406532720", "_blank", "width=500,height=500");
    });

    $('.correo').on('click', function() {
        window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&mapping=spsa&type=xml&author=adsa&btype=contact&medias=email&id=406532720", "_blank", "width=500,height=500");
    });

    $('.sincro').on('click', function() {
        window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&mapping=spsa&type=xml&author=adsa&btype=contact&medias=pim&id=406532720", "_blank", "width=500,height=500");
    });

    $('.descargar').on('click', function() {
        window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&mapping=spsa&type=xml&author=adsa&btype=contact&medias=desktop&id=406532720", "_blank", "width=500,height=500");
    });


    // CLICK LOGO TO SCROLL TO TOP
    $('#logo').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });


    // MOBILE NAV
    $('.fa-bars').on("click", function() {
        $("#content, header").toggleClass('slide');
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
