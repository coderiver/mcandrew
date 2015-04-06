head.ready(function() {

// slider
(function () {
	var sl = $('.js-sl');
	if (sl.length) {
		sl.each(function () {
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: false,
				slides: '.sl__item',
				infinite: true,
				speed: 500,
				fade: true,
				cssEase: 'linear',
				swipe: false,
				pauseOnHover: false
			});
		});
	};
}());	

// slider with arrows
(function () {
	var sl = $('.js-slider');
	if (sl.length) {
		sl.each(function () {
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				slides: '.slider__item'
			});
		});
	};
}());	

// select
(function () {
	var el = $('.js-select');
	if (el.length) {
		el.each(function () {
			el.find('select').on('change', function () {
			    var select = $(this),
			    	value = $(this).val();
			    select.prev().html(value);
			    select.parent().addClass('is-active');
			});
		});
	};
}());
	
});