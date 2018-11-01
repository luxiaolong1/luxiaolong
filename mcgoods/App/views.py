from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from App.models import User, Lunbo


def index(request):
    ## 状态保持 - 获取session
    username = request.session.get('username')
    # lunbotu轮播图数据
    lunbos = Lunbo.objects.all()

    # 每日抢购


    data = {
        'username': username,
        'lunbos':lunbos,
    }
    return render(request, 'index.html', context=data)


def goodsinfo(request):

    return render(request, 'goodsinfo.html')


def goucar(request):
    return render(request, 'goucar.html')

# 登陆
def onload(request):
    if request.method == 'GET':
        return render(request, 'onload.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        users = User.objects.filter(username=username, password=password)
        if users.exists():
            user = users.first()
            request.session['username'] = username
            return redirect('app:index')
        else:
            return HttpResponse('用户名或密码错误')


# 注册
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        tel = request.POST.get('tel')
        # 存入数据库
        try:
            user = User()
            user.username = username
            # 加密处理
            user.password = password
            user.tel = tel
            user.save()
            # 状态保持
            request.session['username'] = username
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