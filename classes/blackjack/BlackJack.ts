///<reference path="Dealer.ts"/>
///<reference path="../CardGame/CardGame.ts"/>
///<reference path="BjPlayer.ts"/>

import {BjPlayer} from "./BjPlayer";
import {CasinoPlayer} from "../CasinoPlayer";
import {Dealer} from "./Dealer";
import {Deck} from "../CardUtils/Deck";
import {CardGame} from "../CardGame/CardGame";

export class BlackJack extends CardGame {

    player: BjPlayer;
    dealer: Dealer;
    betAmount: number;

    getPlayer(): BjPlayer {
        return this.player;
    }

    getDealer(): Dealer {
        return this.dealer;
    }

    constructor (player, dealer) {
        super();
        this.player = new BjPlayer(player);
        this.dealer = new Dealer (dealer);
    }

    start() {
        console.log("GAME STARTED!")
        this.deal(this.player, this.dealer, 2);
    }

    deal(player: BjPlayer, dealer: Dealer, number: number) {
        this.player = new BjPlayer(player);
        this.dealer = new Dealer(dealer);

    }

    hit() {
        this.player.addCard(this.deck.pop());
        this.checkForOver21();
    }

    stand() {
        this.player.calculateScore();
        this.dealerPlay();
        this.checkForWin();
    }

    checkBalanceAmount() {
        if (this.player.balance < 1) {
            //exit game
        }
    }

    checkForOver21() {
        this.player.calculateScore();
        if (this.player.getScore() > 21) {
            this.checkForWin();
            this.dealer.calculateScore();
        }
    }

    checkForWin() {
        if (this.didPlayerWin()) {
            //PLAYER WON
            this.player.balance += (this.betAmount) * 1.5;
        } else {
            //PLAYER LOST
            this.player.balance -= this.betAmount;
        }
    }

    didPlayerWin(): boolean {
        let playerScore = this.player.getScore();
        let dealerScore = this.dealer.getScore();
        if ((playerScore == 21 && dealerScore != 21) ||
            (playerScore < 21 && dealerScore < playerScore) ||
            (playerScore < 21 && dealerScore > 21)) {
            return true;
        } else {
            return false;
        }
    }

    dealerPlay() {
        this.dealer.calculateScore();
        while (this.dealer.getScore() < 17) {
            this.dealer.addCard(this.deck.pop());
            this.dealer.calculateScore();
        }
        this.dealer.clearHand();
        //display dealer hand
    }

    playAgain() {
        new Deck();
        this.start();
    }

    placeBet() {

        }

}