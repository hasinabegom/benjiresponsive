$(document).ready(function () {
  $(".hamburger").click(function () {
    $("ul").toggleClass("toggle");
  });
  $("nav ul a").click(function () {
    $("ul").toggleClass("toggle");
  });

  $('a[href^="#"]').click(function () {
    console.log($('a[href^="#"]'));
    var hash = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 64,
      },
      600
    );
    return false;
  }
  
  );


  $(window).scroll(function () {
    if ($(window).scrollTop() > 58) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  if ($(window).scrollTop() > 58) {
    $("header").addClass("sticky");
  }
});