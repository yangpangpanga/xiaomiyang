$(function(){
    //点击登录按钮
    $('.logins ').click(function(){
        var username = $('#username').val();
        var password = $('#password').val();
        if(username  != '' & password != ''){
            $('.login span').css({display:'none'})
            $.get('http://jx.xuzhixiang.top/ap/api/login.php',{username,password},function(data){
                  console.log(data)
                  if(data.code == 0){
                    $('.login span').html('用户名或密码不正确').css({display:'block'})
                  }
                  if(data.code == 1){
                      location.href = 'http://localhost:8080/html/'
                  }
            })
        }else if (username  == '' || password == ''){
            $('.login span').html('请输入正确的用户名或密码').css({display:'block'})
        }
       
    })
})