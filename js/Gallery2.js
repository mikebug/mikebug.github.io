
window.onload = function () {
  document.getElementById("about").addEventListener("click", function () {
    const element = document.getElementById("body");
    element.classList.add("animated", "fadeOutDown");
    setTimeout(function () {
      window.location.replace("/index.html");
    }, 1100);
  });
  document.getElementById("back").addEventListener("click", function () {
    const element = document.getElementById("body");
    element.classList.add("animated", "fadeOutDown");
    setTimeout(function () {
      window.location.replace("/Gallery.html");
    }, 1100);
  });
}