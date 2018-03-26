import {Cards} from "./Card";
import {CardFactory} from "./CardFactory";
import {CardShuffler} from "./CardShuffler";
import Deck from "./Deck";
import BlackjackPlayer from "./BlackjackPlayer";
import Game from "./Game";
import Dealer from "./Dealer";

class Blackjack implements Game {
    player: BlackjackPlayer;
    deck: Deck;
    dealer: Dealer;
    isPlaying: Boolean;
    betAmount: number = 0;

    constructor(entryPlayer: BlackjackPlayer) {
        this.deck = CardFactory.createStandardDeck();
        this.dealer = new Dealer();
        this.player = entryPlayer;
    }

    startGame() {
    }

    outOfMoneyCheck(): Boolean {
        if(this.player.getBalance() < 10) {
            return true;
        }
        return false;
    }

    preGameReset() {
        this.player.setHand([]);
        this.dealer.setHand([]);
        this.player.setCanHit(true);
        this.setBetAmount(0);
        
    }

    getBetAmount(): number {
        return this.betAmount;
    }

    setBetAmount(amount: number) {
        this.betAmount = amount;
    }

    runTurn() {
        for(var i = 0; i < this.player.getHand.length; i++) {
            //Tell them what they have
        }
        this.setBetAmount(10);
    }

    deal() {
        var temp: Cards = this.deck.privateCards[0];
        this.player.addToHand(temp);
        this.deck.privateCards.shift();
    }

    dealToDealer() {
        var temp: Cards = this.deck.privateCards[0];
        this.dealer.addToHand(temp);
        this.deck.privateCards.shift();
    }

    initialHand() {
        this.deal;
        this.deal;
        this.dealToDealer;
        this.dealToDealer;
    }

    bustCheck(player: BlackjackPlayer): Boolean {
        var handValue: number = player.getHandValue();
        if(handValue > 21) {
            return true;
        }
        return false;
    }

    dealerHitCheck(): Boolean {
        if(this.dealer.getHandValue() > 16) {
            return false;
        }
        return true;
    }

    dealerTurn() {
        while(this.dealerHitCheck()) {
            this.dealToDealer();
        }
        //tell them what the dealer has
    }

    winCheck(): Boolean {
        var playerHand: number = this.player.getHandValue();
        if(playerHand == 21 || playerHand > this.dealer.getHandValue()) {
            return true;
        }
        return false;
    }

    playerHitOption(): Boolean {
        var hitOrNot: Boolean = this.runPlayerHit();
        if(hitOrNot != null) {
            return hitOrNot;
        }
        return hitOrNot;
    }

    runPlayerHit(): Boolean {
        while(this.player.canIHit()) {
            if(this.player.getHandValue() > 21) {
                //tell them they bust
                break;
            }
            var hit: Boolean; 

            if(hit) {
                 return true
            } 
            this.player.setCanHit(false);
            return false
        }
    }

    setPlaying(isPlaying: Boolean) {
        this.isPlaying = isPlaying;
    }




    endGame() {

    }
}