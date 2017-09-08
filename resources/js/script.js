$(document).ready(function () {

    //Sticky navigation
    $('.home').waypoint(function (direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });



    $(".navbar-nav li").on("click", function(){
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active");
    });
    });
