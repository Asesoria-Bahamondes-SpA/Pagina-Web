from django.db import models

# Create your models here.
class TemplateEmail(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    subject = models.CharField(max_length=100)
    message = models.TextField()

    class Meta:
        app_label = "emails"

    def __str__(self):
        return f"{self.first_name} -- {self.subject}"
    

