var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Everything;
(function (Everything) {
    var UserInterface = /** @class */ (function () {
        function UserInterface() {
            var _this = this;
            this.userInput = document.getElementById('user_input');
            this.displayWindow = document.getElementById('display');
            this.button = document.getElementById('submit');
            this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
            this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
            this.chooseGame = this.chooseGame.bind(this);
            this.war = new War();
            this.blackJack = new BlackJack();
        }
        UserInterface.prototype.display = function (input) {
            this.displayWindow.innerText += input + '\n';
        };
        UserInterface.prototype.clearScreen = function () {
            this.displayWindow.innerText = '';
        };
        UserInterface.prototype.lastInput = function () {
            return this._lastInput;
        };
        UserInterface.prototype.start = function () {
            var _this = this;
            this.display("Do you want to play? (yes/no)");
            this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
        };
        UserInterface.prototype.chooseGame = function () {
            var _this = this;
            if (this.lastInput() === "yes") {
                this.button.removeEventListener("click", function (e) { return _this.chooseGame(); });
                this.clearScreen();
                this.display("Let's Go To War!");
                this.button.addEventListener("click", function (e) { return _this.war.start(); });
            }
            else if (this.lastInput() === "no") {
                this.clearScreen();
                this.display("Well fine then, be that way.  Bye.");
            }
            else {
                this.button.addEventListener("click", function (e) { return _this.chooseGame(); });
            }
        };
        return UserInterface;
    }());
    Everything.UserInterface = UserInterface;
    var UI = new UserInterface();
    UI.start();
    var Player = /** @class */ (function () {
        function Player(name) {
        }
        Player.prototype.setName = function (name) {
            this.name = name;
        };
        Player.prototype.getName = function () {
            return this.name;
        };
        Player.prototype.setId = function (id) {
            this.id = id;
        };
        Player.prototype.getId = function () {
            return this.id;
        };
        Player.prototype.setWallet = function (chips) {
            this.wallet = chips;
        };
        Player.prototype.getWallet = function () {
            return this.wallet;
        };
        return Player;
    }());
    Everything.Player = Player;
    var War = /** @class */ (function () {
        function War() {
            var _this = this;
            this.userInput = document.getElementById('user_input');
            this.displayWindow = document.getElementById('display');
            this.button = document.getElementById('submit');
            this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
            this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
            this.start = this.start.bind(this);
            this.isGameRunning = true;
            this.players = new Array(new Player("dealer"), new Player("player"));
            var deck = new Deck();
            this.userHand = deck.splitDeck();
            this.dealerHand = deck.getDeck();
            this.tableCards = new Array();
        }
        War.prototype.getPlayers = function () {
            return this.players;
        };
        War.prototype.getPlayer = function (id) {
            var temp = new Player("");
            this.players.forEach(function (p) {
                if (p.getId() == id) {
                    temp = p;
                }
            });
            return temp;
        };
        War.prototype.addPlayer = function (player) {
            this.players.push(player);
        };
        War.prototype.removePlayer = function (player) {
            this.players = this.players.filter(function (p) { return p.getId() != player.getId(); });
        };
        War.prototype.start = function () {
            this.button.removeEventListener("click", function (e) { return war.start(); });
            this.display("Welcome to War");
            do {
                this.engine();
            } while (this.dealerHand.length < 52 && this.userHand.length < 52);
        };
        War.prototype.display = function (input) {
            this.displayWindow.innerText += input + '\n';
        };
        War.prototype.engine = function () {
            var dealerTableCard;
            var userTableCard;
        };
        War.prototype.iDeclareWar = function () {
        };
        War.prototype.end = function () {
            this.isGameRunning = false;
        };
        return War;
    }());
    Everything.War = War;
    var war = new War();
    war.start();
    var BlackJack = /** @class */ (function () {
        function BlackJack() {
            var _this = this;
            this.players = [];
            this.userInput = document.getElementById('user_input');
            this.displayWindow = document.getElementById('display');
            this.button = document.getElementById('submit');
            this.button.addEventListener("click", function (e) { _this._lastInput = _this.userInput.value; });
            this.button.addEventListener("click", function (e) { _this.userInput.value = ''; });
            this.start = this.start.bind(this);
            this.deck = new Deck();
            this.players = new Array(this.player, this.dealer);
        }
        ;
        BlackJack.prototype.start = function () {
            this.button.removeEventListener("click", function (e) { return blackJack.start(); });
            this.display("Welcome to War");
            this.isGameRunning = true;
        };
        BlackJack.prototype.display = function (input) {
            this.displayWindow.innerText += input + '\n';
        };
        BlackJack.prototype.getPlayers = function () {
            return this.players;
        };
        BlackJack.prototype.getPlayer = function (id) {
            var temp = new Player("");
            this.players.forEach(function (p) {
                if (p.getId() == id) {
                    temp = p;
                }
            });
            return temp;
            // let player1: Player = new Player("");
            // let index: number =this.players.findIndex(p => p.getId() == id);
            // return player1;
        };
        BlackJack.prototype.addPlayer = function (player) {
            this.players.push(player);
        };
        BlackJack.prototype.removePlayer = function (player) {
            this.players = this.players.filter(function (p) { return p.getId() != player.getId(); });
        };
        BlackJack.prototype.engine = function () {
            throw new Error("Method not implemented.");
        };
        BlackJack.prototype.end = function () {
            throw new Error("Method not implemented.");
        };
        return BlackJack;
    }());
    Everything.BlackJack = BlackJack;
    var blackJack = new BlackJack();
    blackJack.start();
    var Suit;
    (function (Suit) {
        Suit["HEARTS"] = "\u2665";
        Suit["CLUBS"] = "\u2663";
        Suit["SPADES"] = "\u2660";
        Suit["DIAMONDS"] = "\u2666";
    })(Suit = Everything.Suit || (Everything.Suit = {}));
    var Rank;
    (function (Rank) {
        Rank[Rank["ACE"] = 1] = "ACE";
        Rank[Rank["TWO"] = 2] = "TWO";
        Rank[Rank["THREE"] = 3] = "THREE";
        Rank[Rank["FOUR"] = 4] = "FOUR";
        Rank[Rank["FIVE"] = 5] = "FIVE";
        Rank[Rank["SIX"] = 6] = "SIX";
        Rank[Rank["SEVEN"] = 7] = "SEVEN";
        Rank[Rank["EIGHT"] = 8] = "EIGHT";
        Rank[Rank["NINE"] = 9] = "NINE";
        Rank[Rank["TEN"] = 10] = "TEN";
        Rank[Rank["JACK"] = 11] = "JACK";
        Rank[Rank["QUEEN"] = 12] = "QUEEN";
        Rank[Rank["KING"] = 13] = "KING";
    })(Rank = Everything.Rank || (Everything.Rank = {}));
    var Card = /** @class */ (function () {
        function Card() {
        }
        return Card;
    }());
    Everything.Card = Card;
    var Deck = /** @class */ (function (_super) {
        __extends(Deck, _super);
        function Deck() {
            var _this = _super.call(this) || this;
            _this._deck = new Array();
            var fullSuit = new Array(Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES);
            var fullRank = new Array(Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING);
            for (var _i = 0, fullSuit_1 = fullSuit; _i < fullSuit_1.length; _i++) {
                var suit = fullSuit_1[_i];
                for (var _a = 0, fullRank_1 = fullRank; _a < fullRank_1.length; _a++) {
                    var rank = fullRank_1[_a];
                    _this._deck.push({ suit: suit, rank: rank });
                }
            }
            for (var i = _this._deck.length - 1; i >= 0; i--) {
                var randomI = Math.floor(Math.random() * (i + 1));
                var temp = _this._deck[i];
                _this._deck[i] = _this._deck[randomI];
                _this._deck[randomI] = temp;
            }
            return _this;
        }
        Deck.prototype.getDeck = function () {
            return this._deck;
        };
        Deck.prototype.shuffleDeck = function () {
            for (var i = this._deck.length - 1; i >= 0; i--) {
                var randomI = Math.floor(Math.random() * (i + 1));
                var temp = this._deck[i];
                this._deck[i] = this._deck[randomI];
                this._deck[randomI] = temp;
            }
            return this._deck;
        };
        Deck.prototype.drawCard = function () {
            return this._deck.pop();
        };
        Deck.prototype.splitDeck = function () {
            return this._deck.splice(0, (this._deck.length - 1) / 2);
        };
        Deck.prototype.addCard = function (card) {
            this._deck.push(card);
        };
        Deck.prototype.dealHand = function (nCards) {
            return this._deck.splice(0, nCards);
        };
        return Deck;
    }(Card));
    Everything.Deck = Deck;
})(Everything || (Everything = {}));
