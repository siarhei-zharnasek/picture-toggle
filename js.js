$('form').on('submit', function(e) {
  e.preventDefault();
  $area = $('#area').val();
  var valid = /^(ftp|http|https):\/\/[^ "]+$/.test( '' + $area );

  if ( valid ) {
    var box = $('<div/>').appendTo(document.body),
        newImg = $('<img/>', {
          src: $area,
          class: "img-circle"
        }).appendTo( $('<li/>')
          .appendTo(box) ),
        $newImg = $(newImg),
        $div = $('div');

    if ( $('#comment').val() ) {
      var newCom = $('<li/>', {
        text: $(comment).val()
      }).appendTo(box);
      $newImg.click(function() {
        $(this).parent().next().slideToggle();
      });
    }

    var but = $('<button/>', {
      text: "Стереть",
      class: "btn btn-danger",
      click: function() {
        box.fadeOut(1000);
        setTimeout(function() {
          box.remove();
        }, 1000);
      }
    }).appendTo(box);

    $('<button/>', {
      text: "Оригинальный размер",
      class: "btn btn-primary",
      click: function() {
        var nHeight = $newImg.prop('naturalHeight'),
            nWidth = $newImg.prop('naturalWidth');
        $newImg.css({
          height: nHeight,
          width: nWidth
        });
      }
    }).appendTo(box);
  }
  else alert('Ошибка! Введите ссылку на картинку');

  $('#knopka').on('click', function(e) {
    e.preventDefault();
    $div.fadeOut(1000);
    setTimeout(function() {
      $div.remove();
    }, 1000);
  });

  $newImg.on('mouseenter', function() {
    $(this).removeClass().addClass('img-rounded');
  });

  $newImg.on('mouseleave', function() {
    $(this).removeClass().addClass('img-circle');
  });
});
