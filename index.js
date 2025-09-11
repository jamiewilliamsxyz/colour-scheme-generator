const schemeSelect = document.getElementById("scheme-select");
const seedPicker = document.getElementById("seed-picker");
const generateBtn = document.getElementById("generate-btn");
const mainContainer = document.getElementById("main-container");

let selectedScheme = "monochrome";
let seedColour = "A3E3FF";

schemeSelect.addEventListener("change", () => {
  selectedScheme = schemeSelect.value;
});

seedPicker.addEventListener("change", (e) => {
  seedColour = e.target.value.slice(1);
});

generateBtn.addEventListener("click", () => {
  getColourScheme();
});

getColourScheme = async () => {
  try {
    const res = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${seedColour}&mode=${selectedScheme}`
    );
    const data = await res.json();

    if (!res.ok) {
      throw Error(`An error has occurred, status code: ${res.status}`);
    }

    renderColourScheme(data.colors);
  } catch (err) {
    console.error(err);
  }
};

const renderColourScheme = (data) => {
  mainContainer.innerHTML = data
    .map((colour) => {
      return `
      <div class="colour-column">
        <div style="background-color:${colour.hex.value};" class="colour-strip"></div>
        <p class="hex-text">${colour.hex.value}</p>
      </div>
    `;
    })
    .join("");
};

getColourScheme();
