var game;
(function (game) {
    class War {
        constructor() {
            this.userInput = document.getElementById('user_input');
            this.displayWindow = document.getElementById('display');
            this.button = document.getElementById('submit');
            this.button.addEventListener("click", (e) => { this._lastInput = this.userInput.value; });
            this.button.addEventListener("click", (e) => { this.userInput.value = ''; });
            this.start = this.start.bind(this);
            this.isGameRunning = true;
            this.players = new Array(new game.Player("dealer"), new game.Player("player"));
            let deck = new game.Deck();
            this.userHand = deck.splitDeck();
            this.dealerHand = deck.getDeck();
            this.tableCards = new Array();
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
        start() {
            this.button.removeEventListener("click", (e) => war.start());
            this.display("Welcome to War");
            do {
                this.engine();
            } while (this.dealerHand.length < 52 && this.userHand.length < 52);
        }
        display(input) {
            this.displayWindow.innerText += input + '\n';
        }
        engine() {
            let dealerTableCard;
            let userTableCard;
        }
        iDeclareWar() {
        }
        end() {
            this.isGameRunning = false;
        }
    }
    game.War = War;
    let war = new War();
    war.start();
})(game || (game = {}));
//# sourceMappingURL=war.js.map