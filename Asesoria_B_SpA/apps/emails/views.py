from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings


def send_email(request):

    if request.method=="POST":
        subject=request.POST['subject']

        message=request.POST['message'] + " " + request.POST['email']

        email_from=settings.EMAIL_HOST_USER

        recipent_list=["bascunanlira@gmail.com"]

        send_mail(subject, message, email_from, recipent_list)

        return redirect('send_email')
    
    return render(request,"contacto.html")

    

   



    

        

       
