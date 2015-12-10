$('form').on('submit', function(e) {
	e.preventDefault();
  var valid = /^(ftp|http|https):\/\/[^ "]+$/.test('' + area.value);
  if ( valid ) {
		var newImg = document.createElement('img');
		$(newImg).attr('src', area.value);
		var newLi = document.createElement('li');
		newLi.appendChild(newImg);
		res.appendChild(newLi);
  	if ( comment.value ) {
			var newCom = document.createElement('li');
			newCom.innerHTML = comment.value;
			res.appendChild(newCom);
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