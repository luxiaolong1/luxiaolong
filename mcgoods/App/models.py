from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=80)
    password = models.CharField(max_length=256)
    tel = models.CharField(max_length=20,unique=True)