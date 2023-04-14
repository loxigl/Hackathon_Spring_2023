from django.utils import timezone

from django.db import models


class Quiz(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(max_length=100, default='Викторина')
    description = models.TextField(max_length=1000)
    photo = models.ImageField(upload_to='files/')
    createDate = models.DateField(default=timezone.now())
    # Create your models here.
