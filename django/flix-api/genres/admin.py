from django.contrib import admin
from genres.models import Genre

@admin.register(Genre)
class genreAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
