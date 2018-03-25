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
        var deck = new Deck();
        deck.shuffle();
        for (var i = 0; i <= 51; i++) {
            UI.display(deck.deal());
        }
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
    BlackJackPlayer.prototype.win = function (amount, multiplier) {
        var winnings = this.escrow.escrowBalance + (this.escrow.escrowBalance * multiplier);
        this.getProfile().addToBalance(winnings);
        this.escrow.escrowBalance = 0;
    };
    BlackJackPlayer.prototype.lose = function () {
        this.escrow.escrowBalance = 0;
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
        this._escrowBalance += amount;
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
    function GameEngine(game) {
        this._game = game;
    }
    GameEngine.prototype.getGame = function () {
        return this._game;
    };
    return GameEngine;
}());
var CardGame = /** @class */ (function (_super) {
    __extends(CardGame, _super);
    function CardGame(game) {
        var _this = _super.call(this, game) || this;
        _this._players = new Array;
        _this._deck = new Deck();
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
    function BlackJackGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackJackGame.prototype.run = function () {
    };
    BlackJackGame.prototype.evaluateTurn = function (player) {
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
