from django.contrib import admin
from .models import TemplateEmail

class EmailAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "subject", "message")

admin.site.register(TemplateEmail, EmailAdmin)