$(function(){
    $('.head').load('../../html/head.html') //加载头部页面
    $('.bottombox').load('../../html/bottom.html')//加载尾部页面
    //手机区域划过动态效果
    $('.moves').hover(function(){
      $(this).stop().animate({top:-3},200)
    },function(){
      $(this).stop().animate({top:0},200)
    })
    //第二个二级导航
    $('.leftbox ul li').mouseenter(function(){
      var num = parseInt($(this).attr('data-index') / 6 );
      var num1 = $(this).attr('data-index')  % 6;
      var con = $(this).attr('data-con');
      var str ='' ;
      if( num1 == 0){
        for(var j = 0; j < num ; j++ ){
            str += '<ul>'
            for(var i = 0; i < 6; i++){
                    str += `<li><a href="../../html/list.html"><img src="../../img/0${i+1}.jpg" alt="">${con}</a></li>`
            }
                  str += '</ul>'
        }
        var width = num1>0? num+1:num;
        $('.rightnav').html(str).css({display:'block',width:width * 249});
      }
      if( num1 != 0){
        for(var a = 1 ; a < num +2; a++ ){
            str += '<ul>'
            if(a == num +1){
              for(var b = 0; b < num1;b++){
                str+=`<li><a href="../../html/list.html"><img src="../../img/0${b+1}.jpg" alt="">${con}</a></li>`
              }
            }else{
              for(var b = 0; b < 6;b++){
                str+=`<li><a href="../../html/list.html"><img src="../../img/0${b+1}.jpg" alt="">${con}</a></li>`
              }
            }
            str += '</ul>'
        }
        var width = num1>0? num+1:num;
        console.log(width)  
        $('.rightnav').html(str).css({display:'block',width:width * 249});
      }
    })
    $('.rightnav').mouseleave(function(){
      console.log('yichul ')
      $(this).css({display:'none'})
    })  
    $('.rightbox').mouseleave(function(){
      $('rightnav').css({display:'none'})
    })  
})
//倒计时区域
var timer = setInterval(function(){
      var now = new Date();
      var future = new Date(2020,2,13,12,00,00);
      var times = future.getTime() - now.getTime();
      var hours = parseInt(times / 1000 / 60 / 60) ;
      var minutes = parseInt((times - (hours * 60 * 60 *1000)) / 1000 / 60) ;
      var num = (minutes * 60 * 1000) + (hours * 60 * 60 *1000)
      var seconds = parseInt((times - num) / 1000)  ;
      hours = hours > 9? hours:'0' + hours;
      minutes = minutes > 9? minutes:'0' + minutes;
      seconds = seconds > 9? seconds:'0' + seconds;
      if(hours == 0 && minutes == 0 && seconds == 0){
        clearInterval(timer)
        $('.leftsale span').html(00);

      }
      $('.leftsale span').eq(0).html(hours);
      $('.leftsale span').eq(1).html(minutes);
      $('.leftsale span').eq(2).html(seconds);
      
},1000)




//第一个轮播区域

var swiper = new Swiper('#swiper1', {
    speed:1000,
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay:true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  swiper.el.onmouseover = function(){ //鼠标放上暂停轮播
    swiper.autoplay.stop();
  }
  swiper.el.onmouseleave = function(){
    swiper.autoplay.start();
  }

//第二个轮播区域
var swiper1 = new Swiper('#swiper2', {
  speed:1000,
  slidesPerView: 4,
  spaceBetween: 14,
  slidesPerGroup: 4,
  autoplay:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
swiper1.el.onmouseover = function(){ //鼠标放上暂停轮播
  swiper1.autoplay.stop();
}
swiper1.el.onmouseleave = function(){
  swiper1.autoplay.start();
}

