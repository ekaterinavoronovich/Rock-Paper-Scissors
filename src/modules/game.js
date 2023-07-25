import { createChoiceBtn } from "./createItemElement.js";
import { showResultGame } from "./result-game.js";
const Value = ["rock", "scissors", "paper"];
const areaMoveGame = document.querySelector(".move-game");
const getBtnChoice = document.querySelectorAll(".btn-choice");
let ValueComputer = "";
let score = 0;
areaMoveGame.style.display = "none";
export function startGame(){
getBtnChoice.forEach((item) => {
  item.addEventListener("click", (event) => {
    const pickedUser = event.target.id;
    const startGame = document.querySelector(".game");
    startGame.style.display = "none";
    areaMoveGame.style.display = "grid";
    createChoiceBtn(pickedUser, "1/1/3/2");
    setTimeout(() => {
      Game(pickedUser);
    }, 1000);
  });
});
}

function GetValueComputer() {
  const Picked = Value[Math.floor(Math.random() * Value.length)];
  createChoiceBtn(Picked, "1/3/3/4");
  ValueComputer = Picked;
  return ValueComputer;
}

function CompareValue(ValueUser, ValueComputer) {
  let textResult = "";

  if (ValueUser === ValueComputer) {
    textResult = "Tie";
    showResultGame(textResult);
    score += 0;
    return score;
  }
  if (ValueUser == "rock" && ValueComputer != "paper") {
    textResult = "You win";
    showResultGame(textResult);
    console.log(score);
    score += 1;
    return score;
  }

  if (ValueUser == "scissors" && ValueComputer != "rock") {
    console.log(score);
    textResult = "You win";
    showResultGame(textResult);
    score += 1;
    return score;
  }

  if (ValueUser == "paper" && ValueComputer != "scissors") {
    textResult = "You win";
    showResultGame(textResult);
    console.log(score);
    score += 1;
    return score;
  }
  else {
    textResult = "You lose";
    showResultGame(textResult);
    console.log(score);
    score -= 1;
    return score;
  }
}

function changeCurrentScore(score) {
  const currentScore = document.querySelector(".current-score");
  currentScore.innerText = `${score}`;
}

function Game(pickedUser) {
  let pickedComputer = GetValueComputer();
  let resultCompare = CompareValue(pickedUser, pickedComputer);
  changeCurrentScore(resultCompare);
}
