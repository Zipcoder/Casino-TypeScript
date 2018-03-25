"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var CardGame_1 = require("./CardGame");
var inquirer = require('inquirer');
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack() {
        var _this = _super.call(this) || this;
        _this.userPrompts = [
            {
                type: "list",
                name: "turn",
                message: "Hit or Stay?",
                userChoice: ["Hit", "Stay"]
            }
        ];
        return _this;
    }
    BlackJack.prototype.turnPrompt = function () {
        var turn = this;
        inquirer.prompt(this.userPrompts, function (answers) {
            switch (answers.turn) {
                case 'Hit':
                    turn.hit();
                    break;
                case 'Stay':
                    turn.stay();
                    break;
            }
        });
    };
    BlackJack.prototype.roundPrompt = function () {
        var game = this;
        inquirer.prompt([
            {
                type: "list",
                name: "keepPlaying",
                message: "Do you want to keep playing?",
                userChoice: [
                    "Yes",
                    "No"
                ]
            }
        ], function (answers) {
            switch (answers.keepPlaying) {
                case 'Yes':
                    game.newHand();
                    game.start();
                    break;
                case 'No':
                    console.log('Peace out');
                    break;
            }
        });
    };
    BlackJack.prototype.start = function () {
        this.currentPlayer = 1;
        this.dealCards(2);
        this.gameStartState();
        this.evaluateState();
    };
    BlackJack.prototype.quit = function () {
        console.log('Goodbye!');
    };
    BlackJack.prototype.hit = function () {
        this.draw();
        this.printLastDraw();
        console.log("Your hand value is now: " + this.players[this.currentPlayer].handScore);
        this.evaluateState();
    };
    BlackJack.prototype.stay = function () {
        this.incrementTurn();
        this.evaluateState();
    };
    // fold() {
    // 	console.log("You folded. Better luck next time!");
    // 	this.players[this.currentPlayer].hand = [];
    // 	this.players[this.currentPlayer].handScore = this.calculateHandValue(this.players[this.currentPlayer].hand);
    // 	this.evaluateState();
    // }
    BlackJack.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.players[this.currentPlayer].handScore = this.calculateHandScores(this.players[this.currentPlayer].hand);
    };
    /**
     * This function should evaluate the current state.
     * Ex Flow:
     * 		If the current player has come back around to the dealer
     * 			Evaluate if the dealer should hit or stay
     * 				If the dealer's hand value is under 16 then hit
     * 				Else stay
     * 			Evalue who won based on the hand value
     * 		Else
     * 			If the current player's hand value is 21 then automatically stay and go to the next player
     * 			If the current player busted wipe out their hand value and go to the next player
     */
    BlackJack.prototype.evaluateState = function () {
        var winner = new player_1.Player("No One"), draw = false;
        // If turns have gone back around to the dealer
        if (this.currentPlayer === 0) {
            // The dealer takes his actions
            console.log("The dealer has " + this.players[0].handToString());
            while (this.players[0].handScore < 16) {
                this.draw();
                this.printLastDraw();
                if (this.players[0].handScore > 21) {
                    console.log('The Dealer busted!');
                    this.players[0].handScore = 0;
                    break;
                }
            }
            // Then check for a winner
            this.players.forEach(function (player) {
                if (player.handScore > winner.handScore) {
                    winner = player;
                    draw = false;
                }
                else if (player.handScore === winner.handScore) {
                    draw = true;
                }
            });
            if (draw) {
                console.log("This round was a draw.");
            }
            else {
                console.log(winner.name + " won the round with " + winner.handScore + ".");
            }
            this.roundPrompt();
        }
        else {
            if (this.players[this.currentPlayer].handScore === 21) {
                console.log('Blackjack!');
                this.currentPlayer++;
                this.roundPrompt();
            }
            else if (this.players[this.currentPlayer].handScore > 21) {
                console.log('Busted! You lose that one.');
                this.players[this.currentPlayer].handScore = 0;
                this.currentPlayer++;
                //TODO: needs to be modified to support more players
                this.roundPrompt();
            }
            else {
                this.turnPrompt();
            }
        }
    };
    BlackJack.prototype.calculateHandScores = function (cards) {
        var value = 0;
        cards.forEach(function (card) {
            value += card.value;
            if (card.rank == 'A' && value > 21) {
                value -= 10;
            }
        });
        return value;
    };
    /**
     * Prints out the state of the dealer and the player at the start of the round.
     */
    BlackJack.prototype.gameStartState = function () {
        //TODO: make dynamic to handle more players
        this.printDealerState();
        this.printPlayerState(1);
    };
    /**
     * Prints the state of the dealer, only revealing one card.
     */
    BlackJack.prototype.printDealerState = function () {
        console.log("The dealer has " + this.players[0].hand[0].toString() + " showing");
    };
    /**
     * Prints out the hand and the value of the hand for the given player.
     * @param playerIndex		The index of the player in the list of players
     */
    BlackJack.prototype.printPlayerState = function (playerIndex) {
        //TODO: make dynamic to handle more players (maybe change to say the players name instead of Your).
        console.log("Your hand is: " + this.players[playerIndex].handToString());
        console.log("Your hand value is now: " + this.players[playerIndex].handScore);
    };
    /**
     * Prints the last drawn card to the console.
     */
    BlackJack.prototype.printLastDraw = function () {
        console.log(this.players[this.currentPlayer].name + " drew " + this.players[this.currentPlayer].hand[this.players[this.currentPlayer].hand.length - 1]);
    };
    return BlackJack;
}(CardGame_1.CardGame));
exports.BlackJack = BlackJack;
