#!/usr/bin/env python
"""
Command-line utility for administrative tasks.

# For more information about this file, visit
# https://docs.djangoproject.com/en/2.1/ref/django-admin/
"""

import os
import sys

from requests import get

ip_public = get('https://api.ipify.org').content.decode('utf8')

if __name__ == '__main__':

    
    os.environ.setdefault(
        'DJANGO_SETTINGS_MODULE',
        'StingerSign.settings')

    try:
        from django.core.management.commands.runserver import Command as runserver
        import socket
        ipv4 = socket.gethostbyname(socket.gethostname())
        runserver.default_port = "51000" # changes default port
        #runserver.default_addr=ip_public
        runserver.default_addr=ipv4     # changes default address
        print(f"public access at http://{ip_public}:{runserver.default_port}")
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
    
