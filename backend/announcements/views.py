from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Announcement
from .serializers import AnnouncementSerializer




@api_view(['GET', 'POST'])
def announcement_list(request):
    if request.method == 'GET':
        announcement = Announcement.objects.all()
        serializer = AnnouncementSerializer(announcement,many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AnnouncementSerializer(data = request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def announcement_detail(request,pk):
    
    if request.method == 'GET':
        announcement = get_object_or_404(Announcement,pk=pk)
        serializer = AnnouncementSerializer(announcement)
        return Response(serializer.data)
    elif request.method =='PUT':
         announcement = get_object_or_404(Announcement,pk=pk)
         serializer = AnnouncementSerializer(announcement, data = request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response(serializer.data)
    elif request.method == 'DELETE':
        announcement = get_object_or_404(Announcement,pk=pk)
        announcement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
