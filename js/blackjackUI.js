var blackjackUI = /** @class */ (function () {
    function blackjackUI() {
        this.overlay = document.getElementById("overlay");
        this.overlayWords = (document.getElementById("overlay-label"));
        this.betInputContainer = (document.getElementById("bet-ui"));
        this.runBtn = document.getElementById("run");
        this.gameOverBtn = document.getElementById("gameover");
    }
    blackjackUI.prototype.enableRun = function () {
        this.runBtn.disabled = false;
    };
    blackjackUI.prototype.disableRun = function () {
        this.runBtn.disabled = true;
    };
    blackjackUI.prototype.removeOverlay = function () {
        this.overlay.style.display = "none";
    };
    blackjackUI.prototype.askForBet = function () {
        this.overlayWords.innerHTML = "Set bet!";
        this.overlay.style.backgroundColor = "#000000bb";
        this.overlay.style.display = "flex";
    };
    blackjackUI.prototype.reset = function () {
        this.betInputContainer.style.display = "flex";
        this.gameOverBtn.style.display = "none";
    };
    blackjackUI.prototype.showWin = function () {
        this.overlayWords.innerHTML = "You've Won!";
        this.overlay.style.backgroundColor = "#cccc00bb";
        this.overlay.style.display = "flex";
    };
    blackjackUI.prototype.showLose = function () {
        this.overlayWords.innerHTML = "You've Lost!";
        this.overlay.style.backgroundColor = "#ff0000bb";
        this.overlay.style.display = "flex";
    };
    blackjackUI.prototype.showTie = function () {
        this.overlayWords.innerHTML = "It's a tie!";
        this.overlay.style.backgroundColor = "#1100ffbb";
        this.overlay.style.display = "flex";
    };
    blackjackUI.prototype.showBlackjack = function () {
        this.overlayWords.innerHTML = "BLACK JACK!";
        this.overlay.style.backgroundColor = "#eeff00bb";
        this.overlay.style.display = "flex";
    };
    blackjackUI.prototype.showCharlie = function () {
        this.overlayWords.innerHTML = "CHARLIE BBY <3!";
        this.overlay.style.backgroundColor = "#eeff00bb";
        this.overlay.style.display = "flex";
    };
    blackjackUI.prototype.showPlayerLost = function () {
        this.overlayWords.innerHTML = "Gameover<br>You ran out of credit!";
        this.overlay.style.backgroundColor = "#000000bb";
        this.overlay.style.display = "flex";
        this.betInputContainer.style.display = "none";
        this.gameOverBtn.style.display = "block";
    };
    blackjackUI.prototype.showPlayerWon = function () {
        this.overlayWords.innerHTML = "Gameover<br>Dealer ran out of credit!";
        this.overlay.style.backgroundColor = "#000000bb";
        this.overlay.style.display = "flex";
        this.betInputContainer.style.display = "none";
        this.gameOverBtn.style.display = "block";
    };
    return blackjackUI;
}());
