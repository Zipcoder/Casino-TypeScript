///<reference path="CardGame.ts"/>
///<reference path="MoneyContainer.ts"/>
///<reference path="Hand.ts"/>
///<reference path="PlayingCard.ts"/>
///<reference path="PlayingDeck.ts"/>


// import {PlayingDeck} from "./PlayingDeck";
// import {MoneyContainer} from "./MoneyContainer";
// import {Hand} from "./Hand";
// import {PlayingCard} from "./PlayingCard";
// import {CardGame} from "./CardGame";

class BlackJack extends CardGame implements Gamble {

    deck: PlayingDeck;
    private pot: MoneyContainer;
    private playerScore: number;
    private dealerScore: number;
    private player: Hand;
    private dealer: Hand;

    public constructor() {
        super();// It made me add this because it requires a super constructor for derived classes ¯\_(ツ)_/¯
        this.pot = new MoneyContainer();
        this.deck = new PlayingDeck();
        this.deck.shuffle();
        this.playerScore = 0;
        this.dealerScore = 0;
        this.player = new Hand();
        this.dealer = new Hand();

        for (let i: number = 0; i < 2; i++) {
            this.player.addCard(this.deck.getAndRemoveCard());
            this.dealer.addCard(this.deck.getAndRemoveCard());
        }

    }

    public takeBet(bet: number) {
        this.pot.addMoney(bet);
    }


    public settleBet(winnings: number) {
        return (this.pot.takeOutMoney(winnings));
    }

    public emptyPot() {
        return this.pot.takeAllMoney();
    }

    public showPot() {
        return this.pot.getMoney();
    }


    public getPlayerScore() {
        this.playerScore = 0;
        let handArray: PlayingCard[] = this.player.getAllCards();


        for (let i = 0; i < handArray.length; i++) {
            this.playerScore += this.cardScore(handArray[i], this.playerScore);
        }

        return this.playerScore;
    }


    private getDealerScore() {
        this.dealerScore = 0;
        let handArray: PlayingCard[] = this.dealer.getAllCards();

        for (let i = 0; i < handArray.length; i++) {
            this.dealerScore += this.cardScore(handArray[i], this.dealerScore);
        }

        return this.dealerScore;
    }

    public getDealerScoreShowing() {
        return (this.cardScore(this.dealer.getAllCards()[0], 0));
    }

    private cardScore(c: PlayingCard, score: number) {

        switch (c.getValue().toString()) {
            case "2":
                return 2;
            case "3":
                return 3;
            case "4":
                return 4;
            case "5":
                return 5;
            case "6":
                return 6;
            case "7":
                return 7;
            case "8":
                return 8;
            case "9":
                return 9;
            case "10":
            case "J":
            case "Q":
            case "K":
                return 10;
            default: {
                if (score + 11 > 21) {
                    return 1;
                }
            }
        }
        return 11;
    }

    public playerHit() {
        this.player.addCard(this.deck.getAndRemoveCard());
        this.playerScore = this.getPlayerScore();
    }

    public dealerHit() {
        this.dealer.addCard(this.deck.getAndRemoveCard());
        this.dealerScore = this.getDealerScore();
    }

    public dealerHitUntilFinished() {
        while (this.getDealerScore() <= 17 && this.getPlayerScore() <= 21) {
            this.dealer.addCard(this.deck.getAndRemoveCard());
        }
    }

    public playerWins() {
        return (((this.getPlayerScore() > this.getDealerScore()) && (this.getPlayerScore() <= 21)) ||
            (this.getDealerScore() > 21 && this.getPlayerScore() <= 21));
    }

    public finalTableDisplay() {
        let returnMe: string = "";
        let dealerHand: PlayingCard[] = this.dealer.getAllCards();
        let playerHand: PlayingCard[] = this.player.getAllCards();

        returnMe += "---\nOpponent\n---\n" + this.getDealerScore() + " Showing\n---\n";
        for (let i = 0; i < dealerHand.length; i++) {
            returnMe += dealerHand[i].toString() + "\n";
        }


        returnMe += "\nPot: " + this.pot.getMoney() + "\n\n";

        returnMe += "---\nYou\n---\n" + this.getPlayerScore() + "\n---\n";
        for (let i = 0; i < playerHand.length; i++) {
            returnMe += playerHand[i].toString() + "\n";
        }

        returnMe += "\n\n";

        return returnMe;
    }


    public toString() {
        let returnMe: string = "";
        let playerHand: PlayingCard[] = this.player.getAllCards();

        returnMe += "---\nOpponent\n---\n" + this.getDealerScoreShowing() + " Showing\n---\n";
        returnMe += this.dealer.getAllCards()[0].toString() + "\n";
        returnMe += "[]\n";


        returnMe += "\nPot: " + this.pot.getMoney() + "\n\n";

        returnMe += "---\nYou\n---\n" + this.getPlayerScore() + "\n---\n";
        for (let i = 0; i < playerHand.length; i++)
        {
            returnMe += playerHand[i].toString() + "\n";
        }

        returnMe += "\n\n";

        return returnMe;
    }

    public play(userInput: string) {
        return ("Y" === (userInput.toUpperCase()));
    }

}