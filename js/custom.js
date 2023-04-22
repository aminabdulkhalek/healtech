$(document).ready(function () {

  var s_round = '.s_round';

  $(s_round).hover(function () {
    $('.b_round').toggleClass('b_round_hover');
    return false;
  });

  $(s_round).click(function () {
    $('.flip_box').toggleClass('flipped');
    $(this).addClass('s_round_click');
    $('.s_arrow').toggleClass('s_arrow_rotate');
    $('.b_round').toggleClass('b_round_back_hover');
    return false;
  });

  $(s_round).on('transitionend', function () {
    $(this).removeClass('s_round_click');
    $(this).addClass('s_round_back');
    return false;
  });
});

$(function () {

  // MENU
  $('.nav-link').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });


  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });


  // SMOOTH SCROLL
  $(function () {
    $('.nav-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
      }, 1000);
      event.preventDefault();
    });
  });


  // PROJECT SLIDE
  $('#project-slide').owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: false,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      }
    }
  });

});

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




