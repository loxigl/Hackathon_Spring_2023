from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns = [url(r'^api/', include(urlpatterns))]