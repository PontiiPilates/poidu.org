$(document).ready(function () {
    $('.slider-mobile').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        centerPadding: '250px',
        autoplaySpeed: 7000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '190px',
                }
            },
            {
                breakpoint: 680,
                settings: {
                    centerPadding: '160px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: '140px',
                }
            },
            {
                breakpoint: 540,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '80px',
                }
            },
            {
                breakpoint: 410,
                settings: {
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 360,
                settings: {
                    centerPadding: '40px',
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider-desctop').slick({
        arrows: true,
        autoplay: true,
        // slidesToShow: 3,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 7000,
        infinite: true,
    });
});
