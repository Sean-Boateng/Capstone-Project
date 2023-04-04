from django.db import models

# Create your models here.
class VideoId(models.Model):
    videoid = models.CharField(max_length=200)
    speaker = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    
    