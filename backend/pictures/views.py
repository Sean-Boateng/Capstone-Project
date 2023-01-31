from django.shortcuts import render
from pictures.admin import Picture
from rest_framework.decorators import api_view
from .serializers import PictureSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404



# Create your views here.
@api_view(['GET'])
def getallpictures(request):
    picture = Picture.objects.all()
    serializer = PictureSerializer(picture,many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getById(request,pk):
    picture = get_object_or_404(Picture,pk=pk)
    serializer = PictureSerializer(picture)
    return Response(serializer.data)



  


