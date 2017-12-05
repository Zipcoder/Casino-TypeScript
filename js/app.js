var MilitaryConversionHelper = (function () {
    function MilitaryConversionHelper() {
        this.timeRepresentation = "";
    }
    MilitaryConversionHelper.prototype.minuteMapping = function (passedMinute) {
        switch (passedMinute) {
            case 0: {
                this.timeRepresentation += "";
                break;
            }
            case 1: {
                this.timeRepresentation += " One";
                break;
            }
            case 2: {
                this.timeRepresentation += " Two";
                break;
            }
            case 3: {
                this.timeRepresentation += " Three";
                break;
            }
            case 4: {
                this.timeRepresentation += " Four";
                break;
            }
            case 5: {
                this.timeRepresentation += " Five";
                break;
            }
            case 6: {
                this.timeRepresentation += " Six";
                break;
            }
            case 7: {
                this.timeRepresentation += " Seven";
                break;
            }
            case 8: {
                this.timeRepresentation += " Eight";
                break;
            }
            case 9: {
                this.timeRepresentation += " Nine";
                break;
            }
        }
    };
    MilitaryConversionHelper.prototype.tensMapping = function (passedMinute) {
        switch (passedMinute) {
            case 10: {
                this.timeRepresentation += "Ten";
                break;
            }
            case 11: {
                this.timeRepresentation += "Eleven";
                break;
            }
            case 12: {
                this.timeRepresentation += "Twelve";
                break;
            }
            case 13: {
                this.timeRepresentation += "Thirteen";
                break;
            }
            case 14: {
                this.timeRepresentation += "Fourteen";
                break;
            }
            case 15: {
                this.timeRepresentation += "Fifteen";
                break;
            }
            case 16: {
                this.timeRepresentation += "Sixteen";
                break;
            }
            case 17: {
                this.timeRepresentation += "Seventeen";
                break;
            }
            case 18: {
                this.timeRepresentation += "Eighteen";
                break;
            }
            case 19: {
                this.timeRepresentation += "Nineteen";
                break;
            }
        }
    };
    MilitaryConversionHelper.prototype.convertToPhrase = function (passedMinute) {
        this.timeRepresentation = "";
        switch (Math.floor(passedMinute / 10)) {
            case 0: {
                this.timeRepresentation += "Zero";
                this.minuteMapping(passedMinute % 10);
                break;
            }
            case 1: {
                this.tensMapping(passedMinute);
                break;
            }
            case 2: {
                this.timeRepresentation += "Twenty";
                this.minuteMapping(passedMinute % 10);
                break;
            }
            case 3: {
                this.timeRepresentation += "Thirty";
                this.minuteMapping(passedMinute % 10);
                break;
            }
            case 4: {
                this.timeRepresentation += "Forty";
                this.minuteMapping(passedMinute % 10);
                break;
            }
            case 5: {
                this.timeRepresentation += "Fifty";
                this.minuteMapping(passedMinute % 10);
                break;
            }
        }
        console.log(this.timeRepresentation);
        return this.timeRepresentation;
    };
    return MilitaryConversionHelper;
}());
/// <reference path="MilitaryConversionHelper.ts"/>
var Problem6 = (function () {
    function Problem6() {
    }
    Problem6.prototype.initiate = function () {
        var inputForm = document.getElementById("user_input");
        var outputBox = document.getElementById("display");
        outputBox.innerHTML = this.convertStandardToMilitaryPhrase(inputForm.value);
    };
    Problem6.prototype.convertStandardToMilitaryPhrase = function (input) {
        return (this.convertMilitaryNotationToPhraseology(this.convertToMilitaryNotation(input)));
    };
    Problem6.prototype.convertToMilitaryNotation = function (input) {
        var isAM;
        isAM = ("am" === (input.substring(input.length - 2, input.length)).toLowerCase());
        input = input.substring(0, input.length - 2);
        var time;
        time = input.split(":");
        var hours;
        hours = +time[0];
        if (isAM) {
            if (hours == 12) {
                return ("00:" + time[1]);
            }
            return (input);
        }
        if (hours != 12) {
            hours += 12;
        }
        time[0] = "" + hours;
        return (time[0] + ":" + time[1]);
    };
    Problem6.prototype.convertMilitaryNotationToPhraseology = function (input) {
        var time = input.split(":");
        var timePhrase = "";
        var militaryConversionHelper = new MilitaryConversionHelper();
        timePhrase += militaryConversionHelper.convertToPhrase(+time[0]);
        timePhrase += " Hundred and ";
        timePhrase += militaryConversionHelper.convertToPhrase(+time[1]);
        timePhrase += " Hours";
        return timePhrase;
    };
    return Problem6;
}());
/// <reference path="problem6.ts"/>
var problemObject = new Problem6();
//# sourceMappingURL=app.js.map