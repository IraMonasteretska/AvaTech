
				
$( document ).ready(function() {
    console.log( "ready!" );
    var player = document.querySelector('.about__video');

    var video = document.querySelector('#about_video');
    var playBtn = document.querySelector('.about__video-play');
    // var fullscreenBtn =document.querySelector('.fullscreen'); 


    function togglePlay() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();	
        }
        playBtn.classList.toggle('paused');
        $('.about__video-play').fadeToggle(100)
    }
    function launchIntoFullscreen(element) {
        if(element.requestFullscreen) {
          element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
      function exitFullscreen() {
        if(document.exitFullscreen) {
          document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }

    var fullscreen = false;
    function toggleFullscreen() {
        fullscreen ? exitFullscreen() : launchIntoFullscreen(player)
        fullscreen = !fullscreen;
    }

    if (player) {
        playBtn.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);
    // fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    

    
    $('.burger-menu').on('click', function(){
        $('.header__menu-wrap').toggleClass('active')
        $('body').toggleClass('hidden-scroll')
        $('html').toggleClass('hidden-scroll')
        $(this).toggleClass('active')

    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
          $(".header__wrapper").addClass("fixed");
        } else {
          $(".header__wrapper").removeClass("fixed");
        }
    });

    $(".top-btn").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()>400) {
            $('.top-btn').fadeIn();
        }
        else {
            $('.top-btn').fadeOut();
        }
    });

    $(".scrol-down").on("click", function (event) {
        event.preventDefault();
    
        var id = $(this).attr("href"),
          top = $(id).offset().top - 100;
    
        $("body,html").animate({ scrollTop: top }, 1000);
    });

    $('.nice__select').niceSelect()

    $('#contacts_select').on('change', function () {
        let active = $(this).val();
        $('.footer__contact-list').removeClass('active')
        $('.footer__contact-list[data-list="'+ active +'"]').addClass('active')
        console.log(active);
    })

    var aboutStatistics = $('.about__statistics')
    function counter () {
        var statisticsCount = 0;

        $(window).scroll(function() {
            var oTop = $('.about__statistics').offset().top - window.innerHeight;
            if (statisticsCount ==0 && $(window).scrollTop() > oTop) { 
                $('.count').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    
                    $({ countNum: $this.text()}).animate({
                          countNum: countTo
                    },
                  
                    {
                        duration: 2000,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });  
                    statisticsCount = 1;
                });
            }
    
        })
    }
    if (aboutStatistics.length) {
        counter()
    }

    // aos animation
    AOS.init({
        disable: function () {
            var maxWidth = 1025;
            return window.innerWidth < maxWidth;
        }
    });

    $('.accordeon-item__content:first').slideDown()

    $(".accordeon-item__prev").bind("click", function() {
        if (window.matchMedia("(max-width: 991px)").matches) {
            if ($(this).parent().hasClass("true")) {
                $(this).parent().find('.accordeon-item__content').slideUp()
                $(this).parent().removeClass("true");
                $(this).parent().removeClass("active");
            } else {
                $('.accordeon-item__content').slideUp()
                $(this).parent().find('.accordeon-item__content').slideToggle()
                $(".accordeon-item").removeClass("active true");
                $(this).parent().addClass("active true");
            }
        } else {
            $(".accordeon-item").removeClass("active");
            $(this).parent().addClass("active");
        }
    });

    $('.more-btn').on('click', function () {
        $(this).parent().fadeOut();
        $('.projects-item__wrap').fadeIn()
    })

    $('.intro-bg-slider').slick({
        arrows: false,
        fade: true,
        dots: true,
        appendDots:$(".slick-navigation"),
        infinite: false,

        // autoplay:true,
        // autoplaySpeed:5000,
        asNavFor: ".swiper-wrapper",
    })

    $('.swiper-wrapper').slick({
        // adaptiveHeight: true
        // dots: true,
        infinite: false,
        // autoplay:true,
        // autoplaySpeed:5000,
        prevArrow: $('.slick-rev-prev'),
        nextArrow: $('.slick-rev-next'),
        asNavFor: ".intro-bg-slider",
    })
    // function resizeSwiper() {
    //     $('.swiper-container').height($('.block-accessories__text').height())
    // }
    // var swiper = new Swiper(".reviews-slider", {
    //     slidesPerView: 1,
    //     // autoHeight: true,
       
    //     // calculateHeight:true,
       
    //     // spaceBetween: 30,
    //     loop: true,
    //     // autoplay: true,
    //     // pagination: {
    //     //     el: ".swiper-pagination",
    //     //     clickable: true,
    //     // },
    //     // navigation: {
    //     //     nextEl: ".swiper-button-next",
    //     //     prevEl: ".swiper-button-prev",
    //     // },
    // });


    $('.block-accessories__more .expand').on('click',function(e){
        e.preventDefault();
        
        var c = $(this).parent().prev();
        $(this).parents('.reviews-item').addClass('open')

        var h = c.prop('scrollHeight') ;
        console.log(h);
    
        c.animate({'maxHeight':h},function () {
            $(this).addClass('block-accessories__text--open')
        }, function () {
        //     $('.reviews-slider').slick("setPosition")
        //     $('.reviews-slider').slick('resize')
        //   console.log('open');
        window.dispatchEvent(new Event('resize'));
        
        });
        $(this).hide()
        $(this).next().show()
       
    });

    $('.block-accessories__more .collapse').on('click',function(e){
        e.preventDefault();
        $(this).parents('.reviews-item').removeClass('open')
        var c = $(this).parent().prev();
        var h = 60;
        c.animate({'maxHeight':h},function () {
            $(this).removeClass('block-accessories__text--open')
            
        }, function () {
            // $('.reviews-slider').slick("setPosition")
            // $('.reviews-slider').slick('resize')
            // console.log('close');
        window.dispatchEvent(new Event('resize'));
     
          
        });
        $(this).hide()
        $(this).prev().show()
        
    });



    $('.about-intro-slider').slick({
        arrows: false,
        fade: true,
        dots: true,
        appendDots:$(".slick-navigation"),
        autoplay:true,
        autoplaySpeed:5000,
    })

    $('.solution-intro-slider').slick({
        prevArrow: $('.solution-slider-prev'),
        nextArrow: $('.solution-slider-next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplaySpeed:5000,
        asNavFor: ".solution-intro-slider_nav",
    })
    $('.solution-intro-slider_nav').slick({
        arrows: false,
        slidesToShow: 4,
        dots: false,
        autoplaySpeed:5000,
        asNavFor: ".solution-intro-slider",
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
        ]

    })


    $('.projects__items_slider').slick({
        prevArrow: $('.projects-slider-prev'),
        nextArrow: $('.projects-slider-next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        // autoplaySpeed:5000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    })
});