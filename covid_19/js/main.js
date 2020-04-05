(function($) {
    "use strict";

    /*----------------------------
            Counrtry List Scrollbar Active
           ------------------------------*/
    $(".country-list").niceScroll({ cursorcolor: "#1c18ec" });


    /*----------------------------
       		Mobile menu Active
		   ------------------------------*/
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });


    /*----------------------------
            Sticky Header Active
           ------------------------------*/
    $(window).on('scroll',function(){
        if ($(window).scrollTop() >= 500) {
            $('.header-area').addClass('fixed');
        }
        else {
            $('.header-area').removeClass('fixed');
        }
    });

    $(".js-modal-btn").modalVideo();

})(jQuery);
