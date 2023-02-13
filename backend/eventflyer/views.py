from django.shortcuts import render
from eventflyer.admin import EventFlyer
from rest_framework.decorators import api_view
from .serializers import EventFlyerSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status



# Create your views here.
@api_view(['GET'])
def getAllEfs(request):
    ef = EventFlyer.objects.all()
    serializer = EventFlyerSerializer(ef,many=True)
    return Response(serializer.data)



@api_view(['GET'])
def getById(request,pk):
    ef = get_object_or_404(EventFlyer,pk=pk)
    serializer = EventFlyerSerializer(ef)
    return Response(serializer.data)



@api_view(['DELETE'])
def ef_detail(request,pk):
        ef = get_object_or_404(EventFlyer,pk=pk)
        ef.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    