jQuery(document).ready(function($) {
    if($(window).scrollTop() > 1000){
        $(".arrow-scrolltop").addClass('visible')
    }

    $(window).on('scroll', function(event) {
        if($(window).scrollTop() > 1000){
            $(".arrow-scrolltop").addClass('visible')
        }else{
            $(".arrow-scrolltop").removeClass('visible')
        }
    });

    $(".arrow-scrolltop").click(function(event) {
        console.log('sss');
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 500, 'swing', function() {
           // alert("Finished animating");
        });
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
