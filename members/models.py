from django.db import models


class Members(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    firstlogin = models.CharField(max_length=255)
    userlogin = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
