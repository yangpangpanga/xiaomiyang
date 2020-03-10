$(function(){
    //加载头部页面
    $('.headd').load('../../html/head.html');
    $('.footd').load('../../html/bottom.html')
    var id = getCookie('pid');
    //发送ajax请求获取数据
    $.get('http://jx.xuzhixiang.top/ap/api/detail.php',{id})
    .then((data) => {
        data = data.data;
        var str = `<div class="imgs" ${data.pid}><img src="${data.pimg}" alt=""></div>
        <div class="rightt">
            <h1>${data.pname}</h1>
            <p>${data.pdesc}</p>
            <p>${data.pprice}</p>
            <span>-</span><input type="text" value= "1"><span>+</span>
            <input type="button" value="加入购物车">
            <input type="button" value="马上去结算">
        </div>`
        $('.detail').html(str);
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