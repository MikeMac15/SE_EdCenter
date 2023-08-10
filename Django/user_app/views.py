from django.shortcuts import render
from .models import Web_user
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.http import HttpResponse
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)

# Create your views here.

class Sign_up(APIView):
    def post(self, request):
        request.data["username"] = request.data["email"]
        user = Web_user.objects.create_user(**request.data)
        token = Token.objects.create(user=user)
        return Response(
            {"user": {'email': user.email}, 'token': token.key}, status=HTTP_201_CREATED
        )

class Info(APIView): 
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request):
        return Response({'email': request.user.email})
    
class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self,request):
        request.user.auth_token.delete()
        return Response(status=HTTP_204_NO_CONTENT)

class Log_in(APIView):
    def post(self, request):
        request.data['username'] = request.data['email']
        user = authenticate(**request.data)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'user': {user.email}, 'token': token.key})
        else:
            return Response('error bad request', status=HTTP_400_BAD_REQUEST)
