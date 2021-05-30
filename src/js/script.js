$(document).ready(function () {
  //
  $(".user__info-name, .user__btn").on("click", function (e) {
    e.preventDefault();
    $(".user_block").toggleClass("user_block--active");
  });
  // User-block-links
  $(".block__links a").on("click", function (e) {
    e.preventDefault();
    $(".block__links a").removeClass("active");
    $(this).addClass("active");
  });

  // Slick
  $(".slider__inner").slick({
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  // Filter Region
  $(".filter-region_link").on("click", function (e) {
    e.preventDefault();

    $(".specialization-block").removeClass("specialization-block--active");

    $(".region-block").toggleClass("region-block--active");
  });

  // Filter specialization
  $(".filter-specialization_link").on("click", function (e) {
    e.preventDefault();
    $(".region-block").removeClass("region-block--active");

    $(".specialization-block").toggleClass("specialization-block--active");
  });

  // Menu Btn
  $(".menu__btn").on("click", function (e) {
    e.preventDefault();

    $(".main__header").toggleClass("main__header--active");
  });

  // Footer
  $(" .footer-item__title").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("footer-item__title--active");
  });

  // Order-item form
  $(".form__title").on("click", function () {
    $(this).toggleClass("form__title--close");
    $(".orders-item_form").toggleClass("orders-item_form--close");
  });

  // My order & basket
  $(".orders__info .links .my").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("my--active");
    $(".orders__info .links .basket").removeClass("basket--active");
  });

  $(".orders__info .links .basket").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("basket--active");
    $(".orders__info .links .my").removeClass("my--active");
  });

  // Message ingor & favorite
  $(".avatar__dropdown .select").on("click", function () {
    // $(".down-links").toggleClass("down-links--active");
    $(this).next().toggleClass("down-links--active");

    $(this)
      .next()
      .find("a")
      .on("click", function (e) {
        e.preventDefault();

        $(this).parent().removeClass("down-links--active");
        $(this).parent().prev().html($(this).html());
      });
  });

  // Tabs
  $(".main__tabs-item").on("click", function (e) {
    e.preventDefault();

    $(".main__tabs-item").removeClass("main__tabs-item--active");
    $(this).addClass("main__tabs-item--active");

    $(".main__links").removeClass("main__links--active");
    $(`.${$(this).data("id")}`).addClass("main__links--active");

    $(".main__content-item").removeClass("main__content-item--active");
    $($(this).attr("href")).addClass("main__content-item--active");
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find(".tabs-content")).removeClass(
      "tabs-content--active"
    );

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    const thisID = $(this).attr("href");
  });

  // Author orders complaints dropdown
  $(".list-item").on("click", function () {
    $(this).toggleClass("list-item--active");
    $(this).next().toggleClass("list-dropdown--active");
  });

  // change info
  $(".change__info").on("click", function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    $(".change__info-box").css("display", "block");

    $(".save__btn, .cancel__btn").on("click", function (e) {
      e.preventDefault();
      $(".change__info-box").css("display", "none");
      $(".change__info").css("display", "block");
    });
  });

  //Add work
  $(".add-work__btn").on("click", function (e) {
    e.preventDefault();
    $(".profile__works").css("display", " none");
    $(".add-work-box").addClass("add-work-box--active");

    $(".cancel").on("click", function (e) {
      e.preventDefault();
      $(".profile__works").css("display", "block");
      $(".add-work-box").removeClass("add-work-box--active");
    });
  });

  // Change  specialization
  $(".change__spec-link").on("click", function (e) {
    e.preventDefault();
    $(".profile__works").css("display", " none");
    $(".change-specialization-box").addClass(
      "change-specialization-box--active"
    );

    // Change main spec
    $(".main__spec a").on("click", function (e) {
      e.preventDefault();
      $(".main__spec-form").toggleClass("main__spec-form--active");
    });
  });

  //  Paid Places Input arrows
  $(".input-div .prev, .input-div .next").on("click", function () {
    let input = $(this).parent().find("input");
    let inputNum = +input.val();

    if ($(this).hasClass("prev")) {
      inputNum++;
    } else {
      inputNum--;
    }
    input.val(inputNum);
  });

  // Paid Places  choose__section
  $(".choose__section__list-item").on("click", function () {
    if ($(this).find("input").is(":checked")) {
      $(`[data-box="${$(this).attr("id")}"]`).addClass(
        "selected__section-box--active"
      );
    } else {
      $(`[data-box="${$(this).attr("id")}"]`).removeClass(
        "selected__section-box--active"
      );
    }
  });
  $(".box__close").on("click", function () {
    $(this).parent().removeClass("selected__section-box--active");
    $(`#${$(this).parent().data("box")}`)
      .find("input")
      .prop("checked", false);
  });

  // my offer
  $(".check__box-item-2").on("click", function () {
    if ($(this).find("input").is(":checked")) {
      $(".my__offer-top").css("background", "#FFEECC");
    } else {
      $(".my__offer-top").css("background", "#fafaff");
    }
  });
  $(".check__box-item-1").on("click", function () {
    if ($(this).find("input").is(":checked")) {
      $(".links .go").css("display", "none");
      $(".text .item-1").css("display", "block");
    } else {
      $(".links .go").css("display", "block");
      $(".text .item-1").css("display", "none");
    }
  });
});
