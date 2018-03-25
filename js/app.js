var App = /** @class */ (function () {
    function App() {
        this.newMainMenu = new MainMenu;
    }
    App.main = function () {
    };
    return App;
}());
var UI = /** @class */ (function () {
    function UI() {
        UI.submitButton.addEventListener("click", function (e) { UI._lastInput = UI.userInput.value; });
        UI.submitButton.addEventListener("click", function (e) { UI.userInput.value = ''; });
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
    UI.submitButton = document.getElementById('submit');
    return UI;
}());
var Craps = /** @class */ (function () {
    function Craps(player) {
        this.betAmount = 0;
        this.betUserPlaces = 0;
        this.crapsPlayer = player;
    }
    Craps.prototype.userPlacesBet = function () {
        UI.display("Hello!, please enter in Pass Line or Don't pass line for you bet below");
        // event handler here for the bet type
        // set user bet places to the input
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
    };
    return Craps;
}());
var Dice = /** @class */ (function () {
    function Dice() {
        this.sides = 6;
    }
    Dice.prototype.rollDice = function () {
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