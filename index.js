const schemeSelect = document.getElementById("scheme-select");
const seedPicker = document.getElementById("seed-picker");

let selectedScheme = "monochrome";
let seedColour = "#A3E3FF";

schemeSelect.addEventListener("change", () => {
  selectedScheme = schemeSelect.value;
});

seedPicker.addEventListener("change", (e) => {
  seedColour = e.target.value;
});
