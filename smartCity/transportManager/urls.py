from django.urls import path
from . import views

urlpatterns = [
        path('scaner/', views.scanComponent)
        ]
