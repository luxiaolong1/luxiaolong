$(function(){
	var hascar = $.cookie("cart");
	if(hascar){
		hascar = JSON.parse(hascar); 
		$(".shopCar_box_list_img").hide();
		$(".shopCar_box_what").hide();
		$(".linenone").hide();
//		console.log("有cookie"); 
		$.get("json/goodsinfo.json",function(data){
			
			for(var j =0;j<data.length;j++){
//				console.log("aa");
				var obj = data[j];
				for(var i=0;i<hascar.length;i++){
//					console.log("bb");
					var newid = hascar[i].id;
					var newnum = hascar[i].num;
					
					if(obj.id == newid){
						var name = obj.name;//name
						var menoy = obj.menoy;//价格 
						var smallimg = obj.smallimg[0];//图片
						//添加元素
						var mylist = $("<div class='mylist'></div>");
						var mylist_img = $('<div class="mylist_img"><img src="'+ smallimg +'"/></div>');
						var mylist_into = $('<div class="mylist_into"></div>');
						var  cartlevelname = $('<a href="" class="cart-level-name">'+ name +'</a>');
						var  bb = $('<div class="bb"></div>');
						var cartlevelprice = $('<span class="cart-level-price">￥'+ menoy +'</span><em>*'+ newnum +'</em>');
						var  a = $('<a href="" class="cart-level-del">删除</a>');
						
						bb.append(cartlevelprice).append(a);
						mylist_into.append(cartlevelname).append(bb);
						mylist.append(mylist_img).append(mylist_into);
						
						$(".shopCar_box_list").append(mylist);
					}
				
				}
				
			}
			
			
			
		})
	}else{
		$(".shopCar_box_list_img").show();
		$(".linenone").show();
		$(".shopCar_box_what").show();
	}
	
	
})