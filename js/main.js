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
    // console.log($(hash).position().top);
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 64,
      },
      600
    );
    return false;
  });

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

// scroll window
$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $("section").each(function (i) {
      if ($(this).position().top - 300 <= scrollDistance) {
        $(".navigation li a.active").removeClass("active");
        $(".navigation li a").eq(i).addClass("active");
      }
    });
  })
  .scroll();




  
