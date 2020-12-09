$(document).ready(function () {

    var window_scroll = function() {

        if ($(window).width() < 768) {

            $('.cream-compare').addClass('lobarel-horizontal');
            $('.cream-compare-wrapper').addClass('lobarel-wrapper-sticky');
            $('.cream-compare-sticky').addClass('lobarel-sticky');
            $('.cream-compare-relative').addClass('lobarel-relative');
            $('.cream-compare-absolute').addClass('lobarel-absolute');

            var width_compare = $('.cream-compare-relative').width() + 280;
            var ww = parseInt(width_compare);
            $('.cream-compare-wrapper').attr('style','height:'+ ww +'px');

            $(function () {
                $(window).scroll(function () {
                    var wt = $(window).scrollTop(); // Пройденая высота скрол вниз - наверх
                    var w_w = $('#scroll').width();
                    var et = $('#scroll').offset().top; // Растояние от верха страницы до блока #scroll
                    var eh = $('#scroll').outerHeight(); // Высота окна #scroll

                    var wt_et = parseInt(wt - et);
                    if(wt < et){
                        var start = 0
                        $('.cream-compare-relative').attr('style','transform:translateX('+ start +'px)');
                    } else if(wt >= et) {
                        var move = wt_et
                        $('.cream-compare-relative').attr('style','transform:translateX('+ -move +'px)');
                        if (move > w_w){
                            var move2 = w_w
                            $('.cream-compare-relative').attr('style','transform:translateX('+ -move2 +'px)');
                        }

                    }
                });
            });


            $('.cream-compare2').addClass('lobarel-horizontal');
            $('.cream-compare-wrapper2').addClass('lobarel-wrapper-sticky');
            $('.cream-compare-sticky2').addClass('lobarel-sticky');
            $('.cream-compare-relative2').addClass('lobarel-relative');
            $('.cream-compare-absolute2').addClass('lobarel-absolute');

            var width_compare2 = $('.cream-compare-relative2').width() + 280;
            var ww2 = parseInt(width_compare2);
            $('.cream-compare-wrapper2').attr('style','height:'+ ww2 +'px');

            $(function () {
                $(window).scroll(function () {
                    var wt = $(window).scrollTop(); // Пройденая высота скрол вниз - наверх
                    var w_w = $('#scroll2').width();
                    var et = $('#scroll2').offset().top; // Растояние от верха страницы до блока #scroll
                    var eh = $('#scroll2').outerHeight(); // Высота окна #scroll

                    var wt_et = parseInt(wt - et);
                    if(wt < et){
                        var start = 0
                        $('.cream-compare-relative2').attr('style','transform:translateX('+ start +'px)');
                    } else if(wt >= et) {
                        var move = wt_et
                        $('.cream-compare-relative2').attr('style','transform:translateX('+ -move +'px)');
                        if (move > w_w){
                            var move2 = w_w
                            $('.cream-compare-relative2').attr('style','transform:translateX('+ -move2 +'px)');
                        }

                    }
                });
            });




            // $(function () {
            //     var scroller = {};
            //     var box1 = document.querySelectorAll('.lobarel-relative');
            //
            //     var startx = 0;
            //     var dist = 0;
            //
            //
            //     scroller.e = document.querySelectorAll(".lobarel-relative");
            //
            //     if (scroller.e.addEventListener) {
            //         scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
            //         //scroller.e.addEventListener('touchstart', turn_start, false); // mobile
            //         scroller.e.addEventListener('touchmove', MouseWheelHandler, false); // mobile
            //         //scroller.e.addEventListener('touchend', MouseWheelHandler, false); // mobile
            //         //scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
            //     } else scroller.e.attachEvent("onmousemove", MouseWheelHandler);
            //
            //
            //     // var touch_position;
            //     // function turn_start(e) {
            //     //     touch_position = e.touches[0].clientY;
            //     //
            //     // }
            //
            //     function MouseWheelHandler(e) {
            //         var e = window.event || e;
            //         e.preventDefault();
            //
            //         var box_Y1 =  0;
            //         var box_Y2 =  startx;
            //         if (box_Y1 > box_Y2){
            //             deltaq = 30;
            //         } else  {
            //             deltaq = -30;
            //
            //         }
            //         // Прокрутка по 30 пикселей
            //         //var delta =  20 * (Math.max(-1, Math.min(1, ( e.deltaY || e.wheelDelta || -e.detail))));
            //         var pst = $('#scroll').scrollLeft() + deltaq;
            //         console.log(deltaq);
            //         var div = $('#scroll'),
            //             div_sh = $(div)[0].scrollWidth,
            //             div_h = div.width();
            //
            //         $(div).scroll(function(){
            //             if (pst >= div_sh - div_h) {
            //                 //console.log('прокрутил до конца');
            //                 $('#scroll').css('z-index','-1');
            //             }
            //             else {
            //                 //console.log('не прокрутил до конца');
            //                 $('#scroll').css('z-index','20');
            //             }
            //
            //             if (pst <= 0) {
            //                 //console.log('прокрутил в начало');
            //                 $('#scroll').css('z-index','-1');
            //
            //             }
            //
            //         });
            //
            //         if (pst < 0) {
            //             pst = 0;
            //         } else if (pst > $('.box-wrap').width()) {
            //             pst = $('.box-wrap').width();
            //         }
            //         $('#scroll').scrollLeft(pst);
            //         return false;
            //
            //
            //     }
            //
            // });


        }
    };
    window_scroll();
    $(window).resize(window_scroll);


    $(window).scroll(function() {
        var cream_top = $('.vs-cream').offset().top;
        var cream_height = $('.vs-cream').outerHeight();
        if ($(window).scrollTop() > (cream_top - cream_height) )
        {
            $('.vs-cream-hover').fadeIn(200);
        } else {
            $('.vs-cream-hover').fadeOut(200);
        }
    });

});