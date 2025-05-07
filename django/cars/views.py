from django.shortcuts import render
from django.http import HttpResponse
from cars.models.carModel import Car

def car_view(request):
    return HttpResponse(Car.objects.filter(brand__name="Ford"))
# Create your views here.
