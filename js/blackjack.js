var Blackjack = /** @class */ (function () {
    function Blackjack() {
        this.startingCredit = 500;
        this.charlieCardCount = 5;
        this.dealerDelay = 2000;
        this.endDelay = 2000;
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
    Blackjack.prototype.ai = function () {
        this.dealer.showAll();
        while (this.dealer.calculateHand() < 17) {
            this.deck.giveTop(this.dealer, true);
        }
    };
    Blackjack.prototype.hardReset = function () {
        this.player.setCredit(this.startingCredit);
        this.dealer.setCredit(this.startingCredit);
        this.deck.getFullDeck();
        this.deck.shuffle();
        this.ui.reset();
        this.ui.askForBet();
    };
    Blackjack.prototype.askForBet = function () {
        this.ui.askForBet();
    };
    Blackjack.prototype.setBet = function (bet) {
        if (bet <= 0) {
            alert("Bet cannot be negative or zero");
            return false;
        }
        else if (bet > this.player.getCredit()) {
            alert("Bet exceed remaining credit");
            return false;
        }
        else if (bet > 0 && bet <= this.player.getCredit()) {
            this.player.setBet(bet);
            this.dealer.setBet(bet);
            return true;
        }
        else {
            alert("Invalid bet");
            return false;
        }
    };
    Blackjack.prototype.startRound = function () {
        this.ui.removeOverlay();
        this.deck.giveTop(this.player, true);
        this.deck.giveTop(this.dealer, true);
        this.deck.giveTop(this.player, true);
        this.deck.giveTop(this.dealer, false);
        this.fifteenCheck();
    };
    Blackjack.prototype.end = function () {
        var _this = this;
        setTimeout(function () {
            _this.finalTally();
        }, this.endDelay);
    };
    Blackjack.prototype.finalTally = function () {
        var dealerScore = this.dealer.calculateHand();
        var playerScore = this.player.calculateHand();
        this.dealer.showAll();
        if (playerScore <= 21 &&
            this.player.countCardInHand() >= this.charlieCardCount) {
            console.log("Player Charlie~");
            this.dealer.giveCharlieBet(this.player);
            this.ui.showCharlie();
        }
        else if (dealerScore <= 21 &&
            this.dealer.countCardInHand() >= this.charlieCardCount) {
            console.log("Dealer Charlie~");
            this.player.giveCharlieBet(this.dealer);
            this.ui.showLose();
        }
        else if (dealerScore == 21 || playerScore == 21) {
            if (dealerScore == 21 && playerScore == 21) {
                console.log("it's a tie");
                this.ui.showTie();
            }
            else if (dealerScore == 21) {
                console.log("you lost! Blackjack!");
                this.player.giveBlackjackBet(this.dealer);
                this.ui.showLose();
            }
            else if (playerScore == 21) {
                console.log("you won! Blackjack!");
                this.dealer.giveBlackjackBet(this.player);
                this.ui.showBlackjack();
            }
        }
        else if (dealerScore > 21 || playerScore > 21) {
            if (dealerScore > 21 && playerScore > 21) {
                console.log("it's a tie");
                this.ui.showTie();
            }
            else if (dealerScore > 21) {
                console.log("you won!");
                this.dealer.giveBetCredit(this.player);
                this.ui.showWin();
            }
            else if (playerScore > 21) {
                console.log("you lost!");
                this.player.giveBetCredit(this.dealer);
                this.ui.showLose();
            }
        }
        else if (playerScore > dealerScore) {
            console.log("you won!");
            this.dealer.giveBetCredit(this.player);
            this.ui.showWin();
        }
        else if (playerScore < dealerScore) {
            console.log("you lost!");
            this.player.giveBetCredit(this.dealer);
            this.ui.showLose();
        }
        else if (playerScore == dealerScore) {
            console.log("it's a tie");
            this.ui.showTie();
        }
        console.log("Your score: " + playerScore + "| Dealer's score: " + dealerScore);
        if (this.deck.countCardInHand() < 30) {
            this.deck.getFullDeck();
            this.deck.shuffle();
            console.log("Reset cards and shuffled");
        }
        if (this.dealer.getCredit() <= 0) {
            this.ui.showPlayerWon();
        }
        else if (this.player.getCredit() <= 0) {
            this.ui.showPlayerLost();
        }
    };
    Blackjack.prototype.hit = function () {
        this.deck.giveTop(this.player, true);
        this.conditionCheck();
    };
    Blackjack.prototype.reset = function () {
        this.player.resetHand();
        this.dealer.resetHand();
        this.ui.askForBet();
    };
    Blackjack.prototype.conditionCheck = function () {
        this.overCheck();
        this.fifteenCheck();
        this.charlieCheck();
    };
    Blackjack.prototype.overCheck = function () {
        if (this.player.calculateHand() > 21) {
            this.end();
        }
    };
    Blackjack.prototype.charlieCheck = function () {
        if (this.player.countCardInHand() >= 5) {
            this.end();
        }
    };
    Blackjack.prototype.fifteenCheck = function () {
        if (this.player.calculateHand() == 15) {
            this.ui.enableRun();
        }
        else {
            this.ui.disableRun();
        }
    };
    return Blackjack;
}());
