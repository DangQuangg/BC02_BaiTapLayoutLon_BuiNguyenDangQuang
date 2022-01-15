$("#owl_1").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".counter").countUp();

$("#owl_2").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: false,
  // dotsContainer: "owl-2",
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

let currentMode = "light-theme";
function switchMode() {
  if (currentMode === "light-theme") {
    currentMode = "dark-theme";
  } else {
    currentMode = "light-theme";
  }
  let body = document.getElementsByTagName("body")[0];
  body.classList.remove("light-theme");
  body.classList.remove("dark-theme");
  body.classList.add(currentMode);

  let button = document.getElementById("btn-mode");
  if (currentMode === "light-theme") {
    button.innerHTML = '<i class="fas fa-sun"></i>';
  } else button.innerHTML = '<i class="far fa-moon"></i>';
}
