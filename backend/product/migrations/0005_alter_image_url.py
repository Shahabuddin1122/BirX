# Generated by Django 5.1.1 on 2024-10-11 20:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_cart_cartproduct_cart_products'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='url',
            field=models.CharField(default=None, null=True),
        ),
    ]
