const boxContainer = document.getElementById("box-container");

function createBox() {
  const box = document.createElement("div");
  box.className = "box";
  box.style.background = "cyan";
  boxContainer.appendChild(box);

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "gray";
  });
}

const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  const getInput = parseFloat(inputBox.value);

  for (let i = 0; i < getInput; i++) {
    createBox();
  }
  inputBox.value = "";
});
