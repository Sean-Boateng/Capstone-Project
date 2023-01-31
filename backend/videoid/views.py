
from django.shortcuts import get_object_or_404
from urllib.request import Request
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import VideoSerializer
from .models import VideoId
from rest_framework import status
# Create your views here.
@api_view(['GET', 'POST'])
def video_list(request):
    if request.method == 'GET':
        video = VideoId.objects.all()
        serializer = VideoSerializer(video,many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VideoSerializer(data = request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status= status.HTTP_201_CREATED )


@api_view(['DELETE'])
def video_detail(request,pk):

    member = get_object_or_404(VideoId,pk=pk)
    member.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
