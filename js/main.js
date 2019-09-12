$(document).ready(function() {

  $('.tonext').click(function(e) {

    var targetHref   = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(targetHref).offset().top - 20
    }, 800);

    e.preventDefault();

  });
});
