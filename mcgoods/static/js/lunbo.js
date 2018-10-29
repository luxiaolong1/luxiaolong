$(function(){
	
	
	
	
	$.get("json/lunbo.json",function(data){
		
		for(var j=0 ; j<data.length;j++){
			var img = data[j].img;
			
			var  $Li = $('<li><img src=' + img +'/></li>');
			$('#lunbo_list1').append($Li);
			$('#lunbo_list2').append("<li></li>")
//			console.log(j);
		}
		
//		var iWidth = oLi[0].offsetWidth;
//		oList.style.width = iWidth*oLi.length +"px";

		var width = 1090 * (data.length+2);
//		console.log($('#lunbo_list1>li').eq(0).offset().left);
		$('#lunbo_list1').width(width);
		$('#lunbo_list1').height(350);
//		console.log($("#lunbo_list1 li").width());

		$('#lunbo').height(350);
		
		
		
//		console.log(i)
		lunbo();
		

		
	})
	

	
	function lunbo(){
					var _list1 = $('#lunbo_list1');
					var _list2 = $('#lunbo_list2');
					var _li1 = $('#lunbo_list1 li');
					var _li2 = $('#lunbo_list2 li');
					
					_li1.first().clone().appendTo(_list1);
					
//					var length = $('#list li').first().width();
	//				console.log(length);
					var size = $('#lunbo_list1 li').length;
//					console.log(size);
	
					var i = 0;  //即将显示的图片下标
					
					if(i==0){
							$('#lunbo_list2 li').eq(0).addClass('active');
						}
					
					var timer = setInterval(function(){
						i++;
						move();
					},3000)
					
					
					function move(){
						
						//判断是否超出右边界
						if(i >= size){
							_list1.css('left',0); //瞬间移动到第一张图
							i = 1;// 即将移动到下一张图
						}
						
						//动画移动
						_list1.stop().animate({left:-i*1090},500);
						
						//更改按钮的状态
						
						
						
						_li2.removeClass('active').eq(i).addClass('active');
						
						if(i == size-1){
							_li2.removeClass().eq(0).addClass('active');
						}
					}
					
					
					
					//按钮的移入事件
					_li2.mouseenter(function(){
						i = $(this).index();
						move();
					})
					
					$('#lunbo').hover(function(){//mouseenter
							clearInterval(timer);
						},function(){//mouseleave
							timer = setInterval(function(){
								i++;
								move();
							},3000)
					})
				}
	
			

			
	
	
})