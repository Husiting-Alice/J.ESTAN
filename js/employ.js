var currentDeg = 0;
$('.employClickBox').on('click',function(){

	var index = $('.employClickBox').index(this);
//	console.log(index);
//	console.log($(this).children().eq(1))
	
//	详情显示隐藏
	$('.employDetail').eq(index).slideToggle(500);

	
	
//	Uncaught TypeError: $(...).children(...)[1].css is not a function
//	$(this).children()[1].css({
//		transform:'rotate(180deg)',
//		transition:'0.5'
//	})

//	图片旋转180度

	//  currentDeg += 180;
	if(currentDeg==0){
		currentDeg = 180
	}else{
		currentDeg = 0
	}

   
//	$(this).children().eq(1).css({
//		transform:'rotate('+currentDeg+'deg)',
//		transition:'0.5'
//	})

	$(this).children().eq(1).css({
		transform:'rotate('+currentDeg+'deg)',
		transition:'0.5s'
	})
	
	
})
