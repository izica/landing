jQuery(document).ready(function($) {
    var calc = function(object){
        var window_width = $(window).width();
        var coef_y = 1;
        var coef_window = $(window).scrollTop();

        var coef_window_width = 420;

        if(window_width < 1200){
            coef_window_width = 465;
        }

        if(window_width < 980){
            coef_window_width = 610;
        }

        var y = (coef_y * 40 + coef_window * 0.05 - coef_window_width) * 6;
        object.css('transform', 'translate(0px, ' + y + 'px)');
    }
    calc($('.mass-media-parallax__bg'));
    $(window).on('scroll', function(event) {
        calc($('.mass-media-parallax__bg'));
    });
    $(window).on('resize', function(event) {
        calc($('.mass-media-parallax__bg'));
    });
});
