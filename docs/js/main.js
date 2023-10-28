
// слайды Типы лестниц
const swiper = new Swiper('.typesStairs__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.typesStairs__btn-next',
        prevEl: '.typesStairs__btn-prev',
    },
});
// ===================================================

// Маска номера телефона +7(__)__-__
$(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
});
// =======================================

const swiper1 = new Swiper('.examples__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    

    // Navigation arrows
    navigation: {
        nextEl: '.examples__swiper-button-next',
        prevEl: '.examples__swiper-button-prev',
    },

    pagination: {
        el: '.examples__swiper-pagination',
        clickable: true,
        
    },
});