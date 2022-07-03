from itertools import product
from django.shortcuts import render, redirect
from .forms import ProductoForm, PromocionForm
from .models import *
from django.contrib.auth.forms import UserCreationForm


def registro(request):

    if request.method == 'POST':
        user = UserCreationForm(request.POST)
        if user.is_valid():
            user.save()
            return redirect(to="login")
    else:

        return render(request, 'core/registro.html', {'form':UserCreationForm()})

def home(request):
    lista ={''}
    contexto = {'productos': Producto.objects.all()}
    return render(request, 'core/home.html', contexto)

def agregarProducto(request):
    datos = {"form":ProductoForm()}

    if request.method == "POST":
        form = ProductoForm(request.POST) 
        if form.is_valid:
            form.save()
            datos["mensaje"] = "Producto agregado!." 
    return render(request, 'core/agregarProducto.html', datos)

def modificarProducto(request, id):

    producto = Producto.objects.get(codigo=id)
    datos = {"form":ProductoForm(instance=producto)}
    if request.method == "POST":
        form = ProductoForm(request.POST, instance=Producto)
        if form.is_valid:
            form.save()
            datos["mensaje"] = "Producto modificado!."
            datos['form'] = form
    return render(request, 'core/modificarProducto.html', datos)


def eliminarProducto(request, id):
    producto = Producto.objects.get(codigo=id)

    producto.delete()

    return redirect(to="home")
    

def agregarPromocion(request):
   
    datos = {"form":PromocionForm()} 
    if request.method == "POST":
        form = PromocionForm(request.POST) 
        if form.is_valid:
            form.save() 
            datos["mensaje"] = "Promocion agregada!." 
    return render(request, 'core/agregarPromocion.html', datos)


def promocion(request):
     lista ={''}
     contexto = {'promocion': Promocion.objects.all() }
     return render(request, 'core/promociones.html', contexto)


def modificarPromocion(request, id):

    Promocion = Promocion.objects.get(codigo=id)
    datos = {"form":PromocionForm(instance=Promocion)}
    if request.method == "POST":
        form = PromocionForm(request.POST, instance=Promocion)
        if form.is_valid:
            form.save()
            datos["mensaje"] = "Promocion modificada!."
            datos['form'] = form
    return render(request, 'core/modificarPromocion.html', datos)


def eliminarPromocion(request, id):
    Promocion = Promocion.objects.get(codigo=id)

    Promocion.delete()

    return redirect(to="home")
    