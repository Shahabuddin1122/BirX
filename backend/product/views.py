from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from product.models import Product
from product.serializers import ProductSerializer


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
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductDetailView(APIView):
    def get(self, request, product_id):
        product = get_object_or_404(Product, id=product_id)
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
