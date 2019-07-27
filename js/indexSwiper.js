//时尚资讯
var mySwiper = new Swiper ('#fashionNewsCarouselWrap .swiper-container', {
	slidesPerView : 3,
	spaceBetween : 40,
	direction: 'horizontal', // 垂直切换选项
	loop: false, // 循环模式选项	   
	grabCursor:true,
	
	// 如果需要分页器
	pagination: {
	   el: '.swiper-pagination',
	},
	uniqueNavElements: true,
	
	// 如果需要前进后退按钮
	navigation: {
	   nextEl: '.nextBtn',
	   prevEl: '.prevBtn',
	},
	// 如果需要滚动条
	scrollbar: {		
	    el: '.swiper-scrollbar',
	},
	
	breakpoints: { 
	//当宽度小于等于990
	    992: { 
	      slidesPerView: 2,
	      spaceBetween: 20
	    }
	}
});   


//赞助商logo传送带
var mySwiper2 = new Swiper ('.swpWrapBox .swiper-container', {
	direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
    slidesPerView : 8,
	grabCursor:true,		    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    uniqueNavElements: true,
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.nextBtn1',
      prevEl: '.prevBtn1',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
	breakpoints: { 
	//当宽度小于等于992
    992: {
      slidesPerView : 6
    },
   //当宽度小于等于768
    768: { 
     slidesPerView : 4
    }
  }   

})        
