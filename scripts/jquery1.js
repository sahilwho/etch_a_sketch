$(document).ready(function(){
	for (var i = 0; i < 256; i++) {
		$("#container").append("<div style='border-bottom: 1px solid #959798; border-right: 1px solid #959798; height: 36.5px; width: 36.5px; display: inline-block; float: left;'></div>");
	}
	
	$(document).on("mouseenter", "div>div", function() {
    	$(this).css("background-color", "#959798");
   	});

	$(document).on("mouseleave", "div>div", function() {
    	 (this).css("background-color", "black");
	});

	$(document).on("click", "button", function(){
		squares = prompt("Enter the number of squares per row: ");
		$("div>div").remove();
		for(i = 0; i< squares*squares; i++){
			$("#container").append("<div style='border-bottom: 1px solid #959798; border-right: 1px solid #959798; display: inline-block; float: left;'></div>");
		}
		len = (600-squares)/squares;
		$("div>div").css("height", len);
		$("div>div").css("width", len);

	});

});