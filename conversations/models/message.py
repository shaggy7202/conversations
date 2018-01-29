from django.db import models


class Message(models.Model):
    author = models.CharField(max_length=100)
    message = models.TextField()
