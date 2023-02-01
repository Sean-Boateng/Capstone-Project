from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Event
from .serializers import EventSerializer




@api_view(['GET', 'POST'])
def event_list(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events,many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data = request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


@api_view(['DELETE','PUT'])
def event_detail(request,pk):
    if request.method =='DELETE':
        event = get_object_or_404(Event,pk=pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method =='PUT':
        event = get_object_or_404(Event,pk=pk)
        serializer = EventSerializer(event, data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
  

