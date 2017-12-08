/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardGame.ts" />
/// <reference path="CardPlayer.ts" />
/// <reference path="Deck.ts" />

class BlackJack extends CardGame {
    private dealer: BlackJackPlayer;
    private player: BlackJackPlayer;
    deck: Deck;
    private pot: number;

    constructor(player: Player) {
        super();
        this.dealer = new BlackJackPlayer(new Player("dealer", 1000000));
        this.player = new BlackJackPlayer(player);
        this.deck = new Deck();
        this.pot = 0;
        this.initialize()
    }

    private initialize(): void {
        this.deck.shuffle()
    }

    public takeBet(bet: number): void {
        this.pot += bet;
    }

    public dealCards(player: BlackJackPlayer): void {
        for (let i = 0; i < 2; i++) {
            player.addCardToHand(this.deck.getTopCard());
        }
    }

    hitPlayer(player: BlackJackPlayer) {
        player.addCardToHand(this.deck.getTopCard());
    }

    getCardPointValue(card: Card): number {
        if (card.getValue() == "K" ||
            card.getValue() == "Q" ||
            card.getValue() == "J") {
            return 10;
        }
        else if (card.getValue() == "A") {
            if (this.player.Score + 11 > 21) {
                return 1;
            }
            else {
                return 11;
            }
        }
        else {
            return parseInt(card.getValue());
        }
    }

    public isBust(player: BlackJackPlayer): boolean{
        if(this.calculatePlayerScore(player) > 21) {
            return true;
        }
        else {
            return false;
        }
    }

    calculatePlayerScore(player: CardPlayer): number {
        let score = 0;
        for (let i = 0; i < player.getHand().length; i++) {
            score += this.getCardPointValue(player.getHand()[i]);
        }
        return score;
    }

    isPlayerWinner(): boolean {
        if(!this.isBust(this.player) && this.player.Score > this.dealer.Score){
            return true;
        }
        else{
            return false;
        }
    }

}


// var blackJack = new BlackJack();
// var blackJackPlayer = new CardPlayer();
// blackJack.addCardPlayer(blackJackPlayer);
// blackJack.deal(2);
// var score = blackJack.calculatePlayerScore(blackJackPlayer);
// console.log(score);

