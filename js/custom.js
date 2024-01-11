$(function() {
	/* Intro */
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/*** Portfolio details slider*/
	new Swiper('.portfolio-details-slider', {
		speed: 400,
		loop: true,
		// autoplay: {
		//   delay: 4000,
		//   disableOnInteraction: true
		// },
		pagination: {
		  el: '.swiper-pagination',
		  type: 'bullets',
		  clickable: true
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		
		  // And if we need scrollbar
		  scrollbar: {
			el: '.swiper-scrollbar',
		  },
	  });
	
	/* Features */
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	/* Experience */
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeIn');
		$('.skills-bar-container').addClass('animated fadeIn');
        $('.wp3-1').addClass('progress1-delay');
        $('.wp3-2').addClass('progress2-delay');
        $('.wp3-3').addClass('progress3-delay');
        $('.wp3-4').addClass('progress4-delay');
        $('.wp3-5').addClass('progress5-delay');
	}, {
		offset: '50%'
	});

	/* Resume Button */
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated bounceIn');
	}, {
		offset: '75%'
	});

	/* Portfolio */
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});

	/* Paper Plane */
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});


	// for preloader
	// setTimeout(function(){
	// 	$('body').addClass('loaded');
	// }, 2800);

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            // $(".navbar").addClass("navbar-shadow");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            // $(".navbar").removeClass("navbar-shadow");
        }
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $("#to-top").mouseover(function() {
        $("#to-top-copy").animate({opacity: "1"}, "slow");
    });
    $("#to-top").mouseout(function() {
        $("#to-top-copy").animate({opacity: "0"}, "slow");
    });

});


document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to open image when a slide is clicked
    swiper.on('click', function () {
        // Get the active slide index
        var activeIndex = swiper.activeIndex;
        
        // Get the corresponding slide element
        var activeSlide = swiper.slides[activeIndex];

        // Get the image source from the active slide
        var imageUrl = activeSlide.querySelector('img').src;

        // Open the image (replace this with your preferred method)
        openImageModal(imageUrl);
    });

    function openImageModal(imageUrl) {
        // Implement your logic to open the image modal or perform any desired action
        console.log('Open image modal for: ' + imageUrl);
        // Example: You can use a lightbox library or your custom modal implementation
        // For simplicity, we are logging the image URL to the console.
    }
});
