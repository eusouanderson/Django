from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .models import Members


def initialPag(request):
    template = loader.get_template('index3.html')
    return HttpResponse(template.render({}, request))


def about(request):
    about = loader.get_template('about.html')
    return HttpResponse(about.render({}, request))


def fruit(request):
    fruit = loader.get_template('fruit.html')
    return HttpResponse(fruit.render({}, request))


def testimonial(request):
    testimonial = loader.get_template('testimonial.html')
    return HttpResponse(testimonial.render({}, request))


def contact(request):
    contact = loader.get_template('contact.html')
    return HttpResponse(contact.render({}, request))


def login(request):
    login = loader.get_template('login.html')
    return HttpResponse(login.render({}, request))


def loginad(request):
    firstname = request.POST['first']
    userlogin = request.post['userlogin']
    password = request.POST['last']

    member = Members(firstname='', lastname='')
    member.save()

    return HttpResponseRedirect(reverse('login.html'))


def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render({}, request))


def add(request):
    template = loader.get_template('add.html')
    return HttpResponse(template.render({}, request))


def addrecord(request):
    first = request.POST['first']
    last = request.POST['last']

    member = Members(firstname=first, lastname=last)
    member.save()

    return HttpResponseRedirect(reverse('index.html'))


def delete(request, id):
    member = Members.objects.get(id=id)
    member.delete()
    return HttpResponseRedirect(reverse('index.html'))


def update(request, id):
    mymember = Members.objects.get(id=id)
    template = loader.get_template('update.html')
    context = {
        'mymember': mymember,
    }
    return HttpResponse(template.render(context, request))
