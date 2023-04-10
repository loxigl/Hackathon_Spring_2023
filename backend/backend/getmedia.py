import os
from urllib.parse import unquote

import mimetypes
from django.http import FileResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings


@api_view(["GET"])
def get_media_path(request, path):
    if not os.path.exists(f"{settings.MEDIA_ROOT}/{path}"):
        return Response("No such file exists.", status=404)
    mimetype = mimetypes.guess_type(path, strict=True)
    file_path = unquote(os.path.join(settings.MEDIA_ROOT, path)).encode("utf-8")
    return FileResponse(open(file_path, "rb"), content_type=mimetype)
