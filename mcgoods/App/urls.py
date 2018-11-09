from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^$', views.index,name='index'),
    url(r'^goodsinfo/(\d+)/$', views.goodsinfo, name='goodsinfo'),
    url(r'^goucar/$', views.goucar, name='goucar'),

    url(r'^onload/$', views.onload, name='onload'),
    url(r'^register/$', views.register, name='register'),
url(r'^checkaccount/$', views.checkaccount, name='checkaccount'), # 账号验证
    url(r'^logout/$', views.logout, name='logout'),
]