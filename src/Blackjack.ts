class Blackjack {
  player: Player;
  dealer: Player;
  deck: Player;

  ui: blackjackUI;

  startingCredit: number = 500;
  charlieCardCount: number = 5;

  constructor() {
    this.ui = new blackjackUI();

    this.player = new Player("Player");
    this.dealer = new Player("Dealer");
    this.deck = new Player("Deck");

    this.player.bindHandById("player");
    this.player.bindCreditById("player-credit");
    this.dealer.bindHandById("dealer");
    this.dealer.bindCreditById("dealer-credit");

    this.player.setCredit(this.startingCredit);
    this.dealer.setCredit(this.startingCredit);

    this.deck.getFullDeck();
    this.deck.shuffle();
  }

  public ai(): void {
    this.dealer.showAll();
    this.dealer.displayCard();

    while (this.dealer.calculateHand() < 17) {
      this.deck.giveTop(this.dealer, true);
    }
  }

  public hardReset(): void {
    this.player.setCredit(this.startingCredit);
    this.dealer.setCredit(this.startingCredit);

    this.deck.getFullDeck();
    this.deck.shuffle();

    this.ui.reset();
    this.ui.askForBet();
  }

  public askForBet(): void {
    this.ui.askForBet();
  }

  public setBet(bet: number): boolean {
    if (bet <= 0) {
      alert("Bet cannot be negative or zero");
      return false;
    } else if (bet > this.player.getCredit()) {
      alert("Bet exceed remaining credit");
      return false;
    } else if (bet > 0 && bet <= this.player.getCredit()) {
      this.player.setBet(bet);
      this.dealer.setBet(bet);
      return true;
    } else {
      alert("Invalid bet");
      return false;
    }
  }

  public startRound(): void {
    this.ui.removeOverlay();

    this.deck.giveTop(this.player, true);
    this.deck.giveTop(this.dealer, true);
    this.deck.giveTop(this.player, true);
    this.deck.giveTop(this.dealer, false);

    this.fifteenCheck();
  }

  public end(): void {
    let dealerScore: number = this.dealer.calculateHand();
    let playerScore: number = this.player.calculateHand();

    if (
      playerScore <= 21 &&
      this.player.countCardInHand() >= this.charlieCardCount
    ) {
      console.log("Player Charlie~");
      this.dealer.giveCharlieBet(this.player);
      this.ui.showCharlie();
    } else if (
      dealerScore <= 21 &&
      this.dealer.countCardInHand() >= this.charlieCardCount
    ) {
      console.log("Dealer Charlie~");
      this.player.giveCharlieBet(this.dealer);
      this.ui.showLose();
    } else if (dealerScore == 21 || playerScore == 21) {
      if (dealerScore == 21 && playerScore == 21) {
        console.log("it's a tie");
        this.ui.showTie();
      } else if (dealerScore == 21) {
        console.log("you lost! Blackjack!");
        this.player.giveBlackjackBet(this.dealer);
        this.ui.showLose();
      } else if (playerScore == 21) {
        console.log("you won! Blackjack!");
        this.dealer.giveBlackjackBet(this.player);
        this.ui.showBlackjack();
      }
    } else if (dealerScore > 21 || playerScore > 21) {
      if (dealerScore > 21 && playerScore > 21) {
        console.log("it's a tie");
        this.ui.showTie();
      } else if (dealerScore > 21) {
        console.log("you won!");
        this.dealer.giveBetCredit(this.player);
        this.ui.showWin();
      } else if (playerScore > 21) {
        console.log("you lost!");
        this.player.giveBetCredit(this.dealer);
        this.ui.showLose();
      }
    } else if (playerScore > dealerScore) {
      console.log("you won!");
      this.dealer.giveBetCredit(this.player);
      this.ui.showWin();
    } else if (playerScore < dealerScore) {
      console.log("you lost!");
      this.player.giveBetCredit(this.dealer);
      this.ui.showLose();
    } else if (playerScore == dealerScore) {
      console.log("it's a tie");
      this.ui.showTie();
    }

    console.log(
      "Your score: " + playerScore + "| Dealer's score: " + dealerScore
    );

    if (this.deck.countCardInHand() < 30) {
      this.deck.getFullDeck();
      this.deck.shuffle();
      console.log("Reset cards and shuffled");
    }

    if (this.dealer.getCredit() <= 0) {
      this.ui.showPlayerWon();
    } else if (this.player.getCredit() <= 0) {
      this.ui.showPlayerLost();
    }
  }

  public hit(): void {
    this.deck.giveTop(this.player, true);
    this.conditionCheck();
  }

  public reset(): void {
    this.player.resetHand();
    this.dealer.resetHand();

    this.ui.askForBet();
  }

  private conditionCheck(): void {
    this.overCheck();
    this.fifteenCheck();
    this.charlieCheck();
  }

  private overCheck(): void {
    if (this.player.calculateHand() > 21) {
      this.end();
    }
  }

  private charlieCheck(): void {
    if (this.player.countCardInHand() >= 5) {
      this.end();
    }
  }

  private fifteenCheck(): void {
    if (this.player.calculateHand() == 15) {
      this.ui.enableRun();
    } else {
      this.ui.disableRun();
    }
  }
}
