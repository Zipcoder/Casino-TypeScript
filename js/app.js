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
var PlayingSuit;
(function (PlayingSuit) {
    PlayingSuit["HEART"] = "\u2661";
    PlayingSuit["DIAMOND"] = "\u2662";
    PlayingSuit["CLUB"] = "\u2667";
    PlayingSuit["SPADE"] = "\u2664";
})(PlayingSuit || (PlayingSuit = {}));
var symbol = PlayingSuit.valueOf().toString();
function toString() {
    return this.symbol;
}
var PlayingValue;
(function (PlayingValue) {
    PlayingValue["TWO"] = "2";
    PlayingValue["THREE"] = "3";
    PlayingValue["FOUR"] = "4";
    PlayingValue["FIVE"] = "5";
    PlayingValue["SIX"] = "6";
    PlayingValue["SEVEN"] = "7";
    PlayingValue["EIGHT"] = "8";
    PlayingValue["NINE"] = "9";
    PlayingValue["TEN"] = "10";
    PlayingValue["JACK"] = "J";
    PlayingValue["QUEEN"] = "Q";
    PlayingValue["KING"] = "K";
    PlayingValue["ACE"] = "A";
})(PlayingValue || (PlayingValue = {}));
var value = PlayingValue.valueOf().toString();
function getValue() {
    return this.value;
}
function toString() {
    return this.value;
}
///<reference path="PlayingSuit.ts" />
///<reference path="PlayingValue.ts" />
// import { PlayingSuit } from "./PlayingSuit";
// import { PlayingValue } from "./PlayingValue";
var PlayingCard = (function () {
    function PlayingCard(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    PlayingCard.prototype.toString = function () {
        return "" + this.value + this.suit;
    };
    PlayingCard.prototype.getSuit = function () {
        return this.suit;
    };
    PlayingCard.prototype.getValue = function () {
        return this.value;
    };
    return PlayingCard;
}());
///<reference path="PlayingCard.ts"/>
///<reference path="enumValues.d.ts"/>
System.register("PlayingDeck", ["./enumValues"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enumValues_1, PlayingDeck;
    return {
        setters: [
            function (enumValues_1_1) {
                enumValues_1 = enumValues_1_1;
            }
        ],
        execute: function () {///<reference path="PlayingCard.ts"/>
            ///<reference path="enumValues.d.ts"/>
            PlayingDeck = (function () {
                function PlayingDeck() {
                    this.populate();
                }
                PlayingDeck.prototype.getRandom = function (floor, ceiling) {
                    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
                };
                PlayingDeck.prototype.shuffle = function () {
                    if (this.cards.length <= 1) {
                        return this.cards;
                    }
                    for (var i = 0; i < this.cards.length; i++) {
                        var randomChoiceIndex = this.getRandom(i, this.cards.length - 1);
                        _a = [this.cards[randomChoiceIndex], this.cards[i]], this.cards[i] = _a[0], this.cards[randomChoiceIndex] = _a[1];
                    }
                    return this.cards;
                    var _a;
                };
                PlayingDeck.prototype.getAllCards = function () {
                    return this.cards;
                };
                PlayingDeck.prototype.countLeft = function () {
                    return this.cards.length;
                };
                PlayingDeck.prototype.getAndRemoveCard = function () {
                    if (this.cards.length == 0) {
                        this.populate();
                        this.shuffle();
                    }
                    return this.cards.shift();
                };
                PlayingDeck.prototype.populate = function () {
                    this.cards = new Array();
                    var suits = enumValues_1.EnumValues.getValues(PlayingSuit);
                    var values = enumValues_1.EnumValues.getValues(PlayingValue);
                    for (var i = 0; i < suits.length; i++) {
                        for (var j = 0; j < values.length; i++) {
                            this.cards.push(new PlayingCard(suits[i].valueOf(), values[j].valueOf()));
                        }
                    }
                };
                return PlayingDeck;
            }());
        }
    };
});
///<reference path="PlayingDeck.ts"/>
System.register("CardGame", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var CardGame;
    return {
        setters: [],
        execute: function () {///<reference path="PlayingDeck.ts"/>
            CardGame = (function () {
                function CardGame() {
                }
                return CardGame;
            }());
        }
    };
});
var MoneyContainer = (function () {
    function MoneyContainer() {
        this.money = 0;
    }
    MoneyContainer.prototype.getMoney = function () {
        return parseInt(this.money.toFixed(2));
    };
    MoneyContainer.prototype.addMoney = function (money) {
        if (money > 0) {
            this.money += money;
        }
    };
    MoneyContainer.prototype.takeOutMoney = function (money) {
        if (money > 0 && money <= this.money) {
            this.money -= money;
            return money;
        }
        return 0.0;
    };
    MoneyContainer.prototype.takeAllMoney = function () {
        var moneyHolder = this.money;
        this.money = 0.0;
        return moneyHolder;
    };
    return MoneyContainer;
}());
///<reference path="PlayingCard.ts"/>
// import {PlayingCard} from "./PlayingCard";
var Hand = (function () {
    function Hand() {
        this.cards = new Array();
    }
    Hand.prototype.toString = function () {
        if (this.isHandEmpty()) {
            return "If there's nothing in your hand, is it a hand?";
        }
        else {
            var output = "";
            this.cards.sort();
            // I took this out of the sort(## Comparator.comparing(PlayingCard::getValue) )
            // if it doesn't work, then we'll need to make a comparator
            for (var i = 0; i < this.cards.length; i++) {
                output += " [" + this.cards[i] + "] ";
            }
            return output;
        }
    };
    Hand.prototype.getAllCards = function () {
        return this.cards;
    };
    Hand.prototype.isHandEmpty = function () {
        return this.cards.length == 0;
    };
    Hand.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    Hand.prototype.removeCard = function (card) {
        var index = this.cards.indexOf(card);
        if (index != 0 && index != this.cards.length) {
        }
        this.cards = this.cards.slice(0, index - 1).concat(this.cards.slice(index + 1));
    };
    Hand.prototype.removeAllOf = function (movingCards) {
        for (var i = 0; i < movingCards.length; i++) {
            for (var j = 0; j < this.cards.length; j++) {
                if (movingCards[i] === this.cards[j]) {
                    this.cards.splice(j, 1);
                }
            }
        }
    };
    Hand.prototype.getCard = function (card) {
        this.removeCard(card);
        return card;
    };
    Hand.prototype.clear = function () {
        this.cards = new Array();
    };
    return Hand;
}());
///<reference path="CardGame.ts"/>
///<reference path="MoneyContainer.ts"/>
///<reference path="Hand.ts"/>
///<reference path="PlayingCard.ts"/>
///<reference path="PlayingDeck.ts"/>
// import {PlayingDeck} from "./PlayingDeck";
// import {MoneyContainer} from "./MoneyContainer";
// import {Hand} from "./Hand";
// import {PlayingCard} from "./PlayingCard";
// import {CardGame} from "./CardGame";
var BlackJack = (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack() {
        var _this = _super.call(this) || this;
        _this.pot = new MoneyContainer();
        _this.deck = new PlayingDeck();
        _this.deck.shuffle();
        _this.playerScore = 0;
        _this.dealerScore = 0;
        _this.player = new Hand();
        _this.dealer = new Hand();
        for (var i = 0; i < 2; i++) {
            _this.player.addCard(_this.deck.getAndRemoveCard());
            _this.dealer.addCard(_this.deck.getAndRemoveCard());
        }
        return _this;
    }
    BlackJack.prototype.takeBet = function (bet) {
        this.pot.addMoney(bet);
    };
    BlackJack.prototype.settleBet = function (winnings) {
        return (this.pot.takeOutMoney(winnings));
    };
    BlackJack.prototype.emptyPot = function () {
        return this.pot.takeAllMoney();
    };
    BlackJack.prototype.showPot = function () {
        return this.pot.getMoney();
    };
    BlackJack.prototype.getPlayerScore = function () {
        this.playerScore = 0;
        var handArray = this.player.getAllCards();
        for (var i = 0; i < handArray.length; i++) {
            this.playerScore += this.cardScore(handArray[i], this.playerScore);
        }
        return this.playerScore;
    };
    BlackJack.prototype.getDealerScore = function () {
        this.dealerScore = 0;
        var handArray = this.dealer.getAllCards();
        for (var i = 0; i < handArray.length; i++) {
            this.dealerScore += this.cardScore(handArray[i], this.dealerScore);
        }
        return this.dealerScore;
    };
    BlackJack.prototype.getDealerScoreShowing = function () {
        return (this.cardScore(this.dealer.getAllCards()[0], 0));
    };
    BlackJack.prototype.cardScore = function (c, score) {
        switch (c.getValue().toString()) {
            case "2":
                return 2;
            case "3":
                return 3;
            case "4":
                return 4;
            case "5":
                return 5;
            case "6":
                return 6;
            case "7":
                return 7;
            case "8":
                return 8;
            case "9":
                return 9;
            case "10":
            case "J":
            case "Q":
            case "K":
                return 10;
            default: {
                if (score + 11 > 21) {
                    return 1;
                }
            }
        }
        return 11;
    };
    BlackJack.prototype.playerHit = function () {
        this.player.addCard(this.deck.getAndRemoveCard());
        this.playerScore = this.getPlayerScore();
    };
    BlackJack.prototype.dealerHit = function () {
        this.dealer.addCard(this.deck.getAndRemoveCard());
        this.dealerScore = this.getDealerScore();
    };
    BlackJack.prototype.dealerHitUntilFinished = function () {
        while (this.getDealerScore() <= 17 && this.getPlayerScore() <= 21) {
            this.dealer.addCard(this.deck.getAndRemoveCard());
        }
    };
    BlackJack.prototype.playerWins = function () {
        return (((this.getPlayerScore() > this.getDealerScore()) && (this.getPlayerScore() <= 21)) ||
            (this.getDealerScore() > 21 && this.getPlayerScore() <= 21));
    };
    BlackJack.prototype.finalTableDisplay = function () {
        var returnMe = "";
        var dealerHand = this.dealer.getAllCards();
        var playerHand = this.player.getAllCards();
        returnMe += "---\nOpponent\n---\n" + this.getDealerScore() + " Showing\n---\n";
        for (var i = 0; i < dealerHand.length; i++) {
            returnMe += dealerHand[i].toString() + "\n";
        }
        returnMe += "\nPot: " + this.pot.getMoney() + "\n\n";
        returnMe += "---\nYou\n---\n" + this.getPlayerScore() + "\n---\n";
        for (var i = 0; i < playerHand.length; i++) {
            returnMe += playerHand[i].toString() + "\n";
        }
        returnMe += "\n\n";
        return returnMe;
    };
    BlackJack.prototype.toString = function () {
        var returnMe = "";
        var playerHand = this.player.getAllCards();
        returnMe += "---\nOpponent\n---\n" + this.getDealerScoreShowing() + " Showing\n---\n";
        returnMe += this.dealer.getAllCards()[0].toString() + "\n";
        returnMe += "[]\n";
        returnMe += "\nPot: " + this.pot.getMoney() + "\n\n";
        returnMe += "---\nYou\n---\n" + this.getPlayerScore() + "\n---\n";
        for (var i = 0; i < playerHand.length; i++) {
            returnMe += playerHand[i].toString() + "\n";
        }
        returnMe += "\n\n";
        return returnMe;
    };
    BlackJack.prototype.play = function (userInput) {
        return ("Y" === (userInput.toUpperCase()));
    };
    return BlackJack;
}(CardGame));
/// <reference path="MoneyContainer.ts"/>
// import {MoneyContainer} from "./MoneyContainer";
var User = (function () {
    function User(name, money) {
        this.wallet = new MoneyContainer();
        this.name = name;
        this.wallet.addMoney(money);
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getWallet = function () {
        return this.wallet;
    };
    return User;
}());
///<reference path="BlackJack.ts"/>
///<reference path="User.ts"/>
// import {BlackJack} from "./BlackJack";
// import {User} from "./User";
var BlackJackConsole = (function () {
    function BlackJackConsole(user) {
        this.game = new BlackJack();
        this.player = user;
    }
    BlackJackConsole.prototype.updateDisplay = function (stringToDisplay) {
        this.displayElement.innerHTML += "</br>" + stringToDisplay;
    };
    BlackJackConsole.prototype.initialize = function () {
        this.displayElement = document.getElementById("display");
        this.inputElement = document.getElementById("input");
        this.inputElement.innerHTML = '<input type="number" name="bet_input" id="bet_input">' +
            '<input type="submit" value="Bet" id="bet_submit" onclick="blackjack.getInput()"/>    ' +
            '<input type="button" value="Hit" id="hit" onclick="blackjack.determineFirstRoller()"/>    ' +
            '<input type="button" value="Continue" id="continue" onclick="blackjack.welcomePlayer()"/>' +
            '<input type="button" value="Quit" id="quit" onclick="blackjack.finalize()"/>';
        this.submitBetButton = document.getElementById("bet_submit");
        this.hitButton = document.getElementById("hit");
        this.continueButton = document.getElementById("continue");
        this.quitButton = document.getElementById("quit");
    };
    BlackJackConsole.prototype.finalize = function () {
        this.inputElement.innerHTML = '<input type="text" name="user_input" id="user_input"> ' +
            '<input type="submit" value="Submit" onclick="blackjack.run()">';
        this.displayElement.innerText = '';
    };
    BlackJackConsole.prototype.getInput = function () {
        var inputAlias = document.getElementById("bet_input");
        return +inputAlias.value;
    };
    BlackJackConsole.prototype.initialBet = function () {
        this.updateDisplay(this.game.toString());
        // if (this.game.getPlayerTurn()) {
        //     this.opponentInitialBets(this.generateBotBet());
        // }
        // else {
        this.updateDisplay("Enter your bet in the field below and click 'Bet'");
        this.submitBetButton.onclick(this.playerInitialBets());
        // }
    };
    BlackJackConsole.prototype.playerInitialBets = function () {
        do {
            this.potBet = this.getInput();
        } while (this.player.getWallet().getMoney() < this.potBet);
        this.game.takeBet(this.player.getWallet().takeOutMoney(this.potBet)); //player bet
        this.game.takeBet(this.potBet); //house bet matches
        this.displayPlayerBetting(this.potBet);
    };
    BlackJackConsole.prototype.opponentInitialBets = function (betToMatch) {
        this.game.takeBet(betToMatch); //house bet to match
        this.game.takeBet(this.player.getWallet().takeOutMoney(betToMatch)); //player matches bet
        this.potBet = betToMatch;
        this.displayOpponentBetting(betToMatch);
    };
    BlackJackConsole.prototype.displayOpponentBetting = function (passedOpponentBet) {
        this.updateDisplay("Opponent bets $" + passedOpponentBet);
        this.updateDisplay("You match $" + passedOpponentBet);
        this.updateDisplay("You have $" + this.player.getWallet().getMoney() + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    BlackJackConsole.prototype.displayPlayerBetting = function (passedPlayerBet) {
        //_AND_ after the player enters their bet amount
        this.updateDisplay("You bet $" + passedPlayerBet);
        this.updateDisplay("Opponent matches $" + passedPlayerBet);
        this.updateDisplay("You have $" + this.player.getWallet().getMoney() + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    BlackJackConsole.prototype.printPots = function () {
        this.updateDisplay("$" + this.game.showPot() + " now in Main Pot");
        this.updateDisplay("$" + this.game.showPot() + " now in Side Pot</br>");
    };
    BlackJackConsole.prototype.enterAnyKeyToContinue = function () {
    };
    BlackJackConsole.prototype.generateBotBet = function () {
        return (Math.random() * (this.player.getWallet().getMoney() / 2));
    };
    BlackJackConsole.prototype.changeTurns = function () {
        this.resetFlags();
        this.game.changePlayerTurn();
    };
    BlackJackConsole.prototype.resetFlags = function () {
        this.potBet = 0;
        this.game.resetTurn();
    };
    BlackJackConsole.prototype.run = function () {
        this.initialize();
        this.welcomePlayer();
        //     do {
        //         game = new BlackJack();
        //         playerBets();
        //         System.out.println(game.toString());
        //         playerHitOrStayCycle();
        //         game.dealerHitUntilFinished();
        //         System.out.println(game.toString());
        //         determineWinOrLoss();
        //     }while(game.play(getStringInput("Continue playing? [Y/N] ")));
        //
    };
    BlackJackConsole.prototype.determineWinOrLoss = function () {
        if (this.game.playerWins()) {
            this.updateDisplay("You win! ");
            this.updateDisplay(this.game.finalTableDisplay());
            this.settlePlayerWon();
        }
        else {
            this.updateDisplay("You lose. ");
            this.updateDisplay(this.game.finalTableDisplay());
            this.settlePlayerLost();
        }
    };
    BlackJackConsole.prototype.settlePlayerLost = function () {
        this.potBet = this.game.emptyPot();
        this.updateDisplay("You have " + this.player.getWallet().getMoney() + " " +
            "in your wallet.");
    };
    BlackJackConsole.prototype.settlePlayerWon = function () {
        this.player.getWallet().addMoney(this.game.emptyPot());
        this.updateDisplay("You have " + this.player.getWallet().getMoney() + " " +
            "in your wallet.");
    };
    // private playerHitOrStayCycle(): void {
    //     while (this.game.getPlayerScore() < 21 &&
    //     "Y".equalsIgnoreCase(getStringInput("Hit? [Y/N] "))) {
    //         game.playerHit();
    //         System.out.println(game.toString());
    //     }
    // }
    BlackJackConsole.prototype.playerBets = function () {
        this.updateDisplay("You have " + this.player.getWallet().getMoney() + ". <br />" +
            " How much do you wish to bet? ");
        this.game.takeBet(this.player.getWallet().takeOutMoney(this.potBet));
        this.updateDisplay("Your opponent matches your bet of " + this.potBet + ". ");
        this.game.takeBet(this.potBet);
    };
    BlackJackConsole.prototype.welcomePlayer = function () {
        this.updateDisplay("Hello, " + this.player.getName() + ". Welcome to the BlackJack table.");
        this.updateDisplay("How tough are ye'?");
    };
    return BlackJackConsole;
}());
var CrapsConsole = (function () {
    function CrapsConsole(user) {
        this.game = new Craps();
        this.pointSet = false;
        this.pointMet = false;
        this.crappedOut = false;
        this.cont = false;
        this.player = user;
    }
    Object.defineProperty(CrapsConsole.prototype, "Cont", {
        set: function (passedValue) {
            this.cont = passedValue;
        },
        enumerable: true,
        configurable: true
    });
    CrapsConsole.prototype.updateDisplay = function (stringToDisplay) {
        this.displayElement.innerHTML += "</br>" + stringToDisplay;
    };
    CrapsConsole.prototype.initialize = function () {
        this.displayElement = document.getElementById("display");
        this.inputElement = document.getElementById("input");
        this.inputElement.innerHTML = '<input type="number" name="bet_input" id="bet_input">' +
            '<input type="submit" value="Bet" id="bet_submit" onclick="craps.getInput()"/>    ' +
            '<input type="button" value="Roll" id="roll" onclick="craps.determineFirstRoller()"/>    ' +
            '<input type="button" value="Continue" id="continue" onclick="craps.welcomePlayer()"/>' +
            '<input type="button" value="Quit" id="quit" onclick="craps.finalize()"/>';
        this.submitBetButton = document.getElementById("bet_submit");
        this.rollButton = document.getElementById("roll");
        this.continueButton = document.getElementById("continue");
        this.quitButton = document.getElementById("quit");
    };
    CrapsConsole.prototype.finalize = function () {
        this.inputElement.innerHTML = '<input type="text" name="user_input" id="user_input"> ' +
            '<input type="submit" value="Submit" onclick="craps.run()">';
        this.displayElement.innerText = '';
    };
    CrapsConsole.prototype.run = function () {
        this.initialize();
        this.welcomePlayer();
        //on roll click, this.determineFirstRoller();
        // do {
        //     while (!this.pointSet) {//Continue to bet until the roller
        //         //throws a point instead of a win/loss.
        //        this.initialBetCycle();
        //     }
        //     while (!this.pointMet) {//Continue to bet until the roller
        //         //meets their point or craps out
        //         this.secondaryBet();
        //         this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());
        //     }
        //     if (this.crappedOut) {
        //         this.changeTurns();//Reset flags, change active player
        //     } else{
        //         this.resetFlags();
        //     }
        // }while(this.game.play("Y"));//getStringInput("Continue playing? [Y/N] ")));
        // //NEED TO REWORK PLAY AND INPUT TO ACCOUNT FOR HTML FORMS
        // this.finalize();
    };
    CrapsConsole.prototype.determineFirstRoller = function () {
        this.game.determineFirstRoller();
        this.initialBetCycle();
    };
    CrapsConsole.prototype.initialBetCycle = function () {
        this.initialBet();
        this.pointSet = this.resolveInitialThrow(this.game.initialThrow());
    };
    CrapsConsole.prototype.getInput = function () {
        var inputAlias = document.getElementById("bet_input");
        return +inputAlias.value;
    };
    CrapsConsole.prototype.initialBet = function () {
        this.updateDisplay(this.game.toString());
        if (this.game.getPlayerTurn()) {
            this.opponentInitialBets(this.generateBotBet());
        }
        else {
            this.updateDisplay("Enter your bet in the field below and click 'Bet'");
            this.submitBetButton.onclick(this.playerInitialBets());
        }
    };
    CrapsConsole.prototype.playerInitialBets = function () {
        do {
            this.mainPotBet = this.getInput();
        } while (this.player.Wallet.getMoney() < this.mainPotBet);
        this.game.takeBet(this.player.Wallet.takeOutMoney(this.mainPotBet)); //player bet
        this.game.takeBet(this.mainPotBet); //house bet matches
        this.displayPlayerBetting(this.mainPotBet);
    };
    CrapsConsole.prototype.opponentInitialBets = function (betToMatch) {
        this.game.takeBet(betToMatch); //house bet to match
        this.game.takeBet(this.player.Wallet.takeOutMoney(betToMatch)); //player matches bet
        this.mainPotBet = betToMatch;
        this.displayOpponentBetting(betToMatch);
    };
    CrapsConsole.prototype.generateBotBet = function () {
        return (Math.random() * (this.player.Wallet.getMoney() / 2));
    };
    CrapsConsole.prototype.secondaryBet = function () {
        this.updateDisplay(this.game.toString());
        if (this.game.getPlayerTurn()) {
            this.opponentSecondaryBets(this.generateBotBet());
        }
        else {
            this.playerSecondaryBets();
        }
    };
    CrapsConsole.prototype.playerSecondaryBets = function () {
        do {
            //this.sidePotBet = getPositiveDoubleInput("How much would you like to bet? ");
        } while (this.player.Wallet.getMoney() < this.sidePotBet);
        this.game.takeSideBet(this.player.Wallet.takeOutMoney(this.sidePotBet)); //player bet
        this.game.takeSideBet(this.sidePotBet); //house bet matches
        this.displayPlayerBetting(this.sidePotBet);
    };
    CrapsConsole.prototype.opponentSecondaryBets = function (betToMatch) {
        this.game.takeSideBet(betToMatch); //house bet to match
        this.game.takeSideBet(this.player.Wallet.takeOutMoney(betToMatch)); //player matches bet
        this.sidePotBet = betToMatch;
        this.displayOpponentBetting(betToMatch);
    };
    CrapsConsole.prototype.resolveInitialThrow = function (resultOfThrownDice) {
        if (resultOfThrownDice != 0) {
            //non-Thrower (-1) or thrower (1) wins the mainPotBet
            this.resolveInitialThrowBet(resultOfThrownDice);
            return false;
        }
        //Point for the first time
        this.firstPointRolled();
        return true;
    };
    CrapsConsole.prototype.resolveInitialThrowBet = function (a) {
        if (a == 1) {
            if (this.game.getPlayerTurn()) {
                this.playerWinsBothPots(); //Player wins the pot and we go back to bet again
            }
            else {
                this.opponentWinsBothPots(); //mainPotBet will be overwritten in the next
                //function call, so we can use it here to catch this
                //method's return
            }
        }
        else {
            if (this.game.getPlayerTurn()) {
                this.opponentWinsBothPots();
            }
            else {
                this.playerWinsBothPots();
            }
        }
    };
    CrapsConsole.prototype.resolveSecondaryThrow = function (resultOfThrownDice) {
        switch (resultOfThrownDice) {
            case 0: {
                this.neitherWinsAnyPot();
                return false;
            }
            case -1: {
                this.crappedOut = true;
            }
            case 1: {
                this.resolveSecondaryThrowBet(resultOfThrownDice);
                return true;
            }
            default: {
                this.resolveSecondaryThrowBet(resultOfThrownDice);
                return false;
            }
        } //end switch
    };
    CrapsConsole.prototype.resolveSecondaryThrowBet = function (a) {
        if (a == 1) {
            if (this.game.getPlayerTurn()) {
                this.playerWinsBothPots();
            }
            else {
                this.opponentWinsBothPots();
            }
        }
        else if (a == -1) {
            if (this.game.getPlayerTurn()) {
                this.opponentWinsBothPots();
            }
            else {
                this.playerWinsBothPots();
            }
        }
        else {
            if (this.game.getPlayerTurn()) {
                this.playerWinsSidePot();
            }
            else {
                this.opponentWinsSidePot();
            }
        }
    };
    CrapsConsole.prototype.displayOpponentBetting = function (passedOpponentBet) {
        this.updateDisplay("Opponent bets $" + passedOpponentBet);
        this.updateDisplay("You match $" + passedOpponentBet);
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.displayPlayerBetting = function (passedPlayerBet) {
        //_AND_ after the player enters their bet amount
        this.updateDisplay("You bet $" + passedPlayerBet);
        this.updateDisplay("Opponent matches $" + passedPlayerBet);
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.firstPointRolled = function () {
        this.updateDisplay(this.game.getNumberRolled() + " was rolled... that's our new point.");
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now.");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.neitherWinsAnyPot = function () {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled... nothing special.");
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now.");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.playerWinsSidePot = function () {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and you won the Side Pot!");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");
        this.player.Wallet.addMoney(this.game.emptySidePot());
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.opponentWinsSidePot = function () {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and your opponent won the Side Pot!");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");
        this.sidePotBet = this.game.emptySidePot();
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.opponentWinsBothPots = function () {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and your opponent won everything!");
        this.updateDisplay("$" + this.game.getMainPot().getMoney() + " from Main Pot");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");
        this.mainPotBet = this.game.emptyPot();
        this.sidePotBet = this.game.emptySidePot();
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.mainPotBet = 0;
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.playerWinsBothPots = function () {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and you won everything!");
        this.updateDisplay("$" + this.game.getMainPot().getMoney() + " from Main Pot");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");
        this.player.Wallet.addMoney(this.game.emptyPot());
        this.player.Wallet.addMoney(this.game.emptySidePot());
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.mainPotBet = 0;
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.welcomePlayer = function () {
        this.updateDisplay("Hello, " + this.player.Name + ". Welcome to the Craps table.");
        this.updateDisplay("Roll to determine who goes first!");
    };
    CrapsConsole.prototype.changeTurns = function () {
        this.resetFlags();
        this.game.changePlayerTurn();
    };
    CrapsConsole.prototype.resetFlags = function () {
        this.mainPotBet = 0;
        this.sidePotBet = 0;
        this.pointSet = false;
        this.pointMet = false;
        this.crappedOut = false;
        this.game.resetTurn();
    };
    CrapsConsole.prototype.printPots = function () {
        this.updateDisplay("$" + this.game.getMainPot().getMoney() + " now in Main Pot");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " now in Side Pot</br>");
    };
    CrapsConsole.prototype.enterAnyKeyToContinue = function () {
    };
    return CrapsConsole;
}());
/// <reference path="CrapsConsole.ts" />
///<reference path="BlackJackConsole.ts"/>
/// <reference path="User.ts" />
function updateDisplay(stringToDisplay) {
    document.getElementById("display").innerHTML = +"<br />" + stringToDisplay;
}
var craps = new CrapsConsole(new User("Tim", 1000));
var blackjack = new BlackJackConsole(new User("Jim", 1000));
/// <reference path="Gamble.ts"/>
/// <reference path="Game.ts"/>
var CrapPointPair = (function () {
    function CrapPointPair(a, b, text) {
        this.a = a;
        this.b = b;
        this.text = text;
    }
    CrapPointPair.prototype.isInPair = function (passed) {
        return (this.a == passed || this.b == passed);
    };
    return CrapPointPair;
}());
var Craps = (function () {
    function Craps() {
        this.pointPairs = [new CrapPointPair(6, 8, "6-8"),
            new CrapPointPair(5, 9, "5-9"),
            new CrapPointPair(10, 4, "10-4")];
        var twoToTwelve = [];
        for (var i = 2; i < 13; i++) {
            twoToTwelve.push(i);
        }
        this.dice = new Dice(twoToTwelve);
        this.mainPot = new MoneyContainer();
        this.sidePot = new MoneyContainer();
        this.numberRolled = 0;
        this.point = 0;
        this.determineFirstRoller();
    }
    //Add to pot
    Craps.prototype.takeBet = function (bet) {
        this.mainPot.addMoney(bet);
    };
    Craps.prototype.takeSideBet = function (bet) {
        this.sidePot.addMoney(bet);
    };
    //remove some from pot
    Craps.prototype.settleBet = function (winnings) {
        return (this.mainPot.takeOutMoney(winnings));
    };
    Craps.prototype.settleSideBet = function (winnings) {
        return (this.sidePot.takeOutMoney(winnings));
    };
    //Take all from pot
    Craps.prototype.emptyPot = function () {
        return this.mainPot.takeAllMoney();
    };
    Craps.prototype.emptySidePot = function () {
        return this.sidePot.takeAllMoney();
    };
    Craps.prototype.determineFirstRoller = function () {
        //Player vs House, highest goes first, house wins tie
        this.isPlayerTurn = (this.dice.rollDie() - this.dice.rollDie() > 0);
    };
    Craps.prototype.changePlayerTurn = function () {
        this.isPlayerTurn = !this.isPlayerTurn;
        this.resetTurn();
    };
    Craps.prototype.resetTurn = function () {
        this.numberRolled = 0;
        this.point = 0;
    };
    Craps.prototype.getPlayerTurn = function () {
        return this.isPlayerTurn;
    };
    Craps.prototype.getNumberRolled = function () {
        return this.numberRolled;
    };
    Craps.prototype.getSidePot = function () {
        return this.sidePot;
    };
    Craps.prototype.getMainPot = function () {
        return this.mainPot;
    };
    Craps.prototype.initialThrow = function () {
        //returns -1 if 2/3/12
        // 1 if 7/11,
        // 0 if point set
        this.numberRolled = this.dice.rollDie();
        switch (this.numberRolled) {
            case 2:
            case 3:
            case 12: {
                return -1;
            }
            case 7:
            case 11: {
                return 1;
            }
            default: {
                this.point = this.numberRolled;
                for (var i = 0; i < this.pointPairs.length; i++) {
                    if (this.pointPairs[i].isInPair(this.point)) {
                        this.pair = this.pointPairs[i];
                        break;
                    }
                }
                return 0;
            }
        }
    };
    Craps.prototype.secondaryThrow = function () {
        //returns -1 if crapped out,
        //returns 1 if point met
        //returns 0 if nothing met
        //returns any other number if pair met
        this.numberRolled = this.dice.rollDie();
        if (this.numberRolled == this.point) {
            return 1;
        }
        else if (this.numberRolled == 7) {
            return -1;
        }
        else if (this.pair.isInPair(this.numberRolled)) {
            return this.numberRolled;
        }
        else {
            return 0; //Neutral.
        }
    };
    Craps.prototype.toString = function () {
        var returnMe = "";
        if (this.isPlayerTurn) {
            returnMe += "It is your turn</br>";
        }
        else {
            returnMe += "It is your opponent's turn</br>";
        }
        if (this.point == 0) {
            returnMe += "Point has not been set, and so we do not have a pair to side bet on</br>";
        }
        else {
            returnMe += "Point is " + this.point + " and we are making side bets on " + this.pair.text + "</br>";
        }
        if (this.numberRolled != 0) {
            returnMe += "Last roll was " + this.numberRolled + "</br>";
        }
        else {
            returnMe += "Nobody has rolled yet</br>";
        }
        returnMe += "Main pot is $" + this.mainPot.getMoney() + "</br>";
        returnMe += "Side pot is $" + this.sidePot.getMoney() + "</br>";
        return returnMe;
    };
    Craps.prototype.play = function (userInput) {
        return ("Y" == userInput.toUpperCase());
    };
    return Craps;
}());
var Dice = (function () {
    function Dice(sides) {
        this.sides = sides;
    }
    Dice.prototype.getSides = function () {
        return this.sides;
    };
    Dice.prototype.rollDie = function () {
        return this.sides[this.getRandomInt(0, this.sides.length)];
    };
    Dice.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Dice;
}());
///<reference path="PlayingDeck.ts"/>
///<reference path="User.ts"/>
///<reference path="PlayingValue.ts"/>
var GoFish = (function (_super) {
    __extends(GoFish, _super);
    function GoFish(user) {
        var _this = _super.call(this) || this;
        _this.winner = null;
        _this.humanPlayer = new GoFishPlayer(user);
        _this.compPlayer = _this.createCompPlayer();
        _this.deck = new PlayingDeck();
        _this.deck.shuffle();
        return _this;
    }
    GoFish.prototype.play = function (userInput) {
        return false;
    };
    GoFish.prototype.createCompPlayer = function () {
        return new GoFishPlayer(new User("Dealer", 1000000));
    };
    GoFish.prototype.lastPlayerHandEmpty = function (player) {
        return player.getHand().isHandEmpty();
    };
    GoFish.prototype.getHumanPlayer = function () {
        return this.humanPlayer;
    };
    GoFish.prototype.getCompPlayer = function () {
        return this.compPlayer;
    };
    GoFish.prototype.getDeck = function () {
        return this.deck;
    };
    GoFish.prototype.run = function () {
        this.humanPlayer.getHand().clear();
        this.compPlayer.getHand().clear();
        this.dealInitialHands(7); //change to 6, 5 for 3, 4 players
        do {
            this.playHumanTurn(this.humanPlayer);
            this.playComputerTurn(this.compPlayer);
        } while (this.winner == null);
        this.endGame();
    };
    GoFish.prototype.playHumanTurn = function (player) {
        this.displayHand(player);
        this.tryAskingForValue();
    };
    GoFish.prototype.playComputerTurn = function (compPlayer) {
        updateDisplay(compPlayer.getUser().getName() + " has " + compPlayer.getHand().getAllCards().length + " cards.");
        this.compAskingForValue();
    };
    GoFish.prototype.compAskingForValue = function () {
        var value = null;
        var randomValue = null;
        do {
            do {
                randomValue = this.getRandomPlayingValue(this.compPlayer);
            } while (randomValue == value);
            value = randomValue;
            updateDisplay(this.compPlayer.getUser().getName() + " asks for " + value + "!");
            if (this.compPlayer.askForValue(this.humanPlayer, value) > 0) {
                this.compPlayer.takeCardsFromOther(this.humanPlayer, value);
                updateDisplay("Since you had " + value + ", " + this.compPlayer.getUser().getName() + " takes it/them!");
                if (this.compPlayer.getHand().isHandEmpty()) {
                    this.winner = this.compPlayer;
                    updateDisplay(this.compPlayer.getUser().getName() + "'s hand is empty!");
                    break;
                }
                updateDisplay(this.compPlayer.getUser().getName() + " has " + this.compPlayer.getHand().getAllCards().length + " cards.");
            }
            else {
                updateDisplay("You didn't have any of those, " + this.compPlayer.getUser().getName() + " has to Go Fish!");
                var drawnCard = this.compPlayer.drawCard();
                if (drawnCard.getValue() == value) {
                    updateDisplay(this.compPlayer.getUser().getName() + " drew a card.");
                    if (this.compPlayer.getHand().isHandEmpty()) {
                        this.winner = this.compPlayer;
                        updateDisplay(this.compPlayer.getUser().getName() + "'s hand is empty!");
                        break;
                    }
                    updateDisplay(this.compPlayer.getUser().getName() + " asked for " + value + " and drew a card of that rank! It can ask for another card!");
                    continue;
                }
                else {
                    updateDisplay(compPlayer.getUser().getName() + " has " + compPlayer.hand.getAllCards().size() + " cards.");
                    updateDisplay("This ends " + compPlayer.getUser().getName() + "'s turn.\n\n");
                    compPlayer.nullAskedValue();
                    break;
                }
            }
        } while (true);
    };
    GoFish.prototype.getRandomPlayingValue = function (compPlayer) {
        Random;
        random = new Random();
        TreeSet < PlayingValue > values;
        compPlayer.getValuesInHand();
        ArrayList < PlayingValue > list;
        new ArrayList(values);
        return list.get(random.nextInt(list.size()));
    };
    GoFish.prototype.tryAskingForValue = function () {
        do {
            var value_1 = null;
            value_1 = this.getPlayingValue(this.humanPlayer);
            if (this.humanPlayer.askForValue(this.compPlayer, value_1) > 0) {
                this.humanPlayer.takeCardsFromOther(this.compPlayer, value_1);
                if (this.humanPlayer.getHand().isHandEmpty()) {
                    this.winner = this.humanPlayer;
                    break;
                }
                this.displayHand(this.humanPlayer);
            }
            else {
                updateDisplay("They didn't have any of those, Go Fish!");
                var drawnCard = this.humanPlayer.drawCard();
                updateDisplay("You draw a " + drawnCard.toString());
                if (drawnCard.getValue() == value_1) {
                    updateDisplay("You asked for " + value_1 + " and drew a card of that rank! You can ask for another card!");
                    if (this.humanPlayer.getHand().isHandEmpty()) {
                        this.winner = this.humanPlayer;
                        break;
                    }
                    this.displayHand(this.humanPlayer);
                    continue;
                }
                else {
                    updateDisplay("This ends your turn.\n\n");
                    this.humanPlayer.nullAskedValue();
                    break;
                }
            }
        } while (true);
    };
    GoFish.prototype.getPlayingValue = function (player) {
        var value;
        do {
            value = Input.getPlayingValue("");
            if (player.checkIfHandHasValue(value) > 0) {
                break;
            }
            else {
                updateDisplay("Your hand doesn't have that value! Try another.");
                value = null;
            }
        } while (true);
        return value;
    };
    /* private GoFishPlayer switchPlayer() {
         if(nextPlayer == humanPlayer){
             return compPlayer;
         } else {
             return humanPlayer;
         }
     }*/
    GoFish.prototype.endGame = function () {
        if (this.winner, this.humanPlayer) {
            updateDisplay("Congratulations, you won!");
        }
        else {
            updateDisplay("Awww, you loooooost.");
        }
    };
    GoFish.prototype.displayHand = function (player) {
        updateDisplay(this.compPlayer.getUser().getName() + " has " + this.compPlayer.getHand().getAllCards().length + " cards.");
        updateDisplay("Cards in your hand:");
        updateDisplay(player.getHand().toString());
        updateDisplay("\n\n What rank do you want to ask for?");
        var values = "";
        var valuesInHand = player.getValuesInHand();
        for (var i = 0; i < valuesInHand.length; i++) {
            values += " [" + valuesInHand[i] + "] ";
        }
        updateDisplay(values);
    };
    GoFish.prototype.dealInitialHands = function (numberOfCards) {
        for (var i = 0; i < numberOfCards; i++) {
            this.humanPlayer.addCard(this.deck.getAndRemoveCard());
            this.compPlayer.addCard(this.deck.getAndRemoveCard());
        }
    };
    return GoFish;
}(CardGame));
var GoFishPlayer = (function () {
    function GoFishPlayer(user) {
        this.askedValue = null;
        this.user = user;
        this.hand = new Hand();
    }
    GoFishPlayer.prototype.getUser = function () {
        return this.user;
    };
    GoFishPlayer.prototype.getHand = function () {
        return this.hand;
    };
    GoFishPlayer.prototype.getAskedValue = function () {
        return this.askedValue;
    };
    GoFishPlayer.prototype.addCard = function (card) {
        this.hand.addCard(card);
        var four = this.fourOfKindValue();
        if (four != null) {
            this.discardFourOfKind(four);
            updateDisplay("Completed a set of " + four + "!");
        }
    };
    GoFishPlayer.prototype.askForValue = function (other, value) {
        this.askedValue = value;
        return other.checkIfHandHasValue(value);
    };
    GoFishPlayer.prototype.checkIfHandHasValue = function (value) {
        return this.getAllOfValue(value).length;
    };
    GoFishPlayer.prototype.getAllOfValue = function (value) {
        var cards = this.getHand().getAllCards();
        var outCards = new Array();
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].getValue() === value) {
                outCards.push(cards[i]);
            }
        }
        return outCards;
    };
    GoFishPlayer.prototype.takeCardsFromOther = function (other, value) {
        var movingCards = other.getAllOfValue(value);
        updateDisplay(other.getUser().getName() + " had " + movingCards.length + " of " + value + "!");
        other.getHand().removeAllOf(movingCards);
        for (var i = 0; i < movingCards.length; i++) {
            this.addCard(movingCards[i]);
        }
    };
    GoFishPlayer.prototype.nullAskedValue = function () {
        this.askedValue = null;
    };
    GoFishPlayer.prototype.drawCard = function () {
        var drawnCard = PlayingDeck.getAndRemoveCard();
        this.addCard(drawnCard);
        return drawnCard;
    };
    GoFishPlayer.prototype.fourOfKindValue = function () {
        // Map<PlayingValue, Integer> count = new HashMap<>();
        var map;
        var hasFour = null;
        var cards = this.getHand().getAllCards();
        for (var i = 0; i < cards.length; i++) {
            if (count.containsKey(card.getValue())) {
                count.put(card.getValue(), (count.get(card.getValue()) + 1));
                if (count.get(card.getValue()) == 4) {
                    hasFour = card.getValue();
                }
            }
            else {
                count.put(card.getValue(), 1);
            }
        }
        return hasFour;
    };
    GoFishPlayer.prototype.discardFourOfKind = function (value) {
        var cards = this.getHand().getAllCards();
        var movingCards = new Array();
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].getValue() === value) {
                movingCards.push(cards[i]);
            }
        }
        this.getHand().removeAllOf(movingCards);
        // this.getHand().getAllCards().removeIf(card -> card.getValue() == value);
    };
    GoFishPlayer.prototype.getValuesInHand = function () {
        var cards = this.hand.getAllCards();
        var values = new Array();
        for (var i = 0; i < cards.length; i++) {
            values.push(cards[i].getValue());
        }
        return values;
        // return new TreeSet<>(this.hand.getAllCards().stream().map(PlayingCard::getValue).collect(Collectors.toList()));
    };
    return GoFishPlayer;
}());
//# sourceMappingURL=app.js.map