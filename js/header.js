$(function(){
   //判断是否登录，显示详情
    if(getCookie('username')){
        $('.willlogin a').eq(0).html(getCookie('username'))
        .click(function(e){
            e.preventDefault();
        })
        .hover(function(){
            $(this).css({background:'white'});
            $('.willshow').stop().slideDown();
        },function(){
            $(this).css({background:'#333333',width:'120px'})
        });
        $('.willlogin a').eq(1).html('消息通知');
        $('.willlogin a').eq(2).html('我的订单');

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