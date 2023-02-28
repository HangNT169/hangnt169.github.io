const page_link = document.querySelectorAll(".page-link");
const toggle = document.querySelector(".toggle");
const p_tag = document.querySelectorAll("p.copyright.text-muted");
const p1_tag = document.querySelectorAll("p.theme-by.text-muted");

const allElements = document.querySelectorAll('*');
const filteredElements = Array.from(allElements).filter(element => !element.classList.contains('row'));

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
