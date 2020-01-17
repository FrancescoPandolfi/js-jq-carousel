

$( document ).ready(function() {
  // Next arrow actions
  $('.next').click(function () {
    showNext();
  });
  // Prev arrow actions
  $('.prev').click(function () {
    showPrev();
  });

});

function showNext() {

  var imageActive = $('.images img.active');
  var imageNext = imageActive.next('img');

  var circleActive = $('nav i.active');
  var circleNext = circleActive.next('i');


  if (imageActive.hasClass('last')) {

    imageActive.removeClass('active');
    $('.images img.first').addClass('active');

    circleActive.removeClass('active');
    $('.nav i.first').addClass('active');

  } else {

    imageActive.removeClass('active');
    imageNext.addClass('active');

    circleActive.removeClass('active');
    circleNext.addClass('active');
  }








}

function showPrev() {
  var imageActive = $('.images img.active');
  var imagePrev = $('.images img.active').prev('img');
  var imageLast = $('.images img:last-child');
  var imageFirst = $('.images img:first-child');

  if (imageFirst.hasClass('active')) {
    imageLast.addClass('active')
  }

  imageActive.removeClass('active');
  imagePrev.addClass('active');


}
