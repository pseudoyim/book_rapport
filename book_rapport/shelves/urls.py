from django.urls import path
from . import views

app_name = 'shelves'

urlpatterns = [
	path('', views.index, name='index'),
	
	# book_search
	path('book_search.html', views.book_search, name='book_search'),

	# add_read
	path('add_read.html', views.add_read, name='add_read'),

	# thanks
	path('thanks.html', views.thanks, name='thanks')


	# # Detail
	# path('<int:question_id>/detail.html', views.detail, name='detail'),

	# # Results e.g. /polls/5/results
	# path('<int:question_id>/results.html', views.results, name='results'),

	# # Vote e.g. /polls/5/vote
	# path('<int:question_id>/vote/', views.vote, name='vote')
]
