//Проверка посещений

$(function() {
    if (!$.cookie('hideModal')) {
    var delay_popup = 5000;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
    }
    $.cookie('hideModal', true, {
        expires: 7,
        path: '/'
    });
});

// Скрываем блок с заголовком

$('document').ready(function(){
    $('#btn-hidden').click(function(){
        $('#block-title').slideToggle('slow');
  return false;
});
});

//Замена местами

$('#btn-magic').click(function(){
	$('.blocks-magic > div').each(function() {
		if ($(this).next()) {
			el = $(this).next();
		} else {
			el = $(this).prev();
		}

	 	var copy_from = $(this).clone(true);   
		$(el).replaceWith(copy_from);
		
		var copy_to = $(el).clone(true);        
		$(this).replaceWith(copy_to);
	});
 
	return false;
});
