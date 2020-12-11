from django.db import models

class Echo(models.Model):
    message = models.CharField(max_length=70, blank=False, default='')