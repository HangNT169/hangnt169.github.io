const page_link = document.querySelectorAll(".page-link");
const toggle = document.querySelector(".toggle");
const botNuoc = document.querySelector("#botNuoc");
const tuyetRoi = document.querySelector("#tuyetRoi");
const muaRoi = document.querySelector("#muaRoi");
const laRoi = document.querySelector("#laRoi");
const saoRoi = document.querySelector("#saoRoi");
const hoaHong = document.querySelector("#hoaHong");
const macDinh = document.querySelector("#macDinh");
const backgroundMacDinh = document.querySelector("#backgroundMacDinh");
const background1 = document.querySelector("#background1");
const background2 = document.querySelector("#background2");
const background3 = document.querySelector("#background3");
const p_tag = document.querySelectorAll("p.copyright.text-muted");
const p1_tag = document.querySelectorAll("p.theme-by.text-muted");
const postMeta = document.querySelectorAll("span.post-meta");
const allElements = document.querySelectorAll("*");
const heading = document.querySelector(".page-heading h1");
let interValId;
var canvas = null;
var interValIdHoaHong;
var interValIdMuaRoi;
var interValIdSaoRoi;
var interValIdLaRoi;
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
    element.id !== "logout" &&
    element.id !== "logoutPost" &&
    element.id !== "nav-search-exit" &&
    element.id !== "back-to-top-btn" &&
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
    !element.classList.contains("fa-sun") &&
    !element.classList.contains("fa-grin-hearts") &&
    !element.classList.contains("fa-cloud-rain") &&
    !element.classList.contains("fa-file-image") &&
    !element.classList.contains("fa-image") &&
    !element.classList.contains("fa-headphones") &&
    !element.classList.contains("fa-star") &&
    !element.classList.contains("fa-chevron-up") &&
    !element.classList.contains("fa-leaf") &&
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

    stopAnimation();
    stopRosing();
    stopSnowing();
    stopRaning();
    stopSaoRoi();
    stopLaRoi();

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

    let checkHieuUng = localStorage.getItem("checkHieuUng");
    if (checkHieuUng == "0") {
      macDinhFunction();
    }
    if (checkHieuUng == "1") {
      tuyetRoiFunction();
    }
    if (checkHieuUng == "2") {
      botNuocFunction();
    }
    if (checkHieuUng == "3") {
      hoaHongFunction();
    }
    if (checkHieuUng == "4") {
      muaRoiFunction();
    }
    if (checkHieuUng == "5") {
      saoRoiFunction();
    }
    if (checkHieuUng == "6") {
      laRoiFunction();
    }

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

function checkBackgroundShow() {
  let checkBackground = localStorage.getItem("checkBackground");
  if (checkBackground == "0") {
    document.body.style.background = "transparent";
  }
  if (checkBackground == "1") {
    document.body.style.background = "url('/assets/img/anhnen2.jpg')";
  }
  if (checkBackground == "2") {
    document.body.style.background = "url('/assets/img/anhnen1.jpg')";
  }
  if (checkBackground == "3") {
    document.body.style.background = "url('/assets/img/bgimage.png')";
  }
}

checkBackgroundShow();

if (value) {
  changeSkin();
} else {
  let checkHieuUng = localStorage.getItem("checkHieuUng");
  if (checkHieuUng == "0") {
    macDinhFunction();
  }
  if (checkHieuUng == "1") {
    tuyetRoiFunction();
  }
  if (checkHieuUng == "2") {
    botNuocFunction();
  }
  if (checkHieuUng == "3") {
    hoaHongFunction();
  }
  if (checkHieuUng == "4") {
    muaRoiFunction();
  }
  if (checkHieuUng == "5") {
    saoRoiFunction();
  }
  if (checkHieuUng == "6") {
    laRoiFunction();
  }
}

// b???t n?????c
botNuoc.addEventListener("click", function () {
  if (localStorage.getItem("check_skin") == "true") {
    alert(
      "B???n ??ang ??? ch??? ????? ban ????m, h??y chuy??n qua ch??? ????? ban ng??y ????? s??? d???ng hi???u ???ng n??y !"
    );
  } else {
    if (localStorage.getItem("checkHieuUng") == "2") {
      alert("B???n ??ang ??? hi???u ???ng b???t n?????c !");
    } else {
      botNuocFunction();
    }
  }
});

function botNuocFunction() {
  stopSnowing();
  stopRosing();
  stopSaoRoi();
  stopRaning();
  stopLaRoi();
  createCanvasBubble();
}
// tuy???t r??i
tuyetRoi.addEventListener("click", function () {
  if (localStorage.getItem("check_skin") == "true") {
    alert(
      "B???n ??ang ??? ch??? ????? ban ????m, h??y chuy??n qua ch??? ????? ban ng??y ????? s??? d???ng hi???u ???ng n??y !"
    );
  } else {
    if (localStorage.getItem("checkHieuUng") == "1") {
      alert("B???n ??ang ??? hi???u ???ng tuy???t r??i !");
    } else {
      tuyetRoiFunction();
    }
  }
});

function tuyetRoiFunction() {
  stopAnimation();
  stopRosing();
  stopSaoRoi();
  stopRaning();
  stopLaRoi();
  createCanvasTuyetRoi();
}
// hoa h???ng
hoaHong.addEventListener("click", function () {
  if (localStorage.getItem("check_skin") == "true") {
    alert(
      "B???n ??ang ??? ch??? ????? ban ????m, h??y chuy??n qua ch??? ????? ban ng??y ????? s??? d???ng hi???u ???ng n??y !"
    );
  } else {
    if (localStorage.getItem("checkHieuUng") == "3") {
      alert("B???n ??ang ??? hi???u ???ng hoa h???ng !");
    } else {
      hoaHongFunction();
    }
  }
});

function hoaHongFunction() {
  stopAnimation();
  stopSnowing();
  stopSaoRoi();
  stopLaRoi();
  stopRaning();
  createCanvasHoaHongRoi();
}
//M??a r??i

muaRoi.addEventListener("click", function () {
  if (localStorage.getItem("check_skin") == "true") {
    alert(
      "B???n ??ang ??? ch??? ????? ban ????m, h??y chuy??n qua ch??? ????? ban ng??y ????? s??? d???ng hi???u ???ng n??y !"
    );
  } else {
    if (localStorage.getItem("checkHieuUng") == "4") {
      alert("B???n ??ang ??? hi???u ???ng m??a r??i !");
    } else {
      muaRoiFunction();
    }
  }
});

function muaRoiFunction() {
  stopAnimation();
  stopRosing();
  stopSaoRoi();
  stopSnowing();
  stopLaRoi();
  createCanvasMuaRoi();
}

//Sao r??i
saoRoi.addEventListener("click", function () {
  if (localStorage.getItem("check_skin") == "true") {
    alert(
      "B???n ??ang ??? ch??? ????? ban ????m, h??y chuy??n qua ch??? ????? ban ng??y ????? s??? d???ng hi???u ???ng n??y !"
    );
  } else {
    if (localStorage.getItem("checkHieuUng") == "5") {
      alert("B???n ??ang ??? hi???u ???ng sao r??i !");
    } else {
      saoRoiFunction();
    }
  }
});

function saoRoiFunction() {
  stopAnimation();
  stopRosing();
  stopSnowing();
  stopRaning();
  stopLaRoi();
  createCanvasSaoRoi();
}

// l?? r??i
laRoi.addEventListener("click", function () {
  if (localStorage.getItem("check_skin") == "true") {
    alert(
      "B???n ??ang ??? ch??? ????? ban ????m, h??y chuy??n qua ch??? ????? ban ng??y ????? s??? d???ng hi???u ???ng n??y !"
    );
  } else {
    if (localStorage.getItem("checkHieuUng") == "6") {
      alert("B???n ??ang ??? hi???u ???ng l?? r??i !");
    } else {
      laRoiFunction();
    }
  }
});

function laRoiFunction() {
  stopAnimation();
  stopRosing();
  stopSnowing();
  stopRaning();
  stopSaoRoi();
  createCanvasLaRoi();
}

macDinh.addEventListener("click", function () {
  macDinhFunction();
});

function macDinhFunction() {
  stopRosing();
  stopAnimation();
  stopSnowing();
  stopSaoRoi();
  stopRaning();
  stopLaRoi();
  localStorage.setItem("checkHieuUng", "0");
}

// T???o canvas
function createCanvasTuyetRoi() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // L???y context
  ctx = canvas.getContext("2d");

  // T???o m???ng h???t tuy???t
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

  // T???o gradient cho h???t tuy???t
  var snowflakeGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
  snowflakeGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
  snowflakeGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  // V??? h???t tuy???t
  function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < snowflakes.length; i++) {
      var flake = snowflakes[i];
      ctx.save();
      ctx.fillStyle = snowflakeGradient;
      ctx.translate(flake.x, flake.y);
      ctx.rotate(flake.angle);
      ctx.beginPath();
      ctx.arc(0, 0, flake.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    moveSnowflakes();
  }

  // Di chuy???n h???t tuy???t v?? xoay ch??ng
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

  // L???p l???i hi???u ???ng
  interValId = setInterval(drawSnowflakes, 30);
  localStorage.setItem("checkHieuUng", "1");
}

function stopSnowing() {
  clearInterval(interValId);
  if (ctx != null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// T???o canvas
function createCanvasBubble() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // L???y context
  ctx = canvas.getContext("2d");

  // T???o m???ng b???t n?????c
  for (var i = 0; i < 100; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }

  // V??? b???t n?????c
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

  // L???p l???i hi???u ???ng
  animationId = window.requestAnimationFrame(drawBubbles);
  localStorage.setItem("checkHieuUng", "2");
}

function stopAnimation() {
  window.cancelAnimationFrame(animationId);
  bubbles = [];
  if (ctx != null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// T???o canvas
function createCanvasHoaHongRoi() {
  canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // L???y context
  ctx = canvas.getContext("2d");

  // T???o m???ng hoa h???ng
  var roses = [];
  for (var i = 0; i < 100; i++) {
    roses.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 5 + 5,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }

  // T???o gradient cho hoa h???ng
  var roseGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 10);
  roseGradient.addColorStop(0, "rgba(255, 0, 0, 0.8)");
  roseGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  // V??? hoa h???ng
  function drawRoses() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (var i = 0; i < roses.length; i++) {
      var rose = roses[i];
      ctx.save();
      ctx.fillStyle = roseGradient;
      ctx.translate(rose.x, rose.y);
      ctx.fillRect(
        -rose.radius,
        -rose.radius,
        rose.radius * 2,
        rose.radius * 2
      );
      ctx.restore();
    }
    moveRoses();
  }

  // Di chuy???n hoa h???ng
  function moveRoses() {
    for (var i = 0; i < roses.length; i++) {
      var rose = roses[i];
      rose.y += rose.speed;
      if (rose.y > canvas.height) {
        rose.y = -10;
      }
    }
  }

  // L???p l???i hi???u ???ng
  interValIdHoaHong = setInterval(drawRoses, 30);
  localStorage.setItem("checkHieuUng", "3");
}

function stopRosing() {
  clearInterval(interValIdHoaHong);
  if (ctx != null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function createCanvasMuaRoi() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // L???y context
  ctx = canvas.getContext("2d");

  // T???o m???ng gi???t m??a
  var drops = [];
  for (var i = 0; i < 100; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 30 + 10,
      speed: Math.random() * 10 + 5,
    });
  }

  // V??? gi???t m??a
  function drawDrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var drop = drops[i];
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.stroke();
    }
    moveDrops();
  }

  // Di chuy???n gi???t m??a
  function moveDrops() {
    for (var i = 0; i < drops.length; i++) {
      var drop = drops[i];
      drop.y += drop.speed;
      if (drop.y > canvas.height) {
        drop.y = -drop.length;
      }
    }
  }

  // L???p l???i hi???u ???ng
  interValIdMuaRoi = setInterval(drawDrops, 30);
  localStorage.setItem("checkHieuUng", "4");
}

function stopRaning() {
  clearInterval(interValIdMuaRoi);
  if (ctx != null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
// T???o canvas
function createCanvasSaoRoi() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // L???y context
  ctx = canvas.getContext("2d");

  // T???o m???ng sao ch???i
  var meteors = [];
  var angle = Math.PI / 4; // G??c bay ch??o t??? tr??i qua ph???i
  for (var i = 0; i < 20; i++) {
    meteors.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 30 + 20, // t??ng t???c ????? bay
      angle: angle, // s??? d???ng c??ng m???t g??c cho t???t c??? c??c sao
      rotation: Math.random() * Math.PI,
      size: Math.random() * 10 + 10,
      opacity: Math.random(),
    });
  }

  // V??? sao ch???i
  function drawMeteors() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < meteors.length; i++) {
      var meteor = meteors[i];
      ctx.save();
      ctx.translate(meteor.x + meteor.size / 2, meteor.y + meteor.size / 2);
      ctx.rotate(meteor.rotation);
      ctx.beginPath();
      ctx.moveTo(-meteor.size / 2, -meteor.size / 2);
      ctx.lineTo(meteor.size / 2, meteor.size / 2);
      ctx.moveTo(meteor.size / 2, -meteor.size / 2);
      ctx.lineTo(-meteor.size / 2, meteor.size / 2);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 255, 255, " + meteor.opacity + ")";
      ctx.stroke();
      ctx.restore();
    }
    moveMeteors();
  }

  // Di chuy???n sao ch???i
  function moveMeteors() {
    for (var i = 0; i < meteors.length; i++) {
      var meteor = meteors[i];
      meteor.x += Math.cos(meteor.angle) * meteor.speed; // t??ng t???c ????? di chuy???n
      meteor.y += Math.sin(meteor.angle) * meteor.speed; // t??ng t???c ????? di chuy???n
      meteor.rotation += 0.05;
      if (meteor.x > canvas.width + 50 || meteor.y > canvas.height + 50) {
        meteors[i] = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 10 + 20,
          angle: angle,
          rotation: Math.random() * Math.PI,
          size: Math.random() * 10 + 10,
          opacity: Math.random(),
        };
      }
    }
  }

  // L???p l???i hi???u ???ng
  interValIdSaoRoi = setInterval(drawMeteors, 30);
  localStorage.setItem("checkHieuUng", "5");
}

function stopSaoRoi() {
  clearInterval(interValIdSaoRoi);
  if (ctx != null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function createCanvasLaRoi() {
  if (canvas == null) {
    canvas = document.createElement("canvas");
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  // L???y context
  ctx = canvas.getContext("2d");

  // T???o h??nh d???ng l?? b??ng
  var leafShape = createLeafShape();

  // T???o m???ng l?? b??ng
  // T???o m???ng l?? b??ng
  var leaves = [];
  for (var i = 0; i < 100; i++) {
    // t??ng s??? l?????ng l?? l??n ????? m???t ????? l?? d??y h??n
    leaves.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 10 + 20, // gi???m k??ch th?????c l?? xu???ng c??n 20-30px
      speed: Math.random() * 5 + 1,
      angle: Math.random() * 360,
      shape: leafShape,
    });
  }

  // V??? l?? b??ng
  function drawLeaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < leaves.length; i++) {
      var leaf = leaves[i];
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate((leaf.angle * Math.PI) / 180);
      drawLeaf(leaf);
      ctx.restore();
    }
    moveLeaves();
  }

  // Di chuy???n l?? b??ng
  function moveLeaves() {
    for (var i = 0; i < leaves.length; i++) {
      var leaf = leaves[i];
      leaf.y += leaf.speed;
      leaf.angle += leaf.speed;
      if (leaf.y > canvas.height + leaf.size) {
        leaf.y = -leaf.size;
      }
    }
  }

  // T???o h??nh d???ng l?? b??ng
  function createLeafShape() {
    var leafCanvas = document.createElement("canvas");
    leafCanvas.width = 30;
    leafCanvas.height = 30;
    var leafCtx = leafCanvas.getContext("2d");

    // V??? h??nh d???ng l?? b??ng
    leafCtx.beginPath();
    leafCtx.moveTo(15, 0);
    leafCtx.bezierCurveTo(7.5, 2.5, 7.5, 10, 7.5, 12.5); // Gi???m k??ch th?????c l?? b??ng
    leafCtx.bezierCurveTo(7.5, 17.5, 15, 27.5, 15, 27.5); // Gi???m k??ch th?????c l?? b??ng
    leafCtx.bezierCurveTo(15, 27.5, 22.5, 17.5, 22.5, 12.5); // Gi???m k??ch th?????c l?? b??ng
    leafCtx.bezierCurveTo(22.5, 10, 22.5, 2.5, 15, 0); // Gi???m k??ch th?????c l?? b??ng
    leafCtx.fillStyle = "green";
    leafCtx.fill();
    leafCtx.closePath();

    return leafCanvas;
  }

  // V??? l?? b??ng t??? h??nh d???ng ???? t???o
  function drawLeaf(leaf) {
    ctx.drawImage(
      leaf.shape,
      -leaf.size / 2,
      -leaf.size / 2,
      leaf.size,
      leaf.size
    );
  }

  // L???p l???i hi???u ???ng
  interValIdLaRoi = setInterval(drawLeaves, 30);
  localStorage.setItem("checkHieuUng", "6");
}

function stopLaRoi() {
  clearInterval(interValIdLaRoi);
  if (ctx != null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// L???y t???t c??? c??c ph???n t??? pre c?? class highlight
var highlights = document.querySelectorAll("pre.highlight");

// Duy???t qua t???ng ph???n t??? v?? th??m n??t copy v??o
highlights.forEach(function (highlight) {
  // T???o m???t div m???i ch???a button v?? highlight
  var container = document.createElement("div");
  container.className = "highlight-container";

  // T???o m???t button m???i
  var button = document.createElement("button");
  button.className = "btn-copy";
  button.textContent = "Copy";

  // Th??m button v??o div
  container.appendChild(button);

  // Th??m highlight v??o div
  container.appendChild(highlight.cloneNode(true));

  // Thay th??? highlight ban ?????u b???ng div ch???a highlight v?? button
  highlight.parentNode.replaceChild(container, highlight);

  // Sao ch??p n???i dung pre khi nh???p v??o button
  button.addEventListener("click", function () {
    var code = highlight.querySelector("code").textContent.trim();
    navigator.clipboard.writeText(code);
    button.textContent = "Copied!";
    setTimeout(function () {
      button.textContent = "Copy";
    }, 2000);
  });
});

backgroundMacDinh.addEventListener("click", function () {
  document.body.style.background = "transparent";
  localStorage.setItem("checkBackground", "0");
});

background1.addEventListener("click", function () {
  document.body.style.background = "url('/assets/img/anhnen2.jpg')";
  localStorage.setItem("checkBackground", "1");
});

background2.addEventListener("click", function () {
  document.body.style.background = "url('/assets/img/anhnen1.jpg')";
  localStorage.setItem("checkBackground", "2");
});

background3.addEventListener("click", function () {
  document.body.style.background = "url('/assets/img/bgimage.png')";
  localStorage.setItem("checkBackground", "3");
});

var btn = document.getElementById("back-to-top-btn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  scrollToTop(500);
};

function scrollToTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15);
  var scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  },15);
}

