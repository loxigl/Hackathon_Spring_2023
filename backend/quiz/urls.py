from django.urls import path, include
from .views import QuizView

urlpatterns = [
    path('', QuizView.as_view()),
    path('<int:id>/', QuizView.as_view()),

]
