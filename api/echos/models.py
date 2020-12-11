from django.db import models

# Create your models here.
class Echos(models.Model):
    message = models.CharField(max_length=200,blank=False, default='')
