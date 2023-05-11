let details = navigator.userAgent;

/* Creating a regular expression
      containing some mobile devices keywords
      to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;

/* Using test() method to search regexp in details
      it returns boolean value*/
let isMobileDevice = regexp.test(details);

// const root = ReactDOM.createRoot(
//   document.getElementById('swiper')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);

const menu = document.getElementById("swiperttt");

let dodf = document.getElementById("swiperttt");
let vall = Array.from(document.getElementsByClassName("vall"));
let bullet = Array.from(
  document.getElementsByClassName("swiper-pagination-bullet")
);

if (!isMobileDevice) {
  dodf.innerHTML +=
    '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
}

var grid = document.getElementById("gridInput");
var fontSize = document.getElementById("fontSize");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 500,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },

  mousewheel: {
    invert: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

function changeGrid() {
  // grid.value = 17;
  var valt = grid.value;

  // swiperttt.style.backgroundImage = ;

  console.log(grid.value);
  console.log(swiperttt.style.backgroundImage);
}

fontSize.addEventListener("onmouseover", function changeFontSize() {
  // swiperttt.style. = "radial-gradient( rgb(244 244 244) " + grid.value + "%, transparent 9% );";
});

if (!isMobileDevice) {
  console.log(isMobileDevice);
  // dodf.innerHTML +=
  //   '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';

  vall.forEach((item) => {
    item.style.fontSize = "3em";

    // console.log(item);
  });
} else {
  console.log(isMobileDevice);

  bullet.forEach((item) => {
    item.style.width =
      "var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 15px))";
    item.style.height =
      "var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 15px))";
    item.style.margin =
      "0 var(--swiper-pagination-bullet-horizontal-gap, 15px)";

    console.log(item.style.fontSize);

    var css =
      ".swiper-pagination-bullet:hover {outline: 0px var(--swiper-pagination-bullet-inactive-color, #000) solid;outline-offset: 0px;transition: 0.25s ease} ";
    var style = document.createElement("style");

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    item.appendChild(style);
  });

  vall.forEach((item) => {
    item.style.fontSize = "66.7px";

    console.log(item.style.fontSize);
  });

  menu.style.backgroundSize = "60px 60px";
}

setInterval(function () {
  swiper.on("slideChange", function () {
    menu.dataset.activeIndex = swiper.activeIndex;
  });
}, 200);

var temps = [94, 94, 91, 91, 88, 94, 98];
var highTemp;
var lowTemp;

const svg = document.getElementById("svg");

function getInfo() {}

var tempVal = document.getElementById("temp");
var humdVal = document.getElementById("humd");

tempVal.innerHTML = "94°F";
humdVal.innerHTML = "9%";

var id = document.getElementById("svgLine");
// id.points[4].y=233;

function showInfo() {
  highTemp = Math.max(...temps);
  lowTemp = Math.min(...temps);

  // console.log("0 " + lowTemp + " 160 " + highTemp + "");

  // svg.setAttribute('viewBox' , "0 " + lowTemp*2.5 + " 160 " + (highTemp - lowTemp)*2.5 + "");
  // svg.setAttribute('height' , "" + ((highTemp-lowTemp) + 20) + "");

  var points = "";

  temps.forEach((item, index) => {
    var place = highTemp - item + lowTemp;

    points += "" + (index * 20 + 20) + "," + place * 2.5 + " ";

    // console.log(points);
  });

  // id.setAttribute("points", points);

  tempVal.innerHTML = "94°F";
  humdVal.innerHTML = "9%";

  localStorage.setItem("Font Size");
  localStorage.setItem("Bullet Gap");
  localStorage.setItem("Bullet Size");
  localStorage.setItem("Graph Size");
  localStorage.setItem("Humd Color");
  localStorage.setItem("Temp Color");
  localStorage.setItem("Accent Color");
  localStorage.setItem("Grid Bullet Size");
}
var fontSze;
var gridSze;
var gridRadSze;
var bulletSze;
var bulletGap;
var tempClr;
var humdClr;
var accentClr;
var graphSze;
var graphClr;

localStorage.getItem("Font Size");
localStorage.getItem("Bullet Gap");
localStorage.getItem("Bullet Size");
localStorage.getItem("Graph Size");
localStorage.getItem("Graph Color");
localStorage.getItem("Humd Color");
localStorage.getItem("Temp Color");
localStorage.getItem("Accent Color");
localStorage.getItem("Grid Bullet Size");

function updateSettings() {
  localStorage.setItem("Font Size");
  localStorage.setItem("Bullet Gap");
  localStorage.setItem("Bullet Size");
  localStorage.setItem("Graph Size");
  localStorage.setItem("Graph Color");
  localStorage.setItem("Humd Color");
  localStorage.setItem("Temp Color");
  localStorage.setItem("Accent Color");
  localStorage.setItem("Grid Bullet Size");
}

setInterval(function ff() {
  showInfo();
}, 1000);

// localStorage.setItem("Font Size", );
//   localStorage.setItem("Bullet Gap", );
//   localStorage.setItem("Bullet Size", );
//   localStorage.setItem("Graph Size", );
//   localStorage.setItem("Humd Color", );
//   localStorage.setItem("Temp Color", );
//   localStorage.setItem("Accent Color", );
//   localStorage.setItem("Grid Bullet Size", );
