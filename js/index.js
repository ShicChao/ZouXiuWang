var swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
var goods = document.getElementById("goods");
var bodyer = document.getElementById("bodyer");

//初始化文字大小，根目录布局
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
window.onresize = function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 +"px";
}
		
		
//轮播图接口
$.ajax({
	type:"get",
	url:"http://datainfo.duapp.com/shopdata/getBanner.php",
	dataType:"jsonp",
	success:function(res){
		var url = JSON.parse( res[0].goodsBenUrl );
		var str="";
		for(var i=0;i<url.length;i++){		
			str += "<div class='swiper-slide'><img src='"+ url[i] +"'/></div>";
		}
		swiperWrapper.innerHTML += str;
		//加载完页面后开启轮播
		var myScroll = new Swiper ('.swiper-container', {
		    loop: true,
		    autoplay : 3000 ,
		    autoplayDisableOnInteraction : false ,
		    // 如果需要分页器
		    pagination: '.swiper-pagination'
		})
	}
});

var u=0;
var n=5;
ajax(u,n);
function ajax(ui,num){
	//商品或列表接口
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType:"jsonp",
		success:function(res){
			console.log(res)
			var str = "";
			for( i=ui;i<num;i++ ){			
				//if(num<=res.length){
					var price = res[i].price * res[i].discount / 10;
					str += "<li class='goodsDan' num='"+res[i].goodsID+"'>\
								<img src='"+ res[i].goodsListImg +"'class='goodsImg'/>\
								<div class='list'>\
									<p>"+ res[i].goodsName +"</p>\
									<p><span>￥"+ price  +"</span><span>￥"+ res[i].price +"</span></p>\
									<p>"+ res[i].discount +"折</p>\
								</div>\
							</li>";
					
//				}else{
//					return;
//				}
				
			}
			goods.innerHTML += str;
			//加载完滑动
			myScroll = new IScroll("bodyer")
			//添加点击事件
			var goodsDan = document.getElementsByClassName("goodsDan");
			for(var i=0;i<goodsDan.length;i++){
				$(".goodsDan").click(function(){
					location.href="html/goods.html#"+ $(this).attr('num') ;
				})
			}
			
		}	
	})
}
//下拉刷新，上拉加载
document.addEventListener("touchend",function(){
	if( myScroll.y > 50 ){
		ajax();
	}
	if( myScroll.maxScrollY > myScroll.y ){
		myScroll.refresh();
		n = n+5; u = u+5;
		ajax(u,n);	
		//加载完滑动
		myScroll = new IScroll("bodyer")
	}
})

//底部点击切换
$("#class").click(function(){
	location.href="html/class.html";
})
$("#buy").click(function(){
	location.href="html/buy.html";
})
$("#myShow").click(function(){
	location.href="html/myShow.html";
})
$("#more").click(function(){
	location.href="html/more.html";
})












