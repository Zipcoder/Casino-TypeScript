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
        var twoToTwelve = new Array(0);
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
            returnMe += "It is your turn\n";
        }
        else {
            returnMe += "It is your opponent's turn\n";
        }
        if (this.point == 0) {
            returnMe += "Point has not been set, and so we do not have a pair to side bet on\n";
        }
        else {
            returnMe += "Point is " + this.point + " and we are making side bets on " + this.pair.text + "\n";
        }
        if (this.numberRolled != 0) {
            returnMe += "Last roll was " + this.numberRolled + "\n";
        }
        else {
            returnMe += "Nobody has rolled yet\n";
        }
        returnMe += "Main pot is $" + this.mainPot.getMoney() + "\n";
        returnMe += "Side pot is $" + this.sidePot.getMoney() + "\n";
        return returnMe;
    };
    Craps.prototype.play = function (userInput) {
        return ("Y" == userInput.toUpperCase());
    };
    return Craps;
}());
var CrapsConsole = (function () {
    function CrapsConsole(user) {
        this.game = new Craps();
        this.pointSet = false;
        this.pointMet = false;
        this.crappedOut = false;
        this.player = user;
    }
    CrapsConsole.prototype.updateDisplay = function (stringToDisplay) {
        this.displayElement.innerHTML += "</br>" + stringToDisplay;
    };
    CrapsConsole.prototype.initialize = function () {
        this.displayElement = document.getElementById("display");
        this.originalInputElement = document.getElementById("input");
        this.currentInputElement = this.originalInputElement;
        this.currentInputElement.innerHTML = "" +
            "" +
            "";
    };
    CrapsConsole.prototype.finalize = function () {
        this.currentInputElement = this.originalInputElement;
    };
    CrapsConsole.prototype.run = function () {
        this.initialize();
        this.welcomePlayer();
        this.game.determineFirstRoller();
        do {
            while (!this.pointSet) {
                //throws a point instead of a win/loss.
                this.initialBet();
                this.pointSet = this.resolveInitialThrow(this.game.initialThrow());
            }
            while (!this.pointMet) {
                //meets their point or craps out
                this.secondaryBet();
                this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());
            }
            if (this.crappedOut) {
                this.changeTurns(); //Reset flags, change active player
            }
            else {
                this.resetFlags();
            }
        } while (this.game.play("Y")); //getStringInput("Continue playing? [Y/N] ")));
        //NEED TO REWORK PLAY AND INPUT TO ACCOUNT FOR HTML FORMS
        this.finalize();
    };
    CrapsConsole.prototype.initialBet = function () {
        this.updateDisplay(this.game.toString());
        if (this.game.getPlayerTurn()) {
            this.opponentInitialBets(this.generateBotBet());
        }
        else {
            this.playerInitialBets();
        }
    };
    CrapsConsole.prototype.playerInitialBets = function () {
        do {
            //this.mainPotBet = this.getPositiveDoubleInput("How much would you like to bet? ");
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
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " now in Side Pot");
    };
    CrapsConsole.prototype.enterAnyKeyToContinue = function () {
        //String dump = getStringInput("Enter any key to continue: ");
    };
    return CrapsConsole;
}());
/// <reference path="CrapsConsole.ts"/>
var craps = new CrapsConsole(new User("Tim", 1000));
//# sourceMappingURL=app.js.map