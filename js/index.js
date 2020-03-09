

$(function(){
    $('.head').load('../../html/head.html') //加载头部页面
    $('.bottombox').load('../../html/bottom.html')//加载尾部页面
    //第一个二级导航的区域
    $('.tabchange ul li').not('.none').hover(function(){
        $('.tabB ol').eq($(this).index()).addClass('show').siblings().removeClass('show')
        $('.tabB').stop().slideDown()
        
    },function(){
        $('.tabB').stop().slideUp()
    })
    //手机区域划过动态效果
    $('.moves').hover(function(){
      $(this).stop().animate({top:-3},200)
    },function(){
      $(this).stop().animate({top:0},200)
    })
    //s搜索框
   
   
})
//倒计时区域
var now = new Date();
var future = new Date(2020,2,9,12,00,00);
var times = future.getTime() - now.getTime();
var hours = parseInt(times / 1000 / 60 / 60) ;
var minutes = parseInt((times - (hours * 60 * 60 *1000)) / 1000 / 60) ;
var seconds =(times- (minutes * 60 * 1000) + (hours * 60 * 60 *1000)) / 1000 ;
console.log(seconds)




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

