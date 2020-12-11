from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from api.echos.models import Echos
from api.echos.serializers import EchosSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def echos_list(request):
    if request.method == 'GET':
        echos = Echos.objects.all()
        
        message = request.query_params.get('message', None)
        if message is not None:
            echos = echos.filter(title__icontains=message)
        
        echos_serializer = EchosSerializer(echos, many=True)
        return JsonResponse(echos_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        echos_data = JSONParser().parse(request)
        echos_serializer = TutorialSerializer(data=echos_data)
        if echos_serializer.is_valid():
            echos_serializer.save()
            return JsonResponse(echos_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(echos_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Echos.objects.all().delete()
        return JsonResponse({'message': '{} Echos were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def echos_detail(request, pk):
    try: 
        echos = Echos.objects.get(pk=pk) 
    except Tutorial.DoesNotExist: 
        return JsonResponse({'message': 'The echos does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        echos_serializer = EchosSerializer(echos) 
        return JsonResponse(echos_serializer.data) 
 
    elif request.method == 'PUT': 
        echos_data = JSONParser().parse(request) 
        echos_serializer = EchosSerializer(echos, data=echos_data) 
        if echos_serializer.is_valid(): 
            echos_serializer.save() 
            return JsonResponse(echos_serializer.data) 
        return JsonResponse(echos_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        echos.delete() 
        return JsonResponse({'message': 'Echos was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    
        
@api_view(['GET'])
def echos_list_published(request):
    echos = Echos.objects.filter(published=True)
        
    if request.method == 'GET': 
        echos_serializer = EchosSerializer(echos, many=True)
        return JsonResponse(echos_serializer.data, safe=False)