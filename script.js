jQuery(document).ready(function() {
    jQuery(".hero >ul").slick({
        autoplay: false,
        autoplaySpeed:3000,
        slidesToShow:1,
        slidesToScroll: 1,
        dots: false,
        arrows:true,
        focusOnSelect: true,
        prevArrow: '<div class="banner-arrow slide-arrow prev-arrow "><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="banner-arrow slide-arrow next-arrow "><i class="fa-solid fa-chevron-right"></i></div>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            },
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            },
        ],
    })
    $('.hambuger-menu').on('click', function () {
        $('.mb-nav').addClass('show-nav');
    });
    $('.mb-logo').on('click', function () {
        $('.mb-nav').removeClass('show-nav');
    });
    
    $('.mb-sub-menu').on('click', function () {
        $('.mb-sub-menu-item').removeClass('active');
        $(this).siblings().toggleClass('active');
    });
})