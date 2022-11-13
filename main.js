let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = `Images/dice${randomNum1}.png`;
let diceLeft = document.querySelectorAll("img")[0];
diceLeft.setAttribute("src", randomDiceImage);

let randomNum2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = `Images/dice${randomNum2}.png`;
let diceRight = document.querySelectorAll("img")[1];
diceRight.setAttribute("src", randomDiceImage2);

if (randomNum1 > randomNum2) {
  document.querySelector("h2").innerHTML = `🙌Player 1 Wins`;
} else if (randomNum2 > randomNum1) {
  document.querySelector("h2").innerHTML = `Player 2 Wins 🙌`;
} else {
  document.querySelector("h2").innerHTML = `Draw 😱`;
}
