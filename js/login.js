document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
window.onresize = function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
}


$("#reg").click(function(){
	location.href="reg.html";
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

//用户注册接口
$("#login").click(function(){
	if(  (($("#user").val()) != "") && ( ($("#pass").val()) != "" )){
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",	
			data : {
				status : "login" ,
				userID : $("#user").val(),
				password : $("#pass").val()
			},
			success : function(res){	
				if(res==0){
					p1.innerHTML="*用户名不存在";
					p1.style.color="#f10";			
				}else if(res == 2){
					p1.innerHTML="*用户名密码不符";
					p1.style.color="#f10"
					
				}else{
					console.log("登录成功");
					p1.innerHTML="登录成功,稍后为您跳转";
					p1.style.color="#5fe44e";
					setTimeout(function(){
						location.href="myshow.html#"+ $("#user").val() +"";
					},1000)		
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
})	