var elements;
var windowHeight;

function init() {
  elements = document.querySelectorAll(".hidden-scroll");
  windowHeight = window.innerHeight;
}

function checkPos() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("fade-in-element");
      element.classList.remove("hidden-scroll");
    }
  }
}

window.addEventListener("scroll", checkPos);
window.addEventListener("resize", init);

init();
checkPos();
