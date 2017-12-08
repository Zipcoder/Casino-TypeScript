// import {PlayingDeck} from "./PlayingDeck";
// import {MoneyContainer} from "./MoneyContainer";
// import {Hand} from "./Hand";
// import {PlayingCard} from "./PlayingCard";
// import {CardGame} from "./CardGame";
//
// class BlackJack extends CardGame implements Gamble {
//
//     pot: MoneyContainer;
//
//     deck: PlayingDeck;
//     playerScore: number;
//     dealerScore: number;
//     player: Hand;
//     dealer: Hand;
//
//     // Java Constructor
//     // public BlackJack() {
//     //
//     //     this.pot = new MoneyContainer();
//     //     this.deck = new PlayingDeck();
//     //     this.deck.shuffle(); // fix this
//     //     this.playerScore = 0;
//     //     this.dealerScore = 0;
//     //     this.player = new Hand();
//     //     this.dealer = new Hand();
//     //
//     //     for (let i: number = 0; i < 2; i++) {
//     //         this.player.addCard(this.deck.getAndRemoveCard());
//     //         this.dealer.addCard(this.deck.getAndRemoveCard());
//     //     }
//     // }
//
//     constructor() {
//         super();// It made me add this because it requires a super constructor for derived classes ¯\_(ツ)_/¯
//         this.pot = new MoneyContainer();
//         this.deck = new PlayingDeck();
//         this.deck.shuffle();
//         this.playerScore = 0;
//         this.dealerScore = 0;
//         this.player = new Hand();
//         this.dealer = new Hand();
//
//         for (let i: number = 0; i < 2; i++) {
//             this.player.addCard(this.deck.getAndRemoveCard());
//             this.dealer.addCard(this.deck.getAndRemoveCard());
//         }
//
//     }
//
//     takeBet(bet: number) {
//         this.pot.addMoney(bet);
//     }
//
//
//     settleBet(winnings: number) {
//         return (this.pot.takeOutMoney(winnings));
//     }
//
//     emptyPot() {
//         return this.pot.takeAllMoney();
//     }
//
//     showPot() {
//         return this.pot.getMoney();
//     }
//
//
//     getPlayerScore() {
//         this.playerScore = 0;
//         let handArray: PlayingCard[] = this.player.getAllCards();
//
//
//         for (let i = 0; i < handArray.length; i++) {
//             this.playerScore += this.cardScore(handArray[i], this.playerScore);
//         }
//
//         return this.playerScore;
//     }
//
//
//     getDealerScore() {
//         this.dealerScore = 0;
//         let handArray: PlayingCard[] = this.dealer.getAllCards();
//
//         for (let i = 0; i < handArray.length; i++) {
//             this.dealerScore += this.cardScore(handArray[i], this.dealerScore);
//         }
//
//         return this.dealerScore;
//     }
//
//     getDealerScoreShowing() {
//         return (this.cardScore(this.dealer.getAllCards()[0], 0));
//     }
//
//     cardScore(c: PlayingCard, score: number) {
//
//         switch (c.getValue().toString()) {
//             case "2":
//                 return 2;
//             case "3":
//                 return 3;
//             case "4":
//                 return 4;
//             case "5":
//                 return 5;
//             case "6":
//                 return 6;
//             case "7":
//                 return 7;
//             case "8":
//                 return 8;
//             case "9":
//                 return 9;
//             case "10":
//             case "J":
//             case "Q":
//             case "K":
//                 return 10;
//             default: {
//                 if (score + 11 > 21) {
//                     return 1;
//                 }
//             }
//         }
//         return 11;
//     }
//
//     playerHit() {
//         this.player.addCard(this.deck.getAndRemoveCard());
//         this.playerScore = this.getPlayerScore();
//     }
//
//     dealerHit() {
//         this.dealer.addCard(this.deck.getAndRemoveCard());
//         this.dealerScore = this.getDealerScore();
//     }
//
//     dealerHitUntilFinished() {
//         while (this.getDealerScore() <= 17 && this.getPlayerScore() <= 21) {
//             this.dealer.addCard(this.deck.getAndRemoveCard());
//         }
//     }
//
//     playerWins() {
//         return (((this.getPlayerScore() > this.getDealerScore()) && (this.getPlayerScore() <= 21)) ||
//             (this.getDealerScore() > 21 && this.getPlayerScore() <= 21));
//     }
//
//     finalTableDisplay() {
//         let returnMe: string = "";
//         let dealerHand: PlayingCard[] = this.dealer.getAllCards();
//         let playerHand: PlayingCard[] = this.player.getAllCards();
//
//         returnMe += "---\nOpponent\n---\n" + this.getDealerScore() + " Showing\n---\n";
//         for (let i = 0; i < dealerHand.length; i++) {
//             returnMe += dealerHand[i].toString() + "\n";
//         }
//
//
//         returnMe += "\nPot: " + this.pot.getMoney() + "\n\n";
//
//         returnMe += "---\nYou\n---\n" + this.getPlayerScore() + "\n---\n";
//         for (let i = 0; i < playerHand.length; i++) {
//             returnMe += playerHand[i].toString() + "\n";
//         }
//
//         returnMe += "\n\n";
//
//         return returnMe;
//     }
//
//
//     toString() {
//         let returnMe: string = "";
//         let playerHand: PlayingCard[] = this.player.getAllCards();
//
//         returnMe += "---\nOpponent\n---\n" + this.getDealerScoreShowing() + " Showing\n---\n";
//         returnMe += this.dealer.getAllCards()[0].toString() + "\n";
//         returnMe += "[]\n";
//
//
//         returnMe += "\nPot: " + this.pot.getMoney() + "\n\n";
//
//         returnMe += "---\nYou\n---\n" + this.getPlayerScore() + "\n---\n";
//         for (let i = 0; i < playerHand.length; i++)
//         {
//             returnMe += playerHand[i].toString() + "\n";
//         }
//
//         returnMe += "\n\n";
//
//         return returnMe;
//     }
//
//     play(userInput: string) {
//         return ("Y" === (userInput.toUpperCase()));
//     }
//
// } 
var MoneyContainer = (function () {
    function MoneyContainer() {
        this.money = 0;
    }
    MoneyContainer.prototype.getMoney = function () {
        return this.money;
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
/// <reference path="MoneyContainer.ts"/>
var User = (function () {
    function User(name, money) {
        this.wallet = new MoneyContainer();
        this.name = name;
        this.wallet.addMoney(money);
    }
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Wallet", {
        get: function () {
            return this.wallet;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var Dice = (function () {
    function Dice(sides) {
        this.sides = sides;
    }
    Object.defineProperty(Dice.prototype, "Sides", {
        get: function () {
            return this.sides;
        },
        enumerable: true,
        configurable: true
    });
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
/// <reference path="Gamble.ts"/>
/// <reference path="Game.ts"/>
/// <reference path="Dice.ts"/>
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
        returnMe += "Main pot is $" + this.mainPot.getMoney().toFixed(2) + "</br>";
        returnMe += "Side pot is $" + this.sidePot.getMoney().toFixed(2) + "</br>";
        return returnMe;
    };
    Craps.prototype.play = function (userInput) {
        return ("Y" == userInput.toUpperCase());
    };
    return Craps;
}());
/// <reference path="User.ts"/>
/// <reference path="Craps.ts"/>
var CrapsConsole = (function () {
    function CrapsConsole(user) {
        this.game = new Craps();
        this.pointSet = false;
        this.pointMet = false;
        this.crappedOut = false;
        this.player = user;
    }
    CrapsConsole.prototype.initialize = function () {
        this.displayElement = document.getElementById("display");
        this.inputElement = document.getElementById("input");
        this.inputElement.innerHTML = '<input type="number" name="bet_input" id="bet_input">' +
            '<input type="submit" value="Bet" id="bet_submit" onclick="" disabled="true"/>    ' +
            '<input type="button" value="Roll" id="roll" onclick="craps.determineFirstRoller()"/>    ' +
            '<input type="button" value="Continue" id="continue" onclick="craps.beginInitialPlay()" disabled="true"/>' +
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
        this.resetFlags();
        return;
    };
    CrapsConsole.prototype.run = function () {
        this.initialize();
        this.welcomePlayer();
    };
    CrapsConsole.prototype.determineFirstRoller = function () {
        this.game.determineFirstRoller();
        this.beginInitialPlay();
    };
    CrapsConsole.prototype.beginInitialPlay = function () {
        this.rollButton.disabled = true;
        this.submitBetButton.disabled = false;
        this.continueButton.disabled = true;
        this.submitBetButton.setAttribute("onclick", "craps.playerInitialBets()");
        this.initialBetCycle();
    };
    CrapsConsole.prototype.initialBetCycle = function () {
        if (!this.pointSet) {
            this.initialBet();
        }
        else {
            this.submitBetButton.setAttribute("onclick", "craps.playerSecondaryBets()");
            this.secondaryBetCycle();
        }
    };
    CrapsConsole.prototype.secondaryBetCycle = function () {
        if (!this.pointMet) {
            this.secondaryBet();
        }
        else {
            //move on from secondaryBet logic
            this.postRoundCleanup();
        }
    };
    CrapsConsole.prototype.postRoundCleanup = function () {
        if (this.crappedOut) {
            this.changeTurns(); //Reset flags, change active player
        }
        else {
            this.resetFlags();
        }
        this.continueButton.disabled = false;
        updateDisplay("Click 'Continue' to play again, or 'Quit' to not");
    };
    CrapsConsole.prototype.getInput = function () {
        var inputAlias = document.getElementById("bet_input");
        return +(inputAlias.value);
    };
    CrapsConsole.prototype.initialBet = function () {
        updateDisplay(this.game.toString());
        if (this.game.getPlayerTurn()) {
            this.opponentInitialBets(this.generateBotBet());
        }
        else {
            updateDisplay("Enter your bet in the field below and click 'Bet'");
        }
    };
    CrapsConsole.prototype.playerInitialBets = function () {
        this.mainPotBet = this.getInput();
        if (this.player.Wallet.getMoney() < this.mainPotBet) {
            updateDisplay("You don't have that much money");
            this.initialBet();
        }
        else {
            this.game.takeBet(this.player.Wallet.takeOutMoney(this.mainPotBet)); //player bet
            this.game.takeBet(this.mainPotBet); //house bet matches
            this.displayPlayerBetting(this.mainPotBet);
            this.pointSet = this.resolveInitialThrow(this.game.initialThrow());
            this.initialBetCycle();
        }
    };
    CrapsConsole.prototype.opponentInitialBets = function (betToMatch) {
        this.game.takeBet(betToMatch); //house bet to match
        this.game.takeBet(this.player.Wallet.takeOutMoney(betToMatch)); //player matches bet
        this.mainPotBet = betToMatch;
        this.displayOpponentBetting(betToMatch);
        this.pointSet = this.resolveInitialThrow(this.game.initialThrow());
        this.initialBetCycle();
    };
    CrapsConsole.prototype.generateBotBet = function () {
        return (Math.random() * (this.player.Wallet.getMoney() / 2));
    };
    CrapsConsole.prototype.secondaryBet = function () {
        updateDisplay(this.game.toString());
        if (this.game.getPlayerTurn()) {
            this.opponentSecondaryBets(this.generateBotBet());
        }
        else {
            updateDisplay("Enter your bet in the field below and click 'Bet'");
        }
    };
    CrapsConsole.prototype.playerSecondaryBets = function () {
        this.sidePotBet = this.getInput();
        if (this.player.Wallet.getMoney() < this.sidePotBet) {
            updateDisplay("You don't have that much money");
            this.secondaryBet();
        }
        else {
            this.game.takeSideBet(this.player.Wallet.takeOutMoney(this.sidePotBet)); //player bet
            this.game.takeSideBet(this.sidePotBet); //house bet matches
            this.displayPlayerBetting(this.sidePotBet);
            this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());
            this.secondaryBetCycle();
        }
    };
    CrapsConsole.prototype.opponentSecondaryBets = function (betToMatch) {
        this.game.takeSideBet(betToMatch); //house bet to match
        this.game.takeSideBet(this.player.Wallet.takeOutMoney(betToMatch)); //player matches bet
        this.sidePotBet = betToMatch;
        this.displayOpponentBetting(betToMatch);
        this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());
        this.secondaryBetCycle();
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
        updateDisplay("Opponent bets $" + passedOpponentBet.toFixed(2));
        updateDisplay("You match $" + passedOpponentBet.toFixed(2));
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.displayPlayerBetting = function (passedPlayerBet) {
        //_AND_ after the player enters their bet amount
        updateDisplay("You bet $" + passedPlayerBet.toFixed(2));
        updateDisplay("Opponent matches $" + passedPlayerBet.toFixed(2));
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.firstPointRolled = function () {
        updateDisplay(this.game.getNumberRolled() + " was rolled... that's our new point.");
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet now.");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.neitherWinsAnyPot = function () {
        updateDisplay("A " + this.game.getNumberRolled() + " was rolled... nothing special.");
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet now.");
        this.printPots();
        this.enterAnyKeyToContinue();
    };
    CrapsConsole.prototype.playerWinsSidePot = function () {
        updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and you won the Side Pot!");
        updateDisplay("$" + this.game.getSidePot().getMoney().toFixed(2) + " from Side Pot");
        this.player.Wallet.addMoney(this.game.emptySidePot());
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.opponentWinsSidePot = function () {
        updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and your opponent won the Side Pot!");
        updateDisplay("$" + this.game.getSidePot().getMoney().toFixed(2) + " from Side Pot");
        this.sidePotBet = this.game.emptySidePot();
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.opponentWinsBothPots = function () {
        updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and your opponent won everything!");
        updateDisplay("$" + this.game.getMainPot().getMoney().toFixed(2) + " from Main Pot");
        updateDisplay("$" + this.game.getSidePot().getMoney().toFixed(2) + " from Side Pot");
        this.mainPotBet = this.game.emptyPot();
        this.sidePotBet = this.game.emptySidePot();
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.mainPotBet = 0;
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.playerWinsBothPots = function () {
        updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and you won everything!");
        updateDisplay("$" + this.game.getMainPot().getMoney().toFixed(2) + " from Main Pot");
        updateDisplay("$" + this.game.getSidePot().getMoney().toFixed(2) + " from Side Pot");
        this.player.Wallet.addMoney(this.game.emptyPot());
        this.player.Wallet.addMoney(this.game.emptySidePot());
        updateDisplay("You have $" + this.player.Wallet.getMoney().toFixed(2) + " in your wallet now");
        this.printPots();
        this.enterAnyKeyToContinue();
        this.mainPotBet = 0;
        this.sidePotBet = 0;
    };
    CrapsConsole.prototype.welcomePlayer = function () {
        updateDisplay("Hello, " + this.player.Name + ". Welcome to the Craps table. Click 'Quit' anytime to leave the game");
        updateDisplay("Roll to determine who goes first!");
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
        updateDisplay("$" + this.game.getMainPot().getMoney().toFixed(2) + " now in Main Pot");
        updateDisplay("$" + this.game.getSidePot().getMoney().toFixed(2) + " now in Side Pot</br>");
    };
    CrapsConsole.prototype.enterAnyKeyToContinue = function () {
    };
    return CrapsConsole;
}());
/// <reference path="CrapsConsole.ts" />
/// <reference path="User.ts" />
function updateDisplay(stringToDisplay) {
    document.getElementById("display").innerHTML += "</br>" + stringToDisplay;
}
var craps = new CrapsConsole(new User("Tim", 1000));
// ///<reference path="PlayingDeck.ts"/>
//
// import {PlayingDeck} from "./PlayingDeck";
//
// export abstract class CardGame implements Game {
//
//     abstract play(userInput: string): boolean;
//
//     deck: PlayingDeck;
//
// }
System.register("PlayingSuit", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function toString() {
        return this.symbol;
    }
    var PlayingSuit, symbol;
    return {
        setters: [],
        execute: function () {
            (function (PlayingSuit) {
                PlayingSuit["HEART"] = "\u2661";
                PlayingSuit["DIAMOND"] = "\u2662";
                PlayingSuit["CLUB"] = "\u2667";
                PlayingSuit["SPADE"] = "\u2664";
            })(PlayingSuit || (PlayingSuit = {}));
            exports_1("PlayingSuit", PlayingSuit);
            symbol = PlayingSuit.valueOf().toString();
        }
    };
});
System.register("PlayingValue", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function getValue() {
        return this.value;
    }
    function toString() {
        return this.value;
    }
    var PlayingValue, value;
    return {
        setters: [],
        execute: function () {
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
            exports_2("PlayingValue", PlayingValue);
            value = PlayingValue.valueOf().toString();
        }
    };
});
///<reference path="PlayingSuit.ts" />
///<reference path="PlayingValue.ts" />
System.register("PlayingCard", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var PlayingCard;
    return {
        setters: [],
        execute: function () {///<reference path="PlayingSuit.ts" />
            ///<reference path="PlayingValue.ts" />
            PlayingCard = (function () {
                function PlayingCard(suit, value) {
                    var _this = this;
                    this.toString = function () {
                        return "" + _this.value + _this.suit;
                    };
                    this.getSuit = function () {
                        return _this.suit;
                    };
                    this.getValue = function () {
                        return _this.value;
                    };
                    this.suit = suit;
                    this.value = value;
                }
                return PlayingCard;
            }());
            exports_3("PlayingCard", PlayingCard);
        }
    };
});
System.register("Hand", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Hand;
    return {
        setters: [],
        execute: function () {
            Hand = (function () {
                function Hand() {
                    // private ArrayList<PlayingCard> cards = new ArrayList<>();
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
                        // if it doesn't work, then I'll need to make a comparator
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
                Hand.prototype.getCard = function (card) {
                    this.removeCard(card);
                    return card;
                };
                Hand.prototype.clear = function () {
                    this.cards = new Array();
                };
                return Hand;
            }());
            exports_4("Hand", Hand);
        }
    };
});
///<reference path="PlayingCard.ts"/>
///<reference path="enumValues.d.ts"/>
System.register("PlayingDeck", ["./enumValues", "PlayingSuit", "PlayingValue", "PlayingCard"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var enumValues_1, PlayingSuit_1, PlayingValue_1, PlayingCard_1, PlayingDeck;
    return {
        setters: [
            function (enumValues_1_1) {
                enumValues_1 = enumValues_1_1;
            },
            function (PlayingSuit_1_1) {
                PlayingSuit_1 = PlayingSuit_1_1;
            },
            function (PlayingValue_1_1) {
                PlayingValue_1 = PlayingValue_1_1;
            },
            function (PlayingCard_1_1) {
                PlayingCard_1 = PlayingCard_1_1;
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
                    var suits = enumValues_1.EnumValues.getValues(PlayingSuit_1.PlayingSuit);
                    var values = enumValues_1.EnumValues.getValues(PlayingValue_1.PlayingValue);
                    for (var i = 0; i < suits.length; i++) {
                        for (var j = 0; j < values.length; i++) {
                            this.cards.push(new PlayingCard_1.PlayingCard(suits[i].valueOf(), values[j].valueOf()));
                        }
                    }
                };
                return PlayingDeck;
            }());
            exports_5("PlayingDeck", PlayingDeck);
        }
    };
});
//# sourceMappingURL=app.js.map