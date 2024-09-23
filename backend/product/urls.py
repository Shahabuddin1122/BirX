from django.urls import path

from product import views
from product.views import *

urlpatterns = [
    path('add-product', ProductCreateView.as_view(), name='add-product'),
    path('get-product/<int:page_number>', ProductListView.as_view(), name='get-product'),
    path('get-product/<int:product_id>', ProductDetailView.as_view(), name='get-individual-product'),
]