from django.db import models

# Create your models here.
class Announcement(models.Model):
    announcements = models.CharField(max_length=100)
    details = models.CharField(max_length=180)