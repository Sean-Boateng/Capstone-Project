from django.contrib import admin
from .models import EventFlyer

# Register your models here
class PictureAdmin(admin.ModelAdmin):
    readonly_fields=('id',)
admin.site.register(EventFlyer, PictureAdmin)