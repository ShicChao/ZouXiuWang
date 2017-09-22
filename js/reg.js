document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
window.onresize = function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
}

$("#login").click(function(){
	location.href="login.html";
})
$("#back").click(function(){
	//location.href="myShow.html";
	window.history.back();
})
$("#home").click(function(){
	location.href="../index.html";
})
$("#class").click(function(){
	location.href="class.html";
})
$("#buy").click(function(){
	location.href="buy.html";
})
$("#myShow").click(function(){
	location.href="myShow.html";
})
$("#more").click(function(){
	location.href="more.html";
})


var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var p3=document.getElementById("p3");

$("#user").blur(function(){
	if( ($("#user").val()) == "" ){
		p1.innerHTML="*账号不能为空";
		p1.style.color="#f10";
	}else{
		p1.innerHTML="";
	}
})
$("#pass").blur(function(){
	if( ($("#pass").val()) == "" ){
		p2.innerHTML="*密码不能为空";
		p2.style.color="#f10";
	}else{
		p2.innerHTML="";
	}
})
$("#passC").blur(function(){
	if( ($("#passC").val()) == "" ){
		p3.innerHTML="*请确认密码";
		p3.style.color="#f10";
	}else{
		p3.innerHTML="";
	}
})
//用户注册接口
$("#loginTy").click(function(){
	if( (($("#pass").val()) == ($("#passC").val())) && (($("#pass").val()) != "")){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",	
			data : {
				status : "register" ,
				userID : $("#user").val(),
				password : $("#pass").val()
			},
			success : function(res){		
				if(res==0){
					p1.innerHTML="*用户名重名";
					p1.style.color="#f10";
				}else if(res==1){
					p1.innerHTML="注册成功,稍后为您跳转登录页面";
					p1.style.color="#5fe44e";
					setTimeout(function(){
						location.href="login.html";
					},1000)					
				}else{
					console.log("数据库报错");
				}			
			}
		})
	}
	if( ($("#user").val()) == "" ){
		p1.innerHTML="*账号不能为空";
		p1.style.color="#f10";
	}
	if( ($("#pass").val()) == "" ){
		p2.innerHTML="*密码不能为空";
		p2.style.color="#f10";
	}
	if( ($("#passC").val()) == "" ){
		p3.innerHTML="*请确认密码";
		p3.style.color="#f10";
	}
	if( ($("#pass").val()) != ($("#passC").val()) ){
		p3.innerHTML="*两次输入的密码不一样";
		p3.style.color="#f10";
	}	
})	






















