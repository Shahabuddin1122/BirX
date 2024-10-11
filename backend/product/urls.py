from django.urls import path

from product.views import *

urlpatterns = [
    path('add-product', ProductCreateView.as_view(), name='add-product'),
    path('get-product', ProductListView.as_view(), name='get-product'),
    path('get-product/<int:product_id>', ProductDetailView.as_view(), name='get-individual-product'),
    path('order', OrderPlaceView.as_view(), name='order-placed'),
    path('cart', CartView.as_view(), name='cart'),
]
