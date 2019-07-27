//https://blog.csdn.net/chao7842/article/details/55257967
//https://blog.csdn.net/qq_34107571/article/details/85054089
//https://codeplayer.vip/p/j7sll
var currentDeg = 0;
$('.employClickBox').click(function(){
//	这样获取的是对于父元素employItem中的employClickBox索引值，index永远是0
//	var indx = $(this).index();
//	要这样写:
	var indx = $('.employClickBox').index(this);
	console.log(indx);
	

	$('.employDetail').eq(indx).slideToggle(500);
		console.log($(this).children().eq(1))
	
	currentDeg += 180;
		 
//	用animate方法无效,因为:使用基本的jQuery功能，大多数非数值的css属性都无法用来执行动画。
//	例如：width、height、left、top都可用于动画，但color、background-color无法
//	用于动画(除非使用jQuery.Color()插件)。除非你为属性值指定了单位(例如：px、em、%)，
//	否则默认的数值单位为像素(px)。
	$(this).children().eq(1).css({
		transform:'rotate('+currentDeg+'deg)',
		transition:'0.5'
	})
	
	
});


