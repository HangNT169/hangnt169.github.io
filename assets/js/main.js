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
    !element.classList.contains("fas") &&
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
    var canvas = document.querySelector("canvas");
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
    createCanvas();
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
  createCanvas();
}

// // Tạo canvas
// function createCanvas() {
//   var canvas = document.createElement("canvas");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   document.body.appendChild(canvas);

//   // Lấy context
//   var ctx = canvas.getContext("2d");

//   // Tạo mảng hạt tuyết
//   var snowflakes = [];
//   for (var i = 0; i < 100; i++) {
//     snowflakes.push({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 4 + 1,
//       speed: Math.random() * 2 + 1,
//       opacity: Math.random(),
//     });
//   }

//   // Tạo gradient cho hạt tuyết
//   var snowflakeGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
//   snowflakeGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
//   snowflakeGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

//   // Vẽ hạt tuyết
//   function drawSnowflakes() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     for (var i = 0; i < snowflakes.length; i++) {
//       var flake = snowflakes[i];
//       ctx.save();
//       ctx.fillStyle = snowflakeGradient;
//       ctx.translate(flake.x, flake.y);
//       ctx.rotate(flake.angle);
//       ctx.fillRect(
//         -flake.radius,
//         -flake.radius,
//         flake.radius * 2,
//         flake.radius * 2
//       );
//       ctx.restore();
//     }
//     moveSnowflakes();
//   }

//   // Di chuyển hạt tuyết và xoay chúng
//   function moveSnowflakes() {
//     for (var i = 0; i < snowflakes.length; i++) {
//       var flake = snowflakes[i];
//       flake.y += flake.speed;
//       if (flake.y > canvas.height) {
//         flake.y = -5;
//       }
//       flake.angle += flake.angleIncrement;
//     }
//   }

//   // Lặp lại hiệu ứng
//   setInterval(drawSnowflakes, 30);
// }

// // Tạo canvas
// function createCanvas() {
//   var canvas = document.createElement("canvas");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   document.body.appendChild(canvas);

//   // Lấy context
//   var ctx = canvas.getContext("2d");

//   // Tạo mảng hạt bọt nước
//   var bubbles = [];
//   for (var i = 0; i < 50; i++) {
//     bubbles.push({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 20 + 10,
//       speed: Math.random() * 2 + 1,
//       riseSpeed: Math.random() * 2 + 1,
//       opacity: Math.random() * 0.5 + 0.5,
//       rotation: Math.random() * 360,
//       color: "rgba(255, 255, 255, 0.5)",
//     });
//   }

//   // Vẽ hạt bọt nước
//   function drawBubbles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     for (var i = 0; i < bubbles.length; i++) {
//       var bubble = bubbles[i];
//       ctx.save();
//       ctx.translate(bubble.x, bubble.y);
//       ctx.rotate((bubble.rotation * Math.PI) / 180);
//       ctx.fillStyle = bubble.color;
//       ctx.beginPath();
//       ctx.arc(0, 0, bubble.radius, 0, Math.PI * 2, true);
//       ctx.closePath();
//       ctx.fill();
//       ctx.restore();
//     }
//     moveBubbles();
//   }

//   // Di chuyển hạt bọt nước
//   function moveBubbles() {
//     for (var i = 0; i < bubbles.length; i++) {
//       var bubble = bubbles[i];
//       bubble.y -= bubble.riseSpeed;
//       bubble.x += Math.sin(bubble.rotation) * bubble.speed;
//       if (bubble.y + bubble.radius < 0) {
//         bubble.y = canvas.height + bubble.radius;
//       }
//     }
//   }

//   // Lặp lại hiệu ứng
//   setInterval(drawBubbles, 30);
// }

// // Tạo canvas
// function createCanvas() {
//   var canvas = document.createElement("canvas");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   document.body.appendChild(canvas);

//   // Lấy context
//   var ctx = canvas.getContext("2d");

//   // Tạo mảng bong bóng
//   var bubbles = [];
//   for (var i = 0; i < 50; i++) {
//     bubbles.push({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height + canvas.height,
//       radius: Math.random() * 20 + 10,
//       speed: Math.random() * 2 + 1,
//       opacity: Math.random() * 0.5 + 0.5,
//     });
//   }

//   // Tạo gradient cho bong bóng
//   var bubbleGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
//   bubbleGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
//   bubbleGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

//   // Vẽ bong bóng
//   function drawBubbles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     for (var i = 0; i < bubbles.length; i++) {
//       var bubble = bubbles[i];
//       ctx.save();
//       ctx.fillStyle = bubbleGradient;
//       ctx.translate(bubble.x, bubble.y);
//       ctx.arc(0, 0, bubble.radius, 0, Math.PI * 2);
//       ctx.fill();
//       ctx.restore();
//     }
//     moveBubbles();
//   }

//   // Di chuyển bong bóng lên trên và xoay chúng
//   function moveBubbles() {
//     for (var i = 0; i < bubbles.length; i++) {
//       var bubble = bubbles[i];
//       bubble.y -= bubble.speed;
//       if (bubble.y + bubble.radius < 0) {
//         bubble.y = canvas.height + bubble.radius;
//       }
//     }
//   }

//   // Lặp lại hiệu ứng
//   setInterval(drawBubbles, 30);
// }

// Tạo canvas
function createCanvas() {
  var canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // Lấy context
  var ctx = canvas.getContext("2d");

  // Tạo ảnh bitmap
  var img = document.createElement("canvas");
  img.width = 20;
  img.height = 20;
  var imgCtx = img.getContext("2d");
  imgCtx.beginPath();
  imgCtx.fillStyle = "#fff";
  imgCtx.arc(10, 10, 2, 0, 2 * Math.PI);
  imgCtx.fill();

  // Tạo mảng bọt nước
  var bubbles = [];
  for (var i = 0; i < 100; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.1,
      angle: Math.random() * 2 * Math.PI,
    });
  }

  // Vẽ bọt nước
  function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < bubbles.length; i++) {
      var bubble = bubbles[i];
      bubble.x += Math.cos(bubble.angle) * bubble.speed;
      bubble.y += Math.sin(bubble.angle) * bubble.speed;
      if (
        bubble.x < -bubble.size ||
        bubble.x > canvas.width + bubble.size ||
        bubble.y < -bubble.size ||
        bubble.y > canvas.height + bubble.size
      ) {
        bubble.x = Math.random() * canvas.width;
        bubble.y = -bubble.size;
      }
      ctx.drawImage(
        img,
        bubble.x - bubble.size / 2,
        bubble.y - bubble.size / 2,
        bubble.size,
        bubble.size
      );
    }
    requestAnimationFrame(drawBubbles);
  }

  drawBubbles();
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
