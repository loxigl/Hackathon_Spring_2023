from django.utils import timezone

from django.db import models


class Quiz(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.TextField()
    photo = models.ImageField(upload_to='files/')
    create_date = models.DateField(default=timezone.now())
    # Create your models here.
