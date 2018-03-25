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
        var menu = new Casino.MainMenu;
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
        }
        menuStart() {
            this.displayElement.innerHTML = "Please enter your name";
            this.submitButton.addEventListener("click", (e) => this.createProfile());
        }
        createProfile() {
            this.submitButton.removeEventListener("click", (e) => this.createProfile());
            this.userProfile = new Casino.Profile(Casino.Input.getInput());
            console.log("hello");
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
            this.slotWheel1 = [3, 2, 5, 4, 6, 1];
            this.slotwheel2 = [6, 3, 1, 2, 5, 4];
            this.slotwheel3 = [2, 5, 4, 1, 6, 3];
        }
    }
    Casino.SlotsGame = SlotsGame;
})(Casino || (Casino = {}));
//# sourceMappingURL=app.js.map