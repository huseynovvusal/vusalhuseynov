const navLink = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", run);

function run() {
  hamburger.classList.toggle("toggle");
  navLink.classList.toggle("nav-active");
}

// Naigation links

const underline = document.querySelector(".underline");
const home = document.querySelectorAll("nav .container div ul li a")[0];
const about = document.querySelectorAll("nav .container div ul li a")[1];
const portfolio = document.querySelectorAll("nav .container div ul li a")[2];
const contact = document.querySelectorAll("nav .container div ul li a")[3];
const nav = document.querySelector("nav");

home.addEventListener("click", homeClicked);

function homeClicked() {
  hamburger.classList.remove("toggle");
  navLink.classList.remove("nav-active");
  underline.classList.add("nav-underline-left");
  underline.classList.remove("nav-underline-center-1");
  underline.classList.remove("nav-underline-center-2");
  underline.classList.remove("nav-underline-right");
}

about.addEventListener("click", aboutClicked);

function aboutClicked() {
  hamburger.classList.remove("toggle");
  navLink.classList.remove("nav-active");
  underline.classList.add("nav-underline-center-1");
  underline.classList.remove("nav-underline-left");
  underline.classList.remove("nav-underline-center-2");
  underline.classList.remove("nav-underline-right");
}

portfolio.addEventListener("click", portfolioClicked);

function portfolioClicked() {
  hamburger.classList.remove("toggle");
  navLink.classList.remove("nav-active");
  underline.classList.add("nav-underline-center-2");
  underline.classList.add("nav-underline-center-1");
  underline.classList.remove("nav-underline-left");
  underline.classList.remove("nav-underline-right");
}

contact.addEventListener("click", contactClicked);

function contactClicked() {
  hamburger.classList.remove("toggle");
  navLink.classList.remove("nav-active");
  underline.classList.add("nav-underline-right");
  underline.classList.remove("nav-underline-center-1");
  underline.classList.remove("nav-underline-center-2");
  underline.classList.remove("nav-underline-left");
}

window.addEventListener("scroll", onScroll);

function onScroll() {
  scroll = window.pageYOffset;

  if (scroll > 0) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
}
