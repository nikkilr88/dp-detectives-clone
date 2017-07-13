/* global $ */


// HEADER UL LINKS
$('header #sms').on('click', function(){
    window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&type=xml&mapping=spsa&author=adsa&medias=sms&id=406532720", "_blank", "width=500,height=500");
});

$('header #correo').on('click', function(){
    window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&mapping=spsa&type=xml&author=adsa&btype=contact&medias=email&id=406532720", "_blank", "width=500,height=500");
});

$('header #sincro').on('click', function(){
    window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&mapping=spsa&type=xml&author=adsa&btype=contact&medias=pim&id=406532720", "_blank", "width=500,height=500");
});

$('header #descargar').on('click', function(){
    window.open("http://o2.agendize.com/w1/inserter/box?virtual=true&mapping=spsa&type=xml&author=adsa&btype=contact&medias=desktop&id=406532720", "_blank", "width=500,height=500");
});


// CLICK LOGO TO SCROLL TO TOP
$('#logo').on("click", function(){
    $("html, body").animate({
        scrollTop: 0
    },500);
});

// MOBILE NAV
$('.fa-bars').on("click", function(){
    $("#content, header").toggleClass('slide');
    console.log($('#mobileNav').css("width"))
    $('#mobileNav').css("width") === "0px" ? $('#mobileNav').css("width","200px") : $('#mobileNav').css("width", "0px");
});