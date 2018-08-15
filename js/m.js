$(function(){
	// 解决点击事件300ms的延迟
	FastClick.attach(document.body);  
	setTab();
	/*设置tab栏滑动*/
	function setTab() {
		var i = 3;
	    $('.item2 li').on('click', function() {
	        var index = $(this).index();
	        $('.item2 .info').eq(index).show().siblings('.info').hide();
	        // 自身移除样式
	        $(this).addClass('active').siblings('li').removeClass('active');
	        i = index;
	    });
	    $('.cert-body1 .cert-nav li').click(function(){
	        var index = $(this).index();
	         $(this).addClass('active').siblings('li').removeClass('active');
	        $('.cert-body1 .box').eq(index).show().siblings('.box').hide();
	    });
	    $('.cert-body2 .cert-nav li').click(function(){
	        var index = $(this).index();
	         $(this).addClass('active').siblings('li').removeClass('active');
	        $('.cert-body2 .box').eq(index).show().siblings('.box').hide();
	    });
	    var w = $('.cert-body .cert-nav').width()/4;
	    if($(document).width()<=450){
	      			$('.cert-body .cert-nav li').width(w);
	      			$('.item5 .cert-nav  ul').width(w*7);
	      		}
	    var mySwiper1 = new Swiper ('.swiper-container1', {
	            nextButton: '.cert-frm',
	             prevButton: '.cert-cfa',
	             noSwiping : true

	    });

	      $('.cert-body .cert-nav li').click(function(){
	      	var index = $(this).index();
	      		if($(document).width()<=450&&index<=3){
	      			
	      			// $('.item5 .cert-nav').scrollLeft(index*w);
	      			$('.item5 .cert-nav').animate({scrollLeft:index*w},300);

	      		}
	      });

	    
	}

	var mySwiper = new Swiper('.swiper-container', {
	    initialSlide: 2,
	    loop: true,
	    slidesPerView: 2,
	    centeredSlides: true,
	    pagination: '.swiper-pagination'
	});
	// 页面初始化视频
	var idArr = ['82448c164bb0121e462aa16395190c04_8', '82448c164ba0d2dc388a5c7bcd784141_8', '82448c164b694cbc650a1f0d7ccb4353_8'];
	var player = polyvObject('.stu-vd').videoPlayer({
	    'width': '100%',
	    'height': '100%',
	    'vid': '82448c164bb0121e462aa16395190c04_8'
	});
	// tab栏，点击切换视频的id
	$('.item4 li').on('click',function(){
	   $(this).addClass('active').siblings('li').removeClass('active');
	    var index = $(this).index();
	     player.changeVid(idArr[index]);
	})


	/*点击播放时跳到二级页面播放*/
	$('.item1 a,.item3 a').click(function() {
	   if($(this).attr('data-id')){
	    if (localStorage.getItem("dataId")) {
	        localStorage.dataId = $(this).attr('data-id');
	        localStorage.tit = $(this).attr('title');
	    } else {
	        localStorage.setItem("dataId", $(this).attr('data-id'));
	        localStorage.setItem("tit", $(this).attr('title'));
	     }
	    location.href = "play.html";
	    return false;
	   }
	});
});