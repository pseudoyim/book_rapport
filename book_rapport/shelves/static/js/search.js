var search_query


$('#search-button').on('click', function(){
  console.log('search button clicked!');
  search_query = $('#search-bar').val();

  $.ajax({
    dataType: 'json',
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search_query,
    success: handleResponse
  });

});


function handleResponse( response ) {
  console.log(response.items);
  $.each( response.items, function( i, item ) {
    
    var title    = item.volumeInfo.title,
        author   = item.volumeInfo.authors[0],        
        thumb    = item.volumeInfo.imageLinks.thumbnail;
    
    $('.title').text( title );
    $('.author').text( author );
    $('.thumbnail').attr('src', thumb);
  });
}
