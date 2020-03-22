class Card {
  private suite: string;
  private rank: number;
  private isShown: boolean;

  public constructor(suite: string, rank: number, show: boolean) {
    this.suite = suite;
    this.rank = rank;

    this.isShown = show;

    if (!this.checkIsValidCard()) {
      console.log("Invalid card, resetted to Ace of Spade");

      this.suite = "A";
      this.rank = 1;
      this.isShown = true;
    }
  }

  public getVisibility(): boolean {
    return this.isShown;
  }

  public setVisibility(show: boolean): void {
    this.isShown = show;
  }

  public getRank(): string {
    if (this.rank == 1) {
      return "A";
    } else if (this.rank == 11) {
      return "J";
    } else if (this.rank == 12) {
      return "Q";
    } else if (this.rank == 13) {
      return "K";
    } else {
      return this.rank.toString();
    }
  }

  public getRankRaw(): number {
    return this.rank;
  }

  public getSuite(): string {
    return this.suite;
  }

  private checkIsValidCard(): boolean {
    if (
      (this.suite == "C" ||
        this.suite == "D" ||
        this.suite == "H" ||
        this.suite == "S") &&
      this.rank >= 1 &&
      this.rank <= 13
    ) {
      return true;
    } else {
      return false;
    }
  }

  public getCardImgName(): string {
    let imgSuite: string = this.getSuite();
    let imgRank: string = this.getRank();

    return imgRank + imgSuite;
  }

  public getCardImgNamePath(): string {
    let cardImgName = this.getCardImgName();
    let cardDir = "assets/";

    return cardDir + cardImgName + ".png";
  }

  public getCardBackImgName(): string {
    let cardDir = "assets/";
    return cardDir + "red_back.png";
  }
}
