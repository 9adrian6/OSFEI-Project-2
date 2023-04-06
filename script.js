"use strict";

const first_btn = document.querySelector(".first-button");
const second_screen = document.querySelector(".second-screen");
const rules_btn = document.querySelector(".rules-button");
const rules_img = document.getElementById("rules-image");
const comp_div = document.getElementById("comp-div");
const user_div = document.getElementById("user-div");
const result = document.querySelector(".result");
const win_lose_btn = document.querySelector(".user-win-btn");
const play_agn_btn = document.querySelector(".play-agn-btn");
const score_number = document.querySelector(".score-number");

// ----- event to show the screen with the game
first_btn.addEventListener("click", () => {
  first_btn.innerHTML = "Loading ...";
  setInterval(() => {
    first_btn.classList.add("hidden");
    second_screen.classList.remove("hidden");
  }, 1000);
});

const rock = `<img src='/images/rock.png' width='45' height='45'>`;
const paper = `<img src='/images/paper.png' width='45' height='45'>`;
const scissors = `<img src='/images/scissors.png' width='45' height='45'>`;

// 1 - COMP, 2 - user
const actionTaker = new Map([
  [`rock ${rock}`, "DRAW"],
  [`rock ${paper}`, "YOU WIN"],
  [`rock ${scissors}`, "COMP WIN"],
  [`paper ${paper}`, "DRAW"],
  [`paper ${rock}`, "COMP WIN"],
  [`paper ${scissors}`, "YOU WIN"],
  [`scissors ${scissors}`, "DRAW"],
  [`scissors ${rock}`, "YOU WIN"],
  [`scissors ${paper}`, "COMP WIN"],
]);

// ------- function for user pick --------
function userHand(value) {
  user_div.innerHTML = value;
  result.classList.remove("visibility");
  handleAction(value);
}

userHand;

// ------- function for computer pick -------
function computerHand() {
  const arr = ["rock", "paper", "scissors"];
  const random = arr[Math.floor(Math.random() * arr.length)];
  comp_div.innerHTML = `<img src='/images/${random}.png' width='45' height='45'>`;

  return random;
}

// ------- function for result of the game
function handleAction(value) {
  const compChose = computerHand();
  const userChose = value;

  const result = actionTaker.get(`${compChose} ${userChose}`);

  win_lose_btn.innerHTML = result;
  score_number.innerHTML =
    result === "YOU WIN" ? +score_number.innerHTML + 1 : score_number.innerHTML;
}

rules_btn.addEventListener("click", () => {
  rules_img.classList.toggle("hidden");
});

play_agn_btn.addEventListener("click", () => {
  result.classList.add("visibility");
});
