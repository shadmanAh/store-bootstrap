$(document).ready(function () {
    $(".open-cart").click(function () {
        $(".open-cart").toggleClass("active-cart");
        $(".cart").fadeToggle();
    });
    $(".sale-timeout-counter").startTimer();
    $('.my-select').selectpicker();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $(".fancybox").fancybox();
    $(".zoom").elevateZoom();
});