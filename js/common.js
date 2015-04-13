head.ready(function() {

// nav
(function () {
	var btnNav = $('.js-btn-nav'),
		nav = $('.js-nav');
	btnNav.on('click', function () {
		nav.toggle();
		return false;
	});
	nav.find('ul>li>a').on('click', function () {
		$(this).next().toggle();
		return false;
	});
}());

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
				slides: '.js-sl-item',
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

// story
(function () {
	var el = $('.js-story');
	if (el.length) {
		// height blocks
		el.each(function () {
			var elThis = $(this),
				elHeight = elThis.height();
			elThis.height(elHeight);
		});
		// scroll
		$(window).scroll(function () {
			var scrTop = $(document).scrollTop(),
				topValue = 170,
				counter = 70;
			el.each(function (i) {
				var elThis = $(this),
					elTop = elThis.offset().top - topValue,
					koef = 0;
					// koef = i * counter;
				if (scrTop >= elTop - koef) {
					elThis.addClass('is-fixed');
					elThis.find('>div').css('top', topValue + koef);
				}
				else {
					elThis.removeClass('is-fixed');
					elThis.find('>div').css('top', 'auto');
				}
			});
		});
	};
}());

// paralax
(function () {
	var bg = $('.js-bg');
	if (bg.length) {
		var bgTop = bg.offset().top,
			content = $('.js-content'),
			contentHeight = content.height(),
			padding = 100;
		bg.height(contentHeight + padding);
		$(window).scroll(function () {
			var scrTop = $(document).scrollTop(),
				currentPos = scrTop/2;
			bg.css('background-position', '50% -'+currentPos+'px')
		});
	};
}());

	
});