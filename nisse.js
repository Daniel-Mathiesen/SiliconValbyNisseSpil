const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const lifeBoard = document.querySelector(".life");
const moles = document.querySelectorAll(".mole");
const polices = document.querySelectorAll(".police")
const svg = document.querySelectorAll("#svg")
var classes = ['mole', 'police']
let lastHole;
let timeUp = false;
let score = 0;
let lives = 3;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  classes.classList.add("[Math.floor(Math.random()*classes.length)]")
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(1000, 1500);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  lifeBoard.textContent = 3
  timeUp = false;
  score = 0;
  lives = 3
  peep();
  setTimeout(() => (timeUp = true), 30000);
}

function whack(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

function ouch(p) {
  if (!p.isTrusted) return;
  lives--;
  this.parentNode.classList.remove("up");
  lifeBoard.textContent = lives;
}

polices.forEach((police) => police.addEventListener("click", ouch))
moles.forEach((mole) => mole.addEventListener("click", whack));
