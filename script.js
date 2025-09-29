"use strict";
const container = document.querySelector(".container");

// let box;

let rows = 4;
let columns = 4;
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
  box.addEventListener("mouseover", () => {
    box.classList.add("test");
  });
}
