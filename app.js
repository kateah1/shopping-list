$(document).ready(function() {
	$("h1").hover(function() {
		$(this).css('cursor', 'pointer');
	})
	.click(function() {
		$("body").css('background-image', 'url("images/cupcakes.jpeg")');
		$("h1").css({
			'background-color' : 'rgba(208,85,255,.7)',
			'font-family' : 'cupcakes',
		});
		$("input[type=submit]").css({'background-color' : 'rgb(208,85,255)'});
		$("button").css({'background-color' : 'rgb(208,85,255)'});	
	})
	.click(function() {
		$("body").css('background-image', 'url("images/donuts.jpg")');
		$("h1").css({
			'background-color' : 'rgba(62,130,255,.7)',
			'font-family' : 'donuts',
		});
		$("input[type=submit]").css({'background-color' : 'rgb(62,130,255)'});
		$("button").css({'background-color' : 'rgb(62,130,255)'});
	});
	
	/*$("input[type=submit").hover(function() {
		$(this).css('cursor', 'pointer');
	})
	.click(function() {
		$("ul").append("<li> + item + </li>");
	})*/

});