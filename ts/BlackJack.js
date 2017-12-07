var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BlackJack = (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(numStandardDecks) {
        var _this = _super.call(this, numStandardDecks) || this;
        _this.MIN_NUMBER_OF_PLAYERS = 1;
        _this.MAX_NUMBER_OF_PLAYERS = 7;
        _this.pointValues = new HashMap();
        _this.dealer = new BlackJackPlayer("Dealer");
        _this.bets = new HashMap();
        _this.winners = new Array();
        _this.push = new Array();
        _this.void = takeBet(Player, player, Double, amount);
        _this.setPointValues();
        return _this;
    }
    BlackJack.prototype.getPlayers = function () {
        return this.players;
        Array();
    };
    BlackJack.prototype.getDealer = function () {
        return this.dealer;
    };
    BlackJack.prototype.dealInitialCards = function () {
        for (var i = 0; i < 2; i++) {
            for (var player in this.getPlayers()) {
                if (this.bets.containsKey(this.getPlayers()[player])) {
                    this.dealCardToHand(this.getPlayers()[player]);
                }
            }
            this.dealCardToHand(this.dealer);
        }
    };
    BlackJack.prototype.dealCardToHand = function (player) {
        this.shuffleCardsWhenStockIsEmpty();
        this.player.addCardToHand(this.drawFromStock());
    };
    BlackJack.prototype.putCardsInDiscardPile = function () {
        this.discardCards(this.dealer.getHand());
        for (var player in this.getPlayers()) {
            this.discardCards(this.getPlayers()[player].getHand());
        }
    };
    BlackJack.prototype.shuffleCardsWhenStockIsEmpty = function () {
        if (this.getStockPile().numCards() == 0) {
            this.shuffleDiscardPileBackToStock();
        }
    };
    BlackJack.prototype.calculatePlayerScore = function (player) {
        var score = 0;
        for (var card in player.getHand().getCards()) {
            score += this.pointValues.get(player.getHand().getCards()[card].getFaceValue());
        }
        if (player.hasAceInHand() && score <= 11) {
            score += 10;
        }
        return score;
    };
    BlackJack.prototype.playerHasBust = function (player) {
        if (this.calculatePlayerScore(player) > 21) {
            return true;
        }
        else {
            return false;
        }
    };
    BlackJack.prototype.determineWinners = function () {
        if (this.playerHasBust(this.dealer)) {
            for (var player in this.getPlayers()) {
                if (this.bets.containsKey(player)) {
                    if (!this.playerHasBust(player)) {
                        this.winners.push(this.getPlayers()[player]);
                    }
                }
            }
        }
        else {
            for (var player in this.getPlayers()) {
                if (this.bets.containsKey(this.getPlayers()[player])) {
                    if (!this.playerHasBust(this.getPlayers()[player]) && this.calculatePlayerScore(this.getPlayers()[player]) > this.calculatePlayerScore(this.dealer)) {
                        this.winners.push(player);
                    }
                    else if (this.calculatePlayerScore(this.getPlayers()[player]) == (this.calculatePlayerScore(this.dealer))) {
                        this.winners.push(player);
                    }
                }
            }
        }
    };
    __decorate([
        Override
    ], BlackJack.prototype, "void", void 0);
    return BlackJack;
}(CardGame));
{
    bets.put(player, amount);
    player.bet(amount);
}
void payOutBets();
{
    for (BlackJackPlayer; player; )
        : winners;
    {
        Double;
        amountWon = bets.get(player) * 2;
        player.receiveWinnings(amountWon);
    }
    for (BlackJackPlayer; player; )
        : push;
    {
        Double;
        amountWon = bets.get(player);
        player.receiveWinnings(amountWon);
    }
    clearAllBets();
}
void clearAllBets();
{
    bets.clear();
    winners.clear();
    push.clear();
}
HashMap < Player < BlackJack > , Double > getBets();
{
    return bets;
}
ArrayList < BlackJackPlayer > getWinners();
{
    return winners;
}
ArrayList < BlackJackPlayer > getPush();
{
    return push;
}
void setPointValues();
{
    pointValues.put(TWO, 2);
    pointValues.put(THREE, 3);
    pointValues.put(FOUR, 4);
    pointValues.put(FIVE, 5);
    pointValues.put(SIX, 6);
    pointValues.put(SEVEN, 7);
    pointValues.put(EIGHT, 8);
    pointValues.put(NINE, 9);
    pointValues.put(TEN, 10);
    pointValues.put(JACK, 10);
    pointValues.put(QUEEN, 10);
    pointValues.put(KING, 10);
    pointValues.put(ACE, 1);
}
//# sourceMappingURL=BlackJack.js.map