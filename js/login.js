// 页面一刷新/打开，就应该给用户名的文本框放上以前记住的用户名
console.log($('form'))
console.log($('.button'))

var rememberusername = getCookie('rememberusername');
var user = document.querySelector("[name='username']")
if(rememberusername){
    user.value = rememberusername;
}
console.log(1)
$('form').validate({
    
    rules:{
        username:'required',
        password:'required'
    },
    messages:{
        username:'用户名不能为空',
        password:'密码不能为空'
    },
    submitHandler:function(form){
        console.log(222)
        var loadindex = layer.load(1, {
            shade: [0.5,'#333'] //0.1透明度的白色背景
        });
        $('#btn').prop('disabled',true)
        $.ajax({
            url:'./php/login.php',
            data:$("form").serialize(),
            dataType:'json',
            method:'post',
            success:res=>{
                // 解构赋值
                var {meta:{status,msg}} = res;                
                layer.close(loadindex)
                var msgindex = layer.msg(msg)
                if(status===0){
                    // 设置cookie
                    setCookie('username',$('[name="username"]').val())
                    if($("[name='remember']").prop('checked')){
                        setCookie('rememberusername',$('[name="username"]').val(),7*24*3600)
                    }
                    // 应该跳转
                    
                    setTimeout(()=>{
                        console.log(1)
                        layer.close(msgindex)
                        $('#btn').prop('disabled',false)
                            location.href = 'index.html';
                    },2000)
                    
                }else{
                    console.log(22)
                    $('#btn').prop('disabled',false)
                    return false;

                }
            }
        })
        return false;
    }
})