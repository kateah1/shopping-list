$(document).ready(function() {

	$("input[type=submit]").mouseenter(function () {
		$(this).css({
			"cursor" : "pointer",
			"background-color" : "#8ABAFF"
		});
	})	
	.mouseleave(function () {
		$(this).css({
			"cursor" : "default",
			"background-color" : "rgb(62,130,255)"
		});
	});

	$("button").mouseenter(function () {
		$(this).css({
			"cursor" : "pointer",
			"background-color" : "#8ABAFF"
		});
	})	
	.mouseleave(function () {
		$(this).css({
			"cursor" : "default",
			"background-color" : "rgb(62,130,255)"
		});
	});

	$("li").mouseenter(function () {
		$(this).css({
			"cursor" : "pointer",
			"color" : "#545454"
		});
	})	
	.mouseleave(function () {
		$(this).css({
			"cursor" : "default",
			"color" : "#000"
		});
	});

	$("img").mouseenter(function () {
		$(this).css("cursor", "pointer");
	})	
	.mouseleave(function () {
		$(this).css("cursor", "default");
	});

//take text input val and add li to ul when click submit input

	$("input[type=submit]").click(function () {
		$("ul").append("<li>text</li>")
			var text = ("input[type=text]").val();
	});		

//toggle strikethrough when clicking on <li>

	$("li").click(function () {
		if($(this).css("text-decoration") === "none") {
			$(this).css("text-decoration", "line-through");
		}
		else {
			$(this).css("text-decoration", "none");
		}
	});

//delete li and trashcan icon when click on trashcan icon

	$("img").click(function () {
		$(this).parent().remove();
	});

//delete all <li> when click on button

	$("button").click(function () {
		$("li").remove();
	});


});
