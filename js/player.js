var Player = /** @class */ (function () {
    function Player(name) {
        this.hand = new Deck();
        this.name = name;
    }
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.setCredit = function (credit) {
        this.credit = credit;
        this.creditDisplay.innerHTML = this.credit.toString();
    };
    Player.prototype.getCredit = function () {
        return this.credit;
    };
    Player.prototype.addCredit = function (credit) {
        this.credit += credit;
        this.creditDisplay.innerHTML = this.credit.toString();
    };
    Player.prototype.removeCredit = function (credit) {
        this.credit -= credit;
        this.creditDisplay.innerHTML = this.credit.toString();
    };
    Player.prototype.setBet = function (bet) {
        this.bet = bet;
    };
    Player.prototype.giveBetCredit = function (player) {
        var bet = this.bet;
        player.addCredit(bet);
        this.removeCredit(bet);
    };
    Player.prototype.giveBlackjackBet = function (player) {
        var bet = this.bet * 2;
        player.addCredit(bet);
        this.removeCredit(bet);
    };
    Player.prototype.giveCharlieBet = function (player) {
        var bet = this.bet * 3;
        player.addCredit(bet);
        this.removeCredit(bet);
    };
    Player.prototype.bindHandById = function (handDivId) {
        this.hand.bindDisplay(handDivId);
    };
    Player.prototype.bindCreditById = function (creditPId) {
        this.creditDisplay = (document.getElementById(creditPId));
    };
    Player.prototype.receive = function (newCard) {
        this.hand.receive(newCard);
    };
    Player.prototype.giveTop = function (player, show) {
        if (show === void 0) { show = false; }
        var topCard = this.hand.dealTopCard(show);
        player.receive(topCard);
        player.displayCard();
        console.log(this.name +
            " gave " +
            topCard.getCardImgName() +
            " to " +
            player.getName());
    };
    Player.prototype.getFullDeck = function () {
        this.hand.fullDeck();
    };
    Player.prototype.showAll = function () {
        this.hand.showAll();
    };
    Player.prototype.shuffle = function () {
        this.hand.mathematicallyProvenShuffle();
    };
    Player.prototype.displayCard = function () {
        this.hand.displayDeck();
    };
    Player.prototype.showHand = function () {
        this.hand.printDeck();
    };
    Player.prototype.resetHand = function () {
        this.hand.reset();
        this.displayCard();
    };
    Player.prototype.calculateHand = function () {
        return this.hand.getTotal();
    };
    Player.prototype.countCardInHand = function () {
        return this.hand.getCardCount();
    };
    return Player;
}());
