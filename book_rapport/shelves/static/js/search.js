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
  $('.books').children().remove();

  var results_count = response.items.length;
  
  for (var i = 0; i < results_count; i++) {
    var div    = $('<div id=result' + i + '></div>'),
        title  = response.items[i].volumeInfo.title,
        author = response.items[i].volumeInfo.authors[0],        
        thumb  = response.items[i].volumeInfo.imageLinks.thumbnail;

    var htm_thumb   = $('<img src="' + thumb + '" alt="thumb' + i + '" class="thumbnail" />'),
        htm_title   = $('<h3>' + title + '</h3>'),
        htm_author  = $('<h3>' + author + '</h3>');
        
    htm_thumb.appendTo(div);
    htm_title.appendTo(div);
    htm_author.appendTo(div);

    div.appendTo('.books')
  }
}


// function handleResponse( response ) {
//   // console.log(response.items);
//   $.each( response.items, function( i, item ) {
    
//     var title    = item.volumeInfo.title,
//         author   = item.volumeInfo.authors[0],        
//         thumb    = item.volumeInfo.imageLinks.thumbnail;
    


//     $('.title').text( title );
//     $('.author').text( author );
//     $('.thumbnail').attr('src', thumb);
//   });
// }
