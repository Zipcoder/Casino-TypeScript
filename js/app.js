"use strict";
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
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        // var casino = new Casino();
        // casino.start();
        // var club = new Card(Rank.ACE, Suit.CLUBS);
        // var diamond = new Card(Rank.FIVE, Suit.DIAMONDS);
        // var spade = new Card(Rank.QUEEN, Suit.SPADES);
        // var heart = new Card(Rank.JACK, Suit.HEARTS);
        // UI.display(club);
        // UI.display(heart);
        // UI.display(spade);
        // UI.display(diamond);
        // var deck = new Deck();
        // deck.shuffle();
        // for (var i = 0; i <= 51; i++) {
        //     UI.display(deck.deal());
        // }
        var profile = new Profile('Eric', 10000);
        // var player = new BlackJackPlayer(profile);
        // var ace = new Card(Rank.ACE, Suit.SPADES);
        // var king = new Card(Rank.KING, Suit.SPADES);
        // var seven = new Card(Rank.SEVEN, Suit.SPADES);
        // var two = new Card(Rank.TWO, Suit.SPADES);
        // var five = new Card(Rank.FIVE, Suit.SPADES);
        // player.takeCard(ace);
        // player.takeCard(five);
        // player.takeCard(seven);
        // player.takeCard(ace);
        // player.calculateScore();
        // UI.display(player.hand.cards);
        // UI.display(player.score);
        var test = new BlackJackGame(profile);
        test.run();
    };
    return Startup;
}());
var Profile = /** @class */ (function () {
    function Profile(name, balance) {
        this._id = Profile._lastId;
        Profile._lastId++;
        this._name = name;
        this._balance = balance;
    }
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (newBalance) {
            this._balance = newBalance;
        },
        enumerable: true,
        configurable: true
    });
    Profile.prototype.addToBalance = function (amount) {
        this._balance += amount;
    };
    Profile._lastId = 1;
    return Profile;
}());
var Player = /** @class */ (function () {
    function Player(playerProfile) {
        this._playerProfile = playerProfile;
    }
    Player.prototype.getProfile = function () {
        return this._playerProfile;
    };
    Player.prototype.getName = function () {
        return this._playerProfile.name;
    };
    Player.prototype.getId = function () {
        return this._playerProfile.id;
    };
    return Player;
}());
var CardPlayer = /** @class */ (function (_super) {
    __extends(CardPlayer, _super);
    function CardPlayer(profile) {
        var _this = _super.call(this, profile) || this;
        _this._hand = new Hand();
        return _this;
    }
    CardPlayer.prototype.takeCard = function (card) {
        this._hand.cards.push(card);
    };
    CardPlayer.prototype.discardAll = function () {
        while (this._hand.cards.length > 0) {
            this._hand.cards.pop();
        }
    };
    Object.defineProperty(CardPlayer.prototype, "hand", {
        get: function () {
            return this._hand;
        },
        enumerable: true,
        configurable: true
    });
    return CardPlayer;
}(Player));
var BlackJackPlayer = /** @class */ (function (_super) {
    __extends(BlackJackPlayer, _super);
    function BlackJackPlayer(profile) {
        var _this = _super.call(this, profile) || this;
        _this.escrow = new Escrow();
        return _this;
    }
    BlackJackPlayer.prototype.bet = function (amount) {
        this.escrow.addToEscrowBalance(amount);
        this.getProfile().balance -= amount;
    };
    BlackJackPlayer.prototype.win = function (multiplier) {
        var winnings = this.escrow.escrowBalance + (this.escrow.escrowBalance * multiplier);
        this.getProfile().addToBalance(winnings);
        this.escrow.escrowBalance = 0;
    };
    BlackJackPlayer.prototype.lose = function () {
        this.escrow.escrowBalance = 0;
    };
    Object.defineProperty(BlackJackPlayer.prototype, "busted", {
        get: function () {
            return this.busted;
        },
        set: function (state) {
            this._busted = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlackJackPlayer.prototype, "stand", {
        get: function () {
            return this._stand;
        },
        set: function (state) {
            this._stand = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlackJackPlayer.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (amount) {
            this._score = amount;
        },
        enumerable: true,
        configurable: true
    });
    BlackJackPlayer.prototype.isBusted = function () {
        if (this._score > 21) {
            return true;
        }
        else {
            return false;
        }
    };
    BlackJackPlayer.prototype.calculateScore = function () {
        var hasAce = false;
        var tempScore = 0;
        this.hand.cards.forEach(function (element) {
            if (element.rank === Rank.TWO)
                tempScore += 2;
            else if (element.rank === Rank.THREE)
                tempScore += 3;
            else if (element.rank === Rank.FOUR)
                tempScore += 4;
            else if (element.rank === Rank.FIVE)
                tempScore += 5;
            else if (element.rank === Rank.SIX)
                tempScore += 6;
            else if (element.rank === Rank.SEVEN)
                tempScore += 7;
            else if (element.rank === Rank.EIGHT)
                tempScore += 8;
            else if (element.rank === Rank.NINE)
                tempScore += 9;
            else if (element.rank === Rank.TEN)
                tempScore += 10;
            else if (element.rank === Rank.JACK)
                tempScore += 10;
            else if (element.rank === Rank.QUEEN)
                tempScore += 10;
            else if (element.rank === Rank.KING)
                tempScore += 10;
            else if (element.rank === Rank.ACE) {
                tempScore += 11;
                hasAce = true;
            }
        });
        if (tempScore > 21 && hasAce) {
            tempScore = 0;
            this.hand.cards.forEach(function (element) {
                if (element.rank === Rank.TWO)
                    tempScore += 2;
                else if (element.rank === Rank.THREE)
                    tempScore += 3;
                else if (element.rank === Rank.FOUR)
                    tempScore += 4;
                else if (element.rank === Rank.FIVE)
                    tempScore += 5;
                else if (element.rank === Rank.SIX)
                    tempScore += 6;
                else if (element.rank === Rank.SEVEN)
                    tempScore += 7;
                else if (element.rank === Rank.EIGHT)
                    tempScore += 8;
                else if (element.rank === Rank.NINE)
                    tempScore += 9;
                else if (element.rank === Rank.TEN)
                    tempScore += 10;
                else if (element.rank === Rank.JACK)
                    tempScore += 10;
                else if (element.rank === Rank.QUEEN)
                    tempScore += 10;
                else if (element.rank === Rank.KING)
                    tempScore += 10;
                else if (element.rank === Rank.ACE) {
                    tempScore += 1;
                }
            });
        }
        this._score = tempScore;
    };
    return BlackJackPlayer;
}(CardPlayer));
var Escrow = /** @class */ (function () {
    function Escrow() {
        this._escrowBalance = 0;
    }
    Object.defineProperty(Escrow.prototype, "escrowBalance", {
        get: function () {
            return this._escrowBalance;
        },
        set: function (amount) {
            this._escrowBalance = amount;
        },
        enumerable: true,
        configurable: true
    });
    Escrow.prototype.addToEscrowBalance = function (amount) {
        this._escrowBalance;
        amount;
        this.escrowBalance = this.escrowBalance + amount;
    };
    return Escrow;
}());
var Suit;
(function (Suit) {
    Suit[Suit["HEARTS"] = 0] = "HEARTS";
    Suit[Suit["CLUBS"] = 1] = "CLUBS";
    Suit[Suit["DIAMONDS"] = 2] = "DIAMONDS";
    Suit[Suit["SPADES"] = 3] = "SPADES";
})(Suit || (Suit = {}));
var Rank;
(function (Rank) {
    Rank[Rank["TWO"] = 0] = "TWO";
    Rank[Rank["THREE"] = 1] = "THREE";
    Rank[Rank["FOUR"] = 2] = "FOUR";
    Rank[Rank["FIVE"] = 3] = "FIVE";
    Rank[Rank["SIX"] = 4] = "SIX";
    Rank[Rank["SEVEN"] = 5] = "SEVEN";
    Rank[Rank["EIGHT"] = 6] = "EIGHT";
    Rank[Rank["NINE"] = 7] = "NINE";
    Rank[Rank["TEN"] = 8] = "TEN";
    Rank[Rank["JACK"] = 9] = "JACK";
    Rank[Rank["QUEEN"] = 10] = "QUEEN";
    Rank[Rank["KING"] = 11] = "KING";
    Rank[Rank["ACE"] = 12] = "ACE";
})(Rank || (Rank = {}));
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this._suit = suit;
        this._rank = rank;
    }
    Object.defineProperty(Card.prototype, "suit", {
        get: function () {
            return this._suit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.toString = function () {
        if (this._suit === Suit.CLUBS) {
            return Rank[this._rank] + " \u2663";
        }
        else if (this._suit === Suit.DIAMONDS) {
            return Rank[this._rank] + " \u2666";
        }
        else if (this._suit === Suit.SPADES) {
            return Rank[this._rank] + " \u2660";
        }
        else if (this._suit === Suit.HEARTS) {
            return Rank[this._rank] + " \u2665";
        }
        else {
            throw new Error("Something has gone horribly wrong");
        }
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this._cards = new Array();
        this.populate();
    }
    Deck.prototype.deal = function () {
        return this._cards.pop();
    };
    Deck.prototype.shuffle = function () {
        this._cards.sort(function (a, b) { return 0.5 - Math.random(); });
    };
    Deck.prototype.populate = function () {
        for (var suit = Suit.HEARTS; suit <= Suit.SPADES; suit++) {
            for (var rank = Rank.TWO; rank <= Rank.ACE; rank++) {
                this._cards.push(new Card(rank, suit));
            }
        }
    };
    return Deck;
}());
var Hand = /** @class */ (function () {
    function Hand() {
        this._cards = new Array();
    }
    Object.defineProperty(Hand.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: true,
        configurable: true
    });
    return Hand;
}());
var GameEngine = /** @class */ (function () {
    function GameEngine() {
    }
    return GameEngine;
}());
var CardGame = /** @class */ (function (_super) {
    __extends(CardGame, _super);
    function CardGame() {
        var _this = _super.call(this) || this;
        _this._players = new Array();
        _this._deck = new Deck();
        _this._deck.shuffle();
        return _this;
    }
    Object.defineProperty(CardGame.prototype, "deck", {
        get: function () {
            return this._deck;
        },
        enumerable: true,
        configurable: true
    });
    CardGame.prototype.getPlayers = function () {
        return this._players;
    };
    CardGame.prototype.getPlayer = function (playerId) {
        this._players.forEach(function (element) {
            if (element.getId() === playerId) {
                return element;
            }
        });
        throw new Error("Player not found");
    };
    CardGame.prototype.addPlayer = function (player) {
        this._players.push(player);
    };
    CardGame.prototype.removePlayer = function (player) {
        this._players.splice(this._players.indexOf(player), 1);
    };
    CardGame.prototype.contains = function (player) {
        this._players.forEach(function (element) {
            if (element === player) {
                return true;
            }
        });
        return false;
    };
    return CardGame;
}(GameEngine));
var BlackJackGame = /** @class */ (function (_super) {
    __extends(BlackJackGame, _super);
    function BlackJackGame(playerProfile) {
        var _this = _super.call(this) || this;
        _this.dealer = new BlackJackPlayer(new Profile('Dealer', 0));
        _this.currentPlayer = new BlackJackPlayer(playerProfile);
        _this.addPlayer(_this.dealer);
        _this.addPlayer(_this.currentPlayer);
        _this.startRound = _this.startRound.bind(_this);
        _this.placeBet = _this.placeBet.bind(_this);
        _this.run = _this.run.bind(_this);
        _this.initialDeal = _this.initialDeal.bind(_this);
        _this.restart = _this.restart.bind(_this);
        _this.naturalCheck = _this.naturalCheck.bind(_this);
        _this.nextMove = _this.nextMove.bind(_this);
        _this.hitOrStand = _this.hitOrStand.bind(_this);
        return _this;
    }
    BlackJackGame.prototype.run = function () {
        this.startRound();
    };
    BlackJackGame.prototype.evaluateTurn = function () {
        UI.clearScreen();
        this.tallyScores();
        this.dealerTurn();
        this.tallyScores();
        this.header();
        this.showCards(false);
        if (!this.isWinner()) {
            this.nextMove(false);
        }
        if (this.currentPlayer.stand) {
            this.evaluateTurn();
        }
    };
    BlackJackGame.prototype.isWinner = function () {
        if (this.currentPlayer.isBusted() && this.dealer.isBusted()) {
            this.currentPlayer.win(0);
            this.endScreen();
            UI.display("You and the Dealer are both Bust");
            UI.display("You break even");
            this.restart();
            return true;
        }
        else if (this.currentPlayer.isBusted()) {
            this.currentPlayer.lose();
            this.endScreen();
            UI.display("You went Bust");
            UI.display("You lose your bet");
            this.restart();
            return true;
        }
        else if (this.dealer.isBusted()) {
            this.currentPlayer.win(1);
            this.endScreen();
            UI.display("The Dealer went Bust!");
            UI.display("Your bet pays even money!");
            this.restart();
            return true;
        }
        else if (this.currentPlayer.stand && this.dealer.stand) {
            if (this.currentPlayer.score === this.dealer.score) {
                this.currentPlayer.win(0);
                this.endScreen();
                UI.display("The Dealer has the same score as you. You push");
                UI.display("You break even");
                this.restart();
                return true;
            }
            else if (this.currentPlayer.score > this.dealer.score) {
                this.currentPlayer.win(1);
                this.endScreen();
                UI.display("You have a higher score. You win!");
                UI.display("Yor bet pays even money!");
                this.restart();
                return true;
            }
            else if (this.currentPlayer.score < this.dealer.score) {
                this.currentPlayer.lose();
                this.endScreen();
                UI.display("The Dealer has a higher score. You lose");
                UI.display("You lose your bet");
                this.restart();
                return true;
            }
        }
        else {
            return false;
        }
    };
    BlackJackGame.prototype.endScreen = function () {
        UI.clearScreen();
        this.header();
        this.showCards(true);
    };
    BlackJackGame.prototype.startRound = function (errorMessage) {
        this.currentPlayer.discardAll();
        this.dealer.discardAll();
        UI.clearScreen();
        this.header();
        UI.display("How much would you like to bet?");
        UI.display("The minimum bet is $10");
        if (typeof errorMessage !== "undefined")
            UI.display(errorMessage);
        UI.button.addEventListener("click", this.placeBet);
    };
    BlackJackGame.prototype.placeBet = function () {
        UI.button.removeEventListener("click", this.placeBet);
        UI.clearScreen();
        if (UI.lastInput <= this.currentPlayer.getProfile().balance && UI.lastInput > 10) {
            this.currentPlayer.bet(parseInt(UI.lastInput));
            this.initialDeal();
        }
        else if (UI.lastInput < 10) {
            this.startRound("That amount is below the minimum bet");
        }
        else if (UI.lastInput > this.currentPlayer.getProfile().balance) {
            this.startRound("You cannot bet more money than you have");
        }
        else {
            this.startRound("You must input a number to place a bet");
        }
    };
    BlackJackGame.prototype.initialDeal = function () {
        UI.clearScreen();
        this.currentPlayer.takeCard(this.deck.deal());
        this.dealer.takeCard(this.deck.deal());
        this.currentPlayer.takeCard(this.deck.deal());
        this.dealer.takeCard(this.deck.deal());
        this.tallyScores();
        this.header();
        this.showCards(false);
        var natural = this.naturalCheck();
        if (!natural) {
            this.nextMove(false);
        }
    };
    BlackJackGame.prototype.dealerTurn = function () {
        if (this.dealer.score < 17) {
            this.dealer.takeCard(this.deck.deal());
        }
        else {
            this.dealer.stand = true;
        }
    };
    BlackJackGame.prototype.nextMove = function (secondTime) {
        if (secondTime === true) {
            UI.clearScreen();
            this.header();
            this.showCards(false);
            UI.display("Invalid input detected");
            UI.display("Would you like to [hit] or [stand]?");
            UI.button.addEventListener("click", this.hitOrStand);
        }
        else {
            UI.display("Would you like to [hit] or [stand]?");
            UI.button.addEventListener("click", this.hitOrStand);
        }
    };
    BlackJackGame.prototype.hitOrStand = function () {
        UI.button.removeEventListener("click", this.hitOrStand);
        if (UI.lastInput === 'hit') {
            this.currentPlayer.takeCard(this.deck.deal());
            this.evaluateTurn();
        }
        else if (UI.lastInput === 'stand') {
            this.currentPlayer.stand = true;
            this.evaluateTurn();
        }
        else {
            this.nextMove(true);
        }
    };
    BlackJackGame.prototype.header = function () {
        UI.display("Current Player: " + this.currentPlayer.getProfile().name + "\t|\tCurrent Balance: $" + this.currentPlayer.getProfile().balance + "\t|\t Amount Wagered: $" + this.currentPlayer.escrow.escrowBalance);
        UI.display("");
    };
    BlackJackGame.prototype.score = function () {
        UI.display("Current Score: " + this.currentPlayer.score);
    };
    BlackJackGame.prototype.showCards = function (showHole) {
        UI.display("Your Cards");
        var yourCards = this.currentPlayer.hand.cards[0].toString() + ' ';
        for (var i = 1; i < this.currentPlayer.hand.cards.length; i++) {
            yourCards += "| " + this.currentPlayer.hand.cards[i];
        }
        UI.display(yourCards);
        this.score();
        UI.display('');
        UI.display("Dealer Cards");
        if (showHole === false) {
            var dealerCards = "UNKNOWN ";
            for (var i = 1; i < this.dealer.hand.cards.length; i++) {
                dealerCards += "| " + this.dealer.hand.cards[i];
            }
            UI.display(dealerCards);
        }
        else if (showHole === true) {
            var dealerCards = this.dealer.hand.cards[0].toString() + ' ';
            for (var i = 1; i < this.dealer.hand.cards.length; i++) {
                dealerCards += "| " + this.dealer.hand.cards[i];
            }
            UI.display(dealerCards);
            UI.display("Dealer Score: " + this.dealer.score);
        }
        UI.display('');
    };
    BlackJackGame.prototype.tallyScores = function () {
        this.dealer.calculateScore();
        this.currentPlayer.calculateScore();
    };
    BlackJackGame.prototype.naturalCheck = function () {
        if (this.currentPlayer.score === 21 && this.dealer.score === 21) {
            this.currentPlayer.win(0);
            this.endScreen();
            UI.display("Improbably, both you and the Dealer got natural Black Jack");
            UI.display("You break even");
            this.restart();
            return true;
        }
        else if (this.currentPlayer.score === 21) {
            this.currentPlayer.win(1.5);
            this.endScreen();
            UI.display("You got a natural Black Jack!");
            UI.display("Your bet pays 3:2!");
            this.restart();
            return true;
        }
        else if (this.dealer.score === 21) {
            this.currentPlayer.lose();
            this.endScreen();
            UI.display("The Dealer got a natural Black Jack");
            UI.display("You lose your bet");
            this.restart();
            return true;
        }
        else {
            return false;
        }
    };
    BlackJackGame.prototype.restart = function () {
        UI.display("Press [submit] to play again");
        this.currentPlayer.stand = false;
        this.dealer.stand = false;
        UI.button.addEventListener("click", this.run, { once: true });
    };
    return BlackJackGame;
}(CardGame));
var Casino = /** @class */ (function () {
    function Casino() {
        this.chooseGame = this.chooseGame.bind(this);
    }
    Casino.prototype.start = function () {
        UI.display("What game do you want to play?");
        UI.display("Black Jack or Go Fish?");
        UI.button.addEventListener("click", this.chooseGame);
    };
    Casino.prototype.chooseGame = function () {
        UI.button.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Black Jack") {
        }
        else if (UI.lastInput === "Go Fish") {
        }
        else {
            UI.button.addEventListener("click", this.chooseGame);
        }
    };
    return Casino;
}());
var UI = /** @class */ (function () {
    function UI() {
        UI.button.addEventListener("click", function (e) { UI._lastInput = UI.userInput.value; });
        UI.button.addEventListener("click", function (e) { UI.userInput.value = ''; });
    }
    UI.display = function (input) {
        this.window.innerText += input + '\n';
    };
    UI.clearScreen = function () {
        this.window.innerText = '';
    };
    Object.defineProperty(UI, "Instance", {
        get: function () {
            return this._instance || (this._instance = new UI());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI, "lastInput", {
        get: function () {
            return this._lastInput;
        },
        enumerable: true,
        configurable: true
    });
    UI.userInput = document.getElementById("user_input");
    UI.window = document.getElementById('display');
    UI.button = document.getElementById('submit');
    return UI;
}());
var UIInstance = UI.Instance;
Startup.main();
