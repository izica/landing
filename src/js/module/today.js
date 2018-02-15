jQuery(document).ready(function($) {
    var calc = function(object){
        var coef_y = object.attr('data-parallax-y');
        var coef_window = $(window).scrollTop();
        var y = coef_y * 40 + coef_window * 0.05 - 60;
        object.css('transform', 'translate(0px, ' + y + 'px)');
    }
    $(".parallax").each(function(index, el) {
        calc($(this));
    });
    $(window).on('scroll', function(event) {
        $(".parallax").each(function(index, el) {
            calc($(this));
        });
    });
});
