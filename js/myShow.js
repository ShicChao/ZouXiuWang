document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
window.onresize = function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
}

$("#login").click(function(){
	location.href="login.html";
})
$("#reg").click(function(){
	location.href="reg.html";
})
$("#back").click(function(){
	//location.href="../index.html";
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
$("#more").click(function(){
	location.href="more.html";
})


ajax();
function ajax(){
	var url = window.location.hash.substring(1);
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getuser.php",
		data : {
			userID : url
		},
		success : function(res){	
			var res = res.split("(",2)[1]
			var res = res.split(")",2)[0]
			var res = JSON.parse(res);
			if( url ){
				$("#name").html("昵称："+ res[0].userID +"")
			}
		}
	});
}