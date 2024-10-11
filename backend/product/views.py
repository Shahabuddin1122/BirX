from django.core.paginator import Paginator
from django.db import transaction
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from product.models import Product, OrderProduct, Order, Cart, CartProduct
from product.serializers import *
from user.models import User


# Create your views here.
class ProductCreateView(APIView):
    def post(self, request):
        # Extract form-data fields
        sizes = request.POST.getlist('size')
        colors = request.POST.getlist('colors')
        images = request.FILES.getlist('images')

        product_data = {
            'name': request.POST.get('name'),
            'description': request.POST.get('description'),
            'categories': request.POST.get('categories'),
            'price': request.POST.get('price'),
            'quantity': request.POST.get('quantity'),
            'discount': request.POST.get('discount'),
            'barcode': request.POST.get('barcode'),
            'size': [{'name': size} for size in sizes],  # Prepare size data
            'colors': [{'name': color} for color in colors],  # Prepare color data
            'images': [{'url': image} for image in images]  # Prepare image data
        }

        serializer = ProductSerializer(data=product_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductListView(APIView):
    def get(self, request):
        page_number = request.GET.get('page_number', 1)
        products = Product.objects.all()
        productPerPage = Paginator(products, 2)
        serializer = ProductSerializer(productPerPage.page(page_number).object_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductDetailView(APIView):
    def get(self, request, product_id):
        product = get_object_or_404(Product, id=product_id)
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)


class OrderPlaceView(APIView):
    @transaction.atomic
    def post(self, request):
        try:
            data = request.data
            user, created = User.objects.get_or_create(number=data['number'])
            user.name = data['name']
            user.address = data['address']
            user.save()

            # Extract product and order details
            products_data = data.get('products', [])
            order_data = {
                'user': user.id,
                'status': data['status'],
                'delivery_date': data['delivery_date'],
                'delivery_fee': data['delivery_fee'],  # assuming 'delivery_taka' is equivalent to 'delivery_fee'
                'products': products_data  # Include products in order_data
            }

            # Serialize the order data
            order_serializer = OrderSerializer(data=order_data)

            if order_serializer.is_valid():
                order = order_serializer.save()

                # Calculate the total price after creating the products
                order.calculate_total_price()

                return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
            else:
                return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        orders = Order.objects.all().order_by('-id')
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        try:
            order_id = request.query_params.get('order_id', None)
            assert order_id is not None, "Order ID must be provided."
            order = get_object_or_404(Order, id=order_id)

            assert order.status != 'shipped', "Order is already shipped."

            order.status = 'shipped'
            order.save()

            return Response({"message": "Order status updated to 'shipped' successfully."},
                            status=status.HTTP_200_OK)

        except AssertionError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class CartView(APIView):
    def get(self, request):
        try:
            user_id = request.query_params.get('user_id', None)
            cart = CartProduct.objects.filter(cart__user_id=user_id)
            serializer = CartProductSerializer(cart, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        user_id = request.data.get('user_id')
        product_id = request.data.get('product_id')
        quantity = request.data.get('quantity', 1)
        size = request.data.get('size', 'Medium')
        color = request.data.get('color', 'Black')

        user = get_object_or_404(User, id=user_id)
        cart, created = Cart.objects.get_or_create(user=user)

        product = get_object_or_404(Product, id=product_id)

        cart_product, created = CartProduct.objects.get_or_create(
            cart=cart, product=product, defaults={'quantity': quantity, 'size': size, 'color': color}
        )

        if not created:
            # If the product is already in the cart, update the quantity
            cart_product.quantity += int(quantity)
            cart_product.save()
        serializer = CartProductSerializer(cart_product)

        return Response({"message": "Product added to cart", "data": serializer.data})

    def delete(self, request):
        user_id = request.data.get('user_id', None)
        user = get_object_or_404(User, id=user_id)
        product_id = request.data.get('product_id')

        cart = get_object_or_404(Cart, user=user)
        product = get_object_or_404(Product, id=product_id)

        cart_product = get_object_or_404(CartProduct, cart=cart, product=product)

        cart_product.delete()

        return Response({"message": "Product removed from cart"})

    def put(self, request):
        try:
            user_id = request.data.get('user_id', None)
            product_id = request.data.get('product_id')
            quantity = request.data.get('quantity')

            user = get_object_or_404(User, id=user_id)
            cart = get_object_or_404(Cart, user=user)
            product = get_object_or_404(Product, id=product_id)

            cart_product = get_object_or_404(CartProduct, cart=cart, product=product)

            if quantity:
                cart_product.quantity = int(quantity)
                cart_product.save()
            serializer = CartProductSerializer(cart_product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
