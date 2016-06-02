$(document).ready(function() {
	/*$("h1").hover(function() {
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
	*/
	
	//use css to show mouse hovering over submit button

	$("input[type=submit").mouseenter(function() {
		$(this).css({
			'cursor', 'pointer',
			'background-color' : 'rgb(232,70,85)',
		});
	})
	.mouseleave(function () {
		$(this).css({
			'cursor', 'inital',
			'background-color' : 'inital',
		});
	});

	//add list item after userInput and pressing submit

	document.getElementById("add").onclick = function() {
		var img = <img src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Trash_Can-512.png">
		var text = document.getElementById("item").value;
		var li = img + "<li>" + text + "</li>";
		document.getElementById("list").appendChild(li);
	};

	//delete list item by clicking on trash icon

	$("img").hover(function()	{
		$(this).css('cursor', 'pointer',);
	})
	.click(function() {
		//remove <li> below
		$("li").remove();
	});

	//check list items on and off using strikethrough by clicking on them

	$("li").toggle(function() {
		$(this).css('text-decoration' : 'line-through');
	})
});