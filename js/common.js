head.ready(function() {

// nav
(function () {
	var btnNav = $('.js-btn-nav'),
		nav = $('.js-nav');
	btnNav.on('click', function () {
		if ($(window).width() <= 1024) {
			nav.toggle();
			return false;
		};
		alert();
	});
	nav.find('.nav__list>li>a').on('click', function () {
		if ($(window).width() <= 1024) {
			$(this).next().toggle();
			return false;
		}
	});
}());

// menu
(function () {
	var btnMenu = $('.js-btn-menu'),
		menu = $('.js-menu');
	btnMenu.on('click', function () {
		menu.toggle();
		return false;
	});
}());

// menu
(function () {
	function fixedColumn () {
		var wrap = $('.js-f-wrap');
		if (wrap.length) {
			var	wrapTop = wrap.offset().top,
				wrapHeight = wrap.height(),
				wrapWidth = wrap.width(),
				col = $('.js-f-col'),
				colHeight = col.outerHeight(),
				colWidth = col.width(),
				scrTop = $(window).scrollTop(),
				windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				marginTop = 159,
				marginCol = 10,
				marginLeft = -wrapWidth/2 + 15;
			wrap.css('position', 'relative');
			if (scrTop >= (wrapTop - marginTop) && (windowWidth > 1024)) {
				if (scrTop >= (wrapTop + wrapHeight - colHeight - marginTop)) {
					console.log('1');
					col.css({
						'position': 'absolute',
						'top': 'auto',
						'left': '50%',
						'bottom': 0,
						'width': colWidth,
						'margin-left': marginLeft
					});
				}
				else {
					col.css({
						'position': 'absolute',
						'top': scrTop - wrapTop + marginTop,
						'bottom': 'auto',
						'left': '50%',
						'width': colWidth,
						'margin-left': marginLeft
					});
				}
			}
			else {
				col.css({
					'position': 'relative',
					'top': 'auto',
					'left': 'auto',
					'bottom': 'auto',
					'width': 'auto',
					'margin-left': 0
				});
			}
		};
	}
	fixedColumn();
	$(window).scroll(function () {
		fixedColumn();
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
		var windowWidth = $(window).width();
		if (windowWidth > 1024) {
			var	btnGo = $('.js-story-go'),
				topValue = 170,
				counter = 40;
			// height blocks
			el.each(function () {
				var elThis = $(this),
					elHeight = elThis.height();
				elThis.height(elHeight);
			});
			// hash
			var hash = window.location.hash;
			if (hash) {
				// scroll to el
				var	hashEl = $(hash),
					index = hashEl.index(),
					koef = counter * index,
					top = hashEl.offset().top,
					pos = top - topValue - koef;
				$('html, body').animate({
					scrollTop: pos
				}, 700);
			};
			// click go
			btnGo.on('click', function () {
				var attr = $(this).attr('href'),
					attrEl = $(attr);
				// scroll to el
				var	top = attrEl.offset().top,
					index = attrEl.index(),
					koef = counter * index,
					top = attrEl.offset().top,
					pos = top - topValue - koef;
				$('html, body').animate({
					scrollTop: pos
				}, 700, function () {
					window.location.hash = attr;
				});
				return false;
			});
			// fixed blocks
			function fixedBlocks () {
				var scrTop = $(document).scrollTop();
				el.each(function (i) {
					var elThis = $(this),
						elTop = elThis.offset().top - topValue,
						koef = 0,
						koef = i * counter;
					if (scrTop >= elTop - koef) {
						elThis.addClass('is-fixed');
						elThis.find('>div:first-child').css('top', topValue + koef);
					}
					else {
						elThis.removeClass('is-fixed');
						elThis.find('>div:first-child').css('top', 'auto');
					}
				});
			}
			fixedBlocks();
			// scroll
			$(window).scroll(function () {
				fixedBlocks();
			});
		};
	};
}());

// paralax
(function () {
	var bg = $('.js-bg');
	if (bg.length) {
		function bgHeight () {
			var bgTop = bg.offset().top,
				content = $('.js-content'),
				contentHeight = content.height(),
				contentTop = content.offset().top,
				padding = 40;
			bg.height(contentTop - bgTop + contentHeight + padding);
		}
		bgHeight();
		$(window).resize(function () {
			bgHeight();
		});
		$(window).scroll(function () {
			var scrTop = $(document).scrollTop(),
				currentPos = scrTop/2;
			bg.css('background-position', '50% -'+currentPos+'px')
		});
	};
}());

	
});