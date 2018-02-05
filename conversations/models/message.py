from django.contrib.auth.models import User
from django.db import models


class Message(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
