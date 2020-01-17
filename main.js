$( document ).ready(function() {


  $('.next').click(function () {

      $('.images img.active').removeClass('active');
      $('.images img.active').next().addClass('active');

    });





});
