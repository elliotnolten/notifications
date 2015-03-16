  (function($){
  var modalEl = $('.modal'),
      headerEl = modalEl.find('.header'),
      headerSpan = headerEl.find('.txt'),
      headerOriginTxt = headerSpan.text(),
      addedTxt = '"Dying Light" is toegevoegd aan ',
      listOption = modalEl.find('.lists').find('.option'),
      stopEl = modalEl.find('.stop'),
      newList = modalEl.find('.new_list'),
      newListInput = newList.find('input');

  listOption.click(function(e){
    e.preventDefault();
    var listName = $(this).attr('title'),
        headerTxt = addedTxt + '<strong>' + listName + '</strong>';
    headerSpan.html(headerTxt);
    modalEl.addClass('added');
  });

  stopEl.click(function(e){
    e.preventDefault();
    modalEl.removeClass('added');
    headerSpan.text(headerOriginTxt);
  });

  newListInput.on('keyup',function(e){
    if ($(this).val()) {
      $(this).parent().parent().addClass('option');
    } else {
      $(this).parent().parent().removeClass('option');
    }
    $(this).parent().parent().attr('title',$(this).val());
  });

})(jQuery);