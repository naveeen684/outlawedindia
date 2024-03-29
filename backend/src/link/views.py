from django.shortcuts import render
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Link
from .serializer import LinkSerializer

# Create your views here.
class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS

class ExampleView(APIView):
    permission_classes = [IsAuthenticated|ReadOnly]

    def get(self, request):
        links = Link.objects.all()
        serializer = LinkSerializer(links,many=True)
        return Response(serializer.data)

    def post(self):
        pass

