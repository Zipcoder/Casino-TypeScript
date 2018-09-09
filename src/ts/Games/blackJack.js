var game;
(function (game) {
    class BlackJack {
        constructor() {
            this.players = [];
            this.deck = new game.Deck();
            this.players = new Array(this.player, this.dealer);
        }
        ;
        static start() {
            throw new Error("Method not implemented.");
        }
        getPlayers() {
            return this.players;
        }
        getPlayer(id) {
            var playerById;
            this.players.forEach(player => {
                if (player.getId() == id)
                    playerById = player;
            });
            return playerById;
        }
        addPlayer(player) {
            this.players.push(player);
        }
        removePlayer(player) {
            if (this.players.includes(player)) {
                let index = this.players.indexOf(player);
                this.players.splice(index, 1);
            }
        }
        start() {
            throw new Error("Method not implemented.");
        }
        engine() {
            throw new Error("Method not implemented.");
        }
        end() {
            throw new Error("Method not implemented.");
        }
    }
    game.BlackJack = BlackJack;
})(game || (game = {}));
//# sourceMappingURL=blackJack.js.map