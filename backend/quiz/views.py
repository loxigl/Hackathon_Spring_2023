import os
from urllib.parse import unquote

import mimetypes
from django.http import HttpResponse, JsonResponse, FileResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .serializers import QuizSerializer
from .models import Quiz
from django.conf import settings


class QuizView(APIView):

    def get(self, request, id=None):
        if id == None:
            quiz = Quiz.objects.all()
            ser = QuizSerializer(quiz, many=True)
            return JsonResponse(ser.data, safe=False)
        else:
            try:
                quiz = Quiz.objects.get(id=id)
            except Quiz.DoesNotExist:
                return HttpResponse(status=404)
            ser = QuizSerializer(quiz)
            return JsonResponse(ser.data, safe=False)

    @csrf_exempt
    def post(self, request):
        data = JSONParser().parse(request)
        ser = QuizSerializer(data=data)
        if ser.isx_valid():
            ser.save()
            return JsonResponse(ser.data, status=201)
        return JsonResponse(ser.errors, status=400)




# Create your views here.
