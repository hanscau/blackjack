var AnimCard = /** @class */ (function () {
    function AnimCard(cardId) {
        this.neutralPos = "25px";
        this.playerPos = "720px";
        this.dealerPos = "300px";
        this.animDelay = 400;
        this.card = document.getElementById("anim-card");
    }
    AnimCard.prototype.moveToPlayer = function () {
        this.card.style.right = this.playerPos;
        this.reset();
    };
    AnimCard.prototype.moveToDealer = function () {
        this.card.style.right = this.dealerPos;
        this.reset();
    };
    AnimCard.prototype.reset = function () {
        var _this = this;
        setTimeout(function () {
            _this.card.style.display = "none";
            _this.card.style.right = _this.neutralPos;
            setTimeout(function () {
                _this.card.style.display = "block";
            }, _this.animDelay);
        }, this.animDelay);
    };
    return AnimCard;
}());
