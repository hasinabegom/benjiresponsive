$(document).ready(function () {
  // Open/Close Menu
  navOpnCls = function () {
    $("ul").toggleClass("toggle");
    $(".overly").toggleClass("bg");
  };
  $(".hamburger").click(navOpnCls);
  $("nav ul a").click(navOpnCls);

  // nav overly
  $("ul").click((e) => e.stopPropagation());
  $(".overly").click(() => {
    $(".overly").removeClass("bg");
    $("ul").removeClass("toggle");
  });


  // navigate section
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

    $("section").each(function (i) {
      if ($(this).position().top - 300 <= scrollDistance) {
        $(".navigation li a.active").removeClass("active");
        $(".navigation li a").eq(i).addClass("active");
      }
    });
  })
  .scroll();
