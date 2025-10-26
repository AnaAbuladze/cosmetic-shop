const slideImages = [
    '../img/slider1.jpg',
    '../img/slider2.jpg',
    '../img/slider3.jpg',
    '../img/slider4.jpg',
    '../img/slider5.jpg',
    '../img/slider6.jpg',
    '../img/slider7.jpg',
    '../img/slider8.jpg'
];
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide, index) => {
        const imgIndex = index % slideImages.length;
        slide.style.backgroundImage = `url(${slideImages[imgIndex]})`;
    });

    new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
        },
    });
});
