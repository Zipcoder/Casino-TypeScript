var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var webElement = document.getElementById("display");
        webElement.innerText += "Hello World";
        return 1;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=app.js.map