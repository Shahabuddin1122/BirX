from django.urls import path

from user import views

urlpatterns = [
    path('add-user', views.add_user, name='add_user'),
    path('login', views.login, name='login'),
    path('check-password', views.check_password, name='check_password'),
]
