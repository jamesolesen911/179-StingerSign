"""
Django settings for DjangoWebProject1 project.

Based on 'django-admin startproject' using Django 2.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os
import posixpath
import socket
ipv4 = socket.gethostbyname(socket.gethostname())

import dj_database_url


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '93831f99-4120-44fe-b9c3-bfcdfc53eed5'

# SECURITY WARNING: don't run with debug turned on in production!
# TODO: left here as a reminder to change to False when deploying
DEBUG = True
# DEBUG = False
from requests import get

ip_public = get('https://api.ipify.org').content.decode('utf8')
# ALLOWED_HOSTS = [ipv4, ip_public, 'localhost']
ALLOWED_HOSTS = ['*'] # allow all hosts

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Application references
# https://docs.djangoproject.com/en/2.1/ref/settings/#std:setting-INSTALLED_APPS
INSTALLED_APPS = [
    'app', # if rename "app" folder need to update here
    # Add your apps here to enable them
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# Middleware framework
# https://docs.djangoproject.com/en/2.1/topics/http/middleware/
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'StingerSign.urls'

# Template configuration
# https://docs.djangoproject.com/en/2.1/topics/templates/
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'StingerSign.wsgi.application'
# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases
# try:
#
#     # Check to make sure DATABASES is set in settings.py file.
#     # If not default to {}
#
#     if 'DATABASES' not in locals():
#         DATABASES = {}
#
#     if 'DATABASE_URL' in os.environ:
#         url = urlparse.urlparse(os.environ['DATABASE_URL'])
#
#         # Ensure default database exists.
#         DATABASES['default'] = DATABASES.get('default', {})
#
#         # Update with environment configuration.
#         DATABASES['default'].update({
#             'NAME': url.path[1:],
#             'USER': url.username,
#             'PASSWORD': url.password,
#             'HOST': url.hostname,
#             'PORT': url.port,
#         })
#
#
#         if url.scheme == 'mysql':
#             DATABASES['default']['ENGINE'] = 'django.db.backends.mysql'
# except Exception:
#     print('Unexpected error:', sys.exc_info())

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),

        # Heroku mysql server
        #'ENGINE': 'django.db.backends.mysql',
        #'NAME': 'database_name',
        #'NAME': 'heroku_df94c44f2060906',
        #'USER': "b511251df38bfd",
        #'PASSWORD': "2d199c0b",
        #'HOST': 'us-cdbr-east-04.cleardb.com',
        #'PORT': '3306',
    }
}
# heroku
# DATABASES['default'] =  dj_database_url.config()

# Password validation
# https://docs.djangoproject.com/en/2.1/ref/scettings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/
#STATIC_URL = '/static/'
#STATIC_ROOT = posixpath.join(*(BASE_DIR.split(os.path.sep) + ['static']))

# local
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
VENV_PATH = os.path.dirname(BASE_DIR)
STATIC_ROOT = os.path.join(VENV_PATH, 'static_root')

# heroku
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(VENV_PATH, 'staticfiles')
# BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# STATIC_ROOT = 'staticfiles'
# STATIC_URL = '/static/'
# VENV_PATH = os.path.dirname(BASE_DIR)
# STATICFILES_DIRS = (
#     os.path.join(BASE_DIR, 'static'),
# )
