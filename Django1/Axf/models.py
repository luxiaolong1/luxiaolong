from django.db import models

# Create your models here.
# 基础 类
class Base(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=20)

    class Meta:
        abstract = True
    def __str__(self):
        return self.name

# 轮播图 模型类
class Wheel(Base):
    class Meta:
        db_table = 'axf_wheel'
# 导航 模型类
class Nav(Base):
    class Meta:
        db_table = 'axf_nav'

# 每日必购 模型类
class Mustbuy(Base):
    class Meta:
        db_table = 'axf_mustbuy'

