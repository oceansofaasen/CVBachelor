$(function(){

	//HTML objekter

	//var $paper;

	var init = function() {

		var setHTMLObjects = function() {
			$paper = $("#paper");
		}

		var setEvents = function() {
			$("#paper").on("click", function() {
				alert("hei");
				 /*$(this).attr("src", "../pics/lapp_open.gif");*/
			});
		}
	}(); //end init

});