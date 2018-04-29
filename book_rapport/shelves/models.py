import datetime
from django.db import models
from django.utils import timezone


# class Author(models.Model):
	# author_id = models.AutoField(primary_key=True)
	# author_name = models.CharField(primary_key=True, max_length=100)
	# author_last = models.CharField(max_length=100)
	# author_first = models.CharField(max_length=100)
	# nationality = models.CharField(max_length=100)
	# date_birth = models.DateField('date of birth')
	# date_death = models.DateField('date of death', default='9999-12-31')

	# def __str__(self):
	# 	return self.author_name

	# def is_alive(self):
	# 	if date_death < timezone.now():
	# 		return 0
	# 	else:
	# 		return 1


class Book(models.Model):
	title = models.CharField(max_length=250)
	author_name = models.CharField(max_length=100, default=False)
	# author = models.ForeignKey(Author, on_delete=models.CASCADE)
	publisher = models.CharField(max_length=250)
	ISBN = models.CharField(max_length=100)
	pub_date = models.DateField('published date', default='1900-01-01')
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

	def __str__(self):
		return self.note_id
