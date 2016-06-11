$(document).ready(function() {
	
	$("form#intro-question").submit(function(event) {
		event.preventDefault();
		if ($("#outside-yes").is(':checked') === true) {
			$(".intro-question").hide();
			$(".survey").show();
		}
		else {
			$(".intro-question").hide();
			$(".us-only").show();
		}
	});
	
	$("form#survey").submit(function() {
		if ($("#world1").is(':checked') === true) {
			$(".survey").hide(".survey");
		}



		var weather1 = $("#weather1").is(':checked');
		var weather2 = $("#weather2").is(':checked');
		var weather3 = $("#weather3").is(':checked');

	});

});