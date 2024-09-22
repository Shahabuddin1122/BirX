from django.db import models


class Size(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Color(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Image(models.Model):
    url = models.ImageField(upload_to='images/product', null=True, default=None)

    def __str__(self):
        return self.url


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    size = models.ManyToManyField(Size, related_name='products')
    colors = models.ManyToManyField(Color, related_name='products')
    categories = models.CharField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    barcode = models.CharField(default="", max_length=100)
    images = models.ManyToManyField(Image, related_name='products')

    def __str__(self):
        return self.name
