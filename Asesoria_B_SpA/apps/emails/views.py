from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect


def send_email(request):
    if request.method=="POST":
        name=request.POST['fullname']
        number=request.POST["number"]
        subject=request.POST['subject']

        message=request.POST['message'] + " " + request.POST['email']

        email_from=settings.EMAIL_HOST_USER

        recipent_list=["pablolabrana2000@gmail.com"]

    if name and number and subject and message and email_from and recipent_list:
        try:
            send_mail(subject, message, email_from, recipent_list, name, number)
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return HttpResponseRedirect('/contact/thanks/')
    else:
        # In reality we'd use a form class
        # to get proper validation errors.
        return HttpResponse('Make sure all fields are entered and valid.')


def send_email(request):
    

    if request.method=="POST":
        name=request.POST['fullname']
        number=request.POST["number"]
        subject=request.POST['subject']

        message=request.POST['message'] + " " + request.POST['email']

        email_from=settings.EMAIL_HOST_USER

        recipent_list=["pablolabrana2000@gmail.com"]

        send_mail(name,number,subject, message, email_from, recipent_list)

        return redirect('send_email')
    else:
        
    
        return render(request,"index.html")

    


   



    

        

       
