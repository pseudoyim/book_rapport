from django import forms
from django.forms import ModelForm
from .models import Book, Note

class BookForm(forms.ModelForm):
	class Meta:
		model = Book
		fields = ['title', 'author_name', 'publisher', 'ISBN', 'pub_date', 'read_start_date', 'read_end_date', 'user_rating', 'user_review']

	title = forms.CharField(max_length=250)
	author_name = forms.CharField(max_length=100)
	publisher = forms.CharField(max_length=250)
	ISBN = forms.CharField(max_length=100)
	pub_date = forms.DateField()
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