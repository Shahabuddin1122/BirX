from rest_framework import serializers
from .models import Product, Size, Color, Image, OrderProduct, Order


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


class OrderProductSerializer(serializers.ModelSerializer):
    product_id = serializers.PrimaryKeyRelatedField(source='product', queryset=Product.objects.all())
    product_details = ProductSerializer(source='product', read_only=True)

    class Meta:
        model = OrderProduct
        fields = ['product_id', 'product_details', 'quantity', 'size', 'color']


class OrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True, write_only=True)  # Write products during creation
    products_details = OrderProductSerializer(source='orderproduct_set', many=True, read_only=True)  # Read product details for the response
    total_price = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'status', 'delivery_date', 'delivery_fee', 'total_price', 'products', 'products_details']

    def create(self, validated_data):
        products_data = validated_data.pop('products')  # Extract products data from request
        order = Order.objects.create(**validated_data)  # Create the order

        # Create OrderProduct instances for each product
        for product_data in products_data:
            product = product_data['product']
            quantity = product_data['quantity']
            color = product_data['color']
            size = product_data['size']
            OrderProduct.objects.create(order=order, product=product, quantity=quantity, color=color, size=size)

        # After adding products, calculate the total price
        order.calculate_total_price()
        return order
