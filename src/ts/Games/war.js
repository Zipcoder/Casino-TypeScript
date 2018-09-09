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
        }
        start() {
            this.button.removeEventListener("click", (e) => war.start());
            this.display("Welcome to War");
            this.isGameRunning = true;
            this.engine();
        }
        display(input) {
            this.displayWindow.innerText += input + '\n';
        }
        engine() { }
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
            let index;
            index = this.players.indexOf(player);
            this.players.splice(index, 1);
        }
        end() {
            throw new Error("Method not implemented.");
        }
    }
    game.War = War;
    let war = new War();
    war.start();
})(game || (game = {}));
//# sourceMappingURL=war.js.map