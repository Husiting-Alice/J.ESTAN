$(function(){
	$('.tabLi').click(function(){
		var i = $(this).index();
		$('.tabDropDownDiv').eq(i).css('display','block');
		$('.tabLi').eq(i).addClass('tabChangeActive');
		$('.tabDropDownDiv').eq(i).siblings().css('display','none');
		$('.tabLi').eq(i).siblings().removeClass('tabChangeActive')
	});
	
	
	
	
})
