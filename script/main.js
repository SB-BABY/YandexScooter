// АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

// ФУНЦИЯ ДЛЯ СЛАЙДЕРА, ЧТОБЫ ВКЛЮЧАЛСЯ ПРИ ОПРЕДЕЛЕННОМ РАЗРЕШЕНИИ
$(document).ready(function () {
    // Проверяем ширину экрана при загрузке страницы
    if ($(window).width() < 769) {
        $('.exclusive__slider').slick({
            infinite: false,
            speed: 300,
            appendArrows: $('.exclusive__slider-arrows'),
            prevArrow: '<button id="prev" type="button" class="slider__btn slider__btn-right"><img src="./image/03_exclusive/arrow.png" alt=""></button>',
            nextArrow: '<button id="next" type="button" class="slider__btn slider__btn-left"><img src="./image/03_exclusive/arrow.png" alt=""></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // Проверяем ширину экрана при изменении размера окна
    $(window).resize(function () {
        if ($(window).width() < 769) {
            if (!$('.exclusive__slider').hasClass('slick-initialized')) {
                $('.exclusive__slider').slick({
                    infinite: false,
                    speed: 300,
                    appendArrows: $('.exclusive__slider-arrows'),
                    prevArrow: '<button id="prev" type="button" class="slider__btn slider__btn-right"><img src="./image/03_exclusive/arrow.png" alt=""></button>',
                    nextArrow: '<button id="next" type="button" class="slider__btn slider__btn-left"><img src="./image/03_exclusive/arrow.png" alt=""></button>',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });
            }
        } else {
            if ($('.exclusive__slider').hasClass('slick-initialized')) {
                $('.exclusive__slider').slick('unslick');
            }
        }
    });
});

