var webWindow = document.getElementById("display");
var userInput = document.getElementById("user_input");
var button = document.getElementById("submitButton");
webWindow.innerText += "Welcome to the worst casino you've ever seen!";
function addToDisplayText(text) {
    webWindow.innerText += '\n';
    webWindow.innerText += text;
}
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        // var webWindow = document.getElementById("display");
        // var userInput = <HTMLInputElement>document.getElementById("user_input");
        // var button = document.getElementById("submitButton");
        button.addEventListener("click", function (e) { return addToDisplayText(userInput.value); });
    };
    return Startup;
}());
var Profile = /** @class */ (function () {
    function Profile(name, balance) {
        this.id = 1;
        this.name = name;
        this.balance = balance;
    }
    Profile.prototype.getBalance = function () {
        return this.balance;
    };
    return Profile;
}());
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
    }
    SlotMachine.prototype.start = function () {
        var firstReel = Math.floor(Math.random() * 5) + 1;
        var secondReel = Math.floor(Math.random() * 5) + 1;
        var thirdReel = Math.floor(Math.random() * 5) + 1;
        // Implement gambling interface and add betting too
    };
    return SlotMachine;
}());
Startup.main();
//# sourceMappingURL=app.js.map