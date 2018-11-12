$(function () {
    // total()
    // 加操作
    Amount()
    $('.box_right').click(function () {
        //获取购物车中书数量
        // var carnum = $(this).prev('.box_left').find('#num_mycar').attr('value');
        // console.log(carnum)
        var goodsid = $(this).attr('goodsid')
        console.log(goodsid)
        var $that = $(this)
        // console.log(goodsid)
        $.get('/addcart/',{'goodsid':goodsid},function (response) {
            if (response.status == -1) { // 未登录
                window.open('/login/', target = "_self")
            }else if (response.status == 1){
                $that.prev().show().val(response.number)
                Amount()
                window.open('/goucar/', target = "_self")
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
                    Amount()
                    window.open('/goucar/', target = "_self")
                } else {
                    $that.parents("li").remove();
                }
            }
        })
    })

    //# 删除
    $('#id').click(function () {
        var goodsid = $(this).attr('goodsid')
        $.get('/delgoods/',{'goodsid':goodsid},function (response) {
            if (response.status == 1){
                $(this).parents("li").remove();
                window.open('/goucar/', target = "_self")
                Amount()
            }
        })

    })

    //# 删除carts
    $('.clearcar').click(function () {
        $.get('/delcarts/',function (response) {
            if (response.status == 1){
                window.open('/goucar/', target = "_self")
                Amount()
            }
        })
    })



    //总计
    function Amount() {
        var sum = 0
        //遍历操作
        $('.cargoods_type').each(function () {
            var price = $(this).find('.price').attr('price')
            // console.log(price)
            var num = $(this).find('#num_mycar').attr('value')
            // console.log(num)
            sum += price * num
        })
        $('.clearBox .a-m-menoy').html(parseInt(sum))
    }

    // 下单
    // $('.a-m-a').click(function () {
    //     $.get('/generateorder/', function (response) {
    //         console.log(response)
    //         if (response.status == 1){  // 跳转到订单详情
    //             window.open('/orderinfo/'+response.identifier +
    //             '/', target='_self')
    //         }
    //     })
    // })
})