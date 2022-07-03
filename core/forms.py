from django.forms import ModelForm
from .models import *


#FORMULARIO DE VEHICULOS 
class ProductoForm(ModelForm):
    class Meta:
        #MODELO DE LA BASE DE DATOS
        model = Producto
        #LOS DATOS REQUERIDOS QUE DEBEN INGRESAR EN EL FORMULARIO
        fields = ['codigo', 'producto', 'descripcion', 'categoria', 'stock', 'precio']

class PromocionForm(ModelForm):
    class Meta:
        #MODELO DE LA BASE DE DATOS
        model = Promocion
        #LOS DATOS REQUERIDOS QUE DEBEN INGRESAR EN EL FORMULARIO
        fields = ['codigo', 'nombrePromocion', 'descripcion', 'tipo', 'fecha', 'producto']