

$(function(){
    //判断设备宽度
    if($('body').width() <= 1226){
        console.log('xiao')
        $('.center').width($('.center').parent().width())
    }
    $('.head').load('../../html/head.html') //加载头部页面
    //第一个危机导航的区域
    $('.tabchange ul li').not('.none').hover(function(){
        console.log($(this).index())
        $('.tabB ol').eq($(this).index()).addClass('show').siblings().removeClass('show')
        $('.tabB').stop().slideDown()
        
    },function(){
        console.log('yichu')
        $('.tabB').stop().slideUp()
    })
})

//第一个轮播区域

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay:true,
    // slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

