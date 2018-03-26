/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const casino_1 = __webpack_require__(/*! ./casino */ "./src/casino.ts");
var casino = new casino_1.Casino("vince", 500);
function startGame() {
    log("game start");
    display("game start");
}
function handleInput(event) {
    let inputElement = event.target;
    casino.receiveCommand(inputElement.value);
    inputElement.value = "";
}
function display(content) {
    let displayElement = document.getElementById('display');
    displayElement.innerHTML = content;
}
function log(msg) {
    console.log(msg);
}
document.getElementById('submit').addEventListener('click', {
    handleEvent: (event) => {
        startGame();
    }
});
document.getElementById('user_input').addEventListener('keypress', {
    handleEvent: (event) => {
        if (event.key == 'Enter') {
            handleInput(event);
        }
    }
});


/***/ }),

/***/ "./src/blackjack/blackjack.ts":
/*!************************************!*\
  !*** ./src/blackjack/blackjack.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Blackjack {
    constructor() {
        this.players = [];
    }
    getPlayers() {
        return this.players;
    }
    getPlayer(playerId) {
        return this.players[playerId];
    }
    addPlayer(player) {
        this.players[player.getId()] = player;
    }
    contains(player) {
        for (let p of this.players) {
            if (p.getName() == player.getName()) {
                return true;
            }
        }
        return false;
    }
}
exports.Blackjack = Blackjack;


/***/ }),

/***/ "./src/blackjack/blackjackEngine.ts":
/*!******************************************!*\
  !*** ./src/blackjack/blackjackEngine.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const blackjackPlayer_1 = __webpack_require__(/*! ./blackjackPlayer */ "./src/blackjack/blackjackPlayer.ts");
const blackjack_1 = __webpack_require__(/*! ./blackjack */ "./src/blackjack/blackjack.ts");
const deck_1 = __webpack_require__(/*! ./deck */ "./src/blackjack/deck.ts");
class BlackjackEngine {
    constructor(profile) {
        this.deck = new deck_1.Deck();
        this.player = new blackjackPlayer_1.BlackjackPlayer(profile);
        this.game = new blackjack_1.Blackjack();
    }
    getGame() {
        return this.game;
    }
    evaluateTurn(player) {
        this.player.hand.push(this.deck.draw());
        this.player.hand.push(this.deck.draw());
        let dealerHand = [];
        dealerHand.push(this.deck.draw());
        dealerHand.push(this.deck.draw());
        let UI = document.getElementById('display');
        let header = document.createElement('p');
        header.innerHTML = "Dealer Hand:";
        UI.appendChild(header);
        for (let card of dealerHand) {
            let e = document.createElement('span');
            e.classList.add('card');
            e.innerHTML = card.toString() + ' | ';
            UI.appendChild(e);
        }
        let playerHeader = document.createElement('p');
        playerHeader.innerHTML = "<br />Player Hand:";
        UI.appendChild(playerHeader);
        for (let card of this.player.hand) {
            let e = document.createElement('span');
            e.classList.add('card');
            e.innerHTML = card.toString() + ' | ';
            UI.appendChild(e);
        }
        let output = document.createElement('p');
        output.innerHTML = "<br />You win...or lose. IDK there isn't any real game logic. I'm deleting this repo and starting from scratch with React.";
        UI.appendChild(output);
    }
    run() {
        this.game.addPlayer(this.player);
        this.evaluateTurn(this.player);
    }
}
exports.BlackjackEngine = BlackjackEngine;


/***/ }),

/***/ "./src/blackjack/blackjackPlayer.ts":
/*!******************************************!*\
  !*** ./src/blackjack/blackjackPlayer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __webpack_require__(/*! ../player */ "./src/player.ts");
class BlackjackPlayer extends player_1.Player {
    constructor() {
        super(...arguments);
        this.hand = [];
    }
}
exports.BlackjackPlayer = BlackjackPlayer;


/***/ }),

/***/ "./src/blackjack/card.ts":
/*!*******************************!*\
  !*** ./src/blackjack/card.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}
exports.Card = Card;


/***/ }),

/***/ "./src/blackjack/deck.ts":
/*!*******************************!*\
  !*** ./src/blackjack/deck.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/blackjack/card.ts");
const cardEnums_1 = __webpack_require__(/*! ../cardEnums */ "./src/cardEnums.ts");
class Deck {
    constructor() {
        this.cards = this.buildDeck();
    }
    draw() {
        let randomIndex = Math.floor(Math.random() * 52);
        let draw = this.cards[randomIndex];
        this.cards[randomIndex] = this.cards[this.cards.length - 1];
        this.cards[this.cards.length - 1] = draw;
        return this.cards.pop();
    }
    buildDeck() {
        let result = [];
        for (let suit in cardEnums_1.CardSuit) {
            for (let rank in cardEnums_1.CardRank) {
                result.push(new card_1.Card(suit, rank));
            }
        }
        return result;
    }
}
exports.Deck = Deck;


/***/ }),

/***/ "./src/cardEnums.ts":
/*!**************************!*\
  !*** ./src/cardEnums.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CardSuit;
(function (CardSuit) {
    CardSuit["HEARTS"] = "Hearts";
    CardSuit["SPADES"] = "Spades";
    CardSuit["DIAMONDS"] = "Diamonds";
    CardSuit["CLUBS"] = "Clubs";
})(CardSuit || (CardSuit = {}));
exports.CardSuit = CardSuit;
var CardRank;
(function (CardRank) {
    CardRank["ACE"] = "Ace";
    CardRank[CardRank["TWO"] = 2] = "TWO";
    CardRank[CardRank["THREE"] = 3] = "THREE";
    CardRank[CardRank["FOUR"] = 4] = "FOUR";
    CardRank[CardRank["FIVE"] = 5] = "FIVE";
    CardRank[CardRank["SIX"] = 6] = "SIX";
    CardRank[CardRank["SEVEN"] = 7] = "SEVEN";
    CardRank[CardRank["EIGHT"] = 8] = "EIGHT";
    CardRank[CardRank["NINE"] = 9] = "NINE";
    CardRank[CardRank["TEN"] = 10] = "TEN";
    CardRank["JACK"] = "Jack";
    CardRank["QUEEN"] = "Queen";
    CardRank["KING"] = "King";
})(CardRank || (CardRank = {}));
exports.CardRank = CardRank;


/***/ }),

/***/ "./src/casino.ts":
/*!***********************!*\
  !*** ./src/casino.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = __webpack_require__(/*! ./profile */ "./src/profile.ts");
const blackjackEngine_1 = __webpack_require__(/*! ./blackjack/blackjackEngine */ "./src/blackjack/blackjackEngine.ts");
class Casino {
    constructor(name, balance = 500) {
        this.profile = new profile_1.Profile(1, name, balance);
    }
    receiveCommand(cmd) {
        if (cmd == "blackjack") {
            console.log("Starting Blackjack!");
            let engine = new blackjackEngine_1.BlackjackEngine(this.profile);
            engine.run();
        }
    }
}
exports.Casino = Casino;


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(profile) {
        this.profile = profile;
    }
    getProfile() {
        return this.profile;
    }
    getName() {
        return this.profile.name;
    }
    getId() {
        return this.profile.id;
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/profile.ts":
/*!************************!*\
  !*** ./src/profile.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        this._balance = balance;
    }
}
exports.Profile = Profile;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxhY2tqYWNrL2JsYWNramFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxhY2tqYWNrL2JsYWNramFja0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxhY2tqYWNrL2JsYWNramFja1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxhY2tqYWNrL2NhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsYWNramFjay9kZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9jYXJkRW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nhc2luby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRUEsd0VBQWtDO0FBRWxDLElBQUksTUFBTSxHQUFXLElBQUksZUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUU5QztJQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELHFCQUFxQixLQUFvQjtJQUN4QyxJQUFJLFlBQVksR0FBdUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUVwRSxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQyxZQUFZLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsaUJBQWlCLE9BQWU7SUFDL0IsSUFBSSxjQUFjLEdBQXVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUUsY0FBZSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDckMsQ0FBQztBQUVELGFBQWEsR0FBUTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUM1RCxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN0QixTQUFTLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTtJQUNuRSxXQUFXLEVBQUUsQ0FBQyxLQUFvQixFQUFFLEVBQUU7UUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDO0lBQ0YsQ0FBQztDQUNELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckNIO0lBQUE7UUFDQyxZQUFPLEdBQXNCLEVBQUUsQ0FBQztJQXNCakMsQ0FBQztJQXBCQSxVQUFVO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFnQjtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQXVCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBdUI7UUFDL0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixDQUFDO1FBQ0YsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0NBQ0Q7QUF2QkQsOEJBdUJDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkQsNkdBQW9EO0FBRXBELDJGQUF3QztBQUN4Qyw0RUFBOEI7QUFHOUI7SUFLQyxZQUFZLE9BQWdCO1FBRjVCLFNBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBR3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU87UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQXVCO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV4QyxJQUFJLFVBQVUsR0FBVyxFQUFFLENBQUM7UUFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbEMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbEMsSUFBSSxFQUFFLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFFLENBQUM7UUFFMUQsSUFBSSxNQUFNLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFFLENBQUM7UUFDaEUsTUFBTSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2QixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFvQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUV0QyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFFRCxJQUFJLFlBQVksR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO1FBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFvQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUV0QyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsU0FBUyxHQUFHLDRIQUE0SCxDQUFDO1FBQ2hKLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELEdBQUc7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNEO0FBekRELDBDQXlEQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RELHlFQUFtQztBQUduQyxxQkFBNkIsU0FBUSxlQUFNO0lBQTNDOztRQUNDLFNBQUksR0FBVyxFQUFFLENBQUM7SUFFbkIsQ0FBQztDQUFBO0FBSEQsMENBR0M7Ozs7Ozs7Ozs7Ozs7OztBQ1BEO0lBSUMsWUFBWSxJQUFZLEVBQUUsSUFBcUI7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDUCxNQUFNLENBQUMsR0FBSSxJQUFJLENBQUMsSUFBSyxPQUFRLElBQUksQ0FBQyxJQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBQ0Q7QUFaRCxvQkFZQzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsNEVBQThCO0FBQzlCLGtGQUFrRDtBQUVsRDtJQUdDO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztJQUMxQixDQUFDO0lBRU8sU0FBUztRQUNoQixJQUFJLE1BQU0sR0FBVyxFQUFFLENBQUM7UUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksb0JBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksb0JBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNGLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2YsQ0FBQztDQUNEO0FBeEJELG9CQXdCQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JELElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNaLDZCQUFpQjtJQUNqQiw2QkFBaUI7SUFDakIsaUNBQXFCO0lBQ3JCLDJCQUFlO0FBQ2hCLENBQUMsRUFMSSxRQUFRLEtBQVIsUUFBUSxRQUtaO0FBa0JRLDRCQUFRO0FBaEJqQixJQUFLLFFBY0o7QUFkRCxXQUFLLFFBQVE7SUFDWix1QkFBVztJQUNYLHFDQUFPO0lBQ1AseUNBQVM7SUFDVCx1Q0FBUTtJQUNSLHVDQUFRO0lBQ1IscUNBQU87SUFDUCx5Q0FBUztJQUNULHlDQUFTO0lBQ1QsdUNBQVE7SUFDUixzQ0FBUTtJQUNSLHlCQUFhO0lBQ2IsMkJBQWU7SUFDZix5QkFBYTtBQUNkLENBQUMsRUFkSSxRQUFRLEtBQVIsUUFBUSxRQWNaO0FBRWtCLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7QUN2QjNCLDJFQUFvQztBQUNwQyx1SEFBOEQ7QUFJOUQ7SUFHQyxZQUFZLElBQVksRUFBRSxPQUFPLEdBQUcsR0FBRztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxjQUFjLENBQUMsR0FBVztRQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0YsQ0FBQztDQUNEO0FBZEQsd0JBY0M7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtJQUdJLFlBQVksT0FBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFsQkQsd0JBa0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7SUFLSSxZQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsT0FBZTtRQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxFQUFFLENBQUMsRUFBVTtRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLE9BQWU7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBbENELDBCQWtDQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgR2FtZUVuZ2luZUludGVyZmFjZSB9IGZyb20gJy4vZ2FtZUVuZ2luZUludGVyZmFjZSc7XG5pbXBvcnQgeyBDYXNpbm8gfSBmcm9tICcuL2Nhc2lubyc7XG5cbnZhciBjYXNpbm86IENhc2lubyA9IG5ldyBDYXNpbm8oXCJ2aW5jZVwiLCA1MDApO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUoKTogdm9pZCB7XG5cdGxvZyhcImdhbWUgc3RhcnRcIik7XG5cdGRpc3BsYXkoXCJnYW1lIHN0YXJ0XCIpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXHRsZXQgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuXG5cdGNhc2luby5yZWNlaXZlQ29tbWFuZChpbnB1dEVsZW1lbnQudmFsdWUpO1xuXHRcblx0aW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheShjb250ZW50OiBzdHJpbmcpIHtcblx0bGV0IGRpc3BsYXlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xuXHRkaXNwbGF5RWxlbWVudCEuaW5uZXJIVE1MID0gY29udGVudDtcbn1cblxuZnVuY3Rpb24gbG9nKG1zZzogYW55KSB7XG5cdGNvbnNvbGUubG9nKG1zZyk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB7XG5cdGhhbmRsZUV2ZW50OiAoZXZlbnQpID0+IHtcblx0XHRzdGFydEdhbWUoKTtcblx0fVxufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyX2lucHV0JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywge1xuXHRoYW5kbGVFdmVudDogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG5cdFx0aWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG5cdFx0XHRoYW5kbGVJbnB1dChldmVudCk7XG5cdFx0fVxuXHR9XG59KTsiLCJpbXBvcnQgeyBHYW1lSW50ZXJmYWNlIH0gZnJvbSAnLi4vZ2FtZUludGVyZmFjZSc7XG5pbXBvcnQgeyBCbGFja2phY2tQbGF5ZXIgfSBmcm9tICcuL2JsYWNramFja1BsYXllcic7XG5cbmV4cG9ydCBjbGFzcyBCbGFja2phY2sgaW1wbGVtZW50cyBHYW1lSW50ZXJmYWNlPEJsYWNramFja1BsYXllcj4ge1xuXHRwbGF5ZXJzOiBCbGFja2phY2tQbGF5ZXJbXSA9IFtdO1xuXG5cdGdldFBsYXllcnMoKTogQmxhY2tqYWNrUGxheWVyW10ge1xuXHRcdHJldHVybiB0aGlzLnBsYXllcnM7XG5cdH1cblxuXHRnZXRQbGF5ZXIocGxheWVySWQ6IG51bWJlcik6IEJsYWNramFja1BsYXllciB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyc1twbGF5ZXJJZF07XG5cdH1cblxuXHRhZGRQbGF5ZXIocGxheWVyOiBCbGFja2phY2tQbGF5ZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBsYXllcnNbcGxheWVyLmdldElkKCldID0gcGxheWVyO1xuXHR9XG5cblx0Y29udGFpbnMocGxheWVyOiBCbGFja2phY2tQbGF5ZXIpOiBCb29sZWFuIHtcblx0XHRmb3IgKGxldCBwIG9mIHRoaXMucGxheWVycykge1xuXHRcdFx0aWYgKHAuZ2V0TmFtZSgpID09IHBsYXllci5nZXROYW1lKCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufSIsImltcG9ydCB7IEdhbWVFbmdpbmVJbnRlcmZhY2UgfSBmcm9tICcuLi9nYW1lRW5naW5lSW50ZXJmYWNlJztcbmltcG9ydCB7IEJsYWNramFja1BsYXllciB9IGZyb20gJy4vYmxhY2tqYWNrUGxheWVyJztcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuLi9wcm9maWxlJztcbmltcG9ydCB7IEJsYWNramFjayB9IGZyb20gJy4vYmxhY2tqYWNrJztcbmltcG9ydCB7IERlY2sgfSBmcm9tICcuL2RlY2snO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBjbGFzcyBCbGFja2phY2tFbmdpbmUgaW1wbGVtZW50cyBHYW1lRW5naW5lSW50ZXJmYWNlPEJsYWNramFja1BsYXllciwgQmxhY2tqYWNrPiB7XG5cdHBsYXllcjogQmxhY2tqYWNrUGxheWVyO1xuXHRnYW1lOiBCbGFja2phY2s7XG5cdGRlY2s6IERlY2sgPSBuZXcgRGVjaygpO1xuXG5cdGNvbnN0cnVjdG9yKHByb2ZpbGU6IFByb2ZpbGUpIHtcblx0XHR0aGlzLnBsYXllciA9IG5ldyBCbGFja2phY2tQbGF5ZXIocHJvZmlsZSk7XG5cdFx0dGhpcy5nYW1lID0gbmV3IEJsYWNramFjaygpO1xuXHR9XG5cblx0Z2V0R2FtZSgpOiBCbGFja2phY2sge1xuXHRcdHJldHVybiB0aGlzLmdhbWU7XG5cdH1cblxuXHRldmFsdWF0ZVR1cm4ocGxheWVyOiBCbGFja2phY2tQbGF5ZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBsYXllci5oYW5kLnB1c2godGhpcy5kZWNrLmRyYXcoKSk7XG5cdFx0dGhpcy5wbGF5ZXIuaGFuZC5wdXNoKHRoaXMuZGVjay5kcmF3KCkpO1xuXG5cdFx0bGV0IGRlYWxlckhhbmQ6IENhcmRbXSA9IFtdO1xuXHRcdGRlYWxlckhhbmQucHVzaCh0aGlzLmRlY2suZHJhdygpKTtcblx0XHRkZWFsZXJIYW5kLnB1c2godGhpcy5kZWNrLmRyYXcoKSk7XG5cblx0XHRsZXQgVUk6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKSE7XG5cblx0XHRsZXQgaGVhZGVyOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSE7XG5cdFx0aGVhZGVyLmlubmVySFRNTCA9IFwiRGVhbGVyIEhhbmQ6XCI7XG5cdFx0VUkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXHRcdGZvciAobGV0IGNhcmQgb2YgZGVhbGVySGFuZCkge1xuXHRcdFx0bGV0IGU6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdGUuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXHRcdFx0ZS5pbm5lckhUTUwgPSBjYXJkLnRvU3RyaW5nKCkgKyAnIHwgJztcblxuXHRcdFx0VUkuYXBwZW5kQ2hpbGQoZSk7XG5cdFx0fVxuXG5cdFx0bGV0IHBsYXllckhlYWRlcjogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykhO1xuXHRcdHBsYXllckhlYWRlci5pbm5lckhUTUwgPSBcIjxiciAvPlBsYXllciBIYW5kOlwiO1xuXHRcdFVJLmFwcGVuZENoaWxkKHBsYXllckhlYWRlcik7XG5cblx0XHRmb3IgKGxldCBjYXJkIG9mIHRoaXMucGxheWVyLmhhbmQpIHtcblx0XHRcdGxldCBlOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRlLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblx0XHRcdGUuaW5uZXJIVE1MID0gY2FyZC50b1N0cmluZygpICsgJyB8ICc7XG5cblx0XHRcdFVJLmFwcGVuZENoaWxkKGUpO1xuXHRcdH1cblxuXHRcdGxldCBvdXRwdXQ6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdG91dHB1dC5pbm5lckhUTUwgPSBcIjxiciAvPllvdSB3aW4uLi5vciBsb3NlLiBJREsgdGhlcmUgaXNuJ3QgYW55IHJlYWwgZ2FtZSBsb2dpYy4gSSdtIGRlbGV0aW5nIHRoaXMgcmVwbyBhbmQgc3RhcnRpbmcgZnJvbSBzY3JhdGNoIHdpdGggUmVhY3QuXCI7XG5cdFx0VUkuYXBwZW5kQ2hpbGQob3V0cHV0KTtcblx0fVxuXG5cdHJ1bigpOiB2b2lkIHtcblx0XHR0aGlzLmdhbWUuYWRkUGxheWVyKHRoaXMucGxheWVyKTtcblx0XHR0aGlzLmV2YWx1YXRlVHVybih0aGlzLnBsYXllcik7XG5cdH1cbn0iLCJpbXBvcnQgeyBHYW1lVHlwZVBsYXllciB9IGZyb20gJy4uL2dhbWVUeXBlUGxheWVyJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9jYXJkJztcblxuZXhwb3J0IGNsYXNzIEJsYWNramFja1BsYXllciBleHRlbmRzIFBsYXllciBpbXBsZW1lbnRzIEdhbWVUeXBlUGxheWVyIHtcblx0aGFuZDogQ2FyZFtdID0gW107XHRcblx0YmV0OiBudW1iZXI7XG59IiwiZXhwb3J0IGNsYXNzIENhcmQge1xuXHRzdWl0OiBzdHJpbmc7XG5cdHJhbms6IHN0cmluZyB8IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihzdWl0OiBzdHJpbmcsIHJhbms6IHN0cmluZyB8IG51bWJlcikge1xuXHRcdHRoaXMuc3VpdCA9IHN1aXQ7XG5cdFx0dGhpcy5yYW5rID0gcmFuaztcblx0fVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAkeyB0aGlzLnJhbmsgfSBvZiAkeyB0aGlzLnN1aXQgfWA7XG5cdH1cbn0iLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7IENhcmRTdWl0LCBDYXJkUmFuayB9IGZyb20gJy4uL2NhcmRFbnVtcyc7XG5cbmV4cG9ydCBjbGFzcyBEZWNrIHtcblx0Y2FyZHM6IENhcmRbXTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNhcmRzID0gdGhpcy5idWlsZERlY2soKTtcblx0fVxuXG5cdGRyYXcoKTogQ2FyZCB7XG5cdFx0bGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTIpO1xuXHRcdGxldCBkcmF3OiBDYXJkID0gdGhpcy5jYXJkc1tyYW5kb21JbmRleF07XG5cdFx0dGhpcy5jYXJkc1tyYW5kb21JbmRleF0gPSB0aGlzLmNhcmRzW3RoaXMuY2FyZHMubGVuZ3RoIC0gMV07XG5cdFx0dGhpcy5jYXJkc1t0aGlzLmNhcmRzLmxlbmd0aC0xXSA9IGRyYXc7XG5cdFx0cmV0dXJuIHRoaXMuY2FyZHMucG9wKCkhO1xuXHR9XG5cblx0cHJpdmF0ZSBidWlsZERlY2soKTogQ2FyZFtdIHtcblx0XHRsZXQgcmVzdWx0OiBDYXJkW10gPSBbXTtcblx0XHRmb3IgKGxldCBzdWl0IGluIENhcmRTdWl0KSB7XG5cdFx0XHRmb3IgKGxldCByYW5rIGluIENhcmRSYW5rKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5ldyBDYXJkKHN1aXQsIHJhbmspKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufSIsImVudW0gQ2FyZFN1aXQge1xuXHRIRUFSVFMgPSBcIkhlYXJ0c1wiLFxuXHRTUEFERVMgPSBcIlNwYWRlc1wiLFxuXHRESUFNT05EUyA9IFwiRGlhbW9uZHNcIixcblx0Q0xVQlMgPSBcIkNsdWJzXCIsXG59XG5cbmVudW0gQ2FyZFJhbmsge1xuXHRBQ0UgPSBcIkFjZVwiLFxuXHRUV08gPSAyLFxuXHRUSFJFRSA9IDMsXG5cdEZPVVIgPSA0LFxuXHRGSVZFID0gNSxcblx0U0lYID0gNixcblx0U0VWRU4gPSA3LFxuXHRFSUdIVCA9IDgsXG5cdE5JTkUgPSA5LFxuXHRURU4gPSAxMCxcblx0SkFDSyA9IFwiSmFja1wiLFxuXHRRVUVFTiA9IFwiUXVlZW5cIixcblx0S0lORyA9IFwiS2luZ1wiLFxufVxuXG5leHBvcnQgeyBDYXJkU3VpdCwgQ2FyZFJhbmsgfTsiLCJpbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlJztcbmltcG9ydCB7IEJsYWNramFja0VuZ2luZSB9IGZyb20gJy4vYmxhY2tqYWNrL2JsYWNramFja0VuZ2luZSc7XG5pbXBvcnQgeyBHYW1lRW5naW5lSW50ZXJmYWNlIH0gZnJvbSAnLi9nYW1lRW5naW5lSW50ZXJmYWNlJztcbmltcG9ydCB7IEdhbWVJbnRlcmZhY2UgfSBmcm9tICcuL2dhbWVJbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgQ2FzaW5vIHtcblx0cHJvZmlsZTogUHJvZmlsZTtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGJhbGFuY2UgPSA1MDApIHtcblx0XHR0aGlzLnByb2ZpbGUgPSBuZXcgUHJvZmlsZSgxLCBuYW1lLCBiYWxhbmNlKTtcblx0fVxuXG5cdHJlY2VpdmVDb21tYW5kKGNtZDogc3RyaW5nKSB7XG5cdFx0aWYgKGNtZCA9PSBcImJsYWNramFja1wiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIEJsYWNramFjayFcIik7XG5cdFx0XHRsZXQgZW5naW5lID0gbmV3IEJsYWNramFja0VuZ2luZSh0aGlzLnByb2ZpbGUpO1xuXHRcdFx0ZW5naW5lLnJ1bigpO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL3Byb2ZpbGUnO1xuaW1wb3J0IHsgUGxheWVySW50ZXJmYWNlIH0gZnJvbSAnLi9wbGF5ZXJJbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGltcGxlbWVudHMgUGxheWVySW50ZXJmYWNlIHtcbiAgICBwcml2YXRlIHByb2ZpbGU6IFByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9maWxlOiBQcm9maWxlKSB7XG4gICAgICAgIHRoaXMucHJvZmlsZSA9IHByb2ZpbGU7XG4gICAgfVxuXG4gICAgZ2V0UHJvZmlsZSgpOiBQcm9maWxlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGUubmFtZTtcbiAgICB9XG5cbiAgICBnZXRJZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlLmlkO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9maWxlIHtcbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9iYWxhbmNlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGJhbGFuY2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fYmFsYW5jZSA9IGJhbGFuY2U7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXQgaWQoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBnZXQgYmFsYW5jZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmFsYW5jZTtcbiAgICB9XG5cbiAgICBzZXQgYmFsYW5jZShiYWxhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYmFsYW5jZSA9IGJhbGFuY2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==