from rest_framework import serializers
from .models import MathPage

class ScoreSerializer(serializers.ModelSerializer):
    class Meta: 
        model = MathPage
        fields = '__all__'