from django.urls import path

from .views import ClientList,ClientListId

urlpatterns = [
    path('client/', ClientList.as_view(),name='client_list'),
    path('client/<int:pk>', ClientListId.as_view(),name='client_id'),
    
]
