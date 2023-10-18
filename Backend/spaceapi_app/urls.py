from django.urls import path
from .views import SpaceApiFavorites, deleteFavorite

urlpatterns = [
    path('favoritePics/', SpaceApiFavorites.as_view(), name='favoritePics'),
    path('favoritePics/<int:pk>/', deleteFavorite.as_view(), name='deleteFavorite')
#    'api/spacepage/'
]