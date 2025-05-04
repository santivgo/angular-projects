from django.contrib import admin
from cars.models import Car, Brand
# Register your models here.

class CarAdmin(admin.ModelAdmin):
    list_display = ('car_model', 'brand', 'car_model_year', 'value')
    search_fields = ('car_model',) # o atributo usado para dar match na pesquisa

class BrandAdmin(admin.ModelAdmin):
    list_display = ('brand',)
    search_fields = ('brand',) # o atributo usado para dar match na pesquisa


admin.site.register(Car, CarAdmin)
admin.site.register(Brand, BrandAdmin)
