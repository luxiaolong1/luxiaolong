from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=80)
    password = models.CharField(max_length=256)
    tel = models.CharField(max_length=20)

# 轮播图模型
class Lunbo(models.Model):
    img = models.CharField(max_length=80)


# 商品信息模型
class Goodsinfo(models.Model):
    goodsid = models.CharField(max_length=100, unique=True)
    path1 = models.CharField(max_length=100)
    path2 = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    active = models.CharField(max_length=100)
    shipment = models.CharField(max_length=100)
    menoy = models.CharField(max_length=100)
    oldmenoy = models.CharField(max_length=100)
    standard = models.CharField(max_length=100)
    choosecolor = models.CharField(max_length=100)
    img = models.CharField(max_length=100)
    imgt = models.CharField(max_length=100)
    sall = models.CharField(max_length=100)
    smallimg = models.CharField(max_length=100)
    aveimg = models.CharField(max_length=100)
    bigimg = models.CharField(max_length=100)
    goodsintroduce = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    otherbarnd = models.CharField(max_length=100)


# 特惠专选 今日精选
# 1	1	images/20160930104414_10_1182.jpg	周年庆奶粉	满888送周庆礼  	95
# 2	1	images/20160930102021_10_1182.jpg	周年庆辅食	美味满168减60	4

class Special(models.Model):
    part = models.IntegerField()
    bg_img = models.CharField(max_length=100)
    htwo = models.CharField(max_length=100)
    spano = models.CharField(max_length=100)
    menoy = models.IntegerField()
