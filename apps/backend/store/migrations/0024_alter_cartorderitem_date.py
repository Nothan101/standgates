# Generated by Django 4.2 on 2023-11-30 13:19

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0023_alter_gallery_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartorderitem',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
