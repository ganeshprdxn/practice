(function ($) {
	$('.hamburger').on('click', function() {
		var ham = $(this).siblings('div').children('.menu');
		ham.slideToggle('slow');
	});
	$('.menu-item').on('click', function() {
		$(this).children('a').addClass('active');
	});



})(jQuery);