/**
 * Created by Dreamer on 4/21/2017.
 */
//jQuery to collapse the navbar on scroll

$(document).ready(function () {
    

    
    
    $(window).scroll(function() {
        
        
        if($(window).scrollTop() < 80){
            $('.navbar').css(
                {
                    'margin-top':'-100px',
                    'opacity':'0'
                }
            )
        }else{
            $('.navbar').css(
                {
                    'margin-top':'0',
                    'opacity':'1'
                }
            )
        }

        if ($(".navbar-custom").offset().top > 80) {
            $(".navbar-fixed-top").addClass("top-nav-collapse").addClass("navbar-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse").removeClass("navbar-collapse");
        }
        
    });
    
    $('.scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    $('.navbar-custom  li a').click(function(){

        'use strict';

        $('.navbar-custom  li a').parent().removeClass("active");

        $(this).parent().addClass("active");

    });

    
    $('.bxSlider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50

    });
    
    $('.counter-num').counterUp({
        delay:15,
        time:1500
    });

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
    
});




