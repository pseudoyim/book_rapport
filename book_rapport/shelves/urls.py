from django.urls import path
from . import views 	# You're importing the views in this 'polls' directory.

app_name = 'shelves'

urlpatterns = [
	path('', views.index, name='index'),
	
	# book_search
	path('book_search.html', views.book_search, name='book_search')



	# # Detail
	# path('<int:question_id>/detail.html', views.detail, name='detail'),

	# # Results e.g. /polls/5/results
	# path('<int:question_id>/results.html', views.results, name='results'),

	# # Vote e.g. /polls/5/vote
	# path('<int:question_id>/vote/', views.vote, name='vote')
]
