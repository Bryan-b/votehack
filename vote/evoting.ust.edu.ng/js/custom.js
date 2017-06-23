/*
Author       : UX-STATION.
Template Name: Matmax - App Landing Page
Version      : 1.0
*/

(function($) {
    'use strict';

        jQuery(window).on('load', function(e) {
            var winwidth = jQuery(window).width();
            if (winwidth > 767) {

                var offer = jQuery('.offer_img').height();
                jQuery('.offer_box').height(offer);

                var bheight = jQuery('header').height();
                var bannerh = jQuery('#banner').height();
                jQuery('.banner_left').height(bannerh);

                var contact_h = jQuery('.contact_form').height();
                jQuery('.contact_address').height(contact_h);

                //alert(bheight);

                // Defining a function to set size for #hero
                function fullscreen() {
                    jQuery('#banner').css({
                        width: jQuery(window).width(),
                        height: jQuery(window).height()
                    });
                }

                fullscreen();

                // Run the function in case of window resize
                jQuery(window).on('resize', function(e) {
                    fullscreen();
                });



                //For sticky Header
                jQuery(window).on('scroll', function(e) {
                    if (jQuery(this).scrollTop() > 1) {
                        jQuery('header').addClass("sticky");
                    } else {
                        jQuery('header').removeClass("sticky");
                    }
                });

            }
        });

        // WOW js
        new WOW().init();

        jQuery(window).on('load', function(e) {
            //Preloader
            setTimeout(function() {
                jQuery('.preloader').fadeOut('slow', function() {});
            }, 2000);

        });

        //Video Popup jS
        jQuery("a#single_image").fancybox();
        jQuery("a#inline").fancybox({
            'hideOnContentClick': true
        });

        /* Apply fancybox to multiple items */
        jQuery('.fancyimg').fancybox();
        jQuery('.fancyvideo').fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            helpers: {
                media: {}
            }
        });

        jQuery("a.group").fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200,
            'overlayShow': false
        });



        //Back To Top
        jQuery(window).on('scroll', function(e) {
            if (jQuery(this).scrollTop() > 400) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        jQuery('#back-top').on('click', function(e) {
            jQuery('#back-top').tooltip('hide');
            jQuery('body,html').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });

        // Testmonial Slider

        jQuery("#review_slide").lightSlider({
            item: 1,
            pager: false,
            auto: true,
            loop: true,
        });

        // Brand Carousel Home Page
        jQuery("#team_slide").lightSlider({
            item: 4,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 20,

            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////

            speed: 400, //ms'
            auto: true,
            loop: false,
            slideEndAnimation: true,
            pause: 2000,

            keyPress: true,
            controls: false,
            prevHtml: '<i class="fa fa-angle-left"></i>',
            nextHtml: '<i class="fa fa-angle-right"></i>',

            rtl: false,
            adaptiveHeight: false,

            vertical: false,
            verticalHeight: 500,
            vThumbWidth: 100,

            thumbItem: 10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',

            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        item: 4,
                        slideMove: 1,
                        slideMargin: 6,
                    }
                }, {
                    breakpoint: 980,
                    settings: {
                        item: 3,
                        slideMove: 1,
                        slideMargin: 6,
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        item: 3,
                        slideMove: 1,
                        slideMargin: 6,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        item: 2,
                        slideMove: 1,
                        slideMargin: 6,
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        item: 1,
                        slideMove: 1
                    }
                }
            ],

            onBeforeStart: function(el) {},
            onSliderLoad: function(el) {},
            onBeforeSlide: function(el) {},
            onAfterSlide: function(el) {},
            onBeforeNextSlide: function(el) {},
            onBeforePrevSlide: function(el) {}
        });


        //Smoth Scroll
        jQuery(function() {
            jQuery('a[href*="#"]:not([href="#"])').on('click', function(e) {
                var headheight = jQuery("header").height();
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = jQuery(this.hash);
                    target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        jQuery('html, body').animate({
                            scrollTop: target.offset().top - 65
                        }, 1000);
                        return false;
                    }
                }
            });
        });

})(jQuery);
