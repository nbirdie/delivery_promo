"""Django settings for project."""
import os

from envparse import env as envparse

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = envparse("DJANGO_SECRET_KEY", default="qwerty", cast=str)
DEBUG = envparse("DJANGO_DEBUG", default=True, cast=bool)
ALLOWED_HOSTS = ["*"]
CSRF_TRUSTED_ORIGINS = ["http://localhost", "http://89.108.99.250"]
CORS_ALLOW_METHODS = ["POST"]
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "promocodes",
]
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]
ROOT_URLCONF = "src.urls"

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
WSGI_APPLICATION = "src.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": envparse("POSTGRES_ENGINE", default="django.db.backends.postgresql", cast=str),
        "NAME": envparse("POSTGRES_NAME", default="postgres", cast=str),
        "USER": envparse("POSTGRES_USER", default="postgres", cast=str),
        "PASSWORD": envparse("POSTGRES_PASSWORD", default="postgres", cast=str),
        "HOST": envparse("POSTGRES_HOST", default="db", cast=str),
        "PORT": envparse("POSTGRES_PORT", default="5432", cast=str),
    },
}
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LOCALE_PATHS = [os.path.join(BASE_DIR, "locale")]
LANGUAGE_CODE = "en"
TIME_ZONE = envparse("DJANGO_TIME_ZONE", default="Europe/Moscow", cast=str)
USE_I18N = True
USE_L10N = True
USE_TZ = True

APP_TITLE: str = envparse("DJANGO_APP_TITLE", "Promocodes service", str)
