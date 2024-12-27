$(function () {
    $(".voice__container-customer-slick").slick({
        arrows: false,
        autoplay: false,
        adaptiveHeight: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        initialSlide: 1,
        centerMode: true,
        centerPadding: "31.75rem",
        responsive: [
            {
                breakpoint: 767.9,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "3.18rem",
                },
            },
        ],
    });
});
