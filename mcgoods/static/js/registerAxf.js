$(function () {
    // // document.documentElement.style.fontSize = innerWidth / 320 * 16 + 'px'
    // $('.register').width(innerWidth)

    // 账号验证
    $('#account input').blur(function () {
        if($(this).val() == '') return

        // 数字、字母
        var reg = /^[A-Za-z0-9]+$/
        if (reg.test($(this).val())) {  // 符合
            // ajax,获取账号是否可用
            $.get('/checkaccount/', {'account':$(this).val()},function (response) {
                console.log(response)
                if (response.status == 1){  // 可用
                    $('#account p').html('')
                    $('#account').removeClass('has-error').addClass('has-success')
                    $('#account span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                } else {    // 不可用
                    $('#account p').html(response.msg)
                    $('#account').removeClass('has-success').addClass('has-error')
                    $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                }
            })

        } else {    // 不符合
            $('#account p').html('账号由数字、字母组成')
            $('#account').removeClass('has-success').addClass('has-error')
            $('#account span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })


    // 密码验证
    $('#password input').blur(function () {
        if($(this).val() == '') return

        // 数字
        var reg = /^[\d]{6,12}$/
        if (reg.test($(this).val())) {  // 符合
            $('#password p').html('')
            $('#password').removeClass('has-error').addClass('has-success')
            $('#password span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {    // 不符合
            $('#password p').html('6~12位纯数字')
            $('#password').removeClass('has-success').addClass('has-error')
            $('#password span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 确认密码
    $('#passwd input').blur(function () {
        if($(this).val() == '') return

        // 数字
        if ($(this).val() == $('#password input').val()) {  // 符合
            $('#passwd p').html('')
            $('#passwd').removeClass('has-error').addClass('has-success')
            $('#passwd span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {    // 不符合
            $('#passwd p').html('两次密码不一致')
            $('#passwd').removeClass('has-success').addClass('has-error')
            $('#passwd span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })


    // 用户名
    $('#name input').blur(function () {
        if($(this).val() == '') return

        $('#name').removeClass('has-error').addClass('has-success')
        $('#name span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
    })



    // 手机验证
    $('#phone input').blur(function () {
        if($(this).val() == '') return

        // 手机
        var reg = /^1[3|5|7|8|]\d{9}$/
        if (reg.test($(this).val())) {  // 符合
            $('#phone p').html('')
            $('#phone').removeClass('has-error').addClass('has-success')
            $('#phone span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {    // 不符合
            $('#phone p').html('请输入正确的手机号')
            $('#phone').removeClass('has-success').addClass('has-error')
            $('#phone span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })



})