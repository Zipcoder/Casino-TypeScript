var Casino;
(function (Casino) {
    var Profile = /** @class */ (function () {
        function Profile(userName) {
            this.userId = Math.random() * 1000;
            this.userName = userName;
            this.balance = 500;
        }
        Profile.prototype.getUserId = function () {
            return this.userId;
        };
        Profile.prototype.getuserName = function () {
            return this.userName;
        };
        Profile.prototype.getBalance = function () {
            return this.balance;
        };
        return Profile;
    }());
    Casino.Profile = Profile;
})(Casino || (Casino = {}));
var Casino;
(function (Casino) {
    var MainMenu = /** @class */ (function () {
        function MainMenu() {
            this.displayElement = document.getElementById("display");
            this.submitButton = document.getElementById("submit_button");
        }
        MainMenu.prototype.menuStart = function () {
            this.displayElement.textContent = "Please enter your name";
            Casino.Input.event.addEventListener("click", this.createProfile);
        };
        MainMenu.prototype.createProfile = function () {
            this.displayElement.textContent = "Your name is ";
            this.submitButton.removeEventListener("click", this.createProfile);
            this.userPrfoile = new Casino.Profile(Casino.Input.getInput());
            this.displayElement.textContent = "Your name is " + this.userPrfoile.getuserName();
        };
        return MainMenu;
    }());
    Casino.MainMenu = MainMenu;
})(Casino || (Casino = {}));
var Casino;
(function (Casino) {
    window.addEventListener("DOMContentLoaded", testFunction2);
    var Input = /** @class */ (function () {
        function Input() {
        }
        Input.getInputFromBox = function () {
            var element = document.getElementById("user_input");
            this.userinput = element.value;
            element.value = "";
        };
        Input.getInput = function () {
            return this.userinput;
        };
        Input.event = document.getElementById("submit_button");
        return Input;
    }());
    Casino.Input = Input;
    function testFunction2() {
        var menu = new Casino.MainMenu;
        menu.menuStart();
    }
})(Casino || (Casino = {}));
