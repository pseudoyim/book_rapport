import datetime
from django.db import models
from django.utils import timezone


class Book(models.Model):
	title = models.CharField(max_length=250)
	author_name = models.CharField(max_length=100, default=False)
	thumb_url = models.CharField(max_length=1000, default=False)
	publisher = models.CharField(max_length=250)
	pub_date = models.DateField('published date', default='1900-01-01')
	pages = models.IntegerField(default=False)
	genre = models.CharField(max_length=250, default=False)
	isbn13 = models.CharField(max_length=100, default=False)
	isbn10 = models.CharField(max_length=100, default=False)
	read_start_date = models.DateField('date I started', default=timezone.now)
	read_end_date = models.DateField('date I finished', default=None)
	user_rating = models.IntegerField()
	user_review = models.TextField() 

	def __str__(self):
		return self.title


class Note(models.Model):
	note_id = models.AutoField(primary_key=True)
	title = models.ForeignKey(Book, on_delete=models.CASCADE)
	page_num = models.IntegerField()
	excerpt = models.TextField()
	marginalia = models.TextField(default=False)

	def __str__(self):
		return self.note_id
