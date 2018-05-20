from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.template import loader
from django.urls import reverse
from .models import Book, Note
from .forms import BookForm


def index(request):
	book_list = Book.objects.order_by('-title')
	template = loader.get_template('shelves/index.html')
	context = {'book_list': book_list}
	return render(request, 'shelves/index.html', context)


def book_search(request):
	return render(request, 'shelves/book_search.html')


def add_read(request):
	# if a GET (or any other method) we'll create a blank form
	if request.method == 'GET':
		form = BookForm()

	elif request.method == 'POST':
		form = BookForm(request.POST)
		if form.is_valid():
			# print("Form is valid!")
			# import pdb; pdb.set_trace()
			# process the data in form.cleaned_data as required
			title           = form.cleaned_data['title']
			author_name     = form.cleaned_data['author_name']
			publisher       = form.cleaned_data['publisher']
			ISBN            = form.cleaned_data['ISBN']
			pub_date        = form.cleaned_data['pub_date']
			read_start_date = form.cleaned_data['read_start_date']
			read_end_date   = form.cleaned_data['read_end_date']
			user_rating     = form.cleaned_data['user_rating']
			user_review     = form.cleaned_data['user_review']
			form.save()
		return HttpResponseRedirect('/shelves/thanks.html')
	return render(request, 'shelves/add_read.html', {'form': form})


def thanks(request):
	return render(request, 'shelves/thanks.html')
