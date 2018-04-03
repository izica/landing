jQuery(document).ready(function($) {
    var mySwiper = new Swiper('.blog-slider', {
        slidesPerView: 2,
        speed: 400,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
