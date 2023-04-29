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

    var css = ".swiper-pagination-bullet:hover {outline: 0px var(--swiper-pagination-bullet-inactive-color, #000) solid;outline-offset: 0px;transition: 0.25s ease} ";
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

  menu.style.backgroundSize = "80px 80px";
}

setInterval(function () {
  swiper.on("slideChange", function () {
    menu.dataset.activeIndex = swiper.activeIndex;
  });
}, 200);
