$(document).ready(function () {
  // tab_menu
  $(".title_wrap p").click(function () {
    $(".title_wrap p").removeClass("font_weight");
    $(this).addClass("font_weight");
  });

  // 페이지바 + 숫자까지 움직이게 만드는 방법
  const swiper = new Swiper(".swiper_1", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      // 기재해주어야 클릭 드래그로 슬라이더 넘겼을 때 autoplay가 멈추지 않음
    },
    speed: 1600,
    // 각 슬라이드가 나타나는 속도 조절
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    on: {
      activeIndexChange: function () {
        const cIdx = this.realIndex + 1;
        $(".current-num").text(cIdx);
      },
    },
  });

  $(".pause").on("click", function () {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }

    $(this).toggleClass("play");
  });

  // section_3 h3_active
  $(window).scroll(function () {
    var pageY = $(window).scrollTop();
    var sec_3_top = $(".section_3").offset().top;
    var sec_5_top = $(".section_5").offset().top;

    if (pageY >= sec_3_top) {
      $(".text_wrap_3").addClass("text_active");
    } else {
      $(".text_wrap_3").removeClass("text_active");
    }

    if (pageY >= sec_5_top) {
      $(".text_wrap_5").addClass("text_active");
    } else {
      $(".text_wrap_5").removeClass("text_active");
    }
  });

  // section_4 .btn_active
  $(".btn")
    .mousedown(function () {
      $(this).addClass("btn_active");
    })
    .mouseup(function () {
      $(".btn").removeClass("btn_active");
    });
}); //end
