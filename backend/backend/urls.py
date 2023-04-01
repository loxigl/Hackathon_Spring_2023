from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/quiz/', include('quiz.urls')),
]
