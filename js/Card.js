var Card = /** @class */ (function () {
    function Card(suite, rank, show) {
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
    Card.prototype.getVisibility = function () {
        return this.isShown;
    };
    Card.prototype.setVisibility = function (show) {
        this.isShown = show;
    };
    Card.prototype.getRank = function () {
        if (this.rank == 1) {
            return "A";
        }
        else if (this.rank == 11) {
            return "J";
        }
        else if (this.rank == 12) {
            return "Q";
        }
        else if (this.rank == 13) {
            return "K";
        }
        else {
            return this.rank.toString();
        }
    };
    Card.prototype.getRankRaw = function () {
        return this.rank;
    };
    Card.prototype.getSuite = function () {
        return this.suite;
    };
    Card.prototype.checkIsValidCard = function () {
        if ((this.suite == "C" ||
            this.suite == "D" ||
            this.suite == "H" ||
            this.suite == "S") &&
            this.rank >= 1 &&
            this.rank <= 13) {
            return true;
        }
        else {
            return false;
        }
    };
    Card.prototype.getCardImgName = function () {
        var imgSuite = this.getSuite();
        var imgRank = this.getRank();
        return imgRank + imgSuite;
    };
    Card.prototype.getCardImgNamePath = function () {
        var cardImgName = this.getCardImgName();
        var cardDir = "assets/";
        return cardDir + cardImgName + ".png";
    };
    Card.prototype.getCardBackImgName = function () {
        var cardDir = "assets/";
        return cardDir + "red_back.png";
    };
    return Card;
}());
