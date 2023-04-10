from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.template.context_processors import media
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
                  path('api/admin/', admin.site.urls),
                  path('api/quiz/', include('quiz.urls')),

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL,
                                                                                         document_root=settings.STATIC_ROOT)
