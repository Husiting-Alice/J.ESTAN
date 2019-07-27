//屏幕大小改变时设置contentBox的top
function setConTop(){	
	var cWidth = document.body.clientWidth;
	if(cWidth <= 768){				
			var fullScreenHeight = $(".fullscreen").height();
			$(".contentBox").css("top",(fullScreenHeight+20)+"px");				
	}else{
		$(".contentBox").css("top",900+"px");
	}
}
	setConTop();

$(window).resize(function () { 
	setConTop();
});
