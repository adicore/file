;(function($){
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.sticky_nav').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll){
                    $(".sticky_nav").addClass("navbar_fixed");
                } else {
                    $(".sticky_nav").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    function active_dropdown() {
        if ($(window).width() < 992) {
            $('.menu li.submenu > a').on('click',function(event){
                event.preventDefault()
                $(this).parent().find('ul').first().slideToggle(700);
                $(this).parent().siblings().find('ul').hide(700);
            });
        }
    }
    active_dropdown();
    
    // 5. fullPage
    if ($('#wavescroll').length > 0) {
        $("#wavescroll").fullpage({
            navigation: true,
            navigationPosition: "right",
            autoScrolling: true,
            scrollBar: false,
            scrollOverflow: true,
            animateAnchor: true,
            css3: true,
            verticalCentered: true,
            afterResponsive: function (isResponsive) {},
            afterLoad: function(anchorLink, index){
		    	if (index == 6){
		            $('.header_area, .full_footer').addClass('content-black');
		            $('#pp-nav').removeClass('white');
		    	}
		    	else{
	            	$('.header_area, .full_footer').removeClass('content-black');
	            	$('#pp-nav').addClass('white');
	            }  
  			}
        });
        $('#moveDown').click(function() {
            $.fn.fullpage.moveSectionDown();
        });
        $('#moveUp').click(function() {
            $.fn.fullpage.moveSectionUp();
        });
    }
    
    /*=============================================== 
	       Parallax Init
	  ================================================*/
	if ($('#wavescroll,.home_three').length > 0 ) {
        $('#wavescroll,.home_three').parallax({
            scalarX: 10.0,
            scalarY: 0.0,
        }); 
	}
    
    function parallax(){
        if($(".parallaxie").length){
            $('.parallaxie').parallaxie({
                speed: 0.5,
            });
        }
    }
    parallax();
    
    
    if ($('.testimonial_slider').length) {
        $('.testimonial_slider').slick({
            autoplay: true,
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 1000,
            speed: 1000,
            dots: false,
            centerMode: true,
            vertical: true,
            arrows: false,
            responsive: [
                 {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    
    if ($('.portfolio_info_slider,.pr_details_slider_two').length) {
        $('.portfolio_info_slider,.pr_details_slider_two').slick({
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            speed: 1000,
            dots: false,
            arrows: true,
            prevArrow: ('.prev'),
            nextArrow: ('.next'),
        });
    }
    
    
    $(".archive_nav_item a").on('click', function () {
        event.preventDefault();
         var target = $(this).parent().children(".dropdown-menu");
         $(target).slideDown();
        $(this).parent().siblings().find('ul').slideUp(700);
     });
    
    /*---------gallery isotope js-----------*/
    function galleryMasonry(){
        if ( $('#gallery').length ){
            $('#gallery').imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                $("#gallery").isotope({
                    itemSelector: ".gallery_item",
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                // Add isotope click function
                $(".gallery_filter li").on('click',function(){
                    $(".gallery_filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#gallery").isotope({
                        filter: selector,
                        animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                    })
                    return false;
                })
            })
        }
    }
    galleryMasonry();
    
    // full screen side nav
    $(".burger_menu").on('click', function () {
        $('.hamburger_menu_wrepper').toggleClass("mySideBar");
        $(this).toggleClass("actives");
    });
    $(".close_icon").on('click', function () {
        $('.hamburger_menu_wrepper').removeClass("mySideBar");
        $('.close_icon').removeClass("actives");
    });
    
    $('.offcanfas_menu .dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
	});
	$('.offcanfas_menu .dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
	});
    
    /*==========  Header  ==========*/
    $('.offcanfas_menu>li,.header_footer').each(function(index) {
		index = (index + 2) * .2;
		index = index + 's';
		$(this).css('animation-delay', index);
	});
    
    /*--------------- End popup-js--------*/
    function popupGallery(){
        if($('.popup_youtube').length){
            $('.popup_youtube').magnificPopup({
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass:  'mfp-with-zoom mfp-img-mobile',
            });
        }
    }
    popupGallery();
    
})(jQuery)