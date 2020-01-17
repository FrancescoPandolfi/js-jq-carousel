$( document ).ready(function() {
  // Next arrow actions
  $('.next').click(function () {
    showNext();
  });
  // Prev arrow actions
  $('.prev').click(function () {
    showPrev();
  });


    $(document).keydown(
      function () {
        if (event.keyCode == 39) {
          showNext();
        }
      }
    );

    $(document).keydown(
      function () {
        if (event.keyCode == 37) {
          showPrev();
        }
      }
    );




});






function showNext() {

  var imageActive = $('.images img.active');
  var imageNext = imageActive.next('img');

  var circleActive = $('.nav i.active');
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
  var imagePrev = imageActive.prev('img');

  var circleActive = $('.nav i.active');
  var circlePrev = circleActive.prev('i');

  if (imageActive.hasClass('first')) {

    imageActive.removeClass('active');
    $('.images img.last').addClass('active');

    circleActive.removeClass('active');
    $('.nav i.last').addClass('active');

  } else {

    imageActive.removeClass('active');
    imagePrev.addClass('active');

    circleActive.removeClass('active');
    circlePrev.addClass('active');
  }
}
