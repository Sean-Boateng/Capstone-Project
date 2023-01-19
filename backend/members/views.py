
from django.shortcuts import get_object_or_404
from urllib.request import Request
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MemberSerializer
from .models import Member
from rest_framework import status

from members import serializers


# Create your views here.
@api_view(['GET', 'POST'])
def member_list(request):
    if request.method == 'GET':
        member = Member.objects.all()
        serializer = MemberSerializer(member,many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MemberSerializer(data = request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status= status.HTTP_201_CREATED )