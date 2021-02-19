
var myText = $(".my-txt");

var openLink = $("#open");
var closeLink = $("#close");





function openCloseText(status) {
	if ( status == 1 ) {
		
		myText.slideDown(1000);
		
		
	}
	else{
		myText.slideUp(1000);
	}
}