			var date1 = new Date("2016-11-30 10:10:10");
			var now = new Date();
			
			var timeInterval = date1.getTime() - now.getTime(); 
			//秒
			var timeSec = timeInterval/1000;  
			
			//开启定时器, 开始倒计时
			setInterval(function(){
				
				timeSec--;
				var day = parseInt(timeSec/24/60/60); //天
				var hour = parseInt(timeSec/60/60) % 24; //时
				var min = parseInt(timeSec/60) % 60; //分
				var sec =  parseInt(timeSec % 60); //秒
				if(hour<10){
					$("#time_hour").html("0"+hour);
					$(".hour").html("0"+hour)
				}else{
					$("#time_hour").html(hour);
					$(".hour").html(hour)
//					$("#productinfo").html("00天"+hour+"天"+min+"分"+sec+"秒");
				}
				if(min<10){
					$("#time_min").html('0'+min);
					$(".min").html('0'+min);
				}else{
					$("#time_min").html(min);
					$(".min").html(min);
				}
				if(sec<10){
					$("#time_second").html('0'+sec);
					$(".sec").html('0'+sec);
				}else{
					$("#time_second").html(sec);
					$(".sec").html(sec);
				}
				
//				if(min<10 && sec<10 && hour<10){
//					$("#productinfo").html("00天"+"0"+hour+"时"+"0"+min+"分"+"0"+sec+"秒");
//				}else if(min>10 && sec<10 && hour<10){
//					if(sec<10 && hour<10){
//						$("#productinfo").html("00天"+"0"+hour+"时"+min+"分"+"0"+sec+"秒");
//					}else if(sec>10 && hour<10){
//						$("#productinfo").html("00天"+"0"+hour+"时"+min+"分"+sec+"秒");
//					}else if()
//					
//				}else if(min>10 && sec<10 && hour<10)
					
				
					
			}, 1000);
			
		
