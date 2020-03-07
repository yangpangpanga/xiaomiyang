$(function(){
    console.log('123')
    // if($('body').width() > 1226){
    //     $('.center').width($('.center').width())
    // }
    if($('body').width() <= 1226){
        console.log('xiao')
        $('.center').width($('.center').parent().width())
    }
})
