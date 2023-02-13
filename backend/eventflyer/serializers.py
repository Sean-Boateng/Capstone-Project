from rest_framework import serializers
from eventflyer.models import EventFlyer

class EventFlyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventFlyer
        fields = 'id', 'name', 'date', 'image'