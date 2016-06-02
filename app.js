$(document).ready(function() {
	$("h1").hover(function() {
		$(this).css('cursor', 'pointer');
	})
	$(this).click(function() {
		$("body").css('background-image', 'url("cupcakes.jpeg")');
		$("h1").css({
			'background-color' : 'rgba(208,85,255,.7)',
			'font-family' : 'cupcakes',
		});
		$("input[type=submit]").css({'background-color' : 'rgb(208,85,255)'});
		$("button").css({'background-color' : 'rgb(208,85,255)'});	
	})
	$(this).click(function() {
		$("body").css('background-image', 'url("donuts.jpg")');
		$("h1").css({
			'background-color' : 'rgba(62,130,255,.7)',
			'font-family' : 'donuts',
		});
		$("input[type=submit]").css({'background-color' : 'rgb(62,130,255)'});
		$("button").css({'background-color' : 'rgb(62,130,255)'});
	});
});