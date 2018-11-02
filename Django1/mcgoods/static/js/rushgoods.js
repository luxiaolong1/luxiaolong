$(function(){
	
	

	$.get("json/goodsinfo.json",function(data){
		for(var i=0;i<data.length;i++){
//			console.log(data.length);
			var id = data[i].id;
			var img = data[i].img;
			var goods = data[i].name;
			var goodspices = data[i].menoy;
			var sall = data[i].sall;
			
			var newLi = $("<li></li>");
			var La = $("<a href='goodsinfo.html?" + id +"'></a>");
			var liDiv = $('<div class="rushGoods_list_img"><img src='+img+' /></div');
			
			var stateDiv = $('<div class="rushGoods_list_state"></div>');
			
			var stateSpanLeft = $('<span class="rushGoods_list_state_left">'+ goods +'</span>');
			
			var stateSpanRight = $('<span class="rushGoods_list_state_right">￥'+ goodspices +'</span>');
		
//			newLi.append(liDiv);
			stateDiv.append(stateSpanLeft);
			stateDiv.append(stateSpanRight);
			var shadow =$('<div class="shadowbox"></div>') ;
			var shadowbox_rush = $('<div class="shadowbox_rush"><p>已出售<span id="sallNum">'+ sall +'</span>件</p></div>');
			La.append(shadow);
			La.append(shadowbox_rush);
			La.append(liDiv);
			La.append(stateDiv);
			newLi.append(La);
			
			$(".rushGoods_list").append(newLi);
			
		
		}
		
		var length = $(".rushGoods_list li").length;
		var size =  $(".rushGoods_list li").first().outerWidth()+15;
//		console.log(length,size);
		$(".rushGoods_list").width(length*(size));
		
		//限时抢购鼠标放是去的限时效果
			$(".rushGoods_list li").mouseenter(function(){
				$(this).find(".shadowbox").show();
				$(this).find(".shadowbox_rush").show();
				$(this).find(".shadowbox_rush").animate({"top":0});
				
			})
			$(".rushGoods_list li").mouseleave(function(){
				$(this).find(".shadowbox").hide();
				$(this).find(".shadowbox_rush").animate({"top":30});
				$(this).find(".shadowbox_rush").hide();
			})
		
	})
	
				//限时抢购轮播图
	function lunbo2(){
		var rushGoodsList = $(".rushGoods_list");
		var rushLi = $(".rushGoods_list li");
		
		rushGoodsList.width(3000);
//		
		var size = rushLi.length;
//		console.log(size);
		
		var a = 0;
		var timer = setInterval(function(){
			a++;
			move2();
//			console.log(a);
			
		},5000);
		
		function move2(){
			
			
			rushGoodsList.stop().animate({left:-a*1100},900);
			
			
			
			//更改按钮颜色：
			if(a==0){
				$(".next2").css("background-position","-194px -83px");
				$(".next1").css("background-position","-165px -53px");
			}
			
			if(a>=1){
				a=-1;
				$(".next1").css("background-position","-165px -83px");
				$(".next2").css("background-position","-194px -53px");
				
			}
			
			
			
			
		}
	}
	
	lunbo2();
	
})