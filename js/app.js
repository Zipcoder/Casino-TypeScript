var Casino;
(function (Casino) {
    window.addEventListener("DOMContentLoaded", (e) => loadMainMenu());
    class Input {
        static getInputFromBox() {
            var element = document.getElementById("user_input");
            this.userinput = element.value;
            element.value = "";
        }
        static getInput() {
            return this.userinput;
        }
    }
    Casino.Input = Input;
    document.getElementById("submit_button").addEventListener("click", (e) => Input.getInputFromBox());
    function loadMainMenu() {
        var menu = new Casino.MainMenu();
        menu.menuStart();
    }
})(Casino || (Casino = {}));
var Casino;
(function (Casino) {
    class GameEngine {
    }
    Casino.GameEngine = GameEngine;
})(Casino || (Casino = {}));
var Casino;
(function (Casino) {
    class MainMenu {
        constructor() {
            this.displayElement = document.getElementById("display");
            this.submitButton = document.getElementById("submit_button");
            this.menuStart = this.menuStart.bind(this);
            this.createProfile = this.createProfile.bind(this);
            this.gamePicker = this.gamePicker.bind(this);
        }
        menuStart() {
            this.displayElement.innerHTML = "Please enter your name";
            this.submitButton.addEventListener("click", (e) => this.createProfile(), { once: true });
        }
        createProfile() {
            this.userProfile = new Casino.Profile(Casino.Input.getInput());
            this.displayElement.innerHTML += "<br>Hello " + this.userProfile.getuserName() + "!";
            this.displayElement.innerHTML += "<br>Please select a game. <br>1. Slots";
            this.submitButton.addEventListener("click", (e) => this.gamePicker(), { once: true });
        }
        gamePicker() {
            if (Casino.Input.getInput().toLowerCase() === 'slots') {
                var slotsGame = new Casino.SlotsGame();
                slotsGame.startGame();
            }
        }
    }
    Casino.MainMenu = MainMenu;
})(Casino || (Casino = {}));
var Casino;
(function (Casino) {
    class Player {
        constructorI(playerProfile) {
            this.playerProfile = playerProfile;
        }
        getProfile() {
            return this.playerProfile;
        }
        getName() {
            return this.playerProfile.getuserName();
        }
        getId() {
            return this.playerProfile.getUserId();
        }
    }
    Casino.Player = Player;
})(Casino || (Casino = {}));
var Casino;
(function (Casino) {
    class Profile {
        constructor(userName) {
            this.userId = Math.random() * 1000;
            this.userName = userName;
            this.balance = 500;
        }
        getUserId() {
            return this.userId;
        }
        getuserName() {
            return this.userName;
        }
        getBalance() {
            return this.balance;
        }
    }
    Casino.Profile = Profile;
})(Casino || (Casino = {}));
var Casino;
(function (Casino) {
    class SlotsGame {
        constructor() {
            this.submitButton = document.getElementById("submit_button");
            this.displayElement = document.getElementById("display");
            this.slotWheel1 = ["&#x06DE", "&#x2655", "&#x26C4", "&#x221E", "&#x2126", "&#x2042"];
            this.slotWheel2 = ["&#x2126", "&#x06DE", "&#x2042", "&#x2655", "&#x26C4", "&#x221E"];
            this.slotWheel3 = ["&#x2655", "&#x26C4", "&#x221E", "&#x2042", "&#x2126", "&#x06DE"];
        }
        startGame() {
            var slotMachine = this.createMultipleWheelOutput();
            this.displaySlotMachine(slotMachine);
            this.checkWinners(slotMachine);
            this.displayElement.innerHTML += "<br>Type exit to quit or anything else to play again.";
            this.submitButton.addEventListener("click", (e) => this.endGameChecker(), { once: true });
        }
        endGameChecker() {
            if (Casino.Input.getInput().toLowerCase() != 'exit') {
                this.startGame();
            }
        }
        createMultipleWheelOutput() {
            var slotMachine = [];
            slotMachine[0] = this.createSingleWheelOutput(this.slotWheel1);
            slotMachine[1] = this.createSingleWheelOutput(this.slotWheel2);
            slotMachine[2] = this.createSingleWheelOutput(this.slotWheel3);
            return slotMachine;
        }
        createSingleWheelOutput(slotWheel) {
            var newArray = [];
            var position = Math.floor(Math.random() * 6);
            for (var i = 0; i < 3; i++) {
                if (position == 6) {
                    position = 0;
                }
                newArray[i] = slotWheel[position];
                position++;
            }
            return newArray;
        }
        displaySlotMachine(slotMachine) {
            this.displayElement.innerHTML += "<br>" + slotMachine[0][0] + " " + slotMachine[1][0] + " " + slotMachine[2][0];
            this.displayElement.innerHTML += "<br>" + slotMachine[0][1] + " " + slotMachine[1][1] + " " + slotMachine[2][1];
            this.displayElement.innerHTML += "<br>" + slotMachine[0][2] + " " + slotMachine[1][2] + " " + slotMachine[2][2];
        }
        checkWinners(slotMachine) {
            this.checkRowWinners(slotMachine);
            this.checkDiagonalWinners(slotMachine);
        }
        checkRowWinners(slotMachine) {
            if (slotMachine[0][0] === slotMachine[1][0] && slotMachine[1][0] === slotMachine[2][0]) {
                this.displayElement.innerHTML += "<br>You have won on row 1!";
            }
            if (slotMachine[0][1] === slotMachine[1][1] && slotMachine[1][1] === slotMachine[2][1]) {
                this.displayElement.innerHTML += "<br>You have won on row 2!";
            }
            if (slotMachine[0][2] === slotMachine[1][2] && slotMachine[1][2] === slotMachine[2][2]) {
                this.displayElement.innerHTML += "<br>You have won on row 3!";
            }
        }
        checkDiagonalWinners(slotMachine) {
            if (slotMachine[0][0] === slotMachine[1][1] && slotMachine[1][1] === slotMachine[2][2]) {
                this.displayElement.innerHTML += "<br>You have won on diagonal down!";
            }
            if (slotMachine[0][2] === slotMachine[1][1] && slotMachine[1][1] === slotMachine[2][0]) {
                this.displayElement.innerHTML += "<br>You have won on diagonal up!";
            }
        }
    }
    Casino.SlotsGame = SlotsGame;
})(Casino || (Casino = {}));
//# sourceMappingURL=app.js.map