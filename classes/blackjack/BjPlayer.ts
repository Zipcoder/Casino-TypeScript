import {CasinoPlayer} from "../CasinoPlayer";
import {CardGamePlayer} from "../CardGame/CardGamePlayer";

export class BjPlayer extends CardGamePlayer {

    private player : CasinoPlayer;
    private score : number = 0;


    constructor(player: CasinoPlayer){
        super();
        this.player = player;
        this.score = 0;
    }

    displayScore(): any {

        return document.getElementById("playerHand").innerHTML = "Player's Score: "+ this.getScore()
    }

    getScore(): number {
        //start score with 0
        this.score = 0;
        //loop through the hand length and add each rank
        for (let i = 0; i < super.getHand().length; i++) {
            this.score += super.getHand()[i].getRank();
        }
        //if player has an ACE
        if(this.aceInHand() && this.score <= 11){
            this.score += 10;
        }
        return this.score;
    }

    aceInHand(): boolean {
        //if player has an ace it can be an 11 or 1
        for (let i = 0; i < super.getHand().length; i++) {
            if(super.getHand()[i].getFace() == "ace"){
                return true;
            }
        }
        return false;
    }

    calculateScore() {

    }
}