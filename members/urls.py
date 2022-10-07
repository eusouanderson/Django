from django.urls import path
from . import views

urlpatterns = [

  path('', views.initialPag, name='index3.html'),
  path('about.html', views.about, name='about.html'),
  path('fruit.html', views.fruit, name='fruit.html'),
  path('testimonial.html', views.testimonial, name='testimonial.html'),
  path('contact.html', views.contact, name='contact.html'),
  path('login.html', views.login, name='login.html'),
  path('login.html/login/add', views.loginad, name='login.html'),


  path('index.html/', views.index, name='index.html'),
  path('index.html/add/', views.add, name='add'),
  path('index.html/add/addrecord/', views.addrecord, name='addrecord'),
  path('index.html/delete/<int:id>', views.delete, name='delete'),
  path('index.html/update/<int:id>', views.update, name='update'),

]
