window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  var header = document.querySelector(".header");
  var atTop = (window.pageYOffset === 0);
  var headerBottom = header.getBoundingClientRect().bottom;
  if (!atTop && headerBottom <= 60) {
    header.classList.add("scrolled");
    navbar.style.top = "0";
  } else {
    header.classList.remove("scrolled");
    navbar.style.top = "60px";
  }
};
