var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("Console", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Console = (function () {
        function Console() {
        }
        return Console;
    }());
    exports.Console = Console;
});
define("BlackJackConsole", ["require", "exports", "Console"], function (require, exports, console) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlackJackConsole = (function (_super) {
        __extends(BlackJackConsole, _super);
        function BlackJackConsole() {
            return _super.call(this) || this;
        }
        BlackJackConsole.prototype.start = function () {
        };
        return BlackJackConsole;
    }(console.Console));
    exports.BlackJackConsole = BlackJackConsole;
});
// import {Casino} from './Casino'
// let casino = new Casino();
// casino.startCasino();
define("CrapsConsole", ["require", "exports", "Console"], function (require, exports, console) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CrapsConsole = (function (_super) {
        __extends(CrapsConsole, _super);
        function CrapsConsole() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CrapsConsole.prototype.start = function () {
        };
        return CrapsConsole;
    }(console.Console));
    exports.CrapsConsole = CrapsConsole;
});
define("GoFishConsole", ["require", "exports", "Console"], function (require, exports, console) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoFishConsole = (function (_super) {
        __extends(GoFishConsole, _super);
        function GoFishConsole() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GoFishConsole.prototype.start = function () {
        };
        return GoFishConsole;
    }(console.Console));
    exports.GoFishConsole = GoFishConsole;
});
define("SlotsConsole", ["require", "exports", "Console"], function (require, exports, console) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SlotsConsole = (function (_super) {
        __extends(SlotsConsole, _super);
        function SlotsConsole() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SlotsConsole.prototype.start = function () {
        };
        return SlotsConsole;
    }(console.Console));
    exports.SlotsConsole = SlotsConsole;
});
define("Utilities", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utilities = (function () {
        function Utilities() {
        }
        Utilities.printMenuName = function (menuName) {
            Utilities.displayEle.innerHTML += menuName;
        };
        Utilities.printMenuOptions = function (menuOptions) {
        };
        Utilities.getMenuInput = function (prompt, menuOptions) {
            return "";
        };
        Utilities.displayEle = document.getElementById("display");
        Utilities.userInputEle = document.getElementById("user_input");
        Utilities.buttonEle = document.getElementById("my_button");
        return Utilities;
    }());
    exports.Utilities = Utilities;
});
define("Casino", ["require", "exports", "BlackJackConsole", "CrapsConsole", "GoFishConsole", "SlotsConsole", "Utilities"], function (require, exports, BlackJackConsole_1, CrapsConsole_1, GoFishConsole_1, SlotsConsole_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Casino = (function () {
        function Casino() {
            this.gameConsoles = [];
            this.displayEle = document.getElementById("display");
            this.userInputEle = document.getElementById("user_input");
        }
        Casino.prototype.startCasino = function () {
            this.displayEle += "Hello are you working?";
            this.gameConsoles.push(new BlackJackConsole_1.BlackJackConsole());
            this.gameConsoles.push(new CrapsConsole_1.CrapsConsole());
            this.gameConsoles.push(new GoFishConsole_1.GoFishConsole());
            this.gameConsoles.push(new SlotsConsole_1.SlotsConsole());
            while (true) {
                this.selectGameToPlay();
            }
        };
        Casino.prototype.selectGameToPlay = function () {
            var gameNames = [];
            var console;
            for (console in this.gameConsoles) {
                gameNames.push(console.getNameOfGame());
            }
            Utilities_1.Utilities.printMenuName("Select a game to play");
            Utilities_1.Utilities.printMenuOptions(gameNames);
            var choice = Utilities_1.Utilities.getMenuInput(">> ", gameNames).toUpperCase();
            this.goToGame(choice);
        };
        Casino.prototype.goToGame = function (gameName) {
            switch (gameName) {
                case "BLACKJACK":
                    this.startBlackJack();
                    break;
                case "CRAPS":
                    this.startCraps();
                    break;
                case "GO FISH":
                    this.startGoFish();
                    break;
                case "SLOTS":
                    this.startSlots();
                    break;
            }
        };
        Casino.prototype.startBlackJack = function () {
            this.gameConsoles[0].start();
        };
        Casino.prototype.startCraps = function () {
            this.gameConsoles[1].start();
        };
        Casino.prototype.startGoFish = function () {
            this.gameConsoles[2].start();
        };
        Casino.prototype.startSlots = function () {
            this.gameConsoles[3].start();
        };
        return Casino;
    }());
    exports.Casino = Casino;
});
//# sourceMappingURL=main.js.map