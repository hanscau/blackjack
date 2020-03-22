class AnimCard {
  card: HTMLImageElement;

  neutralPos: string = "25px";
  playerPos: string = "720px";
  dealerPos: string = "300px";

  animDelay: number = 400;

  constructor(cardId: string) {
    this.card = <HTMLImageElement>document.getElementById("anim-card");
  }

  public moveToPlayer(): void {
    this.card.style.right = this.playerPos;
    this.reset();
  }

  public moveToDealer(): void {
    this.card.style.right = this.dealerPos;
    this.reset();
  }

  private reset(): void {
    setTimeout(() => {
      this.card.style.display = "none";
      this.card.style.right = this.neutralPos;
      setTimeout(() => {
        this.card.style.display = "block";
      }, this.animDelay);
    }, this.animDelay);
  }
}
