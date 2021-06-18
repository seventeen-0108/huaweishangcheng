// 判断用户是否登录--判断cookie中会否存在username的值
$(function(){
  var username = getCookie('username');
  var login = document.querySelector('.li2');
  var reg=document.querySelector('.w-reg')
  if(username){
    var str = `<li><a>欢迎尊贵的<span>${username}</span></a></li>
    <li><a href="javascript:;" class="logout">退出</a></li>`;
    login.innerHTML = str;
    reg.innerHTML=`您好<a><span>${username}</span></a><span>&nbsp;/&nbsp;</span>
  <a href="javascript:;" class="logout">退出</a>`
    // 退出功能
    var logout = document.querySelector('.logout');
    $('.logout').on('click',function(){
      layer.confirm('你确定要退出吗？',
      {
        btn:['确定','取消']
      },
      function(){
        // 删除cookie
        delCookie('username');
        login.innerHTML = `<li><a href="login.html">请登陆</a></li>
        <li><a href="registered.html">注册</a></li>`;
        reg.innerHTML=`您好！请
        <a href="" class="a2">登录</a>
        <span>&nbsp;/&nbsp;</span>
        <a href="./registered.html" class="zhuce">注册</a>`
        layer.msg('退出成功',{icon:1,time:500})
      },
      function(){
        layer.msg('已取消',{icon:1,time:500})
        return false;
      }
      )
    })

    // logout.onclick = function(){
    //   console.log(2);
      
    // }
  }
})