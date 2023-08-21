from django.db import models
from user_app.models import CustomUser
# Create your models here.
class MathPage(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    score_value = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'score __str__ {self.score_value}'