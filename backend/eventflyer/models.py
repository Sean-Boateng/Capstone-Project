from django.db import models

# Create your models here.
class EventFlyer(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    image = models.ImageField(upload_to="images")