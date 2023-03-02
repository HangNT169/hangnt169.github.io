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
// Tạo canvas
function createCanvas() {
  var canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // Lấy context
  var ctx = canvas.getContext("2d");

  // Tạo mảng hoa đào
  var blossoms = [];
  for (var i = 0; i < 100; i++) {
    blossoms.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 10 + 10,
      speed: Math.random() * 5 + 1,
      angle: Math.random() * Math.PI * 2,
      angleIncrement: Math.random() * 0.1 - 0.05,
      petalCount: Math.floor(Math.random() * 4) + 5,
      petalLength: Math.random() * 10 + 5,
      petalWidth: Math.random() * 2 + 1,
      petalColor: {
        r: 255,
        g: Math.floor(Math.random() * 128) + 128,
        b: Math.floor(Math.random() * 128) + 128,
      },
    });
  }

  // Tạo gradient cho hoa đào
  function createPetalGradient(petal) {
    var gradient = ctx.createLinearGradient(
      petal.x1,
      petal.y1,
      petal.x2,
      petal.y2
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(
      1,
      `rgb(${petal.color.r}, ${petal.color.g}, ${petal.color.b})`
    );
    return gradient;
  }

  // Vẽ hoa đào
  function drawBlossoms() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < blossoms.length; i++) {
      var blossom = blossoms[i];
      for (var j = 0; j < blossom.petalCount; j++) {
        var angle = ((Math.PI * 2) / blossom.petalCount) * j + blossom.angle;
        var petal = {
          x1: blossom.x + Math.cos(angle) * blossom.radius,
          y1: blossom.y + Math.sin(angle) * blossom.radius,
          x2:
            blossom.x +
            Math.cos(angle) * (blossom.radius + blossom.petalLength),
          y2:
            blossom.y +
            Math.sin(angle) * (blossom.radius + blossom.petalLength),
          color: blossom.petalColor,
          width: blossom.petalWidth,
        };
        var petalGradient = createPetalGradient(petal);
        ctx.beginPath();
        ctx.strokeStyle = petalGradient;
        ctx.lineWidth = petal.width;
        ctx.moveTo(petal.x1, petal.y1);
        ctx.lineTo(petal.x2, petal.y2);
        ctx.stroke();
      }

      // Di chuyển và xoay hoa đào
      blossom.angle += blossom.angleIncrement;
      blossom.x += Math.cos(blossom.angle) * blossom.speed;
      blossom.y += blossom.speed;

      // Nếu hoa
      // Nếu hoa đào ra khỏi màn hình thì đặt lại vị trí
      if (blossom.y > canvas.height + blossom.radius) {
        blossom.y = -blossom.radius;
        blossom.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(drawBlossoms);
  }

  // Gọi hàm vẽ hoa đào
  drawBlossoms();
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
