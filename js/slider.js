$('.intro__photo').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    fade: true,
    appendDots: $('.intro__item-dots'),
    prevArrow: $('.intro__number-left'),
    nextArrow: $('.intro__number-right'),
});

$('.work__slides').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    asNavFor: '.work__foto-container',
    prevArrow: $('.work__nav-left'),
    nextArrow: $('.work__nav-right')
});


$('.work__foto-container').slick({
    centerPadding: '40px',
    centerMode: true,
    dots: false,
    arrows: false,
    asNavFor: '.work__slides',
    slidesToShow: 5,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});