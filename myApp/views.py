from django.shortcuts import render


# Create your views here.
from myApp.models import Data
def Home(request):
    # return render(request, 'myApp/home.html', {'data':data})
    return render(request, 'myApp/home.html')

def Page(request):
    # return render(request, 'myApp/home.html', {'data':data})
    return render(request, 'myApp/about.html')