$(function(){
	
	$('.recomm_list li').hover(function(){
		$(this).find('.gotocar').show();
//		console.log("aa");
	},function(){
		$(this).find('.gotocar').hide();
//		console.log("bb");
	})
	var numgoods = 0;//存储商品个数
	//获取cookie创建节点
	var arr = $.cookie("cart");
	if(arr){
//		console.log("有东西");
		$(".mygoodscar").show();
		$(".couno_are").show();
		$(".clearBox").show();
		arr = JSON.parse(arr); 
		//遍历cookie中的数据
		
//			console.log(newid);
			//获取json
			$.get("json/goodsinfo.json",function(info){
				for(var j=0;j<info.length;j++){
					var obj = info[j];
//					console.log(newid);
					for(var i=0;i<arr.length;i++){
						var newid = arr[i].id;
						var newnum = arr[i].num;
			//			console.log(newid,newnum);
					
					//找到与cookie中id相同的商品id 信息
					if(obj.id == newid){
//						console.log(obj.id);
						var name = obj.name;//name
						var menoy = obj.menoy;//价格
						var oldmenoy = obj.oldmenoy;//老价格
						var smallimg = obj.smallimg[0];//图片
						var active = obj.active;//活动
						
						var ul_cargoods = $("<ul class='cargoods'></ul>");//创建ul class = cargoods
						var li_cargoods_type = $("<li class='cargoods_type'></li>")//创建li class = cargoods_type
						var a_img = $("<a class='cargoods_type_image'><img src="+ smallimg +" /></a>");//创建商品的图片
						var span_cargoods_type_title = $("<span class='cargoods_type_title'><a>"+ name +"</a></span>");//创建商品的名字
						var span_cargoods_type_danjia = $("<span class='cargoods_type_danjia'><a class='newprice'>￥<i>"+ menoy +"</i></a><br/><a class='oldprice'>￥<i>"+ oldmenoy +"</i></a></span>");//商品价格
						
						var span_cargoods_type_hownum = $("<span class='cargoods_type_hownum'><div class='cargoods_type_hownum_box'><i class='box_left'>-</i><input type='text' id='num_mycar' value="+ newnum +"  class='zhi'/><i class='box_right'>+</i></div></span>");
						//创建加减数量
							
						var allcout =parseInt(newnum) * parseInt(menoy) 
						var span_cargoods_type_numcount = $("<span class='cargoods_type_numcount'><a class='newprice xxj'>￥<i>"+ allcout +"</i></a></span>")//小计价格
						var span_cargoods_type_delete = $("<span class='cargoods_type_delete'><a id="+ newid +">删除</a></span>")//删除按钮
						
						li_cargoods_type.append(a_img).append(span_cargoods_type_title).append(span_cargoods_type_danjia).append(span_cargoods_type_hownum).append(span_cargoods_type_numcount).append(span_cargoods_type_delete);
						
						var li_evet_info = $("<li class='evet_info'><span class='evet_info_active'><a href=''>"+ active + "</a></span><span class='clear_box'> </span><span class='count_active'>已参与</span><span class='ball'></span><span class='ball_top'></span></li>")
						
						var delete_vox = $("<div class='delete_goods'><p class='delete_goods_text'>你确定删除该商品吗？</p><p class='delete_goods_button'><button class='button_one'>确定</button><button class='button_two'>取消</button></p></div>")
						
						ul_cargoods.append(li_cargoods_type).append(li_evet_info).append(delete_vox);
						
						
						
						$('.check_box').before(ul_cargoods);
						//计算总计的值
						var a=0;
						$(".cargoods_type").each(function(i){
//							console.log(i);
//							console.log($(".xxj").find("i").eq(i).html());
							var b= parseInt($(".xxj").find("i").eq(i).html()) ;
							a=a+b;
						})
//						console.log(a);
						$(".check_box_nun").html(a);
						$(".a-m-menoy").html(a);	
						//计算个数
						var e = 0;
						$(".zhi").each(function(j){
//							console.log(j);
							var d = parseInt($(".zhi").eq(j).val()) ;
//							console.log(d);
							e=e+d;
						})
						$(".a-m-all").find("i").html(e);
						
						
						
						}
					}
					
				}
				//点击减，数量减一
				$(".box_left").click(function(){
					//获取值
					var box = $(this).parent().parent().parent().parent().find(".delete_goods");
					//判断值是否小于1
					if($(this).parent().find("input").val() <= 1){
						//显示删除商品box
						$(box).show();
					}else{
						
						var sl =parseInt($(this).parent().find("input").val())  - 1;
						$(this).parent().find("input").val(sl);
						
						//重新当前计算小计的值
						var dj = $(this).parent().parent().parent().find(".cargoods_type_danjia").find(".newprice").find("i").html();
//						console.log(dj);
						dj =parseInt(dj);
//						console.log(dj);
						var allmon = sl * dj;
//						console.log(allmon);
						var xxj = $(this).parent().parent().parent().find(".cargoods_type_numcount").find("i").html(allmon);
						
						//计算总计的值
						var c=0;
						$(".cargoods_type").each(function(i){
//							console.log(i);
//							console.log($(".xxj").find("i").eq(i).html());
							var b= parseInt($(".xxj").find("i").eq(i).html()) ;
							c=c+b;
						})
//						console.log(c);
						$(".check_box_nun").html(c);
						$(".a-m-menoy").html(c);
						
						//计算个数
						var f = 0;
						$(".zhi").each(function(j){
//							console.log(j);
							var d = parseInt($(".zhi").eq(j).val()) ;
//							console.log(d);
							f=f+d;
						})
						$(".a-m-all").find("i").html(f);
						
						//改变cookie的值
						var yuannum  = JSON.parse($.cookie("cart"));
						var iid = $(this).parent().parent().parent().find(".cargoods_type_delete").find("a").prop("id");
//						console.log($.cookie("cart"));

						for(var o=0;o<yuannum.length;o++){
							
							if(yuannum[o].id == iid){
							var srr = {
								id:yuannum[o].id,
								num:parseInt(yuannum[o].num) - 1
								
							};
								yuannum.splice(o,1);
								yuannum.push(srr);
								$.cookie("cart", JSON.stringify(yuannum), {expires:30, path:"/"});
//								console.log($.cookie("cart"));
							}
						}
					}
					
					
					
				})
				//点击加，数量+1
				$(".box_right").click(function(){
					var sl =parseInt($(this).parent().find("input").val())+ 1   ;
					$(this).parent().find("input").val(sl);
					//重新当前计算小计的值
					var dj = $(this).parent().parent().parent().find(".cargoods_type_danjia").find(".newprice").find("i").html();
//						console.log(dj);
						dj =parseInt(dj);
//						console.log(dj);
						var allmon = sl * dj;
//						console.log(allmon);
						$(this).parent().parent().parent().find(".cargoods_type_numcount").find("i").html(allmon);
						
						//计算总计的值
						var g=0;
						$(".cargoods_type").each(function(i){
							console.log(i);
							console.log($(".xxj").find("i").eq(i).html());
							var b= parseInt($(".xxj").find("i").eq(i).html()) ;
							g=g+b;
						})
						console.log(g);
						$(".check_box_nun").html(g);
						$(".a-m-menoy").html(g);
						
						//计算个数
						var h = 0;
						$(".zhi").each(function(j){
							console.log(j);
							var d = parseInt($(".zhi").eq(j).val()) ;
							console.log(d);
							h=h+d;
						})
						$(".a-m-all").find("i").html(h);
						
						//改变cookie的值
						var yuannum  = JSON.parse($.cookie("cart"));
						var iid = $(this).parent().parent().parent().find(".cargoods_type_delete").find("a").prop("id");
						console.log($.cookie("cart"));

						for(var o=0;o<yuannum.length;o++){
							
							if(yuannum[o].id == iid){
							var srr = {
								id:yuannum[o].id,
								num:parseInt(yuannum[o].num) + 1
								
							};
								yuannum.splice(o,1);
								yuannum.push(srr);
								$.cookie("cart", JSON.stringify(yuannum), {expires:30, path:"/"});
								console.log($.cookie("cart"));
							}
						}
						
					
				})
				//删除商品取消按钮
				$(".button_two").click(function(){
//					console.log("aa");
					$(this).parent().parent().hide();
				})
				
				//删除商品确定按钮
				$(".button_one").click(function(){
//					console.log("aa");
					$(this).parent().parent().hide();
					$(this).parent().parent().parent().hide();
					 theid = $(this).parent().parent().parent().find(".cargoods_type_delete").find("a").prop("id");
//					console.log(theid);
					//同时删除对应商品的cookie
					var car  = JSON.parse($.cookie("cart"));
//					console.log(car);
					for(var r = 0;r<car.length;r++){
//						console.log(car[r].id);
						
						if(car[r].id == theid ){
//							console.log(theid);
//							console.log(car[r].id);
//							console.log(r);
							car.splice(r,1);
//							console.log(car);
							$.cookie("cart", JSON.stringify(car), {expires:30, path:"/"});
//							console.log( $.cookie("cart") );
						}
					}
					
					location.href="goucar.html";
					
				})
				
				//点击删除  删除框显示：
				$(".cargoods_type_delete a").click(function(){
					$(this).parent().parent().parent().find($(".delete_goods")) .show();
				})
				
				
				
				
				
				
				
			})
			
			
			
		

	}else{
		$(".emptycar").show();
		$(".mygoodscar").hide();
		$(".couno_are").hide();
		$(".clearBox").hide();
	}
	
	//返回首页
	$('.goindex').click(function(){
		location.href = "index.html"
	})
	
	//清空购物车
	$(".clearcar").click(function(){
		$("#allclear").show();
//		$.cookie("cart", "", {expires:0, path:"/"}); //清空cookie
	})
	$("#allclear .button_one").click(function(){
		$.cookie("cart", "", {expires:0, path:"/"}); //清空cookie
		location.href = "goucar.html";
	})

	
	
	
	//不得越界
})


