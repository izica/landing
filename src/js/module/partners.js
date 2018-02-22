jQuery(document).ready(function($) {
    var calc = function(object){
        var window_width = $(window).width();
        var coef_y = 1;
        var coef_window = $(window).scrollTop();

        var coef_window_width = 540;

        if(window_width < 1200){
            coef_window_width = 590;
        }

        if(window_width < 980){
            coef_window_width = 765;
        }

        if(window_width < 640){
            coef_window_width = 770;
        }

        var y = (coef_y * 40 + coef_window * 0.05 - coef_window_width) * 3;
        object.css('transform', 'translate(0px, ' + y + 'px)');
    }
    calc($('.partners-parallax__bg'));
    $(window).on('scroll', function(event) {
        calc($('.partners-parallax__bg'));
    });
    $(window).on('resize', function(event) {
        calc($('.partners-parallax__bg'));
    });
});
