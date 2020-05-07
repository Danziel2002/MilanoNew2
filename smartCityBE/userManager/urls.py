from django.urls import path
from . import views

urlpatterns = [
        path('registerUser/', views.registerUser),
        path('giveExp/', views.giveExp),
        path('loginUser/', views.loginUser),
        path('forgotPassword/', views.forgotPassword)
        ]
