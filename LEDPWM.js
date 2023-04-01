const on = document.getElementById("on");
const slider = document.getElementById("slider");

var count = 0;

function onChange() {
  var val = slider.value;

  console.log(val);

  updateVar(val);

  slider.style.background = "hsl(216, " + val + "%, 63%)";
}

function onClick() {
  count++;

  if (count % 2 == 0) {
    updateVar(0);
    on.innerHTML = "ON";
  } else {
    updateVar(255);
    on.innerHTML = "OFF";
  }
}

function updateVar(int) {
  fetch("https://dweet.io/dweet/for/LEDPWMTEST", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ brightness: int }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}
