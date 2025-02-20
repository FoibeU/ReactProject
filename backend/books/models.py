import cloudinary
import cloudinary.models
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    genre = models.CharField(max_length=100)
    rating = models.FloatField()
    publication_date = models.DateField()
    cover_image = cloudinary.models.CloudinaryField('image', blank=True, null=True)

    def __str__(self):
        return self.title
