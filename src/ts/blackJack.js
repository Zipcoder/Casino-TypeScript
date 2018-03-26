var BlackJack = /** @class */ (function () {
    function BlackJack(player, dealer, deck, players) {
        if (players === void 0) { players = []; }
        this.players = [];
    }
    ;
    BlackJack.prototype.playerArray = function (players) {
        this.players.push(this.player);
        this.players.push(this.dealer);
    };
    BlackJack.start = function () {
        throw new Error("Method not implemented.");
    };
    BlackJack.prototype.getPlayers = function () {
        return this.players;
    };
    BlackJack.prototype.getPlayer = function (id) {
        var playerById;
        this.players.forEach(function (player) {
            if (player.getId() == id)
                playerById = player;
        });
        return playerById;
    };
    BlackJack.prototype.addPlayer = function (player) {
    };
    BlackJack.prototype.removePlayer = function (player) {
        throw new Error("Method not implemented.");
    };
    BlackJack.prototype.contains = function (player) {
        throw new Error("Method not implemented.");
    };
    return BlackJack;
}());
