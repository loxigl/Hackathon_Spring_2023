from django.contrib import admin
from django.urls import path, include

from django.views.decorators.csrf import csrf_exempt

from .getmedia import get_media_path

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/quiz/', include('quiz.urls')),
    path('api/media/<path>', get_media_path, name='media')
]
