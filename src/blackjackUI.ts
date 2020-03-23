class blackjackUI {
  overlay: HTMLDivElement;
  overlayWords: HTMLHeadingElement;
  overlayDesc: HTMLParagraphElement;

  betInputContainer: HTMLParagraphElement;

  runBtn: HTMLButtonElement;
  gameOverBtn: HTMLButtonElement;

  constructor() {
    this.overlay = <HTMLDivElement>document.getElementById("overlay");

    this.overlayWords = <HTMLHeadingElement>(
      document.getElementById("overlay-label")
    );

    this.overlayDesc = <HTMLParagraphElement>(
      document.getElementById("overlay-description")
    );

    this.betInputContainer = <HTMLParagraphElement>(
      document.getElementById("bet-ui")
    );

    this.runBtn = <HTMLButtonElement>document.getElementById("run");
    this.gameOverBtn = <HTMLButtonElement>document.getElementById("gameover");
  }

  public enableRun(): void {
    this.runBtn.disabled = false;
  }

  public disableRun(): void {
    this.runBtn.disabled = true;
  }

  public removeOverlay(): void {
    this.overlay.style.display = "none";
  }

  public askForBet(): void {
    this.overlayWords.innerHTML = "Set bet!";
    this.overlayDesc.innerHTML = "Click on bet when you are done";
    this.overlay.style.backgroundColor = "#000000bb";
    this.overlay.style.display = "flex";
  }

  public reset(): void {
    this.betInputContainer.style.display = "flex";
    this.gameOverBtn.style.display = "none";
  }

  public showWin(): void {
    this.overlayWords.innerHTML = "You've Won!";
    this.overlayDesc.innerHTML = "Set the bet for your next round";
    this.overlay.style.backgroundColor = "rgb(6, 121, 2, 0.8)";
    this.overlay.style.display = "flex";
  }

  public showLose(): void {
    this.overlayWords.innerHTML = "You've Lost!";
    this.overlayDesc.innerHTML = "Set the bet for your next round";
    this.overlay.style.backgroundColor = "#ff0000bb";
    this.overlay.style.display = "flex";
  }

  public showTie(): void {
    this.overlayWords.innerHTML = "It's a tie!";
    this.overlayDesc.innerHTML = "Set the bet for your next round";
    this.overlay.style.backgroundColor = "#1100ffbb";
    this.overlay.style.display = "flex";
  }

  public showBlackjack(): void {
    this.overlayWords.innerHTML = "BLACK JACK!";
    this.overlayDesc.innerHTML =
      "You've got twice the bet!<br>Set the bet for your next round";
    this.overlay.style.backgroundColor = "rgb(6, 121, 2, 0.8)";
    this.overlay.style.display = "flex";
  }

  public showCharlie(): void {
    this.overlayWords.innerHTML = "CHARLIE BBY <3!";
    this.overlayDesc.innerHTML =
      "You've got thrice the bet!<br>Set the bet for your next round";
    this.overlay.style.backgroundColor = "#eeff00bb";
    this.overlay.style.display = "flex";
  }

  public showPlayerLost(): void {
    this.overlayWords.innerHTML = "Gameover";
    this.overlayDesc.innerHTML = "You ran out of credit!";
    this.overlay.style.backgroundColor = "#000000bb";
    this.overlay.style.display = "flex";
    this.betInputContainer.style.display = "none";
    this.gameOverBtn.style.display = "block";
  }

  public showPlayerWon(): void {
    this.overlayWords.innerHTML = "Gameover";
    this.overlayDesc.innerHTML = "Dealer ran out of credit!";

    this.overlay.style.backgroundColor = "#000000bb";
    this.overlay.style.display = "flex";
    this.betInputContainer.style.display = "none";
    this.gameOverBtn.style.display = "block";
  }
}
