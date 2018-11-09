import hashlib
import os
import uuid

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import User, Lunbo, Special, Goodsinfo
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


def goucar(request):
    return render(request, 'goucar.html')




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
            return HttpResponse('账号或密码错误')

# 账号验证
def checkaccount(request):
    account = request.session.get('account')

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