from django.db import models


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(unique=True)
    address = models.CharField()
    password = models.CharField(max_length=100)
