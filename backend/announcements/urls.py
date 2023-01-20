from django.urls import path, include
from announcements import views

urlpatterns = [
    path('', views.announcement_list),
    path('<int:pk>/', views.announcement_detail)
]