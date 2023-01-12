const body_tag = document.querySelector("body");
const head_tag = document.querySelector("head");
const footer_tag = document.querySelector("footer");
const ul_tag = document.querySelector("ul");
const nav_link_tag = document.querySelectorAll(".nav-link");
const nav_tag = document.querySelector("nav");
const header_tag = document.querySelector("header");
const row_tag = document.querySelector("row");
const div_tag = document.querySelector("div");
const toggle = document.querySelector(".toggle");
const container_tag = document.querySelector("#container-custom");
const post_tag = document.querySelectorAll(".post-title");
const postsub_tag = document.querySelectorAll(".post-subtitle");
const postmeta_tag = document.querySelectorAll(".post-meta");
const input_value = document.querySelector("#input-value");
const max_value = document.querySelector("#max-value");
const p_tag = document.querySelectorAll("p.copyright.text-muted");
const p1_tag = document.querySelectorAll("p.theme-by.text-muted");
const blog_tag = document.querySelectorAll(".blog-tags a");
const span_tag = document.querySelectorAll(".blog-tags span");
const postreadmore_tag = document.querySelectorAll(".post-read-more");
const navbar_brand = document.querySelector(".navbar-brand");
var index = 0;
toggle.addEventListener("click", () => {
  if (index % 2 == 0) {
    toggle.firstElementChild.className = "far fa-moon";
    for (var i = 0; i < p_tag.length; i++) {
      p_tag[i].style.color = "white !important";
      p1_tag[i].style.color = "white !important";
    }
  } else {
    toggle.firstElementChild.className = "far fa-sun";
    for (var i = 0; i < p_tag.length; i++) {
      p_tag[i].style.color = "gray !important";
      p1_tag[i].style.color = "gray !important";
    }
  }
  container_tag.classList.toggle("dark");
  body_tag.classList.toggle("dark");
  head_tag.classList.toggle("dark");
  footer_tag.classList.toggle("dark");
  header_tag.classList.toggle("dark");
  div_tag.classList.toggle("dark");
  ul_tag.classList.toggle("dark");
  nav_tag.classList.toggle("dark");
  input_value.classList.toggle("dark");
  max_value.classList.toggle("dark");
  navbar_brand.classList.toggle("dark");
  for (var i = 0; i < post_tag.length; i++) {
    post_tag[i].classList.toggle("dark");
    postmeta_tag[i].classList.toggle("dark");
    postreadmore_tag[i].classList.toggle("dark");
    postsub_tag[i].classList.toggle("dark");
  }
  for (var i = 0; i < nav_link_tag.length; i++) {
    nav_link_tag[i].classList.toggle("dark");
  }
  for (var i = 0; i < blog_tag.length; i++) {
    blog_tag[i].classList.toggle("dark");
    span_tag[i].classList.toggle("dark");
  }
  index++;
});
