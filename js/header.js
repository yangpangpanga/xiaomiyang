$(function(){
   //判断是否登录，显示详情
    if(getCookie('username')){
        console.log('登录了')
        // console.log( $('.middle-top ol'))
      $('.middle-top ol').css({display:'none'}); //原有隐藏
      $('.willlogina .mycon').html(getCookie('username'));
      $('.willlogina').css({display:'block'}).mouseenter(function(){ //用户名显示
        $('.willlogina  .mycon').css({background:'#ffffff'}) ;
        $('.willshow').css({display:'block'}).mouseleave(function(){
            $('.willlogina  .mycon').css({background:'#333333'}) ;
            $('.willshow').css({display:'none'});
          })
      });
    }
    if(!getCookie('username')){
        $('.middle-top ol').css({display:'block'});
       $('.willlogina').css({display:'none'});
    }



    $('.tabchange ul li').not('.none').mouseenter(function(){
        $('.tabB ol').eq($(this).index()).addClass('show').siblings().removeClass('show')
        $('.tabB').stop().slideDown()
    })
    $('.navT').mouseleave(function(){
        $('.tabB').stop().slideUp()
    })
})
function getCookie(key){
    var bigArr = document.cookie.split('; ');
    for( var i = 0;i < bigArr.length; i++){
        var arr = bigArr[i].split('=');
        if(arr[0]=== key){
            return arr[1];
        }
    }
}