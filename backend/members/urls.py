from django.urls import path
from . import views

urlpatterns=[
    path('',views.member_list),
    path('<int:pk>/', views.member_detail),
    
] 