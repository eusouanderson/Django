from django.urls import path
from . import views

urlpatterns = [
  path('', views.index3, name='index3.html'),
  path('membros/', views.index, name='index.html'),
  path('add/', views.add, name='add'),
  path('add/addrecord/', views.addrecord, name='addrecord'),
  path('delete/<int:id>', views.delete, name='delete'),
  path('update/<int:id>', views.update, name='update'),

]
