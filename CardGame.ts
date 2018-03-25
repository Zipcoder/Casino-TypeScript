import { Player } from "./player";
import { Deck } from "./deck";
import { Dealer } from "./dealer";

export class CardGame{
    players: Player[];
    currentPlayer: number;
    deck: Deck;

    constructor(){
        this.players = [];
        this.currentPlayer = 1;
        this.players.push(new Dealer("Dealer"));
        this.deck = new Deck();
    }
    draw(){
        var card = this.deck.draw();
        this.players[this.currentPlayer].hand.push(card);
    }
    incrementTurn() {
		this.currentPlayer++;
		if (this.currentPlayer === this.players.length) {
			this.currentPlayer = 0;
		}
	}
    dealCards(numOfCards?: number){
        for (var i = 0; i < (numOfCards||2); i++){
            for (var player = 0; player < this.players.length; player++){
                this.draw();
                this.incrementTurn();
            }
        }
    }
    addNewPlayer(name?: string){
        this.players.push(new Player((name|| `Player ${this.players.length+1}`)));
    }
    showHands(){
        this.players.forEach(function(player) {
            console.log(`${player.name}'s hand:`);
            player.hand.forEach(function(card) {
                console.log(card.cardToString());
            });
        });
    }
    newHand(){
        for (var player = 0; player < this.players.length; player++){
            this.players[player].hand = [];
            this.players[player].handScore = 0;
        }
    }
}