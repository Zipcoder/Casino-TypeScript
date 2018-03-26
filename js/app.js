var App = /** @class */ (function () {
    function App() {
    }
    App.main = function () {
        var profile = new Profile(123, "Bob", 100);
        var newPlayer = new Player(profile);
        var craps = new Craps(newPlayer);
        craps.startGame();
        craps.userPlacesBet();
    };
    return App;
}());
var UI = /** @class */ (function () {
    function UI() {
        UI.submitButton.addEventListener("click", function (e) { UI.actualUserInput = UI.textBox.value; });
        UI.submitButton.addEventListener("click", function (e) { UI.textBox.value = ''; });
    }
    UI.display = function (input) {
        this.displayWindow.innerText += input + '\n';
    };
    UI.clearScreen = function () {
        this.displayWindow.innerText = '';
    };
    Object.defineProperty(UI, "Instance", {
        get: function () {
            return this.instance || (this.instance = new UI());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UI, "lastInput", {
        get: function () {
            return this.actualUserInput;
        },
        enumerable: true,
        configurable: true
    });
    UI.textBox = document.getElementById("user_input");
    UI.displayWindow = document.getElementById('display');
    UI.submitButton = document.getElementById('submit');
    return UI;
}());
var Craps = /** @class */ (function () {
    function Craps(player) {
        this.crapsPlayer = player;
        this.userPlacesBet = this.userPlacesBet.bind(this);
    }
    Craps.prototype.userPlacesBet = function () {
        UI.submitButton.removeEventListener("click", this.userPlacesBet);
        if (UI.lastInput === "Pass Line") {
            UI.display("Hello");
        }
        else {
            UI.display("Bye");
        }
        UI.clearScreen();
    };
    Craps.prototype.userBetAmount = function () {
        UI.display("Please enter your bet amount down below");
        if (this.betAmount > this.crapsPlayer.getBalance()) {
            UI.display("You can't bet that much!");
        }
        else {
            //event handler here for bet amount      
        }
        UI.clearScreen();
    };
    Craps.prototype.startGame = function () {
        UI.display("Hello!, please enter in Pass Line or Don't pass line for you bet below");
        UI.submitButton.addEventListener("click", this.userPlacesBet);
    };
    return Craps;
}());
var Dice = /** @class */ (function () {
    function Dice() {
        this.sides = 6;
    }
    Dice.prototype.rollDice = function () {
        var randNumber = Math.floor(Math.random() * this.sides) + 1;
        return randNumber;
    };
    return Dice;
}());
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.newCrapsGame = new Craps(this.mainPlayer);
        this.chooseGame = this.chooseGame.bind(this);
    }
    MainMenu.prototype.start = function () {
        UI.display("What game do you want to play?");
        UI.display("Craps or Craps?");
        UI.submitButton.addEventListener("click", this.chooseGame);
    };
    MainMenu.prototype.chooseGame = function () {
        UI.submitButton.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Craps") {
            this.newCrapsGame.startGame();
        }
        else {
            UI.display("Too bad you're playing Craps!");
            this.newCrapsGame.startGame();
        }
    };
    return MainMenu;
}());
var Player = /** @class */ (function () {
    function Player(profile) {
        this.playerProfile = profile;
    }
    Player.prototype.getProfile = function () {
        return this.playerProfile;
    };
    Player.prototype.getName = function () {
        return this.playerProfile.getName;
    };
    Player.prototype.getId = function () {
        return this.playerProfile.getId;
    };
    Player.prototype.getBalance = function () {
        return this.playerProfile.getBalance;
    };
    return Player;
}());
var Profile = /** @class */ (function () {
    function Profile(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Object.defineProperty(Profile.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "getBalance", {
        get: function () {
            return this.balance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "setBalance", {
        set: function (balance) {
            this.balance = balance;
        },
        enumerable: true,
        configurable: true
    });
    Profile.prototype.addProfile = function (profile) {
        this.listOfProfiles.push(profile);
    };
    return Profile;
}());
var instance = UI.Instance;
App.main();
//# sourceMappingURL=app.js.map