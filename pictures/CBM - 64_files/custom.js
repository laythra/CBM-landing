$(document).ready(function() {
	
	$(window).scroll(function()
	{
		if ($('#mainNav').offset().top > 50)
		{
			$('.navbar').removeClass('trans');
			$('.navbar-brand').addClass('logo-color');
			$('.navbar a').addClass('logo-color');
			// $('.nav-link').addClass('item-color');
		}
		else
		{
			$('.navbar').addClass('trans');
			$('.navbar-brand').removeClass('logo-color');
			$('.navbar a').removeClass('logo-color');
			$('.nav-link').removeClass('item-color');
		}
	});

});