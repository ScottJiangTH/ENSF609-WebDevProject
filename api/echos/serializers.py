from rest_framework import serializers 
from api.echos.models import Echos
 
 
class EchosSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Echos
        fields = ('message')