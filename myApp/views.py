from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
from django.views.decorators.csrf import csrf_exempt

from myApp.models import Data
def Home(request):
    return render(request, 'myApp/home.html')

def Page(request):
    data = Data.objects.first()
    return render(request, 'myApp/about.html', {'data':data})
@csrf_exempt
def Change(request):
    if request.method == 'POST':
        if request.is_ajax():
            data = request.POST.get('data')
            print(data)
            test = Data.objects.first()
            test.html = data
            test.save()
            return HttpResponse("Ok")
    # response = {}
    # response['cakes'] = CakeOrdered.objects.filter(user=UserProfileInfo.objects.get(user=request.user)).count()
    return HttpResponse("no")