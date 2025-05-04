from django.db import models
from . import brandModel

class Car(models.Model):
    id = models.AutoField(primary_key=True)
    car_model = models.CharField(max_length=200, null=False) # string
    factory_year = models.IntegerField(blank=True, null=True)
    car_model_year = models.IntegerField(blank=True, null=True)
    value = models.DecimalField(blank=True, null=True, max_digits=12, decimal_places=2)
    brand = models.ForeignKey(brandModel.Brand, on_delete=models.CASCADE)

    def __str__(self):
        return self.car_model
    class Meta:
        verbose_name = "carro"
