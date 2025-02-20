from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'genre', 'rating', 'publication_date', 'cover_image', 'cover_image_url']

    def get_cover_image_url(self, obj):
        return obj.cover_image.url if obj.cover_image else None
