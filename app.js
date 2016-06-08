$(document).ready(function() {

	$("#submit-button").mouseenter(function () {
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

	$("#clear-all").mouseenter(function () {
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

	$("#list").on('mouseenter', 'i', function () {
		$(this).css({
			"cursor" : "pointer",
			"color" : "#545454"
		});
	})	
	.on('mouseleave', 'i', function () {
		$(this).css({
			"cursor" : "default",
			"color" : "#000"
		});
	});

	$("#list").on('mouseenter', 'li', function () {
		$(this).css({
			"cursor" : "pointer",
			"color" : "#545454"
		});
	})	
	.on('mouseleave', 'li', function () {
		$(this).css({
			"cursor" : "default",
			"color" : "#000"
		});
	});

//take text input val and add li to ul when click submit input

	$("#submit-button").click(function () {
		$("#list").append("<li>" + $("#user-input").val() + "<i class='fa fa-trash-o' aria-hidden='true'></i></li>");
		$("#user-input").val('');
	});		

//toggle strikethrough when clicking on <li>

	$("#list").on('click', 'li', function () {
		if($(this).css("text-decoration") === "none") {
			$(this).css("text-decoration", "line-through");
		}
		else {
			$(this).css("text-decoration", "none");
		}
	});

//delete li and trashcan icon when click on trashcan icon

	$("#list").on('click', 'i', function () {
		$(this).parent().remove();
	});

//delete all <li> when click on button

	$("#clear-all").click(function () {
		$("li").remove();
	});


});
