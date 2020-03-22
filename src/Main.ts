let betInput: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("bet-input")
);
let gameOverBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("gameover")
);
let hitBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("hit")
);
let passBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("pass")
);
let runBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("run")
);
let resetBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("reset")
);
let betBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("bet-btn")
);

let game = new Blackjack();

let getBet = () => {
  game.reset();
  let bet = parseInt(betInput.value);

  let isValidBet = game.setBet(bet);

  if (isValidBet) {
    game.startRound();
  } else {
    betInput.value = "";
  }
};

let hit = () => {
  game.hit();
};

let pass = () => {
  game.ai();
  game.end();
};

let run = () => {
  game.reset();
};

let gameOver = () => {
  game.hardReset();
};

betBtn.addEventListener("click", getBet);
hitBtn.addEventListener("click", hit);
passBtn.addEventListener("click", pass);
runBtn.addEventListener("click", run);
gameOverBtn.addEventListener("click", gameOver);
