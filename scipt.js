const button = document.getElementById("buttonChangeColor");
const box = document.getElementById("box");
const slider = document.getElementById("redSlider");

button.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

function changecoloorr() {
    const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

slider.addEventListener("input", function () {
    changecoloorr()
});
