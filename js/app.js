"use strict";
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var webElement = document.getElementById("display");
        webElement.innerText += "Hello World";
    };
    return Startup;
}());
Startup.main();
