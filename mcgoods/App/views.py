import hashlib
import os
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import User, Lunbo, Special, Goodsinfo, Goucar
from mcgoods import settings


def index(request):
    # ## 状态保持 - 获取session
    account = request.session.get('account')
    # 获取cookie
    # username = request.session.get('username')

    # lunbotu轮播图数据
    lunbos = Lunbo.objects.all()

    # 每日抢购
    everydayshop = Goodsinfo.objects.all()


    # 特惠专场(6) 今日精选(3)
    specialProduct = Special.objects.all()
    oddsproduct = specialProduct[0:7]
    tadayproduct = specialProduct[7:10]


    data = {
        'account': account,
        'lunbos':lunbos,
        'everydayshop':everydayshop,
        'oddsproduct':oddsproduct,
        'tadayproduct':tadayproduct,

    }

    return render(request, 'index.html', context=data)


# 商品详情
def goodsinfo(request, goodsid):
    # print(goodsid)
    # goodsdetail = Goodsinfo.objects.all()
    goodsdetail = Goodsinfo.objects.filter(goodsid=goodsid)

    aveimgs = goodsdetail[0].aveimg
    avelist = []
    for ave in aveimgs.split('#'):
        avelist.append(ave)
    avelist= avelist[1:2]

    bigimgs = goodsdetail[0].bigimg
    biglist = []
    for big in bigimgs.split('#'):
        biglist.append(big)
    biglist=biglist[1:2]

    smallimgs = goodsdetail[0].smallimg
    smalllist = []
    for small in smallimgs.split('#'):
        smalllist.append(small)
    smalllist=smalllist[1:]

    # 规格standrad_size_select
    sizes = goodsdetail[0].standard
    sizelist = []
    for size in sizes.split('#'):
        sizelist.append(size)
    sizelist=sizelist[1:]

    colors = goodsdetail[0].choosecolor
    colorlist =[]
    for color in colors.split('#'):
        colorlist.append(color)
    colorlist=colorlist[1:]

    types = goodsdetail[0].type
    typelist = []
    for type in types.split('#'):
        typelist.append(type)
    typelist=typelist[1:]

    otherbarnds = goodsdetail[0].otherbarnd
    otherlist = []
    for otherbar in otherbarnds.split('#'):
        otherlist.append(otherbar)
    otherlist=otherlist[1:]

    # goodsintroduce
    goodsintroduce = goodsdetail[0].goodsintroduce
    intrlist = []
    for intro in goodsintroduce.split('#'):
        intrlist.append(intro)
    intrlist1=intrlist[1:2]
    intrlist2=intrlist[2:]
    data = {
        'goodsdetail':goodsdetail,
        'avelist':avelist,
        'biglist':biglist,
        'smalllist':smalllist,
        'sizelist':sizelist,
        'colorlist':colorlist,
        'typelist':typelist,
        'otherlist':otherlist,
        'intrlist1':intrlist1,
        'intrlist2':intrlist2,
    }
    # print(data)
    return render(request, 'goodsinfo.html', context=data)




# 注册
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        account = request.POST.get('account')
        username = request.POST.get('username')
        password = request.POST.get('password')
        tel = request.POST.get('tel')
        # 存入数据库
        try:
            user = User()
            user.account = account
            user.username = username
            # 加密处理
            user.password = password
            user.tel = tel
            user.save()
            # 状态保持
            request.session['account'] = account
            # session超时时间
            # request.session.set_expiry(None)
            # 重定向到首页
            response = redirect('app:index')
            return response
        except Exception as e:
            return HttpResponse("注册失败"+ e)

# 退出
def logout(request):
    response = redirect('app:index')
    request.session.flush()
    return response


# 登陆
def onload(request):
    if request.method == 'GET':
        return render(request, 'onload.html')
    elif request.method == 'POST':
        account = request.POST.get('account')
        password = request.POST.get('password')


        users = User.objects.filter(account=account, password=password)
        if users.exists():
            user = users.first()
            request.session['account'] = account
            return redirect('app:index')
        else:
            responseData = {
                'msg': '账号或密码不可用!',
            }
            return render(request, 'onload.html', context=responseData)

# 账号验证
def checkaccount(request):
    account = request.GET.get('account')

    responseData = {
        'msg': '账号可用',
        'status': 1  # 1标识可用，-1标识不可用
    }

    try:
        user = User.objects.get(account=account)
        responseData['msg'] = '账号已被占用'
        responseData['status'] = -1
        return JsonResponse(responseData)
    except:
        return JsonResponse(responseData)




# 购物车
def goucar(request):
    account = request.session.get('account')
    if account:
        user = User.objects.get(account=account)
        carts = Goucar.objects.filter(user=user).exclude(number=0)
        return render(request, 'goucar.html', context={'carts':carts, 'account':account})
    else: # 跳转到登录页面
        return redirect('app:onload')


# 添加购物车
def addcart(request):
    goodsid = request.GET.get('goodsid')
    account = request.session.get('account')
    responseData = {
        'msg': '添加购物车成功',
        'status': 1  # 1标识添加成功，0标识添加失败，-1标识未登录
    }
    if account:  # 登录 [直接操作模型]
        # 获取用户
        user = User.objects.get(account=account)
        # 获取商品
        goods = Goodsinfo.objects.get(pk=goodsid)

        # 商品已经在购物车，只修改商品个数
        # 商品不存在购物车，新建对象（加入一条新的数据）
        carts = Goucar.objects.filter(user=user).filter(goods=goods)
        if carts.exists():  # 修改数量
            cart = carts.first()
            cart.number = cart.number + 1
            cart.save()
            responseData['number'] = cart.number

        else:  # 添加一条新记录
            cart = Goucar()
            cart.user = user
            cart.goods = goods
            cart.number = 1
            cart.save()

            responseData['number'] = cart.number
        return JsonResponse(responseData)
    else:  # 未登录 [跳转到登录页面]
        # 由于addcart这个是 用于 ajax操作， 所以这里是不能进行重定向!!
        # return redirect('axf:login')
        responseData['msg'] = '未登录，请登录后操作'
        responseData['status'] = -1
        return JsonResponse(responseData)

# 购物车减操作
def subcart(request):
    # 获取数据
    goodsid = request.GET.get('goodsid')
    account = request.session.get('account')
    # 对应用户 和 商品
    user = User.objects.get(account=account)

    goods = Goodsinfo.objects.get(pk=goodsid)

    # 删减操作
    cart = Goucar.objects.filter(user=user).filter(goods=goods).first()
    cart.number = cart.number - 1
    cart.save()

    responseData = {
        'msg': '购物车减操作成功',
        'status': 1,
        'number': cart.number
    }

    return JsonResponse(responseData)


# 修改选中状态
def changecartstatus(request):
    cartid = request.GET.get('cartid')
    cart = Goucar.objects.get(pk=cartid)
    cart.isselect = not cart.isselect
    cart.save()
    responseData = {
        'msg': '选中状态改变',
        'status': 1,
        'isselect': cart.isselect
    }

    return JsonResponse(responseData)


# 全选/取消全选
def changecartselect(request):
    isselect = request.GET.get('isselect')
    if isselect == 'true':
        isselect = True
    else:
        isselect = False

    account = request.session.get('account')
    user = User.objects.get(account=account)
    carts = Goucar.objects.first(user=user)
    for cart in carts:
        cart.isselect = isselect
        cart.save()

        return JsonResponse({'msg': '反选操作成功', 'status': 1})