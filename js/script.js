$(document).ready(function() {
	
	initSlick();

	/*
	 * Slick Carousel
	 * http://kenwheeler.github.io/slick/
	*/
	function initSlick() {

		var $slick = $('#slick-home-slider');
		// var $bar = $('.slide-progbar');
		// var tick, percentTime, isPause;
		// var time = 7;
		
		$slick.slick({
			autoplay: true,
			autoplaySpeed: 7000,
			adaptiveHeight: false,
			draggable: false,
			prevArrow: '.slide-prev',
			nextArrow: '.slide-next',
		});

		// function startProgressBar() {

		// 	resetProgressBar();
		// 	percentTime = 0;
		// 	// isPause = false;
		// 	tick = setInterval(interval, 10);

		// }

		// function interval() {
			
		// 	if(isPause === false) {
		// 		percentTime += 1 / (time+0.1);
		// 		$bar.css({
		// 			width: percentTime+"%"
		// 		});

		// 		if(percentTime >= 100) {
		// 			$slick.slick('slickNext');
		// 			startProgressBar();	
		// 		}

		// 	}

		// }

		// function resetProgressBar() {
		// 	$bar.css({
		// 		width: 0+"%"
		// 	});
		// 	clearTimeout(tick);
		// }

		// startProgressBar();


		/*
		 * Start of slick items
		*/
		var $slickItems = $('.slick-items');
		
		$slickItems.slick({
			draggable: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.items-prev',
			nextArrow: '.items-next',
			responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 798,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
		});


		/*
		 * Start of slick instagram slider
		*/
		var $slickFeedItems = $('#slick-feed-items');

		$slickFeedItems.slick({
			draggable: false,
			slidesToShow: 6,
			slidesToScroll: 1,
			prevArrow: '.feed-items-prev',
			nextArrow: '.feed-items-next',
			responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 798,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
		});


		/*
		 * Start of slick single slider
		*/
		var $slickSingleSlider = $('#slider-single');

		$slickSingleSlider.slick({
			autoplay: true,
			autoplaySpeed: 7000,
			draggable: false,
			prevArrow: '.slide-prev',
			nextArrow: '.slide-next',
			adaptiveHeight: true,
		});


		/*
		 * Start of slick item inner slider
		 */
		var $slickItemInner = $('#slider-item-inner');
		var $slickItemInnerNav = $('#slider-item-inner-nav');

		$slickItemInner.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: false,
			draggable: false,
			prevArrow: '.slide-prev',
			nextArrow: '.slide-next',
			asNavFor: $slickItemInnerNav,
		});

		$slickItemInnerNav.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: $slickItemInner,
			dots: true,
			focusOnSelect: true,
		});
	}

});