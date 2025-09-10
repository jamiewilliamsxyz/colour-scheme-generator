const schemeSelect = document.getElementById("scheme-select");

let selectedScheme = "monochrome";

schemeSelect.addEventListener("change", () => {
  selectedScheme = schemeSelect.value;
  console.log(selectedScheme);
});
