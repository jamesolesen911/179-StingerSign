"""
Definition of urls for DjangoWebProject1.
This mostly ties urls to methods in views.py
"""

from datetime import datetime
from django.urls import path
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from app import forms, views


# variables inherited from django, replaced string value
# handler404 = 'app.views.error_handler_404'
# handler500 = 'app.views.error_handler_500'

from app.views import register_view

# set the urls to views & gives them a name
# example : path('about/', views.about, name='about')
#  "about/" is url part & allows html to do something like:  <a href="about">About</a>
#  "views.about" is method that controls how page looks like the page looks
urlpatterns = [
    path('', views.home, name='home'),
    path('history/', views.history, name="history"),
    path('people/', views.people, name="people"),
    path('login/',
         LoginView.as_view
         (
             template_name='app/login.html',
             authentication_form=forms.BootstrapAuthenticationForm,
             extra_context=
             {
                 'title': 'Log in',
                 'year' : datetime.now().year,
             }
         ),
         name='login'),
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
    path('admin/', admin.site.urls),
    path('register/', register_view)
]
