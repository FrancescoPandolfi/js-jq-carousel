

$( document ).ready(function() {
  // Next arrow actions
  $('.next').click(function () { showNext(); });
  // Prev arrow actions
  $('.prev').click(function () { showPrev(); });

});

function showNext() {
  var imageActive = $('.images img.active');
  var imageNext = $('.images img.active').next('img');
  var imageLast = $('.images img:last-child');
  var imageFirst = $('.images img:first-child');


  imageActive.removeClass('active');
  imageNext.addClass('active');

  if (imageLast.hasClass('active')) {
    imageFirst.addClass('active')
  }
}

function showPrev() {
  var imageActive = $('.images img.active');
  var imagePrev = $('.images img.active').prev('img');
  var imageLast = $('.images img:last-child');
  var imageFirst = $('.images img:first-child');

  imageActive.removeClass('active');
  imagePrev.addClass('active');

  if (imageFirst.hasClass('active')) {
    imageLast.addClass('active')
  }
}
