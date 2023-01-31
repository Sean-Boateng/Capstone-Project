from django.db import models

# Create your models here.
class VideoId(models.Model):
    videoid = models.CharField(max_length=200)
    
    