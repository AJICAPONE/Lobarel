$(document).ready(function () {

    var rev = $('.index-video-slider');
    rev.on('init', function(event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        // console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: true,
        prevArrow: '.index-video-slider--prev',
        nextArrow: '.index-video-slider--next',
        dots: true,
        appendDots: '.index-video-slider-dots--wrap',
        focusOnSelect: true,
        infinite: true,
        // centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        rows: 0,
        useTransform: true,
        customPaging: function (slider, i) {
            return '<a class="index-video-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: "unslick",
            },

        ]
        /*infinite: false,*/
    });


    $('.index-video-slider-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.mobile-video-slider--prev',
        nextArrow: '.mobile-video-slider--next',
        dots: true,
        appendDots: '.mobile-video-dots--wrap',

        rows: 0,
        // variableWidth: true,
        // centerMode: true,
        customPaging: function () {
            return '<a class="js-index-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]

    });



    $('.choise-cream-modal-flower .harmonika-button-pinkblack').on('click', function() {
        $('.choise-data-tab').css('opacity','0.5');
        setTimeout(function() {
            $('.choise-data-tab').css('opacity','0');
        },1000);
    });


    $('.choise-data-tab').on('click', function (e) {
        var $target = $($(this).data('target'));
        $target.data('triggered',true);
        setTimeout(function() {
            if ($target.data('triggered')) {
                $target.modal('show')
                    .data('triggered',false); // prevents multiple clicks from reopening
            };
        }, 1000); // milliseconds
        return false;
    });



    // при вводе текста в поиске выполнить
    $(".header-input-search").on('keydown',function() {
        if ($(this).val().length) {
            $(this).addClass('active');
            $('.search-popup').slideDown(200);
        } else {
            $(this).removeClass('active');
            $('.search-popup').slideUp(200);
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".search-popup,.input-search").length) {
            $('.search-popup').slideUp(200);
            $('.header-input-search').removeClass('active');
        }
        e.stopPropagation();
    });

    $('.header-bottom__catalog').click(function () {
        $(this).next().slideToggle(200);
        $(this).toggleClass('active');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".header-bottom__catalog--popup,.header-bottom__catalog").length) {
            $('.header-bottom__catalog--popup').slideUp(200);
            $('.header-bottom__catalog').removeClass('active');
        }
        e.stopPropagation();
    });

    $('.choise-data-tab').hoverIntent({
        over: function () {

            // $(this).addClass('active');
            var data_tabs = $(this).attr('data-svg-mask');
            $(this).addClass('clicked').siblings().removeClass('clicked');
            if($('.choise-leg').hasClass('clicked') || $('.choise-leg2').hasClass('clicked') ){
                $('.choise-leg2,.choise-leg').addClass('clicked');
            }
            // $(this).fadeIn(200).siblings().fadeOut(200);
            $('.choise-cream-girl-menu--wrap .' + data_tabs).fadeIn(200).siblings().fadeOut(200);
            $('.choise-cream-girl-menu--list').mouseleave(function () {
                $(this).fadeOut(200);
                $('.choise-data-tab').removeClass('clicked');
            });
            $('.choise-data-tab').mouseleave(function () {
                $(this).removeClass('active');
            });

        },
        out: function () {


        }
    });


    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.review-slider--prev',
        nextArrow: '.review-slider--next',
        dots: true,
        appendDots: '.review-slider-dots--wrap',
        asNavFor: '.reviews-slider-comment',
        fade: true,
        rows: 0,
        // variableWidth: true,
        // centerMode: true,
        customPaging: function () {
            return '<a class="js-index-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]

    });

    $('.reviews-slider-comment').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.reviews-slider',
        fade: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]

    });

    // Слайдер вам подойдут
    $('.js-slider-podoidut-z').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.js-slider-podoidut--prev',
        nextArrow: '.js-slider-podoidut--next',
        //asNavFor: '.reviews-slider-comment',
        rows: 0,
        appendDots: '.js-podoidut-z-slider-dots--wrap',
        customPaging: function () {
            return '<a class="js--index-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    // centerMode: true,
                    // infinite: false,
                }
            },

        ]

    });
    // С этим товаром также
    $('.js-slider-podoidut-z2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.js-slider-podoidut--prev2',
        nextArrow: '.js-slider-podoidut--next2',
        //asNavFor: '.reviews-slider-comment',
        rows: 0,
        appendDots: '.js-podoidut-z2-slider-dots--wrap',
        customPaging: function () {
            return '<a class="js--index-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    // centerMode: true,
                    // infinite: false,

                }
            },

        ]

    });

    // Слайдер Блог
    $('.review-slider-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.review-slider-js--prev',
        nextArrow: '.review-slider-js--next',
        dots: true,
        appendDots: '.review-slider-js-dots--wrap2',
        fade: true,
        rows: 0,
        customPaging: function () {
            return '<a class="js-index-slider__dots2"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]

    });



    $('.order-mobile-item-tab .order-mobile-icon--wrap').click(function () {
       $(this).parent().parent().parent().children('.order-mobile-item-tab--info').slideToggle(200);
    });


    $('.poroidut-slider-item--favoirite').click(function () {
       $(this).addClass('added-favourite')
    });

    $('.catalog-title-sort span ').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });


    $(function () {
       $('.login-acc').click(function () {
          $('#modal-register,.modal-backdrop').hide();
       });
    });

    $(".mask-phone").mask("+7(000) 000-00-00");
    $(".mask-date").mask("00.00.0000");

    $('.header-top-choise-lang').click(function () {
       $('.header-top-choise-lang-list').slideToggle(200);
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".header-top-choise-lang,.header-top-choise-lang-list").length) {
            $('.header-top-choise-lang-list').slideUp(200);
        }
        e.stopPropagation();
    });


    var i = 0;
    $('.my-room-added-adress').click(function () {
        i++;
        append_html = '<div class="my-room-cabinet order-white-box">\n' +
            '                    <h3 class="order-data-title">Адрес</h3>\n' +
            '                    <div class="order-you-data-input">\n' +
            '                      <label>Адрес</label>\n' +
            '                      <input class="inputs-lobarel" type="text">\n' +
            '                    </div>\n' +
            '                    <div class="order-you-data-inputs">\n' +
            '                      <div class="order-you-data-input">\n' +
            '                        <label>Индекс</label>\n' +
            '                        <input class="inputs-lobarel" type="text">\n' +
            '                      </div>\n' +
            '                      <div class="order-you-data-input">\n' +
            '                        <label>Страна</label>\n' +
            '                        <input class="inputs-lobarel" type="text">\n' +
            '                      </div>\n' +
            '                      <div class="order-you-data-input">\n' +
            '                        <label>Регион</label>\n' +
            '                        <input class="inputs-lobarel" type="text">\n' +
            '                      </div>\n' +
            '                    </div>\n' +
            '                  </div>';
        $('.my-room-add-adresses').append(append_html);
    });

    $('.header-top-choise-lang-item').click(function () {
       var get_lang = $(this).attr('data-lang');
       var get_code = $(this).attr('data-lang-code');
       $(this).addClass('active-lang').siblings().removeClass('active-lang');
       $('.header-top-lang').removeClass('lang-rus').removeClass('lang-eng').removeClass('lang-kaz').removeClass('lang-taj').removeClass('lang-kir').removeClass('lang-uz');
       $('.header-top-lang').addClass(get_lang);
       $('.header-top-choise-lang span').text(get_code);

    });

    function headerScroll() {
        if ($(window).scrollTop() > 160) {
            $('.main-product-page .header-fixed--product').css('position','fixed').fadeIn(200).css('display','flex');
            $('.only-main-page .header-fixed-all-pages').css('position','fixed').fadeIn(200).css('display','flex');

        } else {
            $('.main-product-page .header-fixed--product').fadeOut(100);
            $('.only-main-page .header-fixed-all-pages').fadeOut(100);

        }
    }

    headerScroll();

    $(window).scroll(function () {
        headerScroll();
    });

    function headerScroll2() {
        if ($(window).scrollTop() > 160) {
            $('.main-product-page .header-fixed--product').css('position','fixed').fadeIn(200).css('display','flex');
            $('.main-page .header-fixed-page-main').css('position','fixed').fadeIn(200).css('display','flex');

        } else {
            $('.main-product-page .header-fixed--product').fadeOut(100);
            $('.main-page .header-fixed-page-main').fadeOut(100);

        }
    }

    headerScroll2();

    $(window).scroll(function () {
        headerScroll2();
    });


    var news_ac = function() {

        if ($(window).width() > 768) {
            $('.choise-cream-container').removeAttr('data-target');
        }
    };
    news_ac ();
    $(window).resize(news_ac);


    var slick_tab = function() {
        if($(window).width() <= 992){

            $('.lobarel-cream-tabs').slick({
                arrows: false,
                dots: false,
                infinite: false,
                centerMode: true,
                focusOnSelect: true,
                // variableWidth: true,
                rows: 0,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            variableWidth: true,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: true,
                        }
                    },

                ]

            });
        }
    };
    slick_tab();
    $(window).resize(slick_tab);


    $(".lobarer-tab-characteristics--item__count").each(function(i) {
        if ($(this).text().length > 25) {
            $(this).prev().parent().css('margin-bottom','60px');
        }
    });




    $(function () {
        $("#rateYo5").rateYo({
            "ratedFill": "#FF4141",
            "starWidth": "26px",
            "spacing": "8px",
            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">\n' +
                '<g clip-path="url(#clip0)">\n' +
                '<path d="M13.2095 14.1287C18.9313 13.4067 21.0298 16.4245 21.0298 16.4245C22.953 18.7109 22.5689 22.4629 22.3671 23.7445C22.3251 24.0111 22.1058 24.2134 21.8367 24.2337C20.5108 24.334 16.5828 24.4167 14.4925 22.1506C11.9523 19.3968 13.0881 14.2173 13.0881 14.2173L13.2095 14.1287Z" fill="#FAACA8"/>\n' +
                '<path d="M21.0295 16.4247C21.0295 16.4247 20.8012 16.0966 20.2904 15.6827C18.2087 16.1606 15.9259 14.9224 14.6107 14.0217C14.1697 14.0326 13.7033 14.0665 13.2092 14.1289L13.0877 14.2174C13.0877 14.2174 13.0197 14.5285 12.9541 15.0378C14.1063 15.9176 16.639 17.5793 19.3335 17.5793C19.7857 17.5793 20.2427 17.5325 20.6982 17.4273C20.9911 17.3597 21.2735 17.27 21.5461 17.1624C21.3958 16.9043 21.2247 16.6569 21.0295 16.4247Z" fill="black" fill-opacity="0.1"/>\n' +
                '<path d="M12.9094 13.8457C12.9094 13.8457 16.8467 17.3975 20.497 16.5546C23.5009 15.8609 25.3745 12.4075 25.9439 11.206C26.0595 10.9621 25.9924 10.6714 25.7816 10.5029C24.7682 9.69286 21.6988 7.50099 18.76 8.03942C18.76 8.03942 15.0991 8.36797 12.8926 13.6963L12.9094 13.8457Z" fill="#FAACA8"/>\n' +
                '<path d="M16.0753 9.27284C15.5741 10.4324 14.698 11.4476 13.9238 12.1889V14.5546C15.1228 13.6292 17.8439 11.2187 18.2316 8.15088C17.7385 8.29089 16.9491 8.6002 16.0753 9.27284Z" fill="black" fill-opacity="0.1"/>\n' +
                '<path d="M13.555 0.933154C13.3475 0.760527 13.0493 0.753256 12.8337 0.915554C12.2171 1.37953 10.9464 2.42625 9.97363 3.82533L13.7881 13.5131C15.0881 12.4276 17.3162 10.1873 17.3808 7.53912C17.4561 4.45714 14.5772 1.78353 13.555 0.933154Z" fill="#FAACA8"/>\n' +
                '<path d="M11.8355 4.26928C12.2643 3.65265 12.7505 3.10553 13.2134 2.64561L13.3941 2.42925L13.4164 2.4478C13.7548 2.12478 14.0737 1.85151 14.3389 1.63768C14.0301 1.33937 13.7565 1.10072 13.555 0.933154C13.3476 0.760527 13.0494 0.753256 12.8337 0.915554C12.2172 1.37953 10.9464 2.42625 9.97363 3.82533L10.8718 6.10636L11.8355 4.26928Z" fill="black" fill-opacity="0.1"/>\n' +
                '<path d="M9.9739 3.82544C9.31095 4.77889 8.78638 5.89596 8.70149 7.10387C8.70149 7.10387 8.10921 10.7316 12.7213 14.1939L12.8702 14.2148C12.8702 14.2148 13.2498 13.963 13.7883 13.5132L9.9739 3.82544Z" fill="#FAACA8"/>\n' +
                '<path d="M10.5634 7.54772C10.5984 7.05007 10.7089 6.56818 10.8721 6.10647L9.9739 3.82544C9.31095 4.77889 8.78638 5.89596 8.70149 7.10387C8.70149 7.10387 8.10921 10.7316 12.7213 14.1939L12.8702 14.2148C12.8702 14.2148 13.1217 14.0479 13.5058 13.7432C10.0695 10.5783 10.5634 7.54772 10.5634 7.54772Z" fill="black" fill-opacity="0.1"/>\n' +
                '<path d="M13.025 14.1948C10.3543 17.0076 7.32249 16.8583 7.32249 16.8583C6.67962 16.9267 6.02394 16.9016 5.37981 16.7381C2.39199 15.979 0.594269 12.4858 0.0507796 11.2722C-0.0594569 11.0257 0.0142624 10.7368 0.228517 10.5725C1.28483 9.76541 4.53217 7.55335 7.51999 8.31242C11.1513 9.23467 13.025 14.1948 13.025 14.1948Z" fill="#FAACA8"/>\n' +
                '<path d="M8.03639 14.816C7.39352 14.8844 6.7379 14.8593 6.09371 14.6958C3.57456 14.0558 1.90147 11.4721 1.11279 9.94995C0.742613 10.1906 0.441149 10.41 0.228528 10.5724C0.0142202 10.7367 -0.0594463 11.0256 0.05079 11.2721C0.594279 12.4857 2.39205 15.9789 5.37987 16.738C6.024 16.9015 6.67962 16.9267 7.32254 16.8582C7.32254 16.8582 10.3543 17.0075 13.0251 14.1947C13.0251 14.1947 12.8726 13.7914 12.5708 13.1939C10.2566 14.925 8.03639 14.816 8.03639 14.816Z" fill="black" fill-opacity="0.1"/>\n' +
                '<path d="M13.0881 14.2173C14.7185 17.7367 13.4622 20.5 13.4622 20.5C13.2889 21.1229 13.0238 21.7231 12.6344 22.2616C10.8275 24.7593 6.9176 25.1429 5.58918 25.2009C5.31938 25.2125 5.07804 25.0375 5.00427 24.7778C4.64332 23.4983 3.78387 19.6643 5.59076 17.1666C7.78653 14.1309 13.0881 14.2173 13.0881 14.2173Z" fill="#FAACA8"/>\n' +
                '<path d="M13.0877 14.217C13.0877 14.217 12.6454 14.21 11.964 14.2728C13.0271 17.3561 11.9786 19.6636 11.9786 19.6636C11.8053 20.2865 11.5402 20.8867 11.1508 21.4252C9.62061 23.5404 6.58236 24.1394 4.88086 24.3085C4.92481 24.4886 4.96701 24.6466 5.0039 24.7775C5.07767 25.0373 5.31901 25.2122 5.58881 25.2006C6.91723 25.1427 10.8271 24.7591 12.634 22.2613C13.0234 21.7228 13.2885 21.1226 13.4619 20.4998C13.4619 20.4998 14.7181 17.7365 13.0877 14.217Z" fill="black" fill-opacity="0.1"/>\n' +
                '<path d="M9.86133 3.99098C9.89827 3.93539 9.93558 3.88022 9.97352 3.82568C9.93558 3.88022 9.89827 3.93539 9.86133 3.99098Z" fill="#FFF9E2"/>\n' +
                '<path d="M13.7875 13.5137C13.7548 13.5409 13.7228 13.5674 13.6914 13.5932C13.7228 13.5674 13.7548 13.541 13.7875 13.5137Z" fill="#FFF9E2"/>\n' +
                '<path d="M12.8871 14.2041C12.8833 14.2066 12.8804 14.2086 12.8779 14.2102C12.8804 14.2085 12.8833 14.2067 12.8871 14.2041Z" fill="#FFF9E2"/>\n' +
                '<path d="M12.7209 14.1935C12.7039 14.1807 12.6877 14.168 12.6709 14.1553C12.6878 14.168 12.704 14.1808 12.7209 14.1935L12.7897 14.2031L12.7209 14.1935Z" fill="#FFF9E2"/>\n' +
                '<path d="M12.9057 14.1897C12.8995 14.1939 12.8942 14.1975 12.8896 14.2007C12.8942 14.1976 12.8995 14.1939 12.9057 14.1897Z" fill="#FFF9E2"/>\n' +
                '<path d="M13.5932 13.6729C13.2547 13.9457 13.0037 14.1228 12.9102 14.1872C13.0032 14.1232 13.2543 13.9461 13.5932 13.6729Z" fill="#FFF9E2"/>\n' +
                '<path d="M13.6866 13.5974C13.6557 13.6228 13.6253 13.6474 13.5957 13.6713C13.6254 13.6474 13.6557 13.6228 13.6866 13.5974Z" fill="#FFF9E2"/>\n' +
                '<path d="M13.2486 17.5502C14.745 17.5502 15.9581 16.3371 15.9581 14.8406C15.9581 13.3442 14.745 12.1311 13.2486 12.1311C11.7522 12.1311 10.5391 13.3442 10.5391 14.8406C10.5391 16.3371 11.7522 17.5502 13.2486 17.5502Z" fill="#283037"/>\n' +
                '<path d="M12.72 14.8406C12.72 13.7323 13.3858 12.7799 14.3391 12.3602C14.0053 12.2133 13.6366 12.1311 13.2486 12.1311C11.7522 12.1311 10.5391 13.3442 10.5391 14.8406C10.5391 16.3371 11.7521 17.5502 13.2486 17.5502C13.6366 17.5502 14.0053 17.468 14.3391 17.3211C13.3858 16.9014 12.72 15.949 12.72 14.8406Z" fill="white" fill-opacity="0.1"/>\n' +
                '</g>\n' +
                '<defs>\n' +
                '<clipPath id="clip0">\n' +
                '<rect width="26" height="26" fill="white"/>\n' +
                '</clipPath>\n' +
                '</defs>\n' +
                '</svg>',
            //"starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>',
            multiColor: {

                "startColor": "#f35a28", //RED
                "endColor"  : "#FDC630"  //GREEN
            }
        }).on("rateyo.change", function (e, data) {
            var rating = data.rating;
            $(this).parent().find('.rateyo-hidden').val(rating);

        });
    });

    $(".reviews-slider-comment-rating").each( function() {
        var rating = $(this).attr("data-rating");
        $(this).rateYo(
            {
                rating: 5, //rating
                // "ratedFill": "#FF4141",
                multiColor: {

                    "startColor": "#f35a28", //RED
                    "endColor"  : "#FDC630"  //GREEN
                },
                "starWidth": "26px",
                "spacing": "10px",
                "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">\n' +
                    '<g clip-path="url(#clip0)">\n' +
                    '<path d="M13.2095 14.1287C18.9313 13.4067 21.0298 16.4245 21.0298 16.4245C22.953 18.7109 22.5689 22.4629 22.3671 23.7445C22.3251 24.0111 22.1058 24.2134 21.8367 24.2337C20.5108 24.334 16.5828 24.4167 14.4925 22.1506C11.9523 19.3968 13.0881 14.2173 13.0881 14.2173L13.2095 14.1287Z" fill="#FAACA8"/>\n' +
                    '<path d="M21.0295 16.4247C21.0295 16.4247 20.8012 16.0966 20.2904 15.6827C18.2087 16.1606 15.9259 14.9224 14.6107 14.0217C14.1697 14.0326 13.7033 14.0665 13.2092 14.1289L13.0877 14.2174C13.0877 14.2174 13.0197 14.5285 12.9541 15.0378C14.1063 15.9176 16.639 17.5793 19.3335 17.5793C19.7857 17.5793 20.2427 17.5325 20.6982 17.4273C20.9911 17.3597 21.2735 17.27 21.5461 17.1624C21.3958 16.9043 21.2247 16.6569 21.0295 16.4247Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M12.9094 13.8457C12.9094 13.8457 16.8467 17.3975 20.497 16.5546C23.5009 15.8609 25.3745 12.4075 25.9439 11.206C26.0595 10.9621 25.9924 10.6714 25.7816 10.5029C24.7682 9.69286 21.6988 7.50099 18.76 8.03942C18.76 8.03942 15.0991 8.36797 12.8926 13.6963L12.9094 13.8457Z" fill="#FAACA8"/>\n' +
                    '<path d="M16.0753 9.27284C15.5741 10.4324 14.698 11.4476 13.9238 12.1889V14.5546C15.1228 13.6292 17.8439 11.2187 18.2316 8.15088C17.7385 8.29089 16.9491 8.6002 16.0753 9.27284Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M13.555 0.933154C13.3475 0.760527 13.0493 0.753256 12.8337 0.915554C12.2171 1.37953 10.9464 2.42625 9.97363 3.82533L13.7881 13.5131C15.0881 12.4276 17.3162 10.1873 17.3808 7.53912C17.4561 4.45714 14.5772 1.78353 13.555 0.933154Z" fill="#FAACA8"/>\n' +
                    '<path d="M11.8355 4.26928C12.2643 3.65265 12.7505 3.10553 13.2134 2.64561L13.3941 2.42925L13.4164 2.4478C13.7548 2.12478 14.0737 1.85151 14.3389 1.63768C14.0301 1.33937 13.7565 1.10072 13.555 0.933154C13.3476 0.760527 13.0494 0.753256 12.8337 0.915554C12.2172 1.37953 10.9464 2.42625 9.97363 3.82533L10.8718 6.10636L11.8355 4.26928Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M9.9739 3.82544C9.31095 4.77889 8.78638 5.89596 8.70149 7.10387C8.70149 7.10387 8.10921 10.7316 12.7213 14.1939L12.8702 14.2148C12.8702 14.2148 13.2498 13.963 13.7883 13.5132L9.9739 3.82544Z" fill="#FAACA8"/>\n' +
                    '<path d="M10.5634 7.54772C10.5984 7.05007 10.7089 6.56818 10.8721 6.10647L9.9739 3.82544C9.31095 4.77889 8.78638 5.89596 8.70149 7.10387C8.70149 7.10387 8.10921 10.7316 12.7213 14.1939L12.8702 14.2148C12.8702 14.2148 13.1217 14.0479 13.5058 13.7432C10.0695 10.5783 10.5634 7.54772 10.5634 7.54772Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M13.025 14.1948C10.3543 17.0076 7.32249 16.8583 7.32249 16.8583C6.67962 16.9267 6.02394 16.9016 5.37981 16.7381C2.39199 15.979 0.594269 12.4858 0.0507796 11.2722C-0.0594569 11.0257 0.0142624 10.7368 0.228517 10.5725C1.28483 9.76541 4.53217 7.55335 7.51999 8.31242C11.1513 9.23467 13.025 14.1948 13.025 14.1948Z" fill="#FAACA8"/>\n' +
                    '<path d="M8.03639 14.816C7.39352 14.8844 6.7379 14.8593 6.09371 14.6958C3.57456 14.0558 1.90147 11.4721 1.11279 9.94995C0.742613 10.1906 0.441149 10.41 0.228528 10.5724C0.0142202 10.7367 -0.0594463 11.0256 0.05079 11.2721C0.594279 12.4857 2.39205 15.9789 5.37987 16.738C6.024 16.9015 6.67962 16.9267 7.32254 16.8582C7.32254 16.8582 10.3543 17.0075 13.0251 14.1947C13.0251 14.1947 12.8726 13.7914 12.5708 13.1939C10.2566 14.925 8.03639 14.816 8.03639 14.816Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M13.0881 14.2173C14.7185 17.7367 13.4622 20.5 13.4622 20.5C13.2889 21.1229 13.0238 21.7231 12.6344 22.2616C10.8275 24.7593 6.9176 25.1429 5.58918 25.2009C5.31938 25.2125 5.07804 25.0375 5.00427 24.7778C4.64332 23.4983 3.78387 19.6643 5.59076 17.1666C7.78653 14.1309 13.0881 14.2173 13.0881 14.2173Z" fill="#FAACA8"/>\n' +
                    '<path d="M13.0877 14.217C13.0877 14.217 12.6454 14.21 11.964 14.2728C13.0271 17.3561 11.9786 19.6636 11.9786 19.6636C11.8053 20.2865 11.5402 20.8867 11.1508 21.4252C9.62061 23.5404 6.58236 24.1394 4.88086 24.3085C4.92481 24.4886 4.96701 24.6466 5.0039 24.7775C5.07767 25.0373 5.31901 25.2122 5.58881 25.2006C6.91723 25.1427 10.8271 24.7591 12.634 22.2613C13.0234 21.7228 13.2885 21.1226 13.4619 20.4998C13.4619 20.4998 14.7181 17.7365 13.0877 14.217Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M9.86133 3.99098C9.89827 3.93539 9.93558 3.88022 9.97352 3.82568C9.93558 3.88022 9.89827 3.93539 9.86133 3.99098Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.7875 13.5137C13.7548 13.5409 13.7228 13.5674 13.6914 13.5932C13.7228 13.5674 13.7548 13.541 13.7875 13.5137Z" fill="#FFF9E2"/>\n' +
                    '<path d="M12.8871 14.2041C12.8833 14.2066 12.8804 14.2086 12.8779 14.2102C12.8804 14.2085 12.8833 14.2067 12.8871 14.2041Z" fill="#FFF9E2"/>\n' +
                    '<path d="M12.7209 14.1935C12.7039 14.1807 12.6877 14.168 12.6709 14.1553C12.6878 14.168 12.704 14.1808 12.7209 14.1935L12.7897 14.2031L12.7209 14.1935Z" fill="#FFF9E2"/>\n' +
                    '<path d="M12.9057 14.1897C12.8995 14.1939 12.8942 14.1975 12.8896 14.2007C12.8942 14.1976 12.8995 14.1939 12.9057 14.1897Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.5932 13.6729C13.2547 13.9457 13.0037 14.1228 12.9102 14.1872C13.0032 14.1232 13.2543 13.9461 13.5932 13.6729Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.6866 13.5974C13.6557 13.6228 13.6253 13.6474 13.5957 13.6713C13.6254 13.6474 13.6557 13.6228 13.6866 13.5974Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.2486 17.5502C14.745 17.5502 15.9581 16.3371 15.9581 14.8406C15.9581 13.3442 14.745 12.1311 13.2486 12.1311C11.7522 12.1311 10.5391 13.3442 10.5391 14.8406C10.5391 16.3371 11.7522 17.5502 13.2486 17.5502Z" fill="#283037"/>\n' +
                    '<path d="M12.72 14.8406C12.72 13.7323 13.3858 12.7799 14.3391 12.3602C14.0053 12.2133 13.6366 12.1311 13.2486 12.1311C11.7522 12.1311 10.5391 13.3442 10.5391 14.8406C10.5391 16.3371 11.7521 17.5502 13.2486 17.5502C13.6366 17.5502 14.0053 17.468 14.3391 17.3211C13.3858 16.9014 12.72 15.949 12.72 14.8406Z" fill="white" fill-opacity="0.1"/>\n' +
                    '</g>\n' +
                    '<defs>\n' +
                    '<clipPath id="clip0">\n' +
                    '<rect width="26" height="26" fill="white"/>\n' +
                    '</clipPath>\n' +
                    '</defs>\n' +
                    '</svg>',
                readOnly: true
            }
        );
    });


    // Рейтинг продуктов
    $(".slider-podoidut-rating").each( function() {
        var rating = $(this).attr("data-rating");
        $(this).rateYo(
            {
                rating: 5, //rating
                // "ratedFill": "#FF4141",
                multiColor: {

                    "startColor": "#f35a28", //RED
                    "endColor"  : "#FDC630"  //GREEN
                },
                "starWidth": "18px",
                "spacing": "7px",
                "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">\n' +
                    '<g clip-path="url(#clip0)">\n' +
                    '<path d="M13.2095 14.1287C18.9313 13.4067 21.0298 16.4245 21.0298 16.4245C22.953 18.7109 22.5689 22.4629 22.3671 23.7445C22.3251 24.0111 22.1058 24.2134 21.8367 24.2337C20.5108 24.334 16.5828 24.4167 14.4925 22.1506C11.9523 19.3968 13.0881 14.2173 13.0881 14.2173L13.2095 14.1287Z" fill="#FAACA8"/>\n' +
                    '<path d="M21.0295 16.4247C21.0295 16.4247 20.8012 16.0966 20.2904 15.6827C18.2087 16.1606 15.9259 14.9224 14.6107 14.0217C14.1697 14.0326 13.7033 14.0665 13.2092 14.1289L13.0877 14.2174C13.0877 14.2174 13.0197 14.5285 12.9541 15.0378C14.1063 15.9176 16.639 17.5793 19.3335 17.5793C19.7857 17.5793 20.2427 17.5325 20.6982 17.4273C20.9911 17.3597 21.2735 17.27 21.5461 17.1624C21.3958 16.9043 21.2247 16.6569 21.0295 16.4247Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M12.9094 13.8457C12.9094 13.8457 16.8467 17.3975 20.497 16.5546C23.5009 15.8609 25.3745 12.4075 25.9439 11.206C26.0595 10.9621 25.9924 10.6714 25.7816 10.5029C24.7682 9.69286 21.6988 7.50099 18.76 8.03942C18.76 8.03942 15.0991 8.36797 12.8926 13.6963L12.9094 13.8457Z" fill="#FAACA8"/>\n' +
                    '<path d="M16.0753 9.27284C15.5741 10.4324 14.698 11.4476 13.9238 12.1889V14.5546C15.1228 13.6292 17.8439 11.2187 18.2316 8.15088C17.7385 8.29089 16.9491 8.6002 16.0753 9.27284Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M13.555 0.933154C13.3475 0.760527 13.0493 0.753256 12.8337 0.915554C12.2171 1.37953 10.9464 2.42625 9.97363 3.82533L13.7881 13.5131C15.0881 12.4276 17.3162 10.1873 17.3808 7.53912C17.4561 4.45714 14.5772 1.78353 13.555 0.933154Z" fill="#FAACA8"/>\n' +
                    '<path d="M11.8355 4.26928C12.2643 3.65265 12.7505 3.10553 13.2134 2.64561L13.3941 2.42925L13.4164 2.4478C13.7548 2.12478 14.0737 1.85151 14.3389 1.63768C14.0301 1.33937 13.7565 1.10072 13.555 0.933154C13.3476 0.760527 13.0494 0.753256 12.8337 0.915554C12.2172 1.37953 10.9464 2.42625 9.97363 3.82533L10.8718 6.10636L11.8355 4.26928Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M9.9739 3.82544C9.31095 4.77889 8.78638 5.89596 8.70149 7.10387C8.70149 7.10387 8.10921 10.7316 12.7213 14.1939L12.8702 14.2148C12.8702 14.2148 13.2498 13.963 13.7883 13.5132L9.9739 3.82544Z" fill="#FAACA8"/>\n' +
                    '<path d="M10.5634 7.54772C10.5984 7.05007 10.7089 6.56818 10.8721 6.10647L9.9739 3.82544C9.31095 4.77889 8.78638 5.89596 8.70149 7.10387C8.70149 7.10387 8.10921 10.7316 12.7213 14.1939L12.8702 14.2148C12.8702 14.2148 13.1217 14.0479 13.5058 13.7432C10.0695 10.5783 10.5634 7.54772 10.5634 7.54772Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M13.025 14.1948C10.3543 17.0076 7.32249 16.8583 7.32249 16.8583C6.67962 16.9267 6.02394 16.9016 5.37981 16.7381C2.39199 15.979 0.594269 12.4858 0.0507796 11.2722C-0.0594569 11.0257 0.0142624 10.7368 0.228517 10.5725C1.28483 9.76541 4.53217 7.55335 7.51999 8.31242C11.1513 9.23467 13.025 14.1948 13.025 14.1948Z" fill="#FAACA8"/>\n' +
                    '<path d="M8.03639 14.816C7.39352 14.8844 6.7379 14.8593 6.09371 14.6958C3.57456 14.0558 1.90147 11.4721 1.11279 9.94995C0.742613 10.1906 0.441149 10.41 0.228528 10.5724C0.0142202 10.7367 -0.0594463 11.0256 0.05079 11.2721C0.594279 12.4857 2.39205 15.9789 5.37987 16.738C6.024 16.9015 6.67962 16.9267 7.32254 16.8582C7.32254 16.8582 10.3543 17.0075 13.0251 14.1947C13.0251 14.1947 12.8726 13.7914 12.5708 13.1939C10.2566 14.925 8.03639 14.816 8.03639 14.816Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M13.0881 14.2173C14.7185 17.7367 13.4622 20.5 13.4622 20.5C13.2889 21.1229 13.0238 21.7231 12.6344 22.2616C10.8275 24.7593 6.9176 25.1429 5.58918 25.2009C5.31938 25.2125 5.07804 25.0375 5.00427 24.7778C4.64332 23.4983 3.78387 19.6643 5.59076 17.1666C7.78653 14.1309 13.0881 14.2173 13.0881 14.2173Z" fill="#FAACA8"/>\n' +
                    '<path d="M13.0877 14.217C13.0877 14.217 12.6454 14.21 11.964 14.2728C13.0271 17.3561 11.9786 19.6636 11.9786 19.6636C11.8053 20.2865 11.5402 20.8867 11.1508 21.4252C9.62061 23.5404 6.58236 24.1394 4.88086 24.3085C4.92481 24.4886 4.96701 24.6466 5.0039 24.7775C5.07767 25.0373 5.31901 25.2122 5.58881 25.2006C6.91723 25.1427 10.8271 24.7591 12.634 22.2613C13.0234 21.7228 13.2885 21.1226 13.4619 20.4998C13.4619 20.4998 14.7181 17.7365 13.0877 14.217Z" fill="black" fill-opacity="0.1"/>\n' +
                    '<path d="M9.86133 3.99098C9.89827 3.93539 9.93558 3.88022 9.97352 3.82568C9.93558 3.88022 9.89827 3.93539 9.86133 3.99098Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.7875 13.5137C13.7548 13.5409 13.7228 13.5674 13.6914 13.5932C13.7228 13.5674 13.7548 13.541 13.7875 13.5137Z" fill="#FFF9E2"/>\n' +
                    '<path d="M12.8871 14.2041C12.8833 14.2066 12.8804 14.2086 12.8779 14.2102C12.8804 14.2085 12.8833 14.2067 12.8871 14.2041Z" fill="#FFF9E2"/>\n' +
                    '<path d="M12.7209 14.1935C12.7039 14.1807 12.6877 14.168 12.6709 14.1553C12.6878 14.168 12.704 14.1808 12.7209 14.1935L12.7897 14.2031L12.7209 14.1935Z" fill="#FFF9E2"/>\n' +
                    '<path d="M12.9057 14.1897C12.8995 14.1939 12.8942 14.1975 12.8896 14.2007C12.8942 14.1976 12.8995 14.1939 12.9057 14.1897Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.5932 13.6729C13.2547 13.9457 13.0037 14.1228 12.9102 14.1872C13.0032 14.1232 13.2543 13.9461 13.5932 13.6729Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.6866 13.5974C13.6557 13.6228 13.6253 13.6474 13.5957 13.6713C13.6254 13.6474 13.6557 13.6228 13.6866 13.5974Z" fill="#FFF9E2"/>\n' +
                    '<path d="M13.2486 17.5502C14.745 17.5502 15.9581 16.3371 15.9581 14.8406C15.9581 13.3442 14.745 12.1311 13.2486 12.1311C11.7522 12.1311 10.5391 13.3442 10.5391 14.8406C10.5391 16.3371 11.7522 17.5502 13.2486 17.5502Z" fill="#283037"/>\n' +
                    '<path d="M12.72 14.8406C12.72 13.7323 13.3858 12.7799 14.3391 12.3602C14.0053 12.2133 13.6366 12.1311 13.2486 12.1311C11.7522 12.1311 10.5391 13.3442 10.5391 14.8406C10.5391 16.3371 11.7521 17.5502 13.2486 17.5502C13.6366 17.5502 14.0053 17.468 14.3391 17.3211C13.3858 16.9014 12.72 15.949 12.72 14.8406Z" fill="white" fill-opacity="0.1"/>\n' +
                    '</g>\n' +
                    '<defs>\n' +
                    '<clipPath id="clip0">\n' +
                    '<rect width="26" height="26" fill="white"/>\n' +
                    '</clipPath>\n' +
                    '</defs>\n' +
                    '</svg>',
                readOnly: true
            }
        );
    });




    window.onload = function() {
        $('.choise-cream-modal').delay(1000).css('pointer-events','auto').fadeIn(600);
        $('.choise-cream').css('pointer-events','none');
    };
    $('.choise-cream-modal .harmonika-button-pinkblack').click(function () {
        $('.choise-cream').css('pointer-events','auto');
        $('.choise-cream-modal').fadeOut(600);
    });

    $('#preorder_year .harmonika-input').on('click',function () {
        $('#preorder_year .harmonika-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $year = $(this);
        $('.harmonika-preorder-input').removeAttr('data-year','checked');
        $year.parent().find('.harmonika-preorder-input').attr('data-year','checked');
    });

    $('#preorder_type .harmonika-input').on('click',function () {
        $('#preorder_type .harmonika-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type = $(this);
        $('.harmonika-preorder-input').removeAttr('data-type','checked');
        $type.parent().find('.harmonika-preorder-input').attr('data-type','checked');
    });

    $('#preorder_type-skin .harmonika-input').on('click',function () {
        $('#preorder_type-skin .harmonika-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type_skin = $(this);
        if($type_skin.hasClass('checked')){
            $(this).parent().parent().addClass('active').siblings().removeClass('active');
            var data_skin = $(this).parent().parent().attr('data-type-skin');
            $('.preorder-type-skin-info .' + data_skin).addClass('active').siblings().removeClass('active');
        }
        $('.harmonika-preorder-input').removeAttr('data-type','checked');
        $type_skin.parent().find('.harmonika-preorder-input').attr('data-type','checked');
    });




    $('#preorder_type-effect .harmonika-input').on('click',function () {
        $('#preorder_type-effect .harmonika-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type_effect = $(this);
        if($type_effect.hasClass('checked')){
            $(this).parent().parent().addClass('active').siblings().removeClass('active');
            var data_effect = $(this).parent().parent().attr('data-effect');
            $('.preorder-type-skin-info .' + data_effect).addClass('active').siblings().removeClass('active');
        }
        $('.harmonika-preorder-input').removeAttr('data-type','checked');
        $type_effect.parent().find('.harmonika-preorder-input').attr('data-type','checked');
    });

    $('#test_year .harmonika-input').on('click',function () {
        $('#test_year .harmonika-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type_effect = $(this);
        $('.harmonika-preorder-input').removeAttr('data-type','checked');
        $type_effect.parent().find('.harmonika-preorder-input').attr('data-type','checked');
    });

    $('#test_cream .harmonika-input').on('click',function () {
        $('#test_cream .harmonika-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type_effect = $(this);
        $('.harmonika-preorder-input').removeAttr('data-type','checked');
        $type_effect.parent().find('.harmonika-preorder-input').attr('data-type','checked');
    });

    $('#test_defect .harmonika-input').on('click',function () {
        $('#test_defect .harmonika-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type_effect = $(this);
        $('.harmonika-preorder-input').removeAttr('data-type','checked');
        $type_effect.parent().find('.harmonika-preorder-input').attr('data-type','checked');
    });

    $('#filter-type-cream .filter-type-select').on('click',function () {
        $('#filter-type-cream .filter-type-select').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type_effect = $(this);
        $('.filter-type--input').removeAttr('data-filter-type','checked');
        $type_effect.parent().find('.filter-type--input').attr('data-filter-type','checked');
    });

    $('#filter-year .filter-type-select').on('click',function () {
        $('#filter-year .filter-type-select').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
    });

    $('.my-room-subs-checked').on('click',function () {
        $('.my-room-subs-checked').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
    });

    $('.order-compare--list-content label').on('click',function () {
        $('.order-compare-item-check').removeClass('checked');
        $(this).children().children('.order-compare-item-check').addClass('checked').siblings().removeClass('checked');
    });

    $('.method-pay-item label').on('click',function () {
        $('.method-pay-item-check').removeClass('checked');
        $(this).children('.method-pay-item-check').addClass('checked').siblings().removeClass('checked');
    });

    $('.mobile-catalog-filter-button').click(function () {
       $('.catalog-filter-fixed').fadeIn(200);
       $('body').css('overflow-y','hidden');
    });

    $('.mobile-filter-title-close-button').click(function () {
        $('.catalog-filter-fixed').fadeOut(200);
        $('body').css('overflow-y','scroll');
    });


    $('#filter-effect-cream .filter-type-select').on('click',function () {
        $(this).toggleClass('checked');
    });


    $(".topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 80 + "px"

        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });





    // Quantity в архиве товара
    $('.order-product-item__plus').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
        if ($(this).prev().val() > 1){
            $('.order-product-item__minus').removeClass('order-count-last');
        }
    });
    $('.order-product-item__minus').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);

        }
        if ($(this).next().val() <= 1){
            $(this).addClass('order-count-last');
        }

    });


    $('.preorder-cream-attr-item').on('click',function () {
        $('.preorder-cream-attr-item').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        $('.preorder-attr-cream-list').slideUp(200);
        $(this).next().slideDown(200);
    });
    $('.preorder-attr-cream-item').each(function(ndx){
        $(this).attr('data-attr', 'attr-' + (ndx+1))
    });
    $('.preorder-attr-cream--wrapper').each(function (ndx) {
        $(this).addClass('attr-' +(ndx+1));
    });

    $('.preorder-attr-cream-item').on('click',function () {
       $(this).addClass('choise-attr');
       $(this).addClass('active').siblings().removeClass('active');
       var data_attr = $(this).attr('data-attr');
       $('.preorder-type-skin-info .' + data_attr).addClass('active').siblings().removeClass('active');
    });



    $('.preorder-attr-cream-item').click(function (e) {
        e.preventDefault();
        var str = $(this).text();
        get_name_attr = jQuery.trim(str);
        html = '<li class="preorder-added-item"><span>'+ get_name_attr +'</span><div class="preorder-delete-item"><svg class="icon icon-delete "><use xlink:href="static/img/svg/symbol/sprite.svg#delete"></use></svg></div>';
        $('.preorder-added-result').append(html);

        var get_names = $('.preorder-added-item span').text();
        var cream_svoystva = [get_names];



        $('.preorder-added-item-input').val(cream_svoystva);

    });

    $('.filter-category-watch-all').click(function () {
       $(this).prev('.filter-show-all').slideToggle(200);
    });



    $('.preorder-added-result').on('click','.preorder-delete-item',function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });


    // SELECT OPTIONS
    (function ( $ ) {
        var elActive = '';
        $.fn.selectCF = function( options ) {

            // option
            var settings = $.extend({

                change: function( ){ }, // event change
            }, options );

            return this.each(function(){

                var selectParent = $(this);
                list = [],
                    html = '';


                $(selectParent).hide();
                if( $(selectParent).children('option').length == 0 ){ return; }
                $(selectParent).children('option').each(function(ndx){
                    if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
                    list.push({
                        value: $(this).attr('value'),
                        text: $(this).text(),
                        selected: s,
                    });

                });

                // style

                html += "<ul class='selectCF'>";
                html += 	"<li class='select'>";
                html +=         "<div class='titleCF select-input'>"+title+"</div>";
                html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#down-arrow'></use></svg></div>";
                html += 		"<ul class='select-options'>";
                $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                    html += 			"<li value='"+v.value+"' class='"+s+"'>"+v.text+"</li>";});
                html += 		"</ul>";
                html += 	"</li>";
                html += "</ul>";


                $(selectParent).after(html);
                var customSelect = $(this).next('ul.selectCF'); // add Html
                var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
                var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
                var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');


                // handle active select
                $(customSelect).unbind('click').bind('click',function(e){
                    e.stopPropagation();
                    if($(this).hasClass('onCF')){
                        elActive = '';
                        $(this).removeClass('onCF');
                        $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(this).removeClass('searchActive'); $(seachElInput).val('');
                        $(seachElOption).show();
                    }else{
                        if(elActive != ''){
                            $(elActive).removeClass('onCF');
                            $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                            $(seachElOption).show();
                        }
                        elActive = $(this);
                        $(this).addClass('onCF');
                        $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                        $(seachEl).children('input').focus();
                    }
                });

                // handle choose option
                var optionSelect = $(customSelect).children('li').children('ul').children('li');
                $(optionSelect).bind('click', function(e){
                    var value = $(this).attr('value');
                    if( $(this).hasClass('selected') ){
                        //
                    }else{
                        $(optionSelect).removeClass('selected');
                        $(this).addClass('selected');
                        $(customSelect).children('li').children('.titleCF').html($(this).html());
                        $(selectParent).val(value);
                        settings.change.call(selectParent); // call event change
                    }
                });

                // handle search
                $(seachEl).children('input').bind('keyup', function(e){
                    var value = $(this).val();
                    if( value ){
                        $(customSelect).addClass('searchActive');
                        $(seachElOption).each(function(){
                            if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                                // not item
                                $(this).fadeOut();
                            }else{
                                // have item
                                $(this).fadeIn();
                            }
                        })
                    }else{
                        $(customSelect).removeClass('searchActive');
                        $(seachElOption).fadeIn();
                    }
                })

            });
        };
        $(document).click(function(){
            if(elActive != ''){
                $(elActive).removeClass('onCF');
                $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
            }
        })
    }( jQuery ));

    $(function(){
        $( ".test" ).selectCF({
            color: "#FFF",
            backgroundColor: "#663052",

            change: function () {
                var value = $(this).val();
                var text = $(this).children('option:selected').html();
                $(this).next().next('.select_option_dms').val(text);
                // event_change.html(value+' : '+text);


            }

        });

    });



    // SELECT OPTIONS
    (function ( $ ) {
        var elActive2 = '';
        $.fn.selectCF2 = function( options ) {

            // option
            var settings = $.extend({

                change: function( ){ }, // event change
            }, options );

            return this.each(function(){

                var selectParent2 = $(this);
                list = [],
                    html = '';



                $(selectParent2).hide();
                if( $(selectParent2).children('option').length == 0 ){ return; }
                $(selectParent2).children('option').each(function(ndx){
                    if( $(this).is(':selected') ){ s = 1; title = $(this).text();  }else{ s = 0; }
                    list.push({
                        value: $(this).attr('value'),
                        text: $(this).text(),
                        selected: s,
                        type_skin: $(this).attr('data-type-skin'),
                    });

                });



                // style

                html += "<ul class='selectCF'>";
                html += 	"<li class='select'>";
                html +=         "<div class='titleCF select-input'>"+title+"</div>";
                html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#down-arrow'></use></svg></div>";
                html += 		"<ul class='select-options type-skin-options'>";
                $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                    html += 			"<li data-type-skin='"+v.type_skin+"' value='"+v.value+"' class='"+s+"'>"+v.text+"</li>";});
                html += 		"</ul>";
                html += 	"</li>";
                html += "</ul>";



                $(selectParent2).after(html);
                var customSelect2 = $(this).next('ul.selectCF'); // add Html
                var seachEl2 = $(this).next('ul.selectCF').children('li').children('.searchCF');
                var seachElOption2 = $(this).next('ul.selectCF').children('li').children('ul').children('li');
                var seachElInput2 = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

                $('.type-skin-options li').on('click',function () {
                    $('.type-skin-options li').removeClass('choise-type');
                    $(this).addClass('choise-type');
                    var data_attr = $(this).attr('data-type-skin');
                    $('.preorder-type-skin-info .' + data_attr).addClass('active').siblings().removeClass('active');
                });


                // handle active select
                $(customSelect2).unbind('click').bind('click',function(e){
                    e.stopPropagation();
                    if($(this).hasClass('onCF')){
                        elActive = '';
                        $(this).removeClass('onCF');
                        $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(this).removeClass('searchActive'); $(seachElInput2).val('');
                        $(seachElOption2).show();
                    }else{
                        if(elActive2 != ''){
                            $(elActive2).removeClass('onCF');
                            $(elActive2).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                            $(seachElOption2).show();
                        }
                        elActive2 = $(this);
                        $(this).addClass('onCF');
                        $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                        $(seachEl2).children('input').focus();
                    }
                });

                // handle choose option
                var optionSelect2 = $(customSelect2).children('li').children('ul').children('li');
                $(optionSelect2).bind('click', function(e){
                    var value2 = $(this).attr('value');
                    //var type_s = $(this).attr('data-type-skin');
                    if( $(this).hasClass('selected') ){
                        //
                    }else{
                        $(optionSelect2).removeClass('selected');
                        $(this).addClass('selected');
                        $(customSelect2).children('li').children('.titleCF').html($(this).html());
                        $(selectParent2).val(value2);
                        //$(selectParent).attr(type_s);

                        settings.change.call(selectParent2); // call event change
                    }
                });

                // handle search
                $(seachEl2).children('input').bind('keyup', function(e){
                    var value2 = $(this).val();
                    if( value2 ){
                        $(customSelect2).addClass('searchActive');
                        $(seachElOption2).each(function(){
                            if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                                // not item
                                $(this).fadeOut();
                            }else{
                                // have item
                                $(this).fadeIn();
                            }
                        })
                    }else{
                        $(customSelect2).removeClass('searchActive');
                        $(seachElOption2).fadeIn();
                    }
                })

            });
        };
        $(document).click(function(){
            if(elActive2 != ''){
                $(elActive2).removeClass('onCF');
                $(elActive2).children().find('.icon-arrow-down').removeClass('arrow-rotate');
            }
        })
    }( jQuery ));

    $(function(){
        $( ".preorder-test" ).selectCF2({
            color: "#FFF",
            backgroundColor: "#663052",

            change: function () {
                var value = $(this).val();
                var text = $(this).children('option:selected').html();
                $(this).next().next('.select_option_dms').val(text);
                // event_change.html(value+' : '+text);


            }

        });

    });


    (function ( $ ) {
        var elActive3 = '';
        $.fn.selectCF3 = function( options ) {

            // option
            var settings = $.extend({

                change: function( ){ }, // event change
            }, options );

            return this.each(function(){

                var selectParent3 = $(this);
                list = [],
                    html = '';



                $(selectParent3).hide();
                if( $(selectParent3).children('option').length == 0 ){ return; }
                $(selectParent3).children('option').each(function(ndx){
                    if( $(this).is(':selected') ){ s = 1; title = $(this).text();  }else{ s = 0; }
                    list.push({
                        value: $(this).attr('value'),
                        text: $(this).text(),
                        selected: s,
                        type_skin: $(this).attr('data-effect'),
                    });

                });



                // style

                html += "<ul class='selectCF'>";
                html += 	"<li class='select'>";
                html +=         "<div class='titleCF select-input'>"+title+"</div>";
                html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#down-arrow'></use></svg></div>";
                html += 		"<ul class='select-options effect-skin-options'>";
                $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                    html += 			"<li data-effect='"+v.type_skin+"' value='"+v.value+"' class='"+s+"'>"+v.text+"</li>";});
                html += 		"</ul>";
                html += 	"</li>";
                html += "</ul>";



                $(selectParent3).after(html);
                var customSelect3 = $(this).next('ul.selectCF'); // add Html
                var seachEl3 = $(this).next('ul.selectCF').children('li').children('.searchCF');
                var seachElOption3 = $(this).next('ul.selectCF').children('li').children('ul').children('li');
                var seachElInput3 = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

                $('.effect-skin-options li').on('click',function () {
                    $('.effect-skin-options li').removeClass('choise-effect');
                    $(this).addClass('choise-effect');
                    var data_attr = $(this).attr('data-effect');
                    $('.preorder-type-skin-info .' + data_attr).addClass('active').siblings().removeClass('active');
                });


                // handle active select
                $(customSelect3).unbind('click').bind('click',function(e){
                    e.stopPropagation();
                    if($(this).hasClass('onCF')){
                        elActive3 = '';
                        $(this).removeClass('onCF');
                        $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(this).removeClass('searchActive'); $(seachElInput3).val('');
                        $(seachElOption3).show();
                    }else{
                        if(elActive3 != ''){
                            $(elActive3).removeClass('onCF');
                            $(elActive3).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                            $(seachElOption3).show();
                        }
                        elActive3 = $(this);
                        $(this).addClass('onCF');
                        $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                        $(seachEl3).children('input').focus();
                    }
                });

                // handle choose option
                var optionSelect3 = $(customSelect3).children('li').children('ul').children('li');
                $(optionSelect3).bind('click', function(e){
                    var value3 = $(this).attr('value');
                    //var type_s = $(this).attr('data-type-skin');
                    if( $(this).hasClass('selected') ){
                        //
                    }else{
                        $(optionSelect3).removeClass('selected');
                        $(this).addClass('selected');
                        $(customSelect3).children('li').children('.titleCF').html($(this).html());
                        $(selectParent3).val(value3);
                        //$(selectParent).attr(type_s);

                        settings.change.call(selectParent3); // call event change
                    }
                });

                // handle search
                $(seachEl3).children('input').bind('keyup', function(e){
                    var value3 = $(this).val();
                    if( value3 ){
                        $(customSelect3).addClass('searchActive');
                        $(seachElOption3).each(function(){
                            if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                                // not item
                                $(this).fadeOut();
                            }else{
                                // have item
                                $(this).fadeIn();
                            }
                        })
                    }else{
                        $(customSelect3).removeClass('searchActive');
                        $(seachElOption3).fadeIn();
                    }
                })

            });
        };
        $(document).click(function(){
            if(elActive3 != ''){
                $(elActive3).removeClass('onCF');
                $(elActive3).children().find('.icon-arrow-down').removeClass('arrow-rotate');
            }
        })
    }( jQuery ));

    $(function(){
        $( ".preorder-effect" ).selectCF3({
            color: "#FFF",
            backgroundColor: "#663052",

            change: function () {
                var value = $(this).val();
                var text = $(this).children('option:selected').html();
                $(this).next().next('.select_option_dms').val(text);
                // event_change.html(value+' : '+text);


            }

        });

    });







    // SELECT OPTIONS
    (function ( $ ) {
        var elActive = '';
        $.fn.selectCF = function( options ) {

            // option
            var settings = $.extend({

                change: function( ){ }, // event change
            }, options );

            return this.each(function(){

                var selectParent = $(this);
                list = [],
                    html = '';


                $(selectParent).hide();
                if( $(selectParent).children('option').length == 0 ){ return; }
                $(selectParent).children('option').each(function(ndx){
                    if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
                    list.push({
                        value: $(this).attr('value'),
                        text: $(this).text(),
                        selected: s,
                    });

                });

                // style

                html += "<ul class='selectCF'>";
                html += 	"<li class='select'>";
                html +=         "<div class='titleCF select-input'>"+title+"</div>";
                html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#down-arrow'></use></svg></div>";
                html += 		"<ul class='select-options'>";
                $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                    html += 			"<li value='"+v.value+"' class='"+s+"'>"+v.text+"</li>";});
                html += 		"</ul>";
                html += 	"</li>";
                html += "</ul>";


                $(selectParent).after(html);
                var customSelect = $(this).next('ul.selectCF'); // add Html
                var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
                var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
                var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');


                // handle active select
                $(customSelect).unbind('click').bind('click',function(e){
                    e.stopPropagation();
                    if($(this).hasClass('onCF')){
                        elActive = '';
                        $(this).removeClass('onCF');
                        $('.my-favorit-sort-wrap--wrapper').removeClass('active');
                        $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(this).removeClass('searchActive'); $(seachElInput).val('');
                        $(seachElOption).show();
                    }else{
                        if(elActive != ''){
                            $(elActive).removeClass('onCF');
                            $('.my-favorit-sort-wrap--wrapper').removeClass('active');
                            $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                            $(seachElOption).show();
                        }
                        elActive = $(this);
                        $(this).addClass('onCF');
                        $('.my-favorit-sort-wrap--wrapper').addClass('active');
                        $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                        $(seachEl).children('input').focus();
                    }
                });

                // handle choose option
                var optionSelect = $(customSelect).children('li').children('ul').children('li');
                $(optionSelect).bind('click', function(e){
                    var value = $(this).attr('value');
                    if( $(this).hasClass('selected') ){
                        //
                    }else{
                        $(optionSelect).removeClass('selected');
                        $(this).addClass('selected');
                        $(customSelect).children('li').children('.titleCF').html($(this).html());
                        $(selectParent).val(value);
                        settings.change.call(selectParent); // call event change
                    }
                });

                // handle search
                $(seachEl).children('input').bind('keyup', function(e){
                    var value = $(this).val();
                    if( value ){
                        $(customSelect).addClass('searchActive');
                        $(seachElOption).each(function(){
                            if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                                // not item
                                $(this).fadeOut();
                            }else{
                                // have item
                                $(this).fadeIn();
                            }
                        })
                    }else{
                        $(customSelect).removeClass('searchActive');
                        $(seachElOption).fadeIn();
                    }
                })

            });
        };
        $(document).click(function(){
            if(elActive != ''){

                $(elActive).removeClass('onCF');
                $('.my-favorit-sort-wrap--wrapper').removeClass('active');
                $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
            }
        })
    }( jQuery ));

    $(function(){
        $( ".test-catalog" ).selectCF({
            color: "#FFF",
            backgroundColor: "#663052",

            change: function () {
                var value = $(this).val();
                var text = $(this).children('option:selected').html();
                $(this).next().next('.select_option_dms').val(text);
                // event_change.html(value+' : '+text);


            }

        });

    });


    $('.lobarel-cream-tab').click(function () {
        var get_tab = $(this).attr('data-lobarel-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.lobarel-cream-content .' + get_tab).addClass('active').siblings().removeClass('active');

    });

    $('.header-bottom--attr__item-menu').click(function () {
        $('.menu-fixed').addClass('active');
        $('body').css('overflow-y','hidden');
    });

    (function($) {
        $.fn.swipeDetector = function(options) {
            // States: 0 - no swipe, 1 - swipe started, 2 - swipe released
            var swipeState = 0;
            // Coordinates when swipe started
            var startX = 0;
            var startY = 0;
            // Distance of swipe
            var pixelOffsetX = 0;
            var pixelOffsetY = 0;
            // Target element which should detect swipes.
            var swipeTarget = this;
            var defaultSettings = {
                // Amount of pixels, when swipe don't count.
                swipeThreshold: 70,
                // Flag that indicates that plugin should react only on touch events.
                // Not on mouse events too.
                useOnlyTouch: true
            };

            // Initializer
            (function init() {
                options = $.extend(defaultSettings, options);
                // Support touch and mouse as well.
                swipeTarget.on("mousedown touchmove", swipeStart);
                $("html").on("mouseup touchmove", swipeEnd);
                $("html").on("mousemove touchmove", swiping);
            })();

            function swipeStart(event) {
                if (options.useOnlyTouch && !event.originalEvent.touches) return;

                if (event.originalEvent.touches) event = event.originalEvent.touches[0];

                if (swipeState === 0) {
                    swipeState = 1;
                    startX = event.clientX;
                    startY = event.clientY;
                }
            }

            function swipeEnd(event) {
                if (swipeState === 2) {
                    swipeState = 0;

                    if (
                        Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
                        Math.abs(pixelOffsetX) > options.swipeThreshold
                    ) {
                        // Horizontal Swipe
                        if (pixelOffsetX < 0) {
                            swipeTarget.trigger($.Event("swipeLeft.sd"));
                            //console.log("Left");
                        } else {
                            swipeTarget.trigger($.Event("swipeRight.sd"));
                            //console.log("Right");
                        }
                    } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
                        // Vertical swipe
                        if (pixelOffsetY < 0) {
                            swipeTarget.trigger($.Event("swipeUp.sd"));
                            //console.log("Up");
                        } else {
                            swipeTarget.trigger($.Event("swipeDown.sd"));
                            //console.log("Down");
                        }
                    }
                }
            }

            function swiping(event) {
                // If swipe don't occuring, do nothing.
                if (swipeState !== 1) return;

                if (event.originalEvent.touches) {
                    event = event.originalEvent.touches[0];
                }

                var swipeOffsetX = event.clientX - startX;
                var swipeOffsetY = event.clientY - startY;


                if (
                    Math.abs(swipeOffsetX) > options.swipeThreshold ||
                    Math.abs(swipeOffsetY) > options.swipeThreshold
                ) {
                    swipeState = 2;
                    pixelOffsetX = swipeOffsetX;
                    pixelOffsetY = swipeOffsetY;

                }
            }

            return swipeTarget; // Return element available for chaining.
        };
    })(jQuery);


    $(".menu-fixed").swipeDetector().on("swipeLeft.sd", function(event) {
        if (event.type === "swipeLeft") {
            $('.menu-fixed').removeClass('active');
            $('body').css('overflow-y','scroll');
        } else if (event.type === "swipeRight") {
            message.text("Swipe Right");
        } else if (event.type === "swipeUp") {
            message.text("Swipe Up");
        } else if (event.type === "swipeDown") {
            message.text("Swipe Down");
        }
    });


    $('.header-bottom--attr__item--mobile').click(function () {
       $('.search-absolute').slideToggle(200);
    });


    $(document).click(function (e) {
        if (!$(e.target).closest(".header-bottom--attr__item--mobile,.search-absolute").length) {
            $('.search-absolute').slideUp(200);
        }
        e.stopPropagation();
    });

    $('.header-bottom-fixed--search').click(function () {
        $('.search-absolute--fixed-menu').slideToggle(200);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".header-bottom-fixed--search,.search-absolute--fixed-menu").length) {
            $('.search-absolute--fixed-menu').slideUp(200);
        }
        e.stopPropagation();
    });

    if($('#preorder_type-skin .select-options li').hasClass('selected')){
        $(this).addClass('active');
    }

        // Конвертер полигональных точек в % соотношение (SVG)
    //
    // "0.988 0.873 1 0.93 0.987 0.916 0.969 0.888 0.951 0.855 0.936 0.826 0.922 0.797 0.895 0.731 0.863 0.648 0.836 0.571 0.85 0.574 0.876 0.585 0.909 0.6 0.943 0.617 0.947 0.619 0.951 0.621 0.955 0.624 0.958 0.626 0.963 0.629 0.969 0.632 0.974 0.634 0.979 0.635 0.973 0.714 0.977 0.797 0.988 0.873"
    //     .split(' ')
    //     .map((p, i) => Math.round(Number(p) * 10000) / 100 + '%' + ((i % 2) ? ',' : ''))
    //     .join(' ');


});