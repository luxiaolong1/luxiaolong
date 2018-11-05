$(function(){
	
	//
	for(var i = 0;i<$(".brand_right a").length;i++){
		
		if(i>=1&&i%4!=0){
			
			$(".brand_right a").eq(i).css({"margin-left":-1});
		}
		if(i>3){
	
			$(".brand_right a").eq(i).css({"margin-top":-1});
		}
	}
	
	//获取json数据
	$.get("json/specialProduct.json",function(data){
		//遍历
//		console.log(222)
		//part_one
		for(var i=0;i<data.length;i++){
			var patr =data[i].part;
			if(patr == 1){
				
				var bgimg = data[i].bg_img;
				var htwo = data[i].htwo;
				var spano = data[i].spano;
				var menoy = data[i].menoy;
				
//				console.log(11)
				//添加节点
				var pog = $('<div class="part_one_goods"></div>');// class="part_one_goods
				
				var pogi = $('<div class="part_one_goods_img"></div>')//class="part_one_goods_img"
				var ggimg = $('<img src="images/myzj_law2_small.png"  id="part_one_ad"/>');
				var bgaimg = $('<img src="'+ bgimg +'"/>');
				
				pogi.append(bgaimg).append(ggimg);
				
				var pogs = $('<div class="part_one_goods_state"></div>');//class="part_one_goods_state"
				var htwoo = $('<h2><a>'+ htwo +'</a></h2>');
				var pogse = $('<div class="part_one_goods_state_explan"><span class="part_one_goods_explan">'+ spano +'</span></div> ')
				
				pogs.append(htwoo).append(pogse);
				
				var pogp = $('<div class="part_one_goods_price"><span id="part_one_goods_price_one"><d>￥</d><d id = "price_one">'+ menoy +'</d><d>起</d></span><span class="comeIn"><a >点击进入</a></span></div>')
				
				pog.append(pogi).append(pogs).append(pogp);
			
				$("#part_one").append(pog);
					
			}
			
			//part_two
			if(patr == 2){
				
				var bgimg = data[i].bg_img;
				var htwo = data[i].htwo;
				var spano = data[i].spano;
				var menoy = data[i].menoy;
				
				
				//添加节点
				var pog = $('<div class="part_one_goods"></div>');// class="part_one_goods
				
				var pogi = $('<div class="part_one_goods_img"></div>')//class="part_one_goods_img"
				var ggimg = $('<img src="images/myzj_law2_small.png"  id="part_one_ad"/>');
				var bgaimg = $('<img src="'+ bgimg +'"/>');
				
				pogi.append(bgaimg).append(ggimg);
				
				var pogs = $('<div class="part_one_goods_state"></div>');//class="part_one_goods_state"
				var htwoo = $('<h2><a>'+ htwo +'</a></h2>');
				var pogse = $('<div class="part_one_goods_state_explan"><span class="part_one_goods_explan">'+ spano +'</span></div> ')
				
				pogs.append(htwoo).append(pogse);
				
				var pogp = $('<div class="part_one_goods_price"><span id="part_one_goods_price_one"><d>￥</d><d id = "price_one">'+ menoy +'</d></span><span class="comeIn"><a >点击进入</a></span></div>')
				
				pog.append(pogi).append(pogs).append(pogp);
			
				$("#part_two").append(pog);
					
			}
			
		}
//		console.log(data.length);
		
		
	})
	
})