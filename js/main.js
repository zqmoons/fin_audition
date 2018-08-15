$(function() {


    /*播放视频*/
    setVideo();
    /*设置tab栏滑动*/
    setTab();
    // 设置第七屏的切换
    setSlide();

    /*设置播放器。每点击，切换一下全屏*/
    function setVideo() {
        $('.slide2 a').click(function() {
            var vid = $(this).attr('data-id');
            if (vid) {
                getVideo(vid);
                $('.mcover').css('display', 'block');

                $('.full-wrap').slideDown(400);
            } else {
                console.log("还没有此链接")
            }
            return false;
        });
        $('.slide4 a').click(function() {
          $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            var vid = $(this).attr('data-id');
            if (vid) {
                getVideo(vid);
                $('.mcover').css('display', 'block');

                $('.full-wrap').slideDown(400);
            } else {
                console.log("还没有此链接")
            }
            return false;
        });


        $('.close').click(function() {
            $('.slide4 li').removeClass('active');
            $('.full-wrap').fadeOut(300);
            $('.mcover').fadeOut(300);

        });
    }


    /*初始化保利视频播放器*/
    function getVideo(vid) {
        var players = polyvObject('.video-wrap').videoPlayer({
            'width': '100%',
            'height': '100%',
            'vid': vid
        });
    }


    /*设置tab栏滑动*/
    var num = 0;
    function setTab() {
        var mySwiper = new Swiper ('.swiper-container1', {
                 slidesPerView: 6,
         onSlideChangeStart: function(swiper) {
            num = swiper.realIndex;
             $('.slide3 .info').eq(num).show().siblings('.info').hide();
             $('.slide3 li').eq(swiper.activeIndex).addClass('act').siblings('li').removeClass('act');

        }

        });
        $('.swiper-prev').click(function(){
            if(num == 0){
                return false;
            }else{
                num--;
                mySwiper.slideTo(num, 500, false);
             $('.slide3 .info').eq(num).show().siblings('.info').hide();
             $('.slide3 li').eq(num).addClass('act').siblings('li').removeClass('act');
             return false;
            }
        });
        $('.swiper-next').click(function(){
            if(num>=7){
                return false;
            }
            if(num >=3){
                num++;
                 $('.slide3 .info').eq(num).show().siblings('.info').hide();
                $('.slide3 li').eq(num).addClass('act').siblings('li').removeClass('act');
                return false;
            }else{
                num++;
                mySwiper.slideTo(num, 500, false);
                $('.slide3 .info').eq(num).show().siblings('.info').hide();
                $('.slide3 li').eq(num).addClass('act').siblings('li').removeClass('act');
                return false;
            }
        });
        $('.slide3 li[data-img]').on('click', function() {
             num = $(this).attr('data-img');
                mySwiper.slideTo($(this).index(), 500, false);
            $('.slide3 .info').eq(num).show().siblings('.info').hide();
            $(this).addClass('act').siblings('li').removeClass('act');
           return false;
        });
        // 禁止触摸滑动
        mySwiper.disableTouchControl();
       
    }

    /*初始化学生视频*/
    function getVideo1(vid) {
        var player = polyvObject('.stu-video').videoPlayer({
            'width': '100%',
            'height': '100%',
            'vid': vid
        });
    }
    var player = polyvObject('.stu-video').videoPlayer({
        'width': '100%',
        'height': '100%',
        'vid': '82448c164bb0121e462aa16395190c04_8'
    });
    var idArr = ['82448c164bb0121e462aa16395190c04_8', '82448c164ba0d2dc388a5c7bcd784141_8', '82448c164b694cbc650a1f0d7ccb4353_8'];
    // tab栏，点击切换视频的id
    $('.slide5 li').on('click', function() {
        console.log($(this).index());
        var index = $(this).index();
        getVideo1(idArr[index]);
        $(this).addClass('active').siblings('li').removeClass('active');
    })
});


function setSlide(){
    var mySwiper = new Swiper ('.swiper-container', {
            nextButton: '.cert-frm',
             prevButton: '.cert-cfa',
             noSwiping : true

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
}