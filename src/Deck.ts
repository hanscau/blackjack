class Deck {
  cardStack: Card[];
  displayDiv: HTMLElement;

  suites: string[] = ["C", "D", "H", "S"];
  ranks: number = 13;

  public constructor() {
    this.cardStack = new Array();
    this.displayDiv = null;
  }

  public fullDeck(): void {
    this.cardStack = new Array();

    for (var i = 0; i < this.suites.length; i++) {
      for (var rank = 1; rank <= this.ranks; rank++) {
        let tempCard: Card = new Card(this.suites[i], rank, false);

        this.cardStack.push(tempCard);
      }
    }
  }

  public dealTopCard(show: boolean): Card {
    if (this.cardStack.length > 0) {
      let givenCard: Card = this.cardStack.pop();
      givenCard.setVisibility(show);

      return givenCard;
    }
  }

  public showAll(): void {
    this.cardStack.forEach(card => {
      card.setVisibility(true);
    });
  }

  public receive(newCard: Card): void {
    this.cardStack.push(newCard);
  }

  public reset(): void {
    this.cardStack = new Array();
  }

  public riffleShuffle(): void {
    var noOfCard: number = this.cardStack.length;
    var halfStack: number = Math.ceil(noOfCard / 2);

    var bottomHalf: Card[] = this.cardStack.slice(0, halfStack);
    var topHalf: Card[] = this.cardStack.slice(halfStack, noOfCard);

    // console.log(bottomHalf);
    // console.log(topHalf);

    var shuffledDeck: Card[] = new Array();

    while (shuffledDeck.length < noOfCard) {
      var rng = Math.random();

      if (rng > 0.5 && topHalf.length > 0) {
        shuffledDeck.push(topHalf.pop());
      } else if (bottomHalf.length > 0) {
        shuffledDeck.push(bottomHalf.pop());
      }
    }

    this.cardStack = shuffledDeck;
  }

  public getTotal(): number {
    let sum: number = 0;

    let tempCardStack: Card[] = this.cardStack;
    tempCardStack.sort((a, b) => b.getRankRaw() - a.getRankRaw());

    tempCardStack.forEach(card => {
      let cardRankInt = card.getRankRaw();

      if (cardRankInt > 1 && cardRankInt <= 10) {
        sum += cardRankInt;
      } else if (cardRankInt > 10) {
        sum += 10;
      } else if (cardRankInt == 1) {
        if (sum + 11 > 21) {
          sum += 1;
        } else {
          sum += 11;
        }
      }

      return sum;
    });

    return sum;
  }

  public mathematicallyProvenShuffle(): void {
    for (var i = 0; i < 7; i++) {
      this.riffleShuffle();
    }

    // console.log(this.cardStack.length);
  }

  public printDeck(): void {
    this.cardStack.forEach(card => {
      console.log(card.getRank() + " of " + card.getSuite());
    });
  }

  public bindDisplay(displayDivId: string): void {
    this.displayDiv = document.getElementById(displayDivId);
  }

  public getCardCount(): number {
    return this.cardStack.length;
  }

  public displayDeck(): void {
    if (this.displayDiv == null) {
      console.log("Display not bind to deck");
    } else {
      this.displayDiv.innerHTML = "";

      this.cardStack.forEach(card => {
        let cardImg = document.createElement("img");

        if (card.getVisibility()) {
          cardImg.src = card.getCardImgNamePath();
        } else {
          cardImg.src = card.getCardBackImgName();
        }
        this.displayDiv.append(cardImg);
      });
    }
  }
}
