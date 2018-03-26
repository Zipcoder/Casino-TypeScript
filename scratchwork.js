var test = /** @class */ (function () {
    function test() {
        this.name = "Keith";
    }
    test.prototype.printname = function () {
        document.write(name);
    };
    return test;
}());
