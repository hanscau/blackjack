class blackjackUI {
  overlay: HTMLDivElement;
  overlayWords: HTMLHeadingElement;

  betInputContainer: HTMLParagraphElement;

  runBtn: HTMLButtonElement;
  gameOverBtn: HTMLButtonElement;

  constructor() {
    this.overlay = <HTMLDivElement>document.getElementById("overlay");

    this.overlayWords = <HTMLHeadingElement>(
      document.getElementById("overlay-label")
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
    this.overlay.style.backgroundColor = "#000000bb";
    this.overlay.style.display = "flex";
  }

  public reset(): void {
    this.betInputContainer.style.display = "flex";
    this.gameOverBtn.style.display = "none";
  }

  public showWin(): void {
    this.overlayWords.innerHTML = "You've Won!";
    this.overlay.style.backgroundColor = "#cccc00bb";
    this.overlay.style.display = "flex";
  }

  public showLose(): void {
    this.overlayWords.innerHTML = "You've Lost!";
    this.overlay.style.backgroundColor = "#ff0000bb";
    this.overlay.style.display = "flex";
  }

  public showTie(): void {
    this.overlayWords.innerHTML = "It's a tie!";
    this.overlay.style.backgroundColor = "#1100ffbb";
    this.overlay.style.display = "flex";
  }

  public showBlackjack(): void {
    this.overlayWords.innerHTML = "BLACK JACK!";
    this.overlay.style.backgroundColor = "#eeff00bb";
    this.overlay.style.display = "flex";
  }

  public showCharlie(): void {
    this.overlayWords.innerHTML = "CHARLIE BBY <3!";
    this.overlay.style.backgroundColor = "#eeff00bb";
    this.overlay.style.display = "flex";
  }

  public showPlayerLost(): void {
    this.overlayWords.innerHTML = "Gameover<br>You ran out of credit!";
    this.overlay.style.backgroundColor = "#000000bb";
    this.overlay.style.display = "flex";
    this.betInputContainer.style.display = "none";
    this.gameOverBtn.style.display = "block";
  }

  public showPlayerWon(): void {
    this.overlayWords.innerHTML = "Gameover<br>Dealer ran out of credit!";
    this.overlay.style.backgroundColor = "#000000bb";
    this.overlay.style.display = "flex";
    this.betInputContainer.style.display = "none";
    this.gameOverBtn.style.display = "block";
  }
}
