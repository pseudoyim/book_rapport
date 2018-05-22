from django import forms
from django.forms import ModelForm
from .models import Book, Note

class BookForm(forms.ModelForm):
	class Meta:
		model = Book
		fields = ['title', 'author_name', 'thumb_url', 'publisher', 'pub_date', 'pages', 'genre', 'isbn13', 'isbn10', 'read_start_date', 'read_end_date', 'user_rating', 'user_review']

	title = forms.CharField(max_length=250)
	author_name = forms.CharField(max_length=100)
	thumb_url = forms.CharField(max_length=1000)
	publisher = forms.CharField(max_length=250)
	pub_date = forms.DateField()
	pages = forms.IntegerField()
	genre = forms.CharField(max_length=250)
	isbn13 = forms.CharField(max_length=100)
	isbn10 = forms.CharField(max_length=100)
	read_start_date = forms.DateField()
	read_end_date = forms.DateField()
	user_rating = forms.IntegerField()
	user_review = forms.CharField(widget=forms.Textarea)


class NoteForm(forms.ModelForm):
	class Meta:
		model = Note
		fields = ['title', 'page_num', 'excerpt', 'marginalia']

	# note_id = forms.AutoField(primary_key=True)
	title = forms.ModelChoiceField(queryset=Book.objects.all())
	page_num = forms.IntegerField()
	excerpt = forms.CharField(widget=forms.Textarea)
	marginalia = forms.CharField(widget=forms.Textarea)