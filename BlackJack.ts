import { Player } from "./player";
import { Deck } from "./deck";
import { CardGame } from "./CardGame";
import { Dealer } from "./dealer";
import { Card } from "./card";
declare function require(name:string);
var inquirer = require('inquirer');

export class BlackJack extends CardGame{
    userPrompts: Object[];

    constructor(){
        super();
        this.userPrompts = [
            {
            type: "list",
            name: "turn",
            message: "Hit or Stay?",
            userChoice: ["Hit", "Stay"]
            }
        ];
    }
    turnPrompt() {
		var turn = this;
        inquirer.prompt( this.userPrompts, 
            function(answers) {
			switch(answers.turn){
				case 'Hit':
					turn.hit();
					break;
				case 'Stay':
					turn.stay();
					break;
			}
		});	
	}
	
	roundPrompt() {
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
		], function(answers){
			switch(answers.keepPlaying){
				case 'Yes':
					game.newHand();
					game.start();
					break;
				case 'No':
					console.log('Peace out');
					break;
			}
		});
	}
	
	start() {
		this.currentPlayer = 1;
		this.dealCards(2);
		this.gameStartState();
		this.evaluateState();
	}
	
	quit() {
		console.log('Goodbye!');
	}
	
	hit() {
		this.draw();
		this.printLastDraw();
		console.log(`Your hand value is now: ${this.players[this.currentPlayer].handScore}`);
		this.evaluateState();
	}
	
	stay() {
		this.incrementTurn();
		this.evaluateState();
	}
	
	// fold() {
	// 	console.log("You folded. Better luck next time!");
	// 	this.players[this.currentPlayer].hand = [];
	// 	this.players[this.currentPlayer].handScore = this.calculateHandValue(this.players[this.currentPlayer].hand);
	// 	this.evaluateState();
	// }
	
	draw() {
		super.draw();
		this.players[this.currentPlayer].handScore = this.calculateHandScores(this.players[this.currentPlayer].hand);
	}
	
	
	evaluateState() {
		var winner = new Player("No One"), draw = false;
		// If turns have gone back around to the dealer
		if (this.currentPlayer === 0) {
			// The dealer takes his actions
			console.log(`The dealer has ${this.players[0].handToString()}`);
			while (this.players[0].handScore < 16) {
				this.draw();
				this.printLastDraw();
				if(this.players[0].handScore > 21) {
					console.log('The Dealer busted!');
					this.players[0].handScore = 0;
					break;
				}
			}
			// Then check for a winner
			this.players.forEach(function(player){
				if (player.handScore > winner.handScore) {
					winner = player;
					draw = false;
				}
				else if(player.handScore === winner.handScore) {
					draw = true;
				}
			});
			if(draw) {
				console.log(`This round was a draw.`);	
			}
			else {
				console.log(`${winner.name} won the round with ${winner.handScore}.`);
			}
			this.roundPrompt();
		} else {
			if (this.players[this.currentPlayer].handScore === 21) {
				console.log('Blackjack!');
				this.currentPlayer++;
				this.roundPrompt();
			} 
			else if (this.players[this.currentPlayer].handScore > 21) {
				console.log('Busted! You lose that one.');
				this.players[this.currentPlayer].handScore = 0;
				this.currentPlayer++;
				this.roundPrompt();
			} else {
				this.turnPrompt();
			}
		}
	}
	
	calculateHandScores(cards: Card[]): number {
		var value = 0;
		cards.forEach(function(card){
			value += card.value;
			if(card.rank == 'A' && value > 21) {
				value -= 10;
			}
		});
		return value;
	}
	

	gameStartState() {
		this.printDealerState();
		this.printPlayerState(1);
	}

	printDealerState() {
		console.log(`The dealer has ${this.players[0].hand[0].toString()} showing`);
	}
	
	printPlayerState(playerIndex:number) {
		console.log(`Your hand is: ${this.players[playerIndex].handToString()}`);
		console.log(`Your hand value is now: ${this.players[playerIndex].handScore}`);
	}
	
	printLastDraw() {
		console.log(`${this.players[this.currentPlayer].name} drew ${this.players[this.currentPlayer].hand[this.players[this.currentPlayer].hand.length-1]}`);
	}
}