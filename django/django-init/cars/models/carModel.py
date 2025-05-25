from django.db import models
from . import brandModel

class Car(models.Model):
    id = models.AutoField(primary_key=True)
    car_model = models.CharField(max_length=200, null=False) # string
    factory_year = models.IntegerField(blank=True, null=True)
    car_model_year = models.IntegerField(blank=True, null=True)
    value = models.DecimalField(blank=True, null=True, max_digits=12, decimal_places=2)
    brand = models.ForeignKey(brandModel.Brand, on_delete=models.PROTECT, related_name='car_brand')
    plate = models.CharField(null=True, blank=True, max_length=10)
    photo = models.ImageField(null=True, blank=True, upload_to='cars/')

    def __str__(self):
        return self.car_model
    class Meta:
        verbose_name = "carro"
