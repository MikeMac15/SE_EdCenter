from django.urls import path
from .views import Log_in, Log_out, Sign_up, Info

urlpatterns = [
    path('', Info.as_view()),
    path('signup/', Sign_up.as_view()),
    path('login', Log_in.as_view()),
    path('logout/', Log_out.as_view())
]