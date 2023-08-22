from django.urls import path
from .views import ScoreList, TopScores

urlpatterns = [
    path('allscores/', ScoreList.as_view(), name='allscores'),
    path('top5scores/', TopScores.as_view(), name='top5scores')
    # path('signup/', Sign_up.as_view(), name='signup')
]