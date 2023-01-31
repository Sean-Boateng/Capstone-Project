from django.urls import path
from . import views

urlpatterns=[
    path('',views.video_list),
    path('<int:pk>/', views.video_detail),
    
] 