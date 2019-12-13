document.addEventListener("DOMContentLoaded", function() {
    var navBar = document.getElementsByTagName("nav");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 0) {
            navBar[0].classList.add("scrolled");
        } else {
            navBar[0].classList.remove("scrolled");
        }
    });
    $(".pro-work-slider").slick({
        arrows: true,
        dots: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>'
    });
});
