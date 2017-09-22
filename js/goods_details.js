document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
window.onresize = function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
}


//$("#fen").click(function(){
//	location.href="reg.html";
//})
$("#back").click(function(){
	//location.href="myShow.html";
	window.history.back();
})
$("#sug").click(function(){
	location.href="goods.html#"+window.location.hash.substring(1);
})
$("#realShot").click(function(){
	location.href="goods_realShot.html#"+window.location.hash.substring(1);
})


var goodsid = window.location.hash.substring(1);
//商品详情接口
$.ajax({
	type:"get",
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",	
	dataType : "jsonp" ,
	data : {
		goodsID : goodsid
	},
	success : function(res){	
		console.log(res);	
		console.log(res[0].detail);	
	}
})