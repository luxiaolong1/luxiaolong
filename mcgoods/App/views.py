from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')


def goodsinfo(request):
    return render(request, 'goodsinfo.html')


def goucar(request):
    return render(request, 'goucar.html')


def onload(request):
    return render(request, 'onload.html')


def register(request):
    return render(request, 'register.html')