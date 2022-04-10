let selectedColor = "None";
const selectBodyElement = document.querySelector("body");
const selectBgColorvalueElement = document.querySelector(".bg-color__value");
const selectBtnElement = document.querySelector(".bg-color__btn");
const selectHex = document.querySelector(".main-nav__list__hex");
const selectRGBA = document.querySelector(".main-nav__list__rgba");
const selectColorFlipper = document.querySelector(
  ".main-nav__list__colorflipper"
);

// set initial color value
selectBodyElement.style.backgroundColor = "#f1f5f8";
selectBgColorvalueElement.textContent = "#f1f5f8";

function generateHexValue() {
  const randomColorValue = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  const hexColorValue = `#${randomColorValue}`;
  return hexColorValue;
}

function generateRGBAValue() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const a = Math.floor(Math.random() * 255);
  return `RGB(${r}, ${g}, ${a})`;
}

function chooseColorFlipper() {
  selectHex.children[0].style.color = "#063251";
  selectRGBA.children[0].style.color = "#063251";
  selectedColor = "none";
  generateColorValues();
}

function chooseHexColor() {
  debugger;
  selectHex.children[0].style.color = "#49a6e9";
  selectRGBA.children[0].style.color = "#063251";
  selectedColor = "hex";
  generateColorValues();
}

function chooseRGBAColor() {
  selectRGBA.children[0].style.color = "#49a6e9";
  selectHex.children[0].style.color = "#063251";
  selectedColor = "rgba";
  generateColorValues();
}

function generateColorValues() {
  debugger;
  setColorValue(selectedColor);
}

function setColorValue(val) {
  debugger;
  let colorValue;

  if (val.toLowerCase() === "none") {
    colorValue =
      Math.floor(Math.random() * 10) > 5
        ? generateHexValue()
        : generateRGBAValue();
  } else if (val.toLowerCase() === "hex") {
    colorValue = generateHexValue();
  } else {
    colorValue = generateRGBAValue();
  }

  selectBodyElement.style.backgroundColor = colorValue;
  selectBgColorvalueElement.textContent = colorValue;
  selectBgColorvalueElement.style.fontSize = "1.3rem";
}

selectColorFlipper.addEventListener("click", chooseColorFlipper);
selectHex.addEventListener("click", chooseHexColor);
selectRGBA.addEventListener("click", chooseRGBAColor);
selectBtnElement.addEventListener("click", generateColorValues);

// References
// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
// https://www.javascripttutorial.net/javascript-dom/
