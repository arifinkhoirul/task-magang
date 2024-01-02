$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  var nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      nav.classList.add("bg-dark", "shadow");
    } else {
      nav.classList.remove("bg-dark", "shadow");
    }
  });
