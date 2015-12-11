$('form').on('submit', function(e) {
  e.preventDefault();
  var valid = /^(ftp|http|https):\/\/[^ "]+$/.test( '' + $('#area').val() );

  if ( valid ) {
    var newImg = $('<img></img>')
        .attr( 'src', $('#area')
        .val() )
        .appendTo( $('<li></li>')
        .appendTo( $('ul') ) );

    if ( $('#comment').val() ) {
      var newCom = $('<li>' + $(comment).val() + '</li>').appendTo( $('ul') );
      $(newImg).click(function() {
        $(newCom).toggle();
      });
    }
  }
  else alert('Ошибка! Введите ссылку на картинку');
});
$('#knopka').on('click', function() {
  $('li').remove();
})
