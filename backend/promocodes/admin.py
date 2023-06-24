from django.contrib.admin import ModelAdmin, register

from promocodes.models import PromoCode


@register(PromoCode)
class PromoCodeAdmin(ModelAdmin):
    list_display = ("pk", "promocode", "utm_source", "utm_campaign", "is_used")
    list_filter = ("is_used",)
    search_fields = ("promocode",)
    ordering = ("pk",)
