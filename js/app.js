var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var webElement = document.getElementById("display");
        var userInput = document.getElementById("user_input");
        var button = document.getElementById("submitButton");
        webElement.innerText += "Welcome to the worst casino you've ever seen!";
        button.addEventListener("click", function (e) { return addToDisplayText(userInput.value); });
        function addToDisplayText(text) {
            webElement.innerText += '\n';
            webElement.innerText += text;
        }
    };
    return Startup;
}());
Startup.main();
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
    return SlotMachine;
}());
//# sourceMappingURL=app.js.map