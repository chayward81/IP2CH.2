var exitApp  = function(question1) {
	if (question1 === "Yes") {
		return true;
	} else {
		return false;
	}
};

var geography = function(question2, question3) {
	if(question2 === "hot" || question3 === "tropics" && question2 !== "cold" && question3 !== "arctic") {
		return "bali";
	} else if(question2 === "mild" || question3 === "europe" && question2 !== "hot" && question3 !== "tropics") {
		return "edinburgh";
	} else if(question2 === "cold" || question3 === "arctic" && question2 !== "hot" && question3 !== "tropics") {
		return "siberia";
	}
};


$(document).ready(function() {
	$("form#survey").submit(function(event) {
		event.preventDefault();
		var question1 = $("#outside").val();
		var question2 = $("#weather").val();
		var question3 = $("#world").val();
		var q1Res = exitApp(question1);

		if (q1Res === false) {
			$(".survey").hide();
			$("#header").hide();
			$(".us-only").show();
		} else if(q1Res === true) {
			var destRes = geography(question2, question3);
			if (destRes === "bali") {
				$(".survey").hide();
				$("#header").hide();
				$(".dest1").show();
			} else if(destRes === "edinburgh") {
				$(".survey").hide();
				$("#header").hide();
				$(".dest2").show();
			} else if(destRes === "siberia") {
				$(".survey").hide();
				$("#header").hide();
				$(".dest3").show();
		  }
		}
	});
});
