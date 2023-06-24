# Generated by Django 4.2.2 on 2023-06-24 00:30

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="PromoCode",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("promocode", models.CharField(max_length=100, unique=True)),
                ("utm_source", models.CharField(blank=True, max_length=100, null=True)),
                ("utm_campaign", models.CharField(blank=True, max_length=100, null=True)),
                ("is_used", models.BooleanField(default=False)),
            ],
        ),
    ]
