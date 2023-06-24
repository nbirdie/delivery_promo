from django.conf import settings
from django.contrib import admin
from django.urls import path

from promocodes import views


admin.site.site_header = settings.APP_TITLE
urlpatterns = [
    path("fetch-promocode/", views.PromocodeView.as_view(), name="fetch-promocode"),
]
