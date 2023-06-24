from django.db import models


class PromoCode(models.Model):
    id: models.AutoField = models.AutoField(primary_key=True)
    promocode: models.CharField = models.CharField(max_length=100, unique=True)
    utm_source: models.CharField = models.CharField(max_length=100, blank=True, null=True)
    utm_campaign: models.CharField = models.CharField(max_length=100, blank=True, null=True)
    is_used: models.BooleanField = models.BooleanField(default=False)
