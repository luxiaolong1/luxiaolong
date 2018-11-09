$(function() {
	//

	//获取购物车的数量：
	var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
	//				console.log(arr.length);
	var ll = 0;
	if(arr.length != 0){
		for(var r=0;r<arr.length;r++){
			ll = ll+parseInt(arr[r].num) ;
			
			console.log("11");
		}
	}
	$("#num").html("(" + ll + ")")
	$("#countcarList").html(ll);

	var goodsId = location.search.replace("?", "");

	// 获取数据
	$.get("/static/json/goodsinfo.json", function(data) {

		for(var j = 0; j < data.length; j++) {
			var obj = data[j];
			if(obj.id == goodsid) {
				var thisId = obj.id;
				var path1 = obj.path1;
				var path2 = obj.path2;
				var name = obj.name;
				var ship = obj.shipment;
				var menoy = obj.menoy;
				var standard = obj.standard; //数组
				var choosecolor = obj.choosecolor; //数组
				var img = obj.img;
				var imgt = obj.imgt;
				var smallimg = obj.smallimg; //数组
				var goodsintroduce = obj.goodsintroduce; //还是一个对象
				var type = obj.type;
				var otherbrand = obj.otherbarnd;

				$("title").html(name);

				$('.main_top').append('<a>' + path1 + '</a><span>></span><a>' + path2 + '</a><span>></span><a>' + name + '</a>');
				$('#smallImg').append('<img src="' + img + '" />');
				$('#bigArea').find("img").prop("src",imgt);

				//				console.log(obj.smallimg.length);

				for(var i = 0; i < smallimg.length; i++) {
					var imgss = smallimg[i];
					$('.listImg').append('<li><img src=' + imgss + ' /></li>');
				};

				$('#name').append('<h1>' + name + '</h1>').append('<a>天天特价10/8</a>');
				$('.fahuo_chang').append('<a>' + ship + '</a>');
				$('#summary_price').append('<strong class="p-price">￥' + menoy + '</strong>');

				for(var i = 0; i < standard.length; i++) {
					var gg = standard[i];
					$('.standrad_size ul').append("<li><a>" + gg + "</a></li>");
				}
				//				console.log($(".standrad_size ul li").length);
				//默认规格中的第一个为选中状态
				$(".standrad_size ul li").first().addClass("standrad_size_select");
				//
				for(var i = 0; i < type.length; i++) {
					var valu = type[i];
					$('.related_type_barnd').append("<a>" + valu + "</a>");

				};

				//颜色选择选择
				var newul = $('<ul></ul>');
				if(choosecolor.length > 0) {
					for(var i = 0; i < choosecolor.length; i++) {
						var color = choosecolor[i];
						var ll = $('<li><a>' + color + '</a></li>');
						newul.append(ll);
					}
					var cc = $('<div class="standrad_size"></div>').append(newul)
					var neil = $('<li class="choosecolor"><div class="cuxiao st">颜&nbsp;&nbsp;色</div></li>').append(cc);
					$('#standrad').after(neil);
					//默认规格中的第一个为选中状态
					$(".choosecolor ul li").first().addClass("standrad_size_select");
					//
				}

				for(var i = 0; i < otherbrand.length; i++) {
					var valu = otherbrand[i];
					$('.other_type_barnd').append("<a>" + valu + "</a>");
				};
				var gooame = goodsintroduce[0].doodsname;
				//				console.log(goodsintroduce[0]);
				//				console.log(gooame.length);
				for(var i = 0; i < gooame.length; i++) {
					var ee = gooame[i];
					$('.goods_details_list').append('<li>' + ee + '</li>');
				};

				$(".details_goods_one").append('<img src=' + goodsintroduce[0].introduceimg + ' />')

				//图片切换
				$(".listImg li").mouseenter(function() {
					//					console.log($(this).find("img").prop("src"));
					var index = $(this).index() + 1;
					//					console.log(index);
					$('#smallImg').find("img").prop("src", "/static/images/ave" + thisId + index + ".jpg");
					console.log($('#smallImg').find("img").prop("src"));
					$('#bigArea').find("img").prop("src", "/static/images/big" + thisId + index + ".jpg");

				})

				//规格  颜色选择的切换
				$(".standrad_size ul li").click(function() {
					//					console.log($(this).index());
					$(this).siblings().removeClass("standrad_size_select")
					$(this).addClass("standrad_size_select");
				})

			}
		}

	})

	//右上角购物车的显示隐藏
	$(".goodsinfocar").on("mouseenter",function() {
		$("#willbuyList").stop().show();
	}).on("click",function(){
		location.href = "goucar.html";
	})
	

	$(".goodsinfocar").mouseleave(function() {
		$("#willbuyList").stop().hide();
	})

	//放大镜的效果
	var _smallImg = $("#smallImg"); //小图
	var _smallArea = $("#smallArea"); //小区域
	var _bigImg = $("#bigImg"); //大图
	var _bigArea = $("#bigArea"); //大区域

	//bigImg.width / smallImg.width = bigArea.width/smallArea.width
	//smallArea.width = bigArea.width * smallImg.width / bigImg.width
	//计算小区域的宽高
	//width() == innnerWidth() == outerWidth()
	_smallArea.width(_bigArea.width() * _smallImg.width() / _bigImg.width());
	_smallArea.height(_bigArea.height() * _smallImg.height() / _bigImg.height());

	//放大系数/放大倍数
	var scale = _bigImg.width() / _smallImg.width();
	//scale = 4

	//mousemove
	_smallImg.mousemove(function(e) {
		_smallArea.show(); //显示小区域
		_bigArea.show();
		//clientX: 可视区域的x值
		//pageX: 距离窗口左边的x值
		var x = e.pageX - _smallImg.offset().left - _smallArea.width() / 2;
		var y = e.pageY - _smallImg.offset().top - _smallArea.height() / 2;
		//console.log(e.clientX);
		//console.log(e.pageX);

		//控制小区域范围在小图内
		if(x <= 0) { //不超出左边
			x = 0;
		} else if(x >= _smallImg.width() - _smallArea.width()) { //不超出右边
			x = _smallImg.width() - _smallArea.width();
		}
		if(y <= 0) { //不超出上边
			y = 0;
		} else if(y >= _smallImg.height() - _smallArea.height()) { //不超出下边
			y = _smallImg.height() - _smallArea.height();
		}

		//移动小区域
		_smallArea.css({
			left: x,
			top: y
		});

		//移动大图
		_bigImg.css({
			left: -x * scale,
			top: -y * scale
		});

	})

	//mouseleave
	_smallImg.mouseleave(function() {
		_smallArea.hide(); //隐藏小区域
		_bigArea.hide();
	})

	//换购信息的显示与隐藏
	$("#show_change").click(function() {
		$(".probox").show();
		$("#hide_change").show();
		$(this).hide();
	})

	$("#hide_change").click(function() {
		$(".probox").hide();
		$("#show_change").show();
		$(this).hide();
	})

	//换购信息价钱的显示
	$(".chang_gift li").mouseenter(function() {
		$(this).find("b").stop().animate({
			"bottom": 3
		}, 500)
	});
	$(".chang_gift li").mouseleave(function() {
		$(this).find("b").stop().animate({
			"bottom": -24
		}, 500)
	});

	//换购信息列表的加减
	var i = 0;
	var _list1 = $('.chang_gift');
	var _li1 = $('.chang_gift li');

	var size = parseInt($('.chang_gift li').length / 6);

	function move() {
		//超出左边界
		if(i < 0) {
			i = 0;
		}

		//判断是否超出右边界
		if(i >= size) {

			i = size; // 即将移动到下一张图
		}

		//动画移动
		_list1.stop().animate({
			top: -i * 90
		}, 500);

	}
	//上一页
	$('.prom_add').click(function() {
		i--;
		move();

	})

	//下一页
	$('.prom_next').click(function() {
		i++;
		move();
	})

	//加入购物车鼠标放上去效果
	$(".addToCar").hover(function() {
		$(this).addClass("addToCarhover");
	}, function() {
		$(this).removeClass("addToCarhover");
	})

	//购物数量的增减
	$(".choose_num_add").click(function() {
		var oldnum = $("#goodsnum").val();
		$("#goodsnum").val(parseInt(oldnum) + 1);

	})
	$(".choose_num_next").click(function() {
		var oldnum = $("#goodsnum").val();
		if(oldnum <= 1) {
			$("#goodsnum").val(1);
			return;
		}
		$("#goodsnum").val(parseInt(oldnum) - 1);

	})

	//商品详情的导航条显示与隐藏
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 800) {
			$(".select_absouble").show();
		} else {
			$('.select_absouble').hide();
		}

		//商品详情之间的切换
		$('.details_top_top ul li').click(function() {
			$(this).siblings().removeClass("details_top_select");
			$(this).addClass("details_top_select");

			//按任意一个导航条的时候，另一个也会改变
			var index = $(this).index();
			$('.select_absouble ul li').removeClass("details_top_select");
			$('.select_absouble ul li').eq(index).addClass('details_top_select');
			$('.select_none ul li').removeClass("details_top_select");
			$('.select_none ul li').eq(index).addClass('details_top_select');

		});

		//		console.log($('.details_top_top ul li').length);
		$('.details_top_top ul li').eq(0).click(function() {
			$('.goods_details').show();
			$('.details_goods_one').show();
			$('.goods_comment').show();
			$('.quality').show();
			$('.quality_box').show();
		});
		$('.details_top_top ul li').eq(1).click(function() {
			$('.goods_details').hide();
			$('.details_goods_one').hide();
			$('.goods_comment').show();
			$('.quality').show();
			$('.quality_box').show();
		});
		$('.details_top_top ul li').eq(2).click(function() {
			$('.goods_details').hide();
			$('.details_goods_one').hide();
			$('.goods_comment').hide();
			$('.quality').show();
			$('.quality_box').show();
		});
		$('.details_top_top ul li').eq(3).click(function() {
			$('.goods_details').hide();
			$('.details_goods_one').hide();
			$('.goods_comment').hide();
			$('.quality').hide();
			$('.quality_box').show();
		});
		$('.details_top_top ul li').eq(4).click(function() {
			$('.goods_details').show();
			$('.details_goods_one').show();
			$('.goods_comment').show();
			$('.quality').show();
			$('.quality_box').show();
			$(window).scrollTop(750);
		});
		$('.details_top_top ul li').eq(5).click(function() {
			$('.goods_details').hide();
			$('.details_goods_one').hide();
			$('.goods_comment').show();
			$('.quality').show();
			$('.quality_box').show();
			$(window).scrollTop(750);
		});
		$('.details_top_top ul li').eq(6).click(function() {
			$('.goods_details').hide();
			$('.details_goods_one').hide();
			$('.goods_comment').hide();
			$('.quality').show();
			$('.quality_box').show();
			$(window).scrollTop(750);
		});
		$('.details_top_top ul li').eq(7).click(function() {
			$('.goods_details').hide();
			$('.details_goods_one').hide();
			$('.goods_comment').hide();
			$('.quality').hide();
			$('.quality_box').show();
			$(window).scrollTop(750);
		});

	})

	//返回首页
	$(".header_top_box_left ul li").first().click(function() {
		location.href = 'index.html';
	})

	//关闭购物车提示框
	$(".close_jumobox").click(function() {
		$(".jumpbox").hide();
	})
	$(".count_shopping").click(function() {
			$(".jumpbox").hide();
			location.reload();
		})
		//打开购物车提示框
	$(".addToCar").click(function() {
		$(".jumpbox").show();
		getCookie();
	})
	$(".details_top_goucar").click(function() {
			$(".jumpbox").show();
			getCookie();
		})
		//去购物车页面
	$(".go_count").click(function() {
		location.href = "goucar.html"
	})

	//增加cookie值得函数：
	function getCookie() {
		//要加入购物车的商品信息
		//					var goodsImg = $(".listImg li:first").html();
		//					var goodsName = $("#name h1").html();
		//					var goodsPrice = $(".p-price").html(); 
		//得到该商品的id  goodsId 已获取

		//获取加入购物车的数量：
		var num = parseInt($("#goodsnum").val());

		//获取之前保存在cookie中的购物车信息
		var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];

		//遍历查找是否之前的购物车cookie中存在即将添加的商品
		var isExist = false; //表示是否存在该商品
		for(var i = 0; i < arr.length; i++) {
			//如果存在该商品, 把数量增加
			if(goodsId == arr[i].id) {
				arr[i].num = arr[i].num + num;
				isExist = true; //表示存在该商品
			}
		}

		//如果不存在, 则添加一个新商品
		if(!isExist) {
			//商品对象
			var goods = {
				id: goodsId,
				num: num //商品数量
			}
			arr.push(goods);
		}

		//保存到cookie中
		$.cookie("cart", JSON.stringify(arr), {
			expires: 30,
			path: "/"
		});
		console.log($.cookie("cart"));
	}

	//
})