from django.db import models

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=150)
    date_of_event = models.DateField()
    address = models.CharField(max_length=200)
    