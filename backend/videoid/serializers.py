from rest_framework import serializers
from videoid.models import VideoId

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoId
        fields = 'id', 'videoid','speaker','title'
        depth=1