from django.conf.urls import url 
from echos import views

urlpatterns = [ 
    url(r'api/echos$', views.echo_list),
    url(r'api/echos/(?P<pk>[0-9]+)$', views.echo_detail),
]