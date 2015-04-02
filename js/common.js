head.ready(function() {

// select
(function () {
	var el = $('.js-select');
	if (el.length) {
		el.each(function () {
			el.find('select').on('change', function () {
		    var thisEl = $(this),
		    	value = $(this).val();
		    thisEl.prev().html(value);
		});
		});
	};
}());
	
});