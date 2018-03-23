"use strict";
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var button = document.getElementById("submit");
        var userInput = document.getElementById("user_input");
        var button = document.getElementById("submit_button");
        button.addEventListener("click", function (e) { return putToDisplay(userInput.value); });
    };
    return Startup;
}());
var webElement = document.getElementById("display");
function putToDisplay(text) {
    webElement.innerText += "\n";
    webElement.innerText += text;
}
Startup.main();
//# sourceMappingURL=app.js.map