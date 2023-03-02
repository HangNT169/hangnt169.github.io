const page_link = document.querySelectorAll(".page-link");
const toggle = document.querySelector(".toggle");
const botNuoc = document.querySelector("#botNuoc");
const tuyetRoi = document.querySelector("#tuyetRoi");
const hoaHong = document.querySelector("#hoaHong");
const p_tag = document.querySelectorAll("p.copyright.text-muted");
const p1_tag = document.querySelectorAll("p.theme-by.text-muted");
const postMeta = document.querySelectorAll("span.post-meta");
const allElements = document.querySelectorAll("*");
const heading = document.querySelector(".page-heading h1");
let interValId;
var canvas;
var interValIdHoaHong;
var ctx;
var animationId;
var bubbles = [];

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
    !element.classList.contains("") &&
    element.id !== "nav-search-input" &&
    element.id !== "nav-search-exit" &&
    !element.classList.contains("avatar-container") &&
    element.tagName !== "H1" &&
    !element.classList.contains("post-heading") &&
    !element.classList.contains("post-subheading") &&
    !element.classList.contains("menu") &&
    !element.classList.contains("ul-custom") &&
    !element.classList.contains("li-custom") &&
    !element.classList.contains("fa-home") &&
    !element.classList.contains("fa-snowflake") &&
    !element.classList.contains("fa-circle") &&
    !element.classList.contains("fa-user") &&
    !element.classList.contains("a-custom") &&
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
    canvas = document.querySelector("canvas");
    if (canvas != null) {
      canvas.remove();
    }

    for (let i = 0; i < p_tag.length; i++) {
      localStorage.setItem("check_skin", true);
      p_tag[i].style.color = "white !important";
      p1_tag[i].style.color = "white !important";
    }
    for (let i = 0; i < postMeta.length; i++) {
      postMeta[i].style.backgroundColor = "transparent";
    }
    if (heading != null) {
      heading.style.textShadow = "8px 5px 4px white";
    }
  } else {
    toggle.firstElementChild.className = "fa fa-sun";
    createCanvasTuyetRoi();
    for (let i = 0; i < p_tag.length; i++) {
      localStorage.setItem("check_skin", false);
      p_tag[i].style.color = "gray !important";
      p1_tag[i].style.color = "gray !important";
    }
    if (heading != null) {
      heading.style.textShadow = "8px 5px 4px #835b5b";
    }
  }
  for (let i = 0; i < filteredElements.length; i++) {
    filteredElements[i].classList.toggle("dark");
  }
  const containerCopy = document.querySelectorAll(".highlight-container pre");
  const containerCode = document.querySelectorAll(
    ".highlight-container pre code"
  );
  for (let i = 0; i < containerCopy.length; i++) {
    containerCopy[i].classList.toggle("dark");
    containerCode[i].classList.toggle("dark");
  }
  for (let i = 0; i < page_link.length; i++) {
    page_link[i].classList.toggle("dark");
  }
  index++;
}

if (value) {
  changeSkin();
} else {
  createCanvasTuyetRoi();
}

botNuoc.addEventListener("click", function () {
  stopSnowing();
  stopRosing();
  createCanvasBubble();
});
tuyetRoi.addEventListener("click", function () {
  stopAnimation();
  stopRosing();
  createCanvasTuyetRoi();
});
hoaHong.addEventListener("click", function () {
  stopAnimation();
  stopSnowing();
  createCanvasHoaHongRoi();
});

// Tạo canvas
function createCanvasTuyetRoi() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // Lấy context
  ctx = canvas.getContext("2d");

  // Tạo mảng hạt tuyết
  var snowflakes = [];
  for (var i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random(),
    });
  }

  // Tạo gradient cho hạt tuyết
  var snowflakeGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
  snowflakeGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
  snowflakeGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  // Vẽ hạt tuyết
  function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (var i = 0; i < snowflakes.length; i++) {
      var flake = snowflakes[i];
      ctx.save();
      ctx.fillStyle = snowflakeGradient;
      ctx.translate(flake.x, flake.y);
      ctx.rotate(flake.angle);
      ctx.fillRect(
        -flake.radius,
        -flake.radius,
        flake.radius * 2,
        flake.radius * 2
      );
      ctx.restore();
    }
    moveSnowflakes();
  }

  // Di chuyển hạt tuyết và xoay chúng
  function moveSnowflakes() {
    for (var i = 0; i < snowflakes.length; i++) {
      var flake = snowflakes[i];
      flake.y += flake.speed;
      if (flake.y > canvas.height) {
        flake.y = -5;
      }
      flake.angle += flake.angleIncrement;
    }
  }

  // Lặp lại hiệu ứng
  interValId = setInterval(drawSnowflakes, 30);
}

function stopSnowing() {
  clearInterval(interValId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Tạo canvas
function createCanvasBubble() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // Lấy context
  ctx = canvas.getContext("2d");

  // Tạo mảng bọt nước
  for (var i = 0; i < 100; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }

  // Vẽ bọt nước
  function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < bubbles.length; i++) {
      var bubble = bubbles[i];
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, " + bubble.opacity + ")";
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2, false);
      ctx.fill();

      bubble.y -= bubble.speed;

      if (bubble.y < -bubble.radius) {
        bubble.y = canvas.height + bubble.radius;
        bubble.x = Math.random() * canvas.width;
      }
    }
    animationId = window.requestAnimationFrame(drawBubbles);
  }

  // Lặp lại hiệu ứng
  animationId = window.requestAnimationFrame(drawBubbles);
}

function stopAnimation() {
  window.cancelAnimationFrame(animationId);
  bubbles = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createCanvasHoaHongRoi() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // Lấy context
  ctx = canvas.getContext("2d");

  // Tạo mảng hoa hồng
  var roses = [];
  for (var i = 0; i < 50; i++) {
    roses.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 15 + 15,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      petalCount: Math.floor(Math.random() * 12) + 5,
      petalLength: Math.random() * 20 + 10,
      petalWidth: Math.random() * 4 + 1,
    });
  }

  // Tạo gradient cho hoa hồng
  var roseGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
  roseGradient.addColorStop(0, "rgba(255, 0, 0, 0.8)");
  roseGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  // Vẽ hoa hồng
  function drawRoses() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (var i = 0; i < roses.length; i++) {
      var rose = roses[i];

      // Vẽ cánh hoa
      ctx.save();
      ctx.fillStyle = roseGradient;
      ctx.translate(rose.x, rose.y);
      for (var j = 0; j < rose.petalCount; j++) {
        ctx.rotate((Math.PI * 2) / rose.petalCount);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(rose.petalWidth / 2, -rose.petalLength);
        ctx.lineTo(-rose.petalWidth / 2, -rose.petalLength);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // Vẽ đốm
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, " + rose.opacity + ")";
      ctx.arc(rose.x, rose.y, rose.radius / 4, 0, Math.PI * 2, false);
      ctx.fill();

      // Vẽ bông hoa
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 0, 0, " + rose.opacity + ")";
      ctx.arc(rose.x, rose.y, rose.radius, 0, Math.PI * 2, false);
      ctx.fill();
    }
    moveRoses();
  }

  // Di chuyển hoa hồng
  function moveRoses() {
    for (var i = 0; i < roses.length; i++) {
      var rose = roses[i];
      rose.y += rose.speed;
      if (rose.y > canvas.height) {
        rose.y = -rose.radius;
      }
    }
  }

  // Lặp lại hiệu ứng
  interValIdHoaHong = setInterval(drawRoses, 30);
}

function stopRosing() {
  clearInterval(interValIdHoaHong);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Lấy tất cả các phần tử pre có class highlight
var highlights = document.querySelectorAll("pre.highlight");

// Duyệt qua từng phần tử và thêm nút copy vào
highlights.forEach(function (highlight) {
  // Tạo một div mới chứa button và highlight
  var container = document.createElement("div");
  container.className = "highlight-container";

  // Tạo một button mới
  var button = document.createElement("button");
  button.className = "btn-copy";
  button.textContent = "Copy";

  // Thêm button vào div
  container.appendChild(button);

  // Thêm highlight vào div
  container.appendChild(highlight.cloneNode(true));

  // Thay thế highlight ban đầu bằng div chứa highlight và button
  highlight.parentNode.replaceChild(container, highlight);

  // Sao chép nội dung pre khi nhấp vào button
  button.addEventListener("click", function () {
    var code = highlight.querySelector("code").textContent.trim();
    navigator.clipboard.writeText(code);
    button.textContent = "Copied!";
    setTimeout(function () {
      button.textContent = "Copy";
    }, 2000);
  });
});
