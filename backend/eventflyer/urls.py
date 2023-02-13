from django.urls import path, include
from  eventflyer import views

urlpatterns = [
    path('', views.getAllEfs),
    path('<int:pk>/', views.getById),
    path('<int:pk>/', views.ef_detail),
]