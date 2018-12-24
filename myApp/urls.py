from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'myApp'
urlpatterns = [
    path('home', views.Home, name='home'),
    path('about', views.Page, name='about'),
    path('change', views.Change, name='change'),
]
