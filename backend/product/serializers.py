from rest_framework import serializers
from .models import Product, Size, Color, Image


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['id', 'name']


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'name']


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'url']


class ProductSerializer(serializers.ModelSerializer):
    size = SizeSerializer(many=True)
    colors = ColorSerializer(many=True)
    images = ImageSerializer(many=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'size', 'colors', 'categories', 'price', 'quantity', 'discount',
                  'barcode', 'images']

    def create(self, validated_data):
        sizes_data = validated_data.pop('size')
        colors_data = validated_data.pop('colors')
        images_data = validated_data.pop('images')
        product = Product.objects.create(**validated_data)

        # Handle ManyToMany relationships
        for size_data in sizes_data:
            size, created = Size.objects.get_or_create(name=size_data['name'])
            product.size.add(size)

        for color_data in colors_data:
            color, created = Color.objects.get_or_create(name=color_data['name'])
            product.colors.add(color)

        for image_data in images_data:
            image, created = Image.objects.get_or_create(url=image_data['url'])
            product.images.add(image)

        return product
