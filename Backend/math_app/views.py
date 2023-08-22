from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import MathPage
from .serializers import ScoreSerializer
# Create your views here.

class ScoreList(APIView):
    authentication_classes= [TokenAuthentication]
    permission_classes= [IsAuthenticated]

    def _get_score_data(self, scores):
        score_data = []
        for score in scores:
            user_data = {
                'username' : score.user.username,
                'score_value': score.score_value,
                'timestamp': score.timestamp,
            }
            score_data.append(user_data)
        return score_data

    def get(self,request):
        scores = MathPage.objects.all()
        score_data = self._get_score_data(scores)
        return Response({'scores': score_data})
    
    def post(self, request):
        serializer = ScoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print('err', serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TopScores(APIView):
    authentication_classes= [TokenAuthentication]
    permission_classes= [IsAuthenticated]       

    def _get_score_data(self, scores):
        score_data = []
        for score in scores:
            user_data = {
                'username': score.user.username,
                'score_value': score.score_value,
                'timestamp': score.timestamp,
            }
            score_data.append(user_data)
        return score_data

    def get(self, request):
        top_scores = MathPage.objects.all().order_by('-score_value')[:5]
        top_scores_data = self._get_score_data(top_scores)
        return Response({'top_scores': top_scores_data})