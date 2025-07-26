const mainContainer = document.querySelector(".main-container");

for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.className = "box";
  box.addEventListener("mouseover", (e) => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    box.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
  });
  mainContainer.appendChild(box);
}
