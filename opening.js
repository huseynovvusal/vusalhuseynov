const loadingPage = document.querySelector(".loading-page");

window.addEventListener("load", setInterval(loaded, 3000));

function loaded() {
  loadingPage.classList.add("eventNone");
}
