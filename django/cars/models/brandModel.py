from django.db import models

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    brand = models.CharField(max_length=200)

    def __str__(self):
        return self.brand
    class Meta:
        verbose_name = "Marca"