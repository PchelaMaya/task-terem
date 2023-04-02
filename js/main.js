//Модальное окно
$(function() {
    // Проверяем запись в куках о посещении
    // Если запись есть - ничего не делаем
    if (!$.cookie('hideModal')) {
   // если cookie не установлено появится окно с задержкой 5 секунд
    var delay_popup = 5000;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
    }
    // Запоминаем в куках, что посетитель уже заходил
    $.cookie('hideModal', true, {
    // Время хранения cookie в днях
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
