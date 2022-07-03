from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView, LogoutView


#   create  -crear autos
#   read    - ver autos
#   update  - modificar autos
#   delete  - eliminar autos

urlpatterns = [
    #1 - CREAR URL | 2 - FUNCIONALIDAD QUE VA A CUMPLIR AL INGRESAR A LA URL  | 3 - ALIAS 
    path('', home, name="home"),
    path('registro', registro, name="registro"),
    path('agregarProducto', agregarProducto, name="agregarProducto"),
    path('agregarPromocion', agregarPromocion, name="agregarPromocion"),
    path('promociones', promocion, name="promociones"),
    # modificarVehiculo/ <id> = tomara todos los validos que esten luego del / y los almacenara en una variable llamada id
    path('modificarProducto/<id>', modificarProducto, name="modificarProducto"),
    path('eliminarProducto/<id>', eliminarProducto, name="eliminarProducto"),
    path('login', LoginView.as_view(template_name='core/login.html'), name="login"),
    path('logout', LogoutView.as_view(template_name='core/logout.html'), name="logout"),
  # path('', promocion, name="promocion"),
]
