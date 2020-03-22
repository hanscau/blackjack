class Player {
  hand: Deck;
  handDisplay: HTMLElement;
  credit: number;
  creditDisplay: HTMLParagraphElement;
  bet: number;
  name: string;

  constructor(name: string) {
    this.hand = new Deck();
    this.name = name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setCredit(credit: number): void {
    this.credit = credit;
    this.creditDisplay.innerHTML = this.credit.toString();
  }

  public getCredit(): number {
    return this.credit;
  }

  public addCredit(credit: number): void {
    this.credit += credit;
    this.creditDisplay.innerHTML = this.credit.toString();
  }

  public removeCredit(credit: number): void {
    this.credit -= credit;
    this.creditDisplay.innerHTML = this.credit.toString();
  }

  public setBet(bet: number): void {
    this.bet = bet;
  }

  public giveBetCredit(player: Player) {
    let bet = this.bet;

    player.addCredit(bet);
    this.removeCredit(bet);
  }

  public giveBlackjackBet(player: Player) {
    let bet = this.bet * 2;

    player.addCredit(bet);
    this.removeCredit(bet);
  }

  public giveCharlieBet(player: Player) {
    let bet = this.bet * 3;

    player.addCredit(bet);
    this.removeCredit(bet);
  }

  public bindHandById(handDivId: string) {
    this.hand.bindDisplay(handDivId);
  }

  public bindCreditById(creditPId: string) {
    this.creditDisplay = <HTMLParagraphElement>(
      document.getElementById(creditPId)
    );
  }

  public receive(newCard: Card): void {
    this.hand.receive(newCard);
  }

  public giveTop(player: Player, show: boolean = false): void {
    let topCard = this.hand.dealTopCard(show);

    player.receive(topCard);
    player.displayCard();

    console.log(
      this.name +
        " gave " +
        topCard.getCardImgName() +
        " to " +
        player.getName()
    );
  }

  public getFullDeck(): void {
    this.hand.fullDeck();
  }

  public showAll(): void {
    this.hand.showAll();
  }

  public shuffle(): void {
    this.hand.mathematicallyProvenShuffle();
  }

  public displayCard(): void {
    this.hand.displayDeck();
  }

  public showHand(): void {
    this.hand.printDeck();
  }

  public resetHand(): void {
    this.hand.reset();
    this.displayCard();
  }

  public calculateHand(): number {
    return this.hand.getTotal();
  }

  public countCardInHand(): number {
    return this.hand.getCardCount();
  }
}
