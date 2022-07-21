$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            800: {
                items: 2,
                nav: false,
                dots: false
            },
            1000: {
                items: 3,
                nav: false,
                dots: false
            }
        }
    });
});