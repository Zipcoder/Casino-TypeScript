class Blackjack {
}
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    toString() {
        return CardValue[this.rank] + " of " + CardSuit[this.suit];
    }
}
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
var CardValue;
(function (CardValue) {
    CardValue[CardValue["Two"] = 2] = "Two";
    CardValue[CardValue["Three"] = 3] = "Three";
    CardValue[CardValue["Four"] = 4] = "Four";
    CardValue[CardValue["Five"] = 5] = "Five";
    CardValue[CardValue["Six"] = 6] = "Six";
    CardValue[CardValue["Seven"] = 7] = "Seven";
    CardValue[CardValue["Eight"] = 8] = "Eight";
    CardValue[CardValue["Nine"] = 9] = "Nine";
    CardValue[CardValue["Ten"] = 10] = "Ten";
    CardValue[CardValue["Jack"] = 10] = "Jack";
    CardValue[CardValue["Queen"] = 10] = "Queen";
    CardValue[CardValue["King"] = 10] = "King";
    CardValue[CardValue["Ace"] = 11] = "Ace";
})(CardValue || (CardValue = {}));
class Casino {
    constructor() {
        this.chooseGame = this.chooseGame.bind(this);
    }
    start() {
        UI.display("Thank you for coming to my Blackjack Casino");
        UI.display("What game would you like to play? Blackjack, Blackjack, Blackjack or Blackjack");
        UI.button.addEventListener("click", this.chooseGame);
    }
    chooseGame() {
        UI.button.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Blackjack") {
            // Blackjack.start();
        }
        else {
            UI.button.addEventListener("click", this.chooseGame);
        }
    }
}
class Dealer {
}
class DeckOfCards {
    constructor() {
        this.newDeck = [];
        //private inPlayDeck: Card[] = [];
        this.suits = [CardSuit.Spades, CardSuit.Clubs, CardSuit.Diamonds, CardSuit.Hearts];
        this.ranks = [CardValue.Ace, CardValue.Two, CardValue.Three, CardValue.Four, CardValue.Five,
            CardValue.Six, CardValue.Seven, CardValue.Eight, CardValue.Nine, CardValue.Ten,
            CardValue.Jack, CardValue.Queen, CardValue.King];
        this.deck = [];
        this.suits.forEach((suit) => this.ranks.forEach((rank) => this.deck.push(new Card(rank, suit))));
    }
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let swap = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = swap;
        }
    }
    toString() {
        return this.deck.join("\n");
    }
}
class GambleEngine {
}
class MainApp {
    constructor() {
        let casino = new Casino();
        casino.start();
    }
}
class PitBoss {
}
class Player {
    constructor(aProfile) {
        this.playerProfile = aProfile;
    }
    getProfile() {
        return this.playerProfile;
    }
    getName() {
        return this.playerProfile.getName;
    }
    getId() {
        return this.playerProfile.getId;
    }
}
class Profile {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    set setId(id) {
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    set setBalance(balance) {
        this.balance = balance;
    }
    get getName() {
        return this.name;
    }
    get getId() {
        return this.id;
    }
    get getBalance() {
        return this.balance;
    }
    addPlayer(aplayer) {
        this.casinoProfiles.push(aplayer);
    }
}
class UI {
    constructor() {
        UI.button.addEventListener("click", (e) => { UI._lastInput = UI.userInput.value; });
        UI.button.addEventListener("click", (e) => { UI.userInput.value = ''; });
    }
    static display(input) {
        this.window.innerText += input + '\n';
    }
    static clearScreen() {
        this.window.innerText = '';
    }
    static get Instance() {
        return this._instance || (this._instance = new UI());
    }
    static get lastInput() {
        return this._lastInput;
    }
}
UI.userInput = document.getElementById("user_input");
UI.window = document.getElementById('display');
UI.button = document.getElementById('submit');
//# sourceMappingURL=app.js.map