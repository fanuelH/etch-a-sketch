const mainContainer = document.querySelector(".main-container");
const askGridSizeBtn = document.querySelector("#ask");

askGridSizeBtn.addEventListener("click", (e) => {
  const gridSizePrompt = prompt(
    "How many squares do you want on each side of the grid?"
  );

  if (!gridSizePrompt || gridSizePrompt > 100 || gridSizePrompt < 0) {
    return console.log("please Enter Valid Number upto 100");
  }
  let gridSize = parseInt(gridSizePrompt * gridSizePrompt);
  createGrid(gridSize);
});

function createGrid(size = 256) {
  let gridWidth = 1240;
  let calcSquareSize = gridWidth / Math.sqrt(size);
  mainContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.innerText = `${i + 1}`;
    box.style.width = `${calcSquareSize}px`;
    box.style.height = `${calcSquareSize}px`;
    box.dataset.darkness = 0;
    box.addEventListener("mouseover", (e) => {
      let currentDarkness = parseFloat(box.dataset.darkness || 0);
      currentDarkness = Math.min(currentDarkness + 0.1, 1);
      box.dataset.darkness = currentDarkness;
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      box.style.background = `rgb(${randomR}, ${randomG}, ${randomB},${currentDarkness})`;
    });
    mainContainer.appendChild(box);
  }
}

createGrid();
