function showSec(){
	var cw = document.body.clientWidth;
	if(cw > 768){	
		$('.secDiv').css("display","none");		
	
	}else{
		$('#story').click(function(){
			$('#storySec').slideToggle();
		});
		$('#contact').click(function(){
			$('#contactSec').slideToggle();
		});
	}
	
}

showSec();
$(window).resize(function () { 
	showSec();
});
