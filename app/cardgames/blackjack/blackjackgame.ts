import { CardGame } from "../cardgame";
import { BlackJackPlayer } from "./blackjackplayer";
import { Profile } from "../../profile";
import { Deck } from "../../cardgames/utilities/deck";
import { House } from "../../house";
import { CasinoGame } from "../../casinogame";

export class BlackJackGame extends CardGame implements CasinoGame<BlackJackPlayer> {

    _players: BlackJackPlayer[];
    _player: BlackJackPlayer;
    _dealer: BlackJackPlayer;

    constructor(aProfile: Profile) {
        super(aProfile);
        this._player = new BlackJackPlayer(aProfile);
        this._dealer = new BlackJackPlayer(House._houseProfile);
        this._players = new Array();
        this._players.push(this._player);
        this._players.push(this._dealer);
    }

    playOneRound() {
        this.placeBets();
        this.deal();
        this.playerTurn(this._player);
        if (this._player.isBusted === false) {
            this.dealerTurn(this._dealer);
        }
        if (this._player.isBusted === false && this._dealer.isBusted === false) {
            this.decideWinner();
        }
    }

    deal() {
        for (var i = 0; i < this._players.length; i++) {
            let card1 = this.cardDeck.deal();
            this._players[i]._hand.push(card1);
            let card2 = this.cardDeck.deal();
            this._players[i]._hand.push(card2);
        }
        // need to display players 2 cards and 1/2 of dealers
    }

    playerTurn(currentPlayer: BlackJackPlayer) {
        // dispaly the players score
        currentPlayer.scoreHand();
    
        while (currentPlayer.hasStood === false && currentPlayer.isBusted === false) {
            // ask player hit or stand
            // if hit, calculate score
            currentPlayer.scoreHand();
            // if stand, mark as stood
            currentPlayer.hasStood = true;
        }

        if (this._player.isBusted === true) {
            // display that the player busted and lost their bet
            this._player.lose();
        }
    }

    dealerTurn(theDealer: BlackJackPlayer) {
        this.revealDealerCard();

        // display the dealer's score
        theDealer.scoreHand();

        while (theDealer.hasStood === false && theDealer.isBusted === false) {
            if (theDealer.scoreHand() < 17) {
                this.hit(theDealer);
            } else if (theDealer.scoreHand() > 21) {
                // display that the dealer busted
                this._dealer.isBusted = true;
                // display that the player wins
                this._player.win();
            } else {
                theDealer.hasStood = true;
            }
        }
    }

    hit(aBlackJackPlayer: BlackJackPlayer) {
        let hitCard = this.cardDeck.deal();
        aBlackJackPlayer._hand.push(hitCard);
        // need to display card
    }

    placeBets() {
        // ask the player how much to bet
        let playersBet = 0;
        this._player.bet(playersBet);
    }

    calculateScore(aBlackJackPlayer: BlackJackPlayer) {
        aBlackJackPlayer.hand
    }

    revealDealerCard() {
        // display 2nd card from dealer's hand
        this._dealer._hand[1];
    }

    decideWinner() {

        if (this._player.scoreHand() === this._dealer.scoreHand()) {
            // display that it is a push
            this._player.push();
        } else if (this._player.scoreHand() > this._dealer.scoreHand()) {
            // display that the player wins
            this._player.win();
        } else {
            // display that the dealer wins
            this._player.lose();
        }
    }

    get player() {
        return this._player;
    }

    set player(newPlayer: BlackJackPlayer) {
        this._player = newPlayer;
    }

    get dealer() {
        return this._dealer;
    }

    get cardDeck() {
        return this.cardDeck;
    }

    set cardDeck(newDeck: Deck) {
        this.cardDeck = newDeck;
    }

}