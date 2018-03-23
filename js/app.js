var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var webElement = document.getElementById("display");
        var userInput = document.getElementById("user_input");
        var button = document.getElementById("submitButton");
        button.addEventListener("click", function (e) { return addToDisplayText(userInput.value); });
        function addToDisplayText(text) {
            webElement.innerText += '\n';
            webElement.innerText += text;
        }
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=app.js.map