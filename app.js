var Casino = /** @class */ (function () {
    function Casino(message) {
        this.greeting = message;
    }
    Casino.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Casino.prototype.showGreeting = function () {
        return "Greeting: " + this.greeting;
    };
    return Casino;
}());
