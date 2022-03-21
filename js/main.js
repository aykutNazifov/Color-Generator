const btn = document.getElementById("change");
const colorId = document.getElementById("color");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i<6; i++){
        hexColor += hex[getRandomInt()];
    }
    colorId.textContent = hexColor;
    colorId.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomInt() {
    return Math.floor(Math.random() * hex.length);
  }

  console.log(getRandomInt());