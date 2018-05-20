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
        isbn10    = response.items[i].volumeInfo.industryIdentifiers[1].identifier,
        htm_thumb   = $('<img src="' + thumb + '" alt="thumb' + i + '" class="thumbnail" />'),
        htm_title   = $('<h3>' + title + '</h3>'),
        htm_author  = $('<h4>' + author + '</h4>'),
        htm_pub     = $('<p>Publisher: ' + pub + '</p>'),
        htm_pub_dt  = $('<p>Published: ' + pub_dt + '</p>'),
        htm_pages   = $('<p>Pages: ' + pages + '</p>'),
        htm_genre   = $('<p>Genre: ' + genre + '</p>'),
        htm_isbn    = $('<p>ISBN_13: ' + isbn13 + '; ISBN_10: ' + isbn10 + '</p>'),

    // Data to send to the add_read page.
        input_title     = $('<input type="hidden" name="title" value="' + title + '"/>'),
        input_author    = $('<input type="hidden" name="author" value="' + author + '"/>'),
        input_thumb     = $('<input type="hidden" name="thumb" value="' + thumb + '"/>'),
        input_pub       = $('<input type="hidden" name="pub" value="' + pub + '"/>'),
        input_pub_dt    = $('<input type="hidden" name="pub_dt" value="' + pub_dt + '"/>'),
        input_pages     = $('<input type="hidden" name="pages" value="' + pages + '"/>'),
        input_genre     = $('<input type="hidden" name="genre" value="' + genre + '"/>'),
        input_isbn13    = $('<input type="hidden" name="isbn13" value="' + isbn13 + '"/>'),
        input_isbn10    = $('<input type="hidden" name="isbn10" value="' + isbn10 + '"/>');

    var add_button = $('<button type="submit" name="add-book">ADD BOOK</button>');
    var form = $('<form action="/add_read/" method="GET"></form>')

    htm_thumb.appendTo(div_img);
    htm_title.appendTo(div_data);
    htm_author.appendTo(div_data);
    htm_pub.appendTo(div_data);
    htm_pub_dt.appendTo(div_data);
    htm_pages.appendTo(div_data);
    htm_genre.appendTo(div_data);
    htm_isbn.appendTo(div_data);

    div_img.appendTo(form);
    div_data.appendTo(form);
    

    input_title.appendTo(form);
    input_author.appendTo(form);
    input_thumb.appendTo(form);
    input_pub.appendTo(form);
    input_pub_dt.appendTo(form);
    input_pages.appendTo(form);
    input_genre.appendTo(form);
    input_isbn13.appendTo(form);
    input_isbn10.appendTo(form);

    add_button.appendTo(form);

    form.appendTo('.books');

  }
}
