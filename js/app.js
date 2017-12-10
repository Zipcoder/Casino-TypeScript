var Player = /** @class */ (function () {
    function Player(name, money) {
        this.name = name;
        this.money = money;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.setMoney = function (money) {
        this.money = money;
    };
    Player.prototype.getMoney = function () {
        return this.money;
    };
    Player.prototype.addToHand = function (card) {
    };
    return Player;
}());
var MenuCreation = /** @class */ (function () {
    function MenuCreation() {
    }
    MenuCreation.prototype.menuTitle = function () {
        var welcomeString = "Welcome to the Casino!<br>" +
            "===============================================<br>" +
            "Please enter your username and amount of money below.<br>";
        return welcomeString;
    };
    MenuCreation.prototype.casinoTitle = function () {
        var outputString = "Please select a casino game to play!<br>" +
            "===============================================<br>";
        return outputString;
    };
    return MenuCreation;
}());
var WebPageInteraction = /** @class */ (function () {
    function WebPageInteraction() {
        this.verifyEntry = false;
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("submit");
    }
    WebPageInteraction.getInstance = function () {
        if (!WebPageInteraction.instance) {
            WebPageInteraction.instance = new WebPageInteraction();
            // ... any one time initialization goes here ...
        }
        return WebPageInteraction.instance;
    };
    WebPageInteraction.prototype.displayToWebpage = function (input) {
        this.displayElement = document.getElementById("display");
        this.displayElement.innerHTML += input;
        this.displayElement.innerHTML += "<br/>";
        this.displayElement.scrollTop = this.displayElement.scrollHeight * 2;
    };
    WebPageInteraction.prototype.addElement = function (parentId, elementTag, elementId, html) {
        // Adds an element to the document
        var p = document.getElementById(parentId);
        var newElement = document.createElement(elementTag);
        newElement.setAttribute('id', elementId);
        newElement.innerHTML = html;
        p.appendChild(newElement);
    };
    return WebPageInteraction;
}());
var Casino = /** @class */ (function () {
    function Casino() {
        this.submitButton = document.getElementById("generalSubmitButton");
        this.gameSelectionButtons = document.getElementById("gameSelectionButtons");
    }
    Casino.prototype.createPlayer = function () {
        var playerName = document.getElementById("playerName").value;
        var playerMoney = document.getElementById("playerMoney").value;
        if (playerName.match("[a-z]+") && playerMoney.match("\\d+")) {
            document.getElementById("newUserForm").style.display = "none";
            this.submitButton.style.display = "none";
            this.gameSelectionButtons.style.display = "inline";
            this.aPlayer = new Player(playerName, parseFloat(playerMoney));
            document.getElementById("playersName").innerHTML = "Player's Name: " + this.aPlayer.getName();
            document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.aPlayer.getMoney();
            //currentUserInfo.hidden = false;
            console.log("Got this info from user: " + this.aPlayer.getName() + " " + this.aPlayer.getMoney());
            WebPageInteraction.getInstance().displayToWebpage("Your account has been created, " + playerName + "!<br>");
            WebPageInteraction.getInstance().displayToWebpage(menuCreation.casinoTitle());
        }
        else {
            WebPageInteraction.getInstance().displayToWebpage("Please enter a valid name or amount of money.<br>");
        }
    };
    ;
    return Casino;
}());
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());
var CardGames = /** @class */ (function () {
    function CardGames() {
    }
    CardGames.prototype.CardGames = function (aPlayer) {
        this.deck = new Deck();
        this.deck.shuffle();
    };
    CardGames.prototype.getPlayer = function () {
        return this.player;
    };
    CardGames.prototype.setPlayer = function (player) {
        this.player = player;
    };
    CardGames.prototype.getDeck = function () {
        return this.deck;
    };
    CardGames.prototype.setDeck = function (deck) {
        this.deck = deck;
    };
    CardGames.prototype.dealCard = function (playerToReceiveCard) {
        var card = this.getDeck().getCard();
        playerToReceiveCard.addToHand(card);
    };
    return CardGames;
}());
var Dice = /** @class */ (function () {
    function Dice(min, max) {
        this.min = min;
        this.max = max;
    }
    Dice.prototype.roll = function () {
        return Math.floor(Math.random() * this.max) + this.min;
    };
    return Dice;
}());
///<reference path="CardGames.ts"/>
///<reference path="bootstrapper.ts"/>
///<reference path="Dice.ts"/>
var Craps = /** @class */ (function () {
    function Craps(casino) {
        this.dice1 = new Dice(1, 6);
        this.dice2 = new Dice(1, 6);
        this.casino = casino;
        this.primaryButton = document.getElementById("primaryButton");
        this.gameSelectionButtons = document.getElementById("gameSelectionButtons");
    }
    Craps.prototype.play = function () {
        this.player = this.casino.aPlayer;
        this.printWelcomeMessage();
        this.takeBet();
    };
    Craps.prototype.printWelcomeMessage = function () {
        this.gameSelectionButtons.style.display = "none";
        WebPageInteraction.getInstance().
            displayToWebpage("Welcome to craps " + this.player.getName() + "!");
    };
    Craps.prototype.takeBet = function () {
        crapsButtonLogic.takeBetButtonLogic();
        WebPageInteraction.getInstance().displayToWebpage("You currently have $" + this.player.getMoney() + "<br>" +
            "How much money do you want to bet?");
    };
    Craps.prototype.getBetAmount = function () {
        this.gameSelectionButtons.style.display = "none";
        var amount = parseFloat(document.getElementById("user_input").value);
        if (amount > this.player.getMoney() || amount <= 0) {
            WebPageInteraction.getInstance().displayToWebpage("Please make sure you have entered a number greater than " +
                "zero and less than or equal to $" + this.player.getMoney()) + ".";
        }
        else {
            Craps.betAmount = amount;
            WebPageInteraction.getInstance().displayToWebpage("<br>You bet: $" + Craps.betAmount + "<br>");
            this.player.setMoney(this.player.getMoney() - amount);
            document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
            document.getElementById("userInputGroup").style.display = "none";
            this.primaryButton.innerHTML = "Press To Roll";
            this.primaryButton.setAttribute("onclick", "craps.pressEnterToRoll()");
        }
    };
    Craps.prototype.pressEnterToRoll = function () {
        this.diceOneValue = this.dice1.roll();
        this.diceTwoValue = this.dice2.roll();
        this.sumOfRolls = this.diceOneValue + this.diceTwoValue;
        this.printDiceRoll(this.sumOfRolls);
        if (this.sevenOrEleven(this.sumOfRolls)) {
            this.printWinMessage();
        }
        else if (this.twoThreeOrTwelve(this.sumOfRolls)) {
            this.printLoseMessage();
        }
        else {
            this.target = this.sumOfRolls;
            WebPageInteraction.getInstance().displayToWebpage("<br>The new target is: " + this.target);
        }
        this.primaryButton.setAttribute("onclick", "craps.keepRollingDice()");
    };
    Craps.prototype.keepRollingDice = function () {
        this.diceOneValue = this.dice1.roll();
        this.diceTwoValue = this.dice2.roll();
        this.sumOfRolls = this.diceOneValue + this.diceTwoValue;
        if (!(this.sumOfRolls === 7) && !(this.sumOfRolls === this.target)) {
            this.printDiceRoll(this.sumOfRolls);
        }
        else {
            this.primaryButton.setAttribute("onclick", "craps.playAgainYes()");
            this.primaryButton.innerText = "Yes";
            console.log("when does this happen");
            var p = document.getElementById("generalSubmitButton");
            var newNoButton = document.createElement("button");
            newNoButton.innerText = "No";
            newNoButton.setAttribute('class', "btn btn-danger");
            newNoButton.setAttribute('id', "noButton");
            newNoButton.setAttribute('onclick', "craps.playAgainNo()");
            p.appendChild(newNoButton);
            if (this.sumOfRolls === 7) {
                this.printLoseMessage();
            }
            else if (this.sumOfRolls === this.target) {
                this.printWinMessage();
            }
        }
    };
    Craps.prototype.bootPlayer = function () {
        WebPageInteraction.getInstance().displayToWebpage("Time for you to go to the ATM. Kicking you from the casino.");
        //System.exit(0);
        // Go to main Menu
    };
    Craps.prototype.printDiceRoll = function (diceRollValue) {
        var diceOneImage = "<img src=images/dice/dice" + this.diceOneValue + ".png >";
        var diceTwoImage = "<img src=images/dice/dice" + this.diceTwoValue + ".png >";
        WebPageInteraction.getInstance().displayToWebpage("You rolled: " + diceOneImage + diceTwoImage);
    };
    Craps.prototype.sevenOrEleven = function (diceRollValue) {
        return diceRollValue === 7 || diceRollValue === 11;
    };
    Craps.prototype.twoThreeOrTwelve = function (diceRollValue) {
        return (diceRollValue === 2 || diceRollValue === 3 || diceRollValue === 12);
    };
    Craps.prototype.printWinMessage = function () {
        WebPageInteraction.getInstance().displayToWebpage("Congratulations you won!");
        this.printWinnings(Craps.betAmount);
    };
    Craps.prototype.printWinnings = function (amount) {
        var newMoneyAmount = this.player.getMoney() + amount * 2;
        this.player.setMoney(newMoneyAmount);
        WebPageInteraction.getInstance().displayToWebpage("You now have $" + this.player.getMoney() + " dollars!");
        document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
        WebPageInteraction.getInstance().displayToWebpage("<br>Do you want to play another round?<br>");
    };
    Craps.prototype.printLoseMessage = function () {
        WebPageInteraction.getInstance().displayToWebpage("Sorry you lost!<br>You now have $" + this.player.getMoney());
        WebPageInteraction.getInstance().displayToWebpage("<br>Do you want to play another round?<br>");
    };
    Craps.prototype.playAgainNo = function () {
        document.getElementById("noButton").remove();
        console.log("not playing again");
        this.primaryButton.style.display = "none";
        document.getElementById("gameSelectionButtons").style.display = "inline";
    };
    Craps.prototype.playAgainYes = function () {
        console.log("playing again.");
        document.getElementById("noButton").remove();
        document.getElementById("generalSubmitButton").style.display = "none";
        this.primaryButton.setAttribute('onclick', "craps.takeBet()");
        this.primaryButton.click();
        //document.getElementById("primaryButton").innerText = "none";
    };
    return Craps;
}());
var CrapsButtonLogic = /** @class */ (function () {
    function CrapsButtonLogic() {
        this.primaryButton = document.getElementById("primaryButton");
        this.gameSelectionButtons = document.getElementById("gameSelectionButtons");
        this.nameOfLabel = document.getElementById("nameOfLabel");
        this.userInputGroup = document.getElementById("userInputGroup");
        this.generalSubmitButton = document.getElementById("generalSubmitButton");
        //this.playersMoney = document.getElementById("playersMoney");
    }
    CrapsButtonLogic.prototype.takeBetButtonLogic = function () {
        this.nameOfLabel.innerText = "Bet Amount";
        this.userInputGroup.style.display = "inline";
        this.gameSelectionButtons.style.display = "none";
        this.generalSubmitButton.style.display = "block";
        this.primaryButton.innerText = "Submit";
        this.primaryButton.style.display = "inline";
        this.primaryButton.setAttribute("onclick", "craps.getBetAmount()");
        this.userInputGroup.style.display = 'inline';
    };
    return CrapsButtonLogic;
}());
///<reference path="Player.ts"/>
///<reference path="MenuCreation.ts"/>
///<reference path="WebPageInteraction.ts"/>
///<reference path="Casino.ts"/>
///<reference path="Craps.ts"/>
///<reference path="CrapsButtonLogic.ts"/>
var menuCreation = new MenuCreation();
WebPageInteraction.getInstance().displayToWebpage(menuCreation.menuTitle());
var casino = new Casino();
var crapsButtonLogic = new CrapsButtonLogic();
var craps = new Craps(casino);
// submitButton.addEventListener("click", createPlayer);
//
//
//
//
//
//
// let crapsGame = document.getElementById("crapsGame");
//
// crapsGame.addEventListener("click", () => {
//     let newCrapsGame:Craps = new Craps(aPlayer);
//
//     submitButton.hidden = false;
//     gameSelectionButtons.hidden = true;
//
//     //newCrapsGame.printWelcomeMessage();
//     //newCrapsGame.takeBet();
//     newCrapsGame.play();
//
//
//
//
//
//
//
// });
var Deck = /** @class */ (function () {
    function Deck() {
    }
    Deck.prototype.shuffle = function () {
    };
    Deck.prototype.getCard = function () {
        return null;
    };
    return Deck;
}());
//# sourceMappingURL=app.js.map