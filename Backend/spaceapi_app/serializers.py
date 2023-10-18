from rest_framework import serializers
from .models import SpaceApi

class SpaceApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpaceApi
        fields = ['date', 'explanation', 'hdurl', 'title','user']

