from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^$', views.index,name='index'),
    url(r'^goodsinfo/(\d+)/$', views.goodsinfo, name='goodsinfo'),
    url(r'^goucar/$', views.goucar, name='goucar'),

    url(r'^onload/$', views.onload, name='onload'),      # 登陆
    url(r'^register/$', views.register, name='register'), # 注册
    url(r'^checkaccount/$', views.checkaccount, name='checkaccount'), # 账号验证
    url(r'^logout/$', views.logout, name='logout'),     # 退出

    url(r'^addtocar/$', views.addtocar, name='addtocar'), # 一次性添加
    url(r'^addcart/$', views.addcart, name='addcart'),  # 添加购物车
    url(r'^subcart/$', views.subcart, name='subcart'),  # 购物车减操作
    url(r'^changecartstatus/$', views.changecartstatus, name='changecartstatus'),  # 修改选中状态
    url(r'^changecartselect/$', views.changecartselect, name='changecartselect'),  # 全选/取消全选
]