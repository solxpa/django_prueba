from django.contrib import admin
from .models import *

# Register your models here.
#PARA REGISTRAR LAS TABLAS EN EL APARTADO DE ADMIN Y PODER MODIFICAR CONTENIDO
admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(Promocion)



#CRUD - casi listo falta eliminar vehiculos por productos agregarle descuentos
# login - hecho
# cerrar sesión - hecho
# registrarse - hecho
# 2DO CRUD --
