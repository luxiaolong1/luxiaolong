$(function() {

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
    _smallImg.mousemove(function (e) {
        _smallArea.show(); //显示小区域
        _bigArea.show();
        //clientX: 可视区域的x值
        //pageX: 距离窗口左边的x值
        var x = e.pageX - _smallImg.offset().left - _smallArea.width() / 2;
        var y = e.pageY - _smallImg.offset().top - _smallArea.height() / 2;
        //console.log(e.clientX);
        //console.log(e.pageX);

        //控制小区域范围在小图内
        if (x <= 0) { //不超出左边
            x = 0;
        } else if (x >= _smallImg.width() - _smallArea.width()) { //不超出右边
            x = _smallImg.width() - _smallArea.width();
        }
        if (y <= 0) { //不超出上边
            y = 0;
        } else if (y >= _smallImg.height() - _smallArea.height()) { //不超出下边
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
    _smallImg.mouseleave(function () {
        _smallArea.hide(); //隐藏小区域
        _bigArea.hide();
    })



	$('.addToCar').click(function () {
		// 购物车选择的数量
		var gooodmun = $(this).prev('.choose_num_box').find('#goodsnum').attr('value');
		console.log(gooodmun)
		// 商品id
        var goodsid = $(this).attr('goodsid')
        console.log(goodsid)
		// that为了解决，在ajax中，this指向问题
		var $that = $(this)
		$.get('/addtocar/',{'goodsid':goodsid,'gooodmun':gooodmun}, function (response) {
			// console.log(response)
			if (response.status == -1){   // 未登录
				window.open('/onload/', target='_self')
			} else if (response.status == 1){ // 添加成功
				// console.log('添加成功')

			}
        })

    })

    //加入购物车鼠标放上去效果
    $(".addToCar").hover(function () {
        $(this).addClass("addToCarhover");
    }, function () {
        $(this).removeClass("addToCarhover");
    })

    //购物数量的增减
    $(".choose_num_add").click(function () {
        var oldnum = $("#goodsnum").val();
        $("#goodsnum").val(parseInt(oldnum) + 1);
        $('#goodsnum').attr('value',$("#goodsnum").val())

    })
    $(".choose_num_next").click(function () {
        var oldnum = $("#goodsnum").val();
        if (oldnum <= 1) {
            $("#goodsnum").val(1);
            return;
        }
        $("#goodsnum").val(parseInt(oldnum) - 1);
        $('#goodsnum').attr('value',$('#goodsnum').val())

    })
	


})

