from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^$', views.index,name='index'),
    url(r'^goodsinfo/$', views.goodsinfo, name='goodsinfo'),
    url(r'^goucar/$', views.goucar, name='goucar'),
    url(r'^onload/$', views.onload, name='onload'),
    url(r'^register/$', views.register, name='register'),
]