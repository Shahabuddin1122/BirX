from django.db import models

from user.models import User


class Size(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Color(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Image(models.Model):
    url = models.CharField(null=True, default=None)

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


class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='OrderProduct')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    delivery_date = models.DateField(null=True, blank=True)
    delivery_fee = models.DecimalField(max_digits=10, decimal_places=2, default=100.00)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def calculate_total_price(self):
        total = sum([op.product.price * op.quantity for op in self.orderproduct_set.all()])
        self.total_price = total + self.delivery_fee
        self.save()


class OrderProduct(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    size = models.CharField(max_length=50, default='Medium')
    color = models.CharField(max_length=255, default='Black')

    def __str__(self):
        return f'{self.quantity} of {self.product.name}'


class CartProduct(models.Model):
    cart = models.ForeignKey('Cart', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    size = models.CharField(max_length=50, default='Medium')
    color = models.CharField(max_length=255, default='Black')

    def __str__(self):
        return f'{self.quantity} of {self.product.name} in cart'


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='CartProduct')  # Use CartProduct as intermediate model
