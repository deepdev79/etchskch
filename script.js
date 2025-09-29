"use strict";
const container = document.querySelector(".container");
const option = document.querySelectorAll(".btn");
const colorPicker = document.getElementById("colorPicker");

const createGrid = function (rows, columns) {
  let total = rows * columns;

  // Calculate flex basis width and height for each cell
  const cellWidth = `calc(100%/${columns})`;
  const cellHeight = `calc(100%/${rows}`;

  for (let i = 0; i < total; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.flex = `0 0 ${cellWidth}`;
    box.style.height = cellHeight;
    container.appendChild(box);
  }
};
createGrid(7, 7);

const GenerateRandomColor = function () {
  let hue, saturation, lightness;
  hue = Math.floor(Math.random() * 361);
  saturation = Math.floor(Math.random() * (101 - 10) + 10);
  lightness = Math.floor(Math.random() * (81 - 20) + 20);
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

const pickColor = function (choice) {
  let pickRandomColor;
  container.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("box"))
      switch (choice) {
        case "Eraser":
          e.target.style.backgroundColor = "white";
          break;
        case "Pick Color":
          e.target.style.backgroundColor = colorPicker.value;
          break;
        case "Random":
          pickRandomColor = GenerateRandomColor();
          e.target.style.backgroundColor = pickRandomColor;
          break;
        default:
          e.target.style.backgroundColor = "green";
      }
  });
};
option.forEach((button) =>
  button.addEventListener("click", function (e) {
    pickColor(e.target.innerText);
  })
);

/*



//function returns a random color


//function for new grid input by user(resetGrid button)
const resetGrid = function () {
  let choice;
  do {
    choice = prompt("Enter new size of Grid (Not more than 100)");
  } while (choice > 100);
  if (choice === null || choice === "") return;

  while (color.firstChild) {
    color.removeChild(color.lastChild);
  }
  createGrid(choice);
};

//clears grid
const resetBoard = function () {
  const colr = document.querySelectorAll(".grid-items");
  colr.forEach((c1) => (c1.style.backgroundColor = "white"));
};

//function for user choice i.e. Button Pressed
const userInput = function (choice) {
  if (choice === "Reset Grid") {
    resetGrid();
    return;
  } else if (choice === "Reset board") {
    resetBoard();
    return;
  }
  color.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items")) {
      switch (choice) {
        case "RGB":
          e.target.style.backgroundColor = randomColor();
          break;
        case "Eraser":
          e.target.style.backgroundColor = "white";
          break;
        case "Pick color":
          e.target.style.backgroundColor = pickColor.value;
          break;
        case "Darkening":
          e.target.style.backgroundColor = prgDrk();
          break;
      }
    }
  });
};
s

*/
