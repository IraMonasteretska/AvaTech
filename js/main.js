
				
$( document ).ready(function() {
    console.log( "ready!" );

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
    counter()

    // aos animation
    AOS.init({
        disable: function () {
            var maxWidth = 1025;
            return window.innerWidth < maxWidth;
        }
    });

    $(".accordeon-item").bind("click", function() {
        $(".accordeon-item").removeClass("active");
        $(this).addClass("active");
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
        autoplay:true,
        autoplaySpeed:5000,
    })

    $('.swiper-wrapper').slick({
        // adaptiveHeight: true
        // dots: true,
        infinite: false,
        prevArrow: $('.slick-rev-prev'),
        nextArrow: $('.slick-rev-next'),
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


    // $('.block-accessories__more .expand').on('click',function(e){
    //     e.preventDefault();
    //     var c =  $(this).parent().prev();;
    //     var h = c.prop('scrollHeight') ;
    //     c.addClass('block-accessories__text--open')
      
    //         $('.block-accessories__more .expand, .block-accessories__more .collapse').toggle();
        
    //         $('.reviews-slider').slick("setPosition")
    //         $('.reviews-slider').slick('resize')
     
    //     // $('.reviews-slider').slick("setPosition")
    //     // $(window).resize()
    //     // $('.reviews-slider').slick('resize')
    // });

    // $('.block-accessories__more .collapse').on('click',function(e){
    //     e.preventDefault();
    //     var c = $(this).parent().prev();;
    //     var h = 75;
    //     c.removeClass('block-accessories__text--open')
          
    //     $('.block-accessories__more .expand, .block-accessories__more .collapse').toggle();
    
    //     $('.reviews-slider').slick("setPosition")
    //     $('.reviews-slider').slick('resize')
      
        


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
        var h = 75;
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
});