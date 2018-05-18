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
    var div_img   = $('<div id=result_img' + i + '></div>'),
        div_data  = $('<div id=result_data' + i + '></div>'),
        title     = response.items[i].volumeInfo.title,
        author    = response.items[i].volumeInfo.authors[0],        
        thumb     = response.items[i].volumeInfo.imageLinks.thumbnail,
        pub       = response.items[i].volumeInfo.publisher,
        pub_dt    = response.items[i].volumeInfo.publishedDate,
        pages     = response.items[i].volumeInfo.pageCount,
        genre     = response.items[i].volumeInfo.categories,
        isbn13    = response.items[i].volumeInfo.industryIdentifiers[0].identifier,
        isbn10    = response.items[i].volumeInfo.industryIdentifiers[1].identifier;

    var htm_thumb   = $('<img src="' + thumb + '" alt="thumb' + i + '" class="thumbnail" />'),
        htm_title   = $('<h3>' + title + '</h3>'),
        htm_author  = $('<h4>' + author + '</h3>'),
        htm_pub     = $('<p>Publisher: ' + pub + '</p>'),
        htm_pub_dt  = $('<p>Published: ' + pub_dt + '</p>'),
        htm_pages   = $('<p>Pages: ' + pages + '</p>'),
        htm_genre   = $('<p>Genre: ' + genre + '</p>'),
        htm_isbn    = $('<p>ISBN_13: ' + isbn13 + '; ISBN_10: ' + isbn10 + '</p>');


    var add_button = $('<form action="" method="post"> \
                            <button name="add-book" value="Add book">ADD BOOK</button> \
                        </form>');

    htm_thumb.appendTo(div_img);
    htm_title.appendTo(div_data);
    htm_author.appendTo(div_data);
    htm_pub.appendTo(div_data);
    htm_pub_dt.appendTo(div_data);
    htm_pages.appendTo(div_data);
    htm_genre.appendTo(div_data);
    htm_isbn.appendTo(div_data);

    div_img.appendTo('.books');
    div_data.appendTo('.books');

    add_button.appendTo('.books');

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
