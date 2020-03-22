var Deck = /** @class */ (function () {
    function Deck() {
        this.suites = ["C", "D", "H", "S"];
        this.ranks = 13;
        this.cardStack = new Array();
        this.displayDiv = null;
    }
    Deck.prototype.fullDeck = function () {
        this.cardStack = new Array();
        for (var i = 0; i < this.suites.length; i++) {
            for (var rank = 1; rank <= this.ranks; rank++) {
                var tempCard = new Card(this.suites[i], rank, false);
                this.cardStack.push(tempCard);
            }
        }
    };
    Deck.prototype.dealTopCard = function (show) {
        if (this.cardStack.length > 0) {
            var givenCard = this.cardStack.pop();
            givenCard.setVisibility(show);
            return givenCard;
        }
    };
    Deck.prototype.showAll = function () {
        this.cardStack.forEach(function (card) {
            card.setVisibility(true);
        });
    };
    Deck.prototype.receive = function (newCard) {
        this.cardStack.push(newCard);
    };
    Deck.prototype.reset = function () {
        this.cardStack = new Array();
    };
    Deck.prototype.riffleShuffle = function () {
        var noOfCard = this.cardStack.length;
        var halfStack = Math.ceil(noOfCard / 2);
        var bottomHalf = this.cardStack.slice(0, halfStack);
        var topHalf = this.cardStack.slice(halfStack, noOfCard);
        // console.log(bottomHalf);
        // console.log(topHalf);
        var shuffledDeck = new Array();
        while (shuffledDeck.length < noOfCard) {
            var rng = Math.random();
            if (rng > 0.5 && topHalf.length > 0) {
                shuffledDeck.push(topHalf.pop());
            }
            else if (bottomHalf.length > 0) {
                shuffledDeck.push(bottomHalf.pop());
            }
        }
        this.cardStack = shuffledDeck;
    };
    Deck.prototype.getTotal = function () {
        var sum = 0;
        var tempCardStack = this.cardStack;
        tempCardStack.sort(function (a, b) { return b.getRankRaw() - a.getRankRaw(); });
        tempCardStack.forEach(function (card) {
            var cardRankInt = card.getRankRaw();
            if (cardRankInt > 1 && cardRankInt <= 10) {
                sum += cardRankInt;
            }
            else if (cardRankInt > 10) {
                sum += 10;
            }
            else if (cardRankInt == 1) {
                if (sum + 11 > 21) {
                    sum += 1;
                }
                else {
                    sum += 11;
                }
            }
            return sum;
        });
        return sum;
    };
    Deck.prototype.mathematicallyProvenShuffle = function () {
        for (var i = 0; i < 7; i++) {
            this.riffleShuffle();
        }
        // console.log(this.cardStack.length);
    };
    Deck.prototype.printDeck = function () {
        this.cardStack.forEach(function (card) {
            console.log(card.getRank() + " of " + card.getSuite());
        });
    };
    Deck.prototype.bindDisplay = function (displayDivId) {
        this.displayDiv = document.getElementById(displayDivId);
    };
    Deck.prototype.getCardCount = function () {
        return this.cardStack.length;
    };
    Deck.prototype.displayDeck = function () {
        var _this = this;
        if (this.displayDiv == null) {
            console.log("Display not bind to deck");
        }
        else {
            this.displayDiv.innerHTML = "";
            this.cardStack.forEach(function (card) {
                var cardImg = document.createElement("img");
                if (card.getVisibility()) {
                    cardImg.src = card.getCardImgNamePath();
                }
                else {
                    cardImg.src = card.getCardBackImgName();
                }
                _this.displayDiv.append(cardImg);
            });
        }
    };
    return Deck;
}());
