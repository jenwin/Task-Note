//check icon
const $inputCheck = '<i class="fas fa-check"></i>';

//add todo with key
$('input').keypress(function(e) {
  if (e.which === 13) {
    const $inputText = $(this).val();
    $('ul').append($inputCheck + '<li><span>' + $inputText + '</span></li>');
    $('input').val('');
  }
});

//add todo with button
$('button').on('click', function() {
  const $buttonText = $('input').val();
  $('ul').append($inputCheck + '<li><span>' + $buttonText + '</span></li>');
  $('input').val('');
});

//fades icon and list element
$('ul').on('click', 'i', function(e) {
  if (e.target === this) {
    //removes i
    $(this).fadeOut('fast', function() {
      $(this).remove();
    });
    //removes li
    $(this).next().fadeOut('fast', function() {
      $(this).remove();
    });
  }
});

//strike a list item out
$('ul').on('click', 'li', function() {
  $(this).toggleClass('strike');
});

//toggling check and minus icon with mouse functionality
$('ul').on('mouseenter mouseleave', 'i', function(e) {
  if (e.type === 'mouseenter') {
    $(this).addClass('fa-minus-circle');
  }
  if (e.type === 'mouseleave') {
    $(this).removeClass('fa-minus-circle');
  }
});