const container = document.getElementById("container");
let baseUrl =
  "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";
for (let i = 1; i <= 150; i++) {
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newImg = document.createElement("img");
  const parentDiv = container.appendChild(newDiv);
  newImg.src = `${baseUrl}${i}.png`;
  parentDiv.appendChild(newImg);
  newSpan.innerText = `#${i}`;
  parentDiv.appendChild(newSpan);
}
