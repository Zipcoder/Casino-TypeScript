class UserInterface {
    constructor() {
        this.userInput = document.getElementById('user_input');
        this.displayWindow = document.getElementById('display');
        this.button = document.getElementById('submit');
        this.button.addEventListener("click", (e) => { this._lastInput = this.userInput.value; });
        this.button.addEventListener("click", (e) => { this.userInput.value = ''; });
    }
    display(input) {
        this.displayWindow.innerText += input + '\n';
    }
    clearScreen() {
        this.displayWindow.innerText = '';
    }
    lastInput() {
        return this._lastInput;
    }
    start() {
        this.display("Do you want to play War? (yes/no)");
        this.button.addEventListener("click", (e) => this.chooseGame());
    }
    chooseGame() {
        if (this.lastInput() === "yes") {
            this.clearScreen();
            this.display("Let's Go To War!");
            this.war.start();
        }
        else if (this.lastInput() === "no") {
            this.clearScreen();
            this.display("Well fine then, be that way.  Bye.");
        }
        else {
            this.button.addEventListener("click", (e) => this.chooseGame());
        }
    }
}
let UI = new UserInterface();
UI.start();
class War {
    constructor() {
        this.dealerHand = [];
        this.playerHand = [];
        this.dealerPlayedCards = [];
        this.playerPlayedCards = [];
    }
    start() {
        this.isGameRunning = true;
        this.dealerHand = this.deck.shuffleDeck();
        this.playerHand = this.deck.splitDeck();
        this.dealerHand = this.deck.shuffleDeck();
        this.ui.display("War commensing");
    }
}
class BlackJack {
    constructor(player, dealer, deck, players = []) {
        this.players = [];
    }
    ;
    playerArray(players) {
        this.players.push(this.player);
        this.players.push(this.dealer);
    }
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
    }
    removePlayer(player) {
        throw new Error("Method not implemented.");
    }
    contains(player) {
        throw new Error("Method not implemented.");
    }
}
class Deck {
    constructor(deck = []) {
        this._deck = [];
        this._deck = deck;
        this._deck.push({ suit: "Clubs", rank: 2 }, { suit: "Clubs", rank: 3 }, { suit: "Clubs", rank: 4 }, 
        { suit: "Clubs", rank: 5 }, { suit: "Clubs", rank: 6 }, { suit: "Clubs", rank: 7 }, { suit: "Clubs", rank: 8 }, 
        { suit: "Clubs", rank: 9 }, { suit: "Clubs", rank: 10 }, { suit: "Clubs", rank: 11 }, { suit: "Clubs", rank: 12 }, 
        { suit: "Clubs", rank: 13 }, { suit: "Clubs", rank: 14 });

        this._deck.push({ suit: "Hearts", rank: 2 }, { suit: "Hearts", rank: 3 }, { suit: "Hearts", rank: 4 }, 
        { suit: "Hearts", rank: 5 }, { suit: "Hearts", rank: 6 }, { suit: "Hearts", rank: 7 }, { suit: "Hearts", rank: 8 }, 
        { suit: "Hearts", rank: 9 }, { suit: "Hearts", rank: 10 }, { suit: "Hearts", rank: 11 }, { suit: "Hearts", rank: 12 }, 
        { suit: "Hearts", rank: 13 }, { suit: "Hearts", rank: 14 });

        this._deck.push({ suit: "Diamonds", rank: 2 }, { suit: "Diamonds", rank: 3 }, { suit: "Diamonds", rank: 4 }, 
        { suit: "Diamonds", rank: 5 }, { suit: "Diamonds", rank: 6 }, { suit: "Diamonds", rank: 7 }, { suit: "Diamonds", rank: 8 }, 
        { suit: "Diamonds", rank: 9 }, { suit: "Diamonds", rank: 10 }, { suit: "Diamonds", rank: 11 }, { suit: "Diamonds", rank: 12 }, 
        { suit: "Diamonds", rank: 13 }, { suit: "Diamonds", rank: 14 });
        
        this._deck.push({ suit: "Spade", rank: 2 }, { suit: "Spade", rank: 3 }, { suit: "Spade", rank: 4 }, { suit: "Spade", rank: 5 },
         { suit: "Spade", rank: 6 }, { suit: "Spade", rank: 7 }, { suit: "Spade", rank: 8 }, { suit: "Spade", rank: 9 }, 
         { suit: "Spade", rank: 10 }, { suit: "Spade", rank: 11 }, { suit: "Spade", rank: 12 }, { suit: "Spade", rank: 13 }, 
         { suit: "Spade", rank: 14 });
    }
    get deck() {
        return this._deck;
    }
    shuffleDeck() {
        for (let i = 0; i < this._deck.length; i++) {
            let randomChoiceIndex = Math.floor(Math.random() * (this._deck.length - i));
            [this._deck[i], this._deck[randomChoiceIndex]] = [this._deck[randomChoiceIndex], this._deck[i]];
        }
        return this._deck;
    }
    drawCard() {
        return this._deck.pop();
    }
    splitDeck() {
        return this._deck.splice(0, (this._deck.length - 1) / 2);
    }
}
class GoFish {
    constructor(player, dealer, deck, players = []) {
    }
    ;
    static start() {
    }
}
class Player {
    getName() {
        return this.player.name;
    }
    getProfile() {
        return this.player;
    }
    getId() {
        return this.player.id;
    }
}
class Profile {
    constructor(_id, _name, _balance) {
    }
    set id(userid) {
        this.id = userid;
    }
    get id() {
        return this.id;
    }
    set name(name) {
        this.name = name;
    }
    get name() {
        return this.name;
    }
}
//# sourceMappingURL=tsc.js.map