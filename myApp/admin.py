from django.contrib import admin
from myApp.models import Data

# Register your models here.
class DataAdmin(admin.ModelAdmin):
    model = Data


admin.site.register(Data, DataAdmin)