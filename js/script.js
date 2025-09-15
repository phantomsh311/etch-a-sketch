let currentColor = "black"; // color por defecto

function populateBoard(size) {
  const board = document.querySelector(".board");
  board.innerHTML = "";

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const amount = size * size;

  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getColor();
    });
    board.appendChild(square);
  }
}

function getColor() {
  if (currentColor === "random") {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return currentColor;
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    alert("Please enter a number between 2 and 100.");
  }
}

function changeColor(color) {
  currentColor = color;
}


function resetBoard() {
  const squares = document.querySelectorAll(".board div");
  squares.forEach(square => square.style.backgroundColor = "white");
}


document.getElementById("setSize").addEventListener("click", () => {
  const input = document.getElementById("boardSize").value;
  changeSize(input);
});

document.getElementById("gray").addEventListener("click", () => changeColor("gray"));
document.getElementById("blue").addEventListener("click", () => changeColor("blue"));
document.getElementById("random").addEventListener("click", () => changeColor("random"));
document.getElementById("reset").addEventListener("click", resetBoard);


populateBoard(16);
