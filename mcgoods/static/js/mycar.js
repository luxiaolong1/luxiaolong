$(function () {
    total()
    // 加操作
    $('.box_right').click(function () {
        //获取购物车中书数量
        // var carnum = $(this).prev('.box_left').find('#num_mycar').attr('value');
        // console.log(carnum)
        var goodsid = $(this).attr('goodsid')
        var $that = $(this)
        console.log(goodsid)
        $.get('/addcart/',{'goodsid':goodsid},function (response) {
            if (response.status == -1) { // 未登录
                window.open('/login/', target = "_self")
            }else if (response.status == 1){
                $that.prev().show().val(response.number)
                // $that.prev().show().html()
            }
        })
    })

    //减操作
    $('.box_left').click(function () {
        var goodsid = $(this).attr('goodsid')
        console.log(goodsid)
        var $that = $(this)
        $.get('/subcart/',{'goodsid':goodsid},function (response) {
            if (response.status == -1){
                window.open('/login/', target = "_self")
            } else if (response.status == 1){
                var number = response.number
                if (number>0){
                    $that.next().show().val(number)
                } else {

                }
            }
        })
    })




    //总计
    function total() {
        var sum = 0
        //遍历操作
        $('.cargoods_type').each(function () {
            var $confirm = $(this).find('.confirm-wrapper')
            var $content = $(this).find('#cargoodssum')
            if ($confirm.find('.glyphicon-ok').length){
                var price = $content.find('.price').attr('price')
                var num = $content.find('#num_mycar').attr('value')
                sum += price * num
            }
        })
        // $('.clearBox .a-m .a-m-menoy').html(parseInt(sum))
    }

})