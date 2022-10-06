from django.contrib import admin
from django.urls import include, path

urlpatterns = [

    path('startapp/', include('members.urls')),
    path('members/', include('members.urls')),
    path('admin/', admin.site.urls),
]
