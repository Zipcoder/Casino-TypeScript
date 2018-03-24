"use strict";
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var input = document.getElementById("user_input");
        var window = document.getElementById('display');
        var button = document.getElementById('submit');
        button.addEventListener("click", function (e) { window.innerText += input.value + '\n'; });
    };
    return Startup;
}());
Startup.main();
