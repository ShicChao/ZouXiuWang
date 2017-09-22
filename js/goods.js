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
$("#details").click(function(){
	location.href="goods_details.html#"+window.location.hash.substring(1);
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
		var oprice = res[0].price * res[0].discount / 10;
		$("#pic").html( "<img src="+ res[0].goodsListImg +" id='img'/>");
		$("#price").html( "￥" + oprice);
		$("#name").html( res[0].goodsName );
		$("#priceY").html( "市场价：<span id='xian'>￥" + res[0].price +"</span>");
		$("#zhekou").html( res[0].discount + "折");
		$("#buy").html( res[0].buynumber + "人购买");
	}
})
