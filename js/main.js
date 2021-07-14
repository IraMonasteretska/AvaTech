
				
$( document ).ready(function() {
    console.log( "ready!" );

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
});