from django.forms import ModelForm
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.template import loader
from django.urls import reverse
from .models import Book, Note

def index(request):
    book_list = Book.objects.order_by('-title')
    template = loader.get_template('shelves/index.html')
    context = {
    	'book_list': book_list
    }
    return render(request, 'shelves/index.html', context)


def book_search(request):
    book = get_object_or_404(Book)
    return render(request, 'shelves/book_search.html', {'book':book})