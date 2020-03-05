from rest_framework import generics
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated

class ClientList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    
class ClientListId(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    pagination_class = None
