from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import SpaceApi
from .serializers import SpaceApiSerializer
# Create your views here.

class SpaceApiFavorites(APIView):
    authentication_classes= [TokenAuthentication]
    permission_classes= [IsAuthenticated]

    def get(self, request):
        user = request.user
        favorite_pics = SpaceApi.objects.filter(user=user)
        serializer = SpaceApiSerializer(favorite_pics, many = True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        user = request.user
        data = request.data

        # Add user info to data before passing it to serializer
        data['user'] = user.id  

        serializer = SpaceApiSerializer(data=data)

        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class deleteFavorite(APIView):
    def delete(self, request, pk):
        user = request.user
        fav_pic = get_object_or_404(SpaceApi, pk=pk, user=user)

        if fav_pic.user!= user:
            return print('hjdf')
        
        fav_pic.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)