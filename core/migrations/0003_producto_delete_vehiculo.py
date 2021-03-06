# Generated by Django 4.0.4 on 2022-07-02 05:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_categoria_idcategoria_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('codigo', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('producto', models.CharField(max_length=20)),
                ('descripcion', models.CharField(max_length=50)),
                ('stock', models.IntegerField()),
                ('precio', models.IntegerField()),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.categoria')),
            ],
        ),
        migrations.DeleteModel(
            name='Vehiculo',
        ),
    ]
