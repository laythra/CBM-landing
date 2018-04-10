$(document).ready(function() {
	$('video').on('mouseenter',function() {
		$('.title').addClass('header-styling');
		$('.subtitle').addClass('header-styling');
	});
	$('video').on('mouseleave', function() {
		$('.title').removeClass('header-styling');
		$('.subtitle').removeClass('header-styling');
	});

	$(window).scroll(function()
	{
		if ($('#mainNav').offset().top > 50)
		{
			$('.navbar').removeClass('trans');
			$('.navbar-brand').addClass('logo-color');
			// $('.nav-link').addClass('item-color');
		}
		else
		{
			$('.navbar').addClass('trans');
			$('.navbar-brand').removeClass('logo-color');
			$('.nav-link').removeClass('item-color');
		}
	});

});