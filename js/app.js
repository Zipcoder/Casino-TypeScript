var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.gameDeck = new Deck();
        this.playerHand = new Hand();
        this.dealerHand = new Hand();
        this.gameDeck = new Deck();
    }
    //deal two cards to player
    //check player score.  If player or dealer= 21--gameover
    //player hit or stay. if hit, deal card. check score. if above 21: busted.
    //if player stay:: deal two cards to dealer.
    //if dealer below 17: deal again. 
    BlackJack.prototype.println = function (input) {
        display.innerHTML = input;
    };
    BlackJack.prototype.startGameDealTwoToPlayer = function () {
        this.playerHand.addCard(this.gameDeck.draw());
        this.playerHand.addCard(this.gameDeck.draw());
    };
    BlackJack.prototype.startGameDealTwoToDealer = function () {
        this.dealerHand.addCard(this.gameDeck.draw());
        this.dealerHand.addCard(this.gameDeck.draw());
    };
    BlackJack.prototype.play = function () {
        this.startGameDealTwoToPlayer();
        this.startGameDealTwoToDealer();
        var gameOver = this.checkBlackJack();
        if (!gameOver) {
            this.println('<br>' + "Dealer's face up card is a " + this.dealerHand.handOfCards[0].toCardName + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>');
        }
    };
    BlackJack.prototype.checkBlackJack = function () {
        if (this.checkPlayerBlackJack()) {
            if (this.checkDealerBlackJack()) {
                this.println("It's a tie!");
                return true;
            }
            else {
                this.println("You win!");
                return true;
            }
        }
        else if (this.checkDealerBlackJack()) {
            this.println("You lose!");
            return true;
        }
        else
            return false;
    };
    BlackJack.prototype.getWinner = function () {
        var gameOver = this.checkBlackJack();
    };
    BlackJack.prototype.stay = function () {
        this.println('<br>' + "Dealer's cards:" + this.dealerHand.handToString() + this.dealerHand.handValue() + '<br>'
            + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>');
        if (this.dealerHand.handValue() < 17) {
            this.dealerHand.addCard(this.gameDeck.draw());
            this.println('<br>' + "Dealer's cards:" + this.dealerHand.handToString() + this.dealerHand.handValue() + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>');
        }
        else if (this.dealerHand.handValue() > 17) {
            this.println('<br>' + "Dealer's cards:" + this.dealerHand.handToString() + this.dealerHand.handValue() + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>');
        }
        if (this.dealerHand.handValue() < 22 && this.dealerHand.handValue() > this.playerHand.handValue()) {
            this.println('<br>' + "Dealer's cards:" + this.dealerHand.handToString() + this.dealerHand.handValue() + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>'
                + "You Lose");
        }
        else if (this.playerHand.handValue() < 22 && this.playerHand.handValue() > this.dealerHand.handValue()) {
            this.println('<br>' + "Dealer's cards:" + this.dealerHand.handToString() + this.dealerHand.handValue() + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>'
                + "You Win");
        }
        else if (this.playerHand.handValue() == this.dealerHand.handValue()) {
            this.println('<br>' + "Dealer's cards:" + this.dealerHand.handToString() + this.dealerHand.handValue() + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>'
                + "It's a tie");
        }
    };
    BlackJack.prototype.checkPlayerBlackJack = function () {
        return this.playerHand.handValue() === 21;
    };
    BlackJack.prototype.checkDealerBlackJack = function () {
        return this.dealerHand.handValue() === 21;
    };
    BlackJack.prototype.hit = function () {
        this.playerHand.addCard(this.gameDeck.draw());
        var gameOver = this.checkBlackJack() || this.playerHand.handValue() > 21;
        if (!gameOver) {
            this.println('<br>' + "Dealer's face up card is a " + this.dealerHand.handOfCards[0].toCardName + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>');
        }
        if (this.playerHand.handValue() > 21) {
            this.println('<br>' + "Dealer's face up card is a " + this.dealerHand.handOfCards[0].toCardName + '<br>'
                + "Your cards: " + this.playerHand.handToString() + " Your hand value = " + this.playerHand.handValue() + '<br>'
                + "Bust! You lose!");
        }
    };
    return BlackJack;
}());
var Suit;
(function (Suit) {
    Suit[Suit["Spades"] = 0] = "Spades";
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Diamonds"] = 3] = "Diamonds";
})(Suit || (Suit = {}));
;
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Object.defineProperty(Card.prototype, "rankName", {
        get: function () {
            return Card.rankNames[this.rank - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "suitName", {
        get: function () {
            return Suit[this.suit];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "toCardName", {
        get: function () {
            return this.rankName + ' of ' + this.suitName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "value", {
        get: function () {
            if (this.rankName === 'Ace') {
                return 1;
            }
            else if (this.rankName === '2') {
                return 2;
            }
            else if (this.rankName === '3') {
                return 3;
            }
            else if (this.rankName === '4') {
                return 4;
            }
            else if (this.rankName === '5') {
                return 5;
            }
            else if (this.rankName === '6') {
                return 6;
            }
            else if (this.rankName === '7') {
                return 7;
            }
            else if (this.rankName === '8') {
                return 8;
            }
            else if (this.rankName === '9') {
                return 9;
            }
            else if (this.rankName === '10') {
                return 10;
            }
            else if (this.rankName === 'Jack') {
                return 10;
            }
            else if (this.rankName === 'Queen') {
                return 10;
            }
            else if (this.rankName === 'King') {
                return 10;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Card.rankNames = [
        'Ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King',
    ];
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        for (var s = 0; s < 4; s++) {
            for (var r = 1; r <= 13; r++) {
                this.cards.push(new Card(r, s));
            }
        }
    }
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var j = Math.floor(Math.random() * this.cards.length);
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    };
    Deck.prototype.draw = function () {
        return this.cards.shift();
    };
    return Deck;
}());
var Hand = /** @class */ (function () {
    function Hand() {
        this.handOfCards = [];
    }
    Hand.prototype.addCard = function (Card) {
        this.handOfCards.push(Card);
    };
    Hand.prototype.numberOfCardsInHand = function () {
        return this.handOfCards.length;
    };
    Hand.prototype.handToString = function () {
        var cardsInHand = '';
        for (var i = 0; i < this.handOfCards.length; i++) {
            cardsInHand += this.handOfCards[i].toCardName + ' / ';
        }
        return cardsInHand;
    };
    Hand.prototype.handValue = function () {
        var isAce = false;
        var size = this.numberOfCardsInHand();
        var totalHandValue = 0;
        for (var i = 0; i < size; i++) {
            totalHandValue += this.handOfCards[i].value;
            if (this.handOfCards[i].value === 1) {
                isAce = true;
            }
        }
        //if there is an Ace present (previously counted as 1) and total is 11 or less, 
        //add 10 so ace is worth 11
        if (isAce && totalHandValue <= 11) {
            return totalHandValue + 10;
        }
        else {
            return totalHandValue;
        }
    };
    return Hand;
}());
var Player = /** @class */ (function () {
    function Player() {
        this.name = name;
    }
    Object.defineProperty(Player.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "setName", {
        set: function (usernameInput) {
            this.name = usernameInput;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}());
var blackJack = new BlackJack();
blackJack.gameDeck.shuffle();
//blackJack.play();
// display.innerHTML+= gameRunner.startGameDealTwoToPlayer();
// gameRunner.startGameDealTwoToDealer();
//display.innerHTML+= "<br>"+ gameRunner.askHitOrStay();
// let d = new Deck();
// let h = new Hand();
// d.shuffle();
// console.log(d.draw().toCardName);
// h.addCard(d.draw());
// h.addCard(d.draw());
// h.addCard(d.draw());
// let test1 = d.draw().toCardName;
// let test2 =d.draw().value;
// let test3 = h.handToString();
// function greeter(person):string {
//     return person;
// }
//document.getElementById("display1").innerHTML = greeter(test2);
//document.getElementById("display2").innerHTML = greeter(test3);
//# sourceMappingURL=app.js.map