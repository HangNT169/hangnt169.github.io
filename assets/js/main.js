const page_link = document.querySelectorAll(".page-link");
const toggle = document.querySelector(".toggle");
const p_tag = document.querySelectorAll("p.copyright.text-muted");
const p1_tag = document.querySelectorAll("p.theme-by.text-muted");
const allElements = document.querySelectorAll("*");
const filteredElements = Array.from(allElements).filter(
  (element) =>
    !element.classList.contains("container-md") &&
    !element.classList.contains("row") &&
    !element.classList.contains("col-xl-8") &&
    !element.classList.contains("avatar-container") &&
    element.tagName !== "H1" &&
    !element.classList.contains("post-heading") &&
    !element.classList.contains("post-subheading") &&
    !element.classList.contains("fa-sun") &&
    !element.classList.contains("fa-moon") &&
    !element.classList.contains("post-meta")
);

var index = 0;
toggle.addEventListener("click", () => {
  if (index % 2 == 0) {
    toggle.firstElementChild.className = "far fa-moon";
    for (var i = 0; i < p_tag.length; i++) {
      p_tag[i].style.color = "white !important";
      p1_tag[i].style.color = "white !important";
    }
  } else {
    toggle.firstElementChild.className = "fa fa-sun";
    const moon = document.querySelector("far.fa-mooon");
    moon.classList.toggle("dark-skin");
    for (var i = 0; i < p_tag.length; i++) {
      p_tag[i].style.color = "gray !important";
      p1_tag[i].style.color = "gray !important";
    }
  }
  for (var i = 0; i < filteredElements.length; i++) {
    filteredElements[i].classList.toggle("dark");
  }
  for (var i = 0; i < page_link.length; i++) {
    page_link[i].classList.toggle("dark");
  }
  index++;
});
