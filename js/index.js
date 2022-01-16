window.onload = function () {
  const themeBtn = document.getElementById("themeBtn");
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("darkmode-active");
    this.classList.toggle("active");
  });
};
function toggleSidebar() {
  document.getElementById("right-sidebar").classList.toggle("active");
  document.getElementById("leftArrow").classList.toggle("active");
  document.getElementById("rightArrow").classList.toggle("active");
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
