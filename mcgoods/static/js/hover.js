$(function(){
	
	$(function(){
				$.get("json/hot_search.json",function(data){
					for(var i =0;i<data.length;i++){
						$('#hot_search').append("<li>"+data[i]+"</li>");
					}
					$('#hot_search li').eq(1).addClass('orange');
					
				})
				
		});
	
	
	
	$('.header_top_box_left li').mouseenter(function(){
		$('.header_top_box_left li').removeClass('orange header_top_box_left_li2').eq($(this).index()).addClass('orange');
		
	});
	
	
	$('.header_top_box_left li').eq(2).mouseenter(function(){
		$(this).find('span').toggleClass('iphone2');
	});
	$('.header_top_box_left li').eq(2).mouseleave(function(){
		$(this).find('span').toggleClass('iphone2');
	});
	$('.header_top_box_left li').eq(2).mouseenter(function(){
		$(this).addClass('header_top_box_left_li2');
	});
	
	$('.header_top_box_left').mouseleave(function(){
		$('.header_top_box_left li').removeClass('orange header_top_box_left_li2');
	});
	
	
	//导航条右边下拉列表
	$('.header_top_box_right li').eq(1).mouseenter(function(){
		$('#drop_down_list1').show();
		$(this).addClass('header_top_box_right_li');
	});
	$('.header_top_box_right li').eq(1).mouseleave(function(){
		$('#drop_down_list1').hide();
		$(this).removeClass('header_top_box_right_li');
	});
	
	$('.header_top_box_right li').eq(7).mouseenter(function(){
		$('#drop_down_list2').show();
		$(this).addClass('header_top_box_right_li');
	});
	$('.header_top_box_right li').eq(7).mouseleave(function(){
		$(this).find('#drop_down_list2').hide();
		$(this).removeClass('header_top_box_right_li');
	});
	
	$('.header_top_box_right li').eq(11).mouseenter(function(){
		$('#drop_down_list3').show();
		$(this).addClass('header_top_box_right_li');
	});
	$('.header_top_box_right li').eq(11).mouseleave(function(){
		$(this).find('#drop_down_list3').hide();
		$(this).removeClass('header_top_box_right_li');
	});
	
	$('.header_top_box_right div').mouseenter(function(){
		$(this).addClass('orange');
		$(this).find('i').addClass('nav_right2');
	});
	$('.header_top_box_right div').mouseleave(function(){
		$(this).removeClass('orange');
		$(this).find('i').removeClass('nav_right2');
	});
	
	$('.header_top_box_right ul ul li').mouseenter(function(){
		$(this).addClass('orange');
	});
	$('.header_top_box_right ul ul li').mouseleave(function(){
		$(this).removeClass('orange');
	});
	
	
	//热搜鼠标放上去的样式
//	$('#hot_search li').mouseenter(function(){
//		$('#hot_search li').removeClass('orange').eq($(this).index()).addClass('orange');
//		console.log('aa');
//	
//	})

	
	$('.header_bottom_box_a1').mouseenter(function(){
		$(this).find('ul').show();
	});
	$('.header_bottom_box_a1').mouseleave(function(){
		$(this).find('ul').hide();
	});
	
	
//	function animate1(){
//		$('#tip').find('a').animate({
//			"top":-10,
//			"opacity":0
//		},1000,function(){
//			$('#tip').find('a').animate({
//				"top":0,
//				"opacity":1
//			})
//		},function(){
//			return animate1();
//		})
//	}
//	animate1();
	
	$('.allgood').mouseenter(function(){
		$('#allGoodstype').show();
	})
	$('.allgood').mouseleave(function(){
		$('#allGoodstype').hide();
	})
	
	$('#allGoodstype>li').mouseenter(function(){
		$('#allGoodstype>li>div').hide().eq($(this).index()).show();
		console.log($(this).index());
	})
	
	//关闭浮动广告
	$("#ad_close").click(function(){
		$("#ad_two").hide();
		$("#ad_close").hide();
		$("#ad_ad").hide();
	})
	
	
	
	
	$('.userlogin').mouseenter(function(){
		$(this).css("background","#ff5c00");
		$(this).find(".user-img").css("background-position"," -22px 2px");
		$(this).find($(".b")).stop().animate({
			"right":37
		},500);
		$(this).find($(".b")).show();
		$(".shopCar_box_list").stop().hide();
	})
	
	$('.userlogin').mouseleave(function(){
		$(this).css("background","#fff");
		$(this).find(".user-img").css("background-position"," 0px 2px")
		$(this).find($("#userbox")).animate({
			"right":70
		},500);
		$(this).find($("#userbox")).hide();
	})
	
	
	$('.user_close').click(function(){
		$(this).parent().parent().hide();
	})
	
	
	
	$('.shopCar').mouseenter(function(){
		$(".topline").hide();
		$("#num").removeClass('orange').addClass("white");
		$(".shopCar_img").css("background-position"," -22px -22px")
	})
	$('.shopCar').mouseleave(function(){
		$(".topline").show();
		$("#num").removeClass('white').addClass('orange');
		$(".shopCar_img").css("background-position"," 0px -22px")
	})
	
	
	$('.erweima').mouseenter(function(){
		$(this).css("background","#ff5c00");
		$(".erweima_img").css("background-position"," -22px -48px")
		$(".shopCar_box_list").hide();
	})
	$('.erweima').mouseleave(function(){
		$(this).css("background","#fff");
		$(".erweima_img").css("background-position"," 0px -48px")
	})
	
	$('.collect').mouseenter(function(){
		$(this).css("background","#ff5c00");
		$(".collect_img").css("background-position"," -22px -73px");
		$(this).find(".a").stop().animate({
			"right":37
		},500);
		$(this).find($(".a")).show();
		$(".shopCar_box_list").hide();
	})
	$('.collect').mouseleave(function(){
		$(this).css("background","#fff");
		$(".collect_img").css("background-position"," 0px -73px");
		$(this).find($(".a")).stop().animate({
			"right":70
		},500);
		$(this).find($(".a")).hide();
		
	})
	
	$(".service").mouseenter(function(){
		$(this).find(".c").stop().animate({
			"right":70
		},500);
		$(".c").show();
		$(".shopCar_box_list").hide();
	})
	$(".service").mouseleave(function(){
		$(this).stop().find($(".c")).animate({
			"right":110
		},500);
		$(".c").hide();
	})
	
	
	
	$('.gotop_box').mouseenter(function(){
		$(this).css("background","#ff5c00");
		$('.d').stop().animate({
			"right":37
		})
		$('.d').show();
		$(".gotop_img").css("background-position"," -22px -128px")
	})
	$('.gotop_box').mouseleave(function(){
		$(this).css("background","#fff");
		$('.d').stop().animate({
			"right":57
		})
		$('.d').hide();
		$(".gotop_img").css("background-position"," 0px -128px")
	})
	
	$(".d p").click(function(){
		 $("body").animate({scrollTop:0},1000)
	})
	
	$(".gotop_box").click(function(){
		$("body").animate({scrollTop:0},1000)
	})
	
	$(".moveNav_box_list li").eq(2).mouseenter(function(){
		$(this).addClass("sellingLi");
		$(".selling").show();

	})
	
	$(".moveNav_box_list li").eq(2).mouseleave(function(){
		$(this).removeClass("sellingLi");
		$(".selling").hide();
	})
	
	$(".shopCar").click(function(){
		$(".shopCar_box_list").show();
	})
	
	
	//不得越界
});



