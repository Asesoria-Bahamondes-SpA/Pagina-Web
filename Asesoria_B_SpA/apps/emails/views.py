from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect
from sendgrid import SendGridAPIClient



def send_email(request):
    

    if request.method=="POST":
        name=request.POST['fullname'] + " " + request.POST["number"]
        
        subject=request.POST['subject']

        message=request.POST['message'] + " " + request.POST['email']

        email_from=settings.EMAIL_HOST_USER

        try:
            send_mail(subject, message, email_from, ["pablolabrana2000@gmail.com"])
        except BadHeaderError:
            return HttpResponse('Invalid header found.')

        return redirect('send_email')
    else:
        
    
        return render(request,"index.html")

    


   



    

        

       
