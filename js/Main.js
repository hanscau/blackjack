var betInput = (document.getElementById("bet-input"));
var gameOverBtn = (document.getElementById("gameover"));
var hitBtn = (document.getElementById("hit"));
var passBtn = (document.getElementById("pass"));
var runBtn = (document.getElementById("run"));
var resetBtn = (document.getElementById("reset"));
var betBtn = (document.getElementById("bet-btn"));
var game = new Blackjack();
var getBet = function () {
    game.reset();
    var bet = parseInt(betInput.value);
    var isValidBet = game.setBet(bet);
    if (isValidBet) {
        game.startRound();
    }
    else {
        betInput.value = "";
    }
};
var hit = function () {
    game.hit();
};
var pass = function () {
    game.ai();
    game.end();
};
var run = function () {
    game.reset();
};
var gameOver = function () {
    game.hardReset();
};
betBtn.addEventListener("click", getBet);
hitBtn.addEventListener("click", hit);
passBtn.addEventListener("click", pass);
runBtn.addEventListener("click", run);
gameOverBtn.addEventListener("click", gameOver);
