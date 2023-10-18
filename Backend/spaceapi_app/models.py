from django.db import models
from user_app.models import CustomUser
# Create your models here.
class SpaceApi(models.Model):
    date = models.DateField(unique=True)
    explanation = models.TextField()
    hdurl = models.URLField()
    title = models.CharField(max_length=50)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)