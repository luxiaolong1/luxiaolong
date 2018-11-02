from django.shortcuts import render

# Create your views here.
from Axf.models import Wheel, Nav, Mustbuy


def home(request):
    # 轮播图数据
    wheels = Wheel.objects.all()

    # 每日必购
    navs = Nav.objects.all()

    # 商品部分
    mustbuys = Mustbuy.objects.all()

    data = {
        'title':'首页',
        'wheels':wheels,
        'navs':navs,
        'mustbuys':mustbuys,

    }
    return render(request, 'home/home.html', context=data)


def market(request):
    return render(request, 'market/market.html')


def cart(request):
    return render(request, 'cart/cart.html')


def mine(request):
    return render(request, 'mine/mine.html')