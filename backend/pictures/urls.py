from django.urls import path, include
from pictures import views



# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    
    path('<int:pk>/', views.getById),
    path('all', views.getallpictures),
]


