const page_link = document.querySelectorAll(".page-link");
const toggle = document.querySelector(".toggle");
const p_tag = document.querySelectorAll("p.copyright.text-muted");
const p1_tag = document.querySelectorAll("p.theme-by.text-muted");
const postMeta = document.querySelectorAll("span.post-meta");
const allElements = document.querySelectorAll("*");
const heading = document.querySelector(".page-heading h1");

var icon = document.createElement("link");
icon.type = "image/x-icon";
icon.rel = "shortcut icon";
icon.href = "../../assets/img/avatar-icon.jpg";
document.getElementsByTagName("head")[0].appendChild(icon);

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
    !element.classList.contains("dropdown-item") &&
    !element.classList.contains("toggle")
);

let index = 0;

let value = localStorage.getItem("check_skin") === "true";
toggle.addEventListener("click", () => {
  changeSkin();
});

function changeSkin() {
  if (index % 2 == 0) {
    toggle.firstElementChild.className = "far fa-moon";
    for (let i = 0; i < p_tag.length; i++) {
      localStorage.setItem("check_skin", true);
      p_tag[i].style.color = "white !important";
      p1_tag[i].style.color = "white !important";
    }
    for (let i = 0; i < postMeta.length; i++) {
      postMeta[i].style.backgroundColor = "transparent";
    }
    heading.style.textShadow = "8px 5px 4px white";
  } else {
    toggle.firstElementChild.className = "fa fa-sun";
    for (let i = 0; i < p_tag.length; i++) {
      localStorage.setItem("check_skin", false);
      p_tag[i].style.color = "gray !important";
      p1_tag[i].style.color = "gray !important";
    }
    heading.style.textShadow = "8px 5px 4px #835b5b";
  }
  for (let i = 0; i < filteredElements.length; i++) {
    filteredElements[i].classList.toggle("dark");
  }
  for (let i = 0; i < page_link.length; i++) {
    page_link[i].classList.toggle("dark");
  }
  index++;
}

if (value) {
  changeSkin();
}
