# Generated by Django 4.0.4 on 2022-07-02 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_producto_delete_vehiculo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='descripcion',
            field=models.CharField(max_length=70),
        ),
        migrations.AlterField(
            model_name='producto',
            name='producto',
            field=models.CharField(max_length=30),
        ),
    ]
