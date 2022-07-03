from itertools import product
from django.db import models


class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True)
    nombreCategoria = models.CharField(max_length=20)
    

    def __str__(self) -> str:
        return self.nombreCategoria

class Producto(models.Model):
    codigo = models.CharField(primary_key=True, max_length=10)
    producto = models.CharField( max_length=30)
    descripcion = models.TextField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    stock = models.IntegerField()
    precio = models.IntegerField()


    def __str__(self) -> str:
        return self.producto+" "+self.codigo

class Promocion(models.Model):
    codigo = models.CharField(primary_key=True, max_length=20)
    descripcion = models.TextField()
    nombrePromocion = models.CharField(max_length=40)
    tipo = models.CharField(max_length=30)
    fecha = models.CharField(max_length=30)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombrePromocion