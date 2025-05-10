from django.shortcuts import render
from django.http import HttpResponse
from cars.models.carModel import Car

def car_view(request):
    print(request.GET.get('search'))
    return HttpResponse(Car.objects.filter(brand__name="Ford").order_by("brand"))
# Create your views here.
