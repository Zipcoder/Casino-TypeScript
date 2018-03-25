var Hand = /** @class */ (function () {
    function Hand() {
        var cards = new Array();
    }
    Hand.prototype.addCard = function (aCard) {
        this.cards.push(aCard);
    };
    Hand.prototype.removeCard = function (aCard) {
        var index = this.cards.indexOf(aCard, 0);
        if (index > -1) {
            this.cards.slice(index, 1);
        }
    };
    Hand.prototype.clear = function () {
        while (this.cards.length > 0) {
            this.cards.pop();
        }
    };
    // public hasCard(aCard : Card){
    //     //if(aCard in this.cards){
    //         return true;
    //     }
    // }
    Hand.prototype.sortArray = function () {
        return this.cards.sort();
    };
    return Hand;
}());
//# sourceMappingURL=Hand.js.map