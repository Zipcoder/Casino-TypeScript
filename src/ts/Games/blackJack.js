var game;
(function (game) {
    class BlackJack {
        constructor() {
            this.players = [];
            this.userInput = document.getElementById('user_input');
            this.displayWindow = document.getElementById('display');
            this.button = document.getElementById('submit');
            this.button.addEventListener("click", (e) => { this._lastInput = this.userInput.value; });
            this.button.addEventListener("click", (e) => { this.userInput.value = ''; });
            this.start = this.start.bind(this);
            this.deck = new game.Deck();
            this.players = new Array(this.player, this.dealer);
        }
        ;
        start() {
            this.button.removeEventListener("click", (e) => blackJack.start());
            this.display("Welcome to War");
            this.isGameRunning = true;
        }
        display(input) {
            this.displayWindow.innerText += input + '\n';
        }
        getPlayers() {
            return this.players;
        }
        getPlayer(id) {
            return this.players.find(p => p.getId() == id);
        }
        addPlayer(player) {
            this.players.push(player);
        }
        removePlayer(player) {
            this.players = this.players.filter(p => p.getId() != player.getId());
        }
        engine() {
            throw new Error("Method not implemented.");
        }
        end() {
            throw new Error("Method not implemented.");
        }
    }
    game.BlackJack = BlackJack;
    let blackJack = new BlackJack();
    blackJack.start();
})(game || (game = {}));
//# sourceMappingURL=blackJack.js.map