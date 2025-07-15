from django.views import View
from django.http import JsonResponse
from genres.models import Genre   
from rest_framework import generics
from genres.serializers import GenreSerializer
# Create your views here.


class GenreView(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer