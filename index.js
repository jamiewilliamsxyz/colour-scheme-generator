const schemeSelect = document.getElementById("scheme-select");
const seedPicker = document.getElementById("seed-picker");
const generateBtn = document.getElementById("generate-btn");

let selectedScheme = "monochrome";
let seedColour = "A3E3FF";

schemeSelect.addEventListener("change", () => {
  selectedScheme = schemeSelect.value;
});

seedPicker.addEventListener("change", (e) => {
  seedColour = e.target.value.slice();
});

generateBtn.addEventListener("click", () => {
  getColourScheme();
});

const getColourScheme = () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColour}&mode=${selectedScheme}`
  ).then((res) => res.json());
};
