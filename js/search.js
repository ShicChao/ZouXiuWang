var ulList = document.getElementById("ulList");
var oli = ulList.children;
$("#search").keyup(function(){
	var $name = $("#search").val();
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",
		dataType : "jsonp",
		data : {
			selectText: $name,
			pageCode : 0
		},
		success : function(res){
			ulList.innerHTML="";
			if( res!=0 ){
				for( var i=0; i<res.length; i++){
					var li = document.createElement("li");
					var liName = document.createTextNode( res[i].goodsName );
					li.appendChild( liName );
					li.nam = res[i].goodsID;
					console.log(res[i].goodsID)
					ulList.appendChild( li );
					console.log(res[i].goodsName);	
				}
			}
			for(var i=0;i<oli.length;i++){
				oli[i].onmouseover=function(){
					this.style.background="#999";
				}
				oli[i].onmouseout=function(){
					this.style.background="#ccc";				
				}
				oli[i].onclick=function(){
					ulList.innerHTML="";
					$("#search").val( $(this).html() );
					var that = this;
					setTimeout(function(){
						location.href="html/goods.html#"+ $(that).attr('nam') ;
					},500)				
				}
			}
		}
	})
})