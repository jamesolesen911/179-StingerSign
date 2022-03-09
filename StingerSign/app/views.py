"""
Definition of views.

This holds methods that returns how a page is supposed to look like
"""

from datetime import datetime
from django.shortcuts import render
from django.http import HttpRequest
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render_to_response, render, redirect
from django.contrib.auth.forms import UserCreationForm

from .models import admin_settings as admin_settings_model
from .models import user_settings as user_settings_model
from .models import recent_alerts as recent_alerts_model
from django.db import connection
# from DjangoWebProject1.DjangoWebProject1.settings import DATABASES

# handles custom error pages
# note: needs (request, exception) for newer versions of django
# currently running older version so using (request) only
def error_handler_404(request):
    return render(request, "app/errors/404.html", {})
def error_handler_500(request):
    return render(request, "app/errors/500.html", {})


def register_view(request):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user_obj = form.save()
        return redirect('/login')
    context = {"form": form}
    return render(request, "app/accounts/register.html", context)


# this is admin home
# login required
# TODO: possibly separate admin homepage from regular homepage
@login_required(login_url='login')
def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/adminhomepage.html',
        {
            'user': recent_alerts_model.objects.all(),
            'title':'Admin Home Page', # this passes in info and html page can use {{ title }}
            'year':datetime.now().year,
        }
    )

# TODO : use this a method like this for a seperate admin homepage
# @login_required(login_url='login')
# def admin_home(request, **args):
#     """Renders the admin home page."""
#     assert isinstance(request, HttpRequest)
#     return render(
#         request,
#         'app/adminhomepage.html',
#         {
#             'title':'Home Page',
#             'year':datetime.now().year,
#         }
#     )

# commented out old home (django)
# def home(request):
#     """Renders the home page."""
#     assert isinstance(request, HttpRequest)
#     return render(
#         request,
#         'app/index.html',
#         {
#             'title':'Home Page',
#             'year':datetime.now().year,
#         }
#     )

# this is page to view history of events
# TODO : make functional
# login required
@login_required(login_url='login')
def history(request):
    """Renders the history page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/history.html',
        {

            'title':'History',
            'year':datetime.now().year,
        }
    )

# this is page to view all the people
# TODO : make functional
# login required
@login_required(login_url='login')
def people(request):
    """Renders the people page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/people.html',
        {
            'title':'People',
            'year':datetime.now().year,
        }
    )

