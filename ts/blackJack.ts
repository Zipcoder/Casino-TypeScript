///<reference path="blackJackPlayer.ts"/>
///<reference path="gamble.ts"/>
///<reference path="deck.ts"/>



class BlackJack implements Gamble{

    blackJackPlayer: BlackJackPlayer;
    dealer: BlackJackPlayer;
    blackJackDeck: Deck;
    pot: number = 0;

    constructor(){
        this.blackJackDeck = new Deck();
        this.dealer = new BlackJackPlayer();
        this.dealer.setName("Dealer");
        this.blackJackPlayer = new BlackJackPlayer();
    }

    setPot(moneyBet: number) {
        this.pot = this.blackJackPlayer.placeBet(moneyBet);
    }

    getPot(): number {
        return this.pot;
    }

    placeBet(moneyToBet: number) {
        if(this.hasMoneyToMakeBet(moneyToBet) == true){
            this.setPot(moneyToBet);
        }else {
            Display.print("You don't have enough money." +
                "<br/>You have " + this.blackJackPlayer.getMoney() + " dollars.")
        }
    }

    hasMoneyToMakeBet(moneyToBet: number): boolean {
        if(this.blackJackPlayer.getMoney() < moneyToBet){
            return false;
        }
        return true;
    }

    cashInWinnings(){
        this.blackJackPlayer.setMoney(this.blackJackPlayer.getMoney() + this.pot * 2);
        this.setPot(0);
    }

    dealBlackJackHand(){
        for(let i = 0; i < 2; i++){
            this.blackJackPlayer.hand.push(this.blackJackDeck.cards.pop());
            this.dealer.hand.push(this.blackJackDeck.cards.pop());
        }
    }

    hitOrStay(answer: String){
        if(this.blackJackPlayer.hitStay(answer) == true){
            this.blackJackPlayer.hand.push(this.blackJackDeck.cards.pop());
        }
    }

    hit(){
        this.blackJackPlayer.hand.push(this.blackJackDeck.cards.pop());
    }

    dealerHitorStay(){
        while(this.dealer.getHandTotal() < 17){
            this.dealer.hand.push(this.blackJackDeck.cards.pop());
        }
    }

    playerWins(){
        let playerTotal = this.blackJackPlayer.getHandTotal();
        let dealerTotal = this.dealer.getHandTotal();

        if(playerTotal == 21 && dealerTotal == 21||
        playerTotal < 21 && dealerTotal < playerTotal||
        playerTotal < 21 && dealerTotal > 21){
            this.cashInWinnings();
            return true;
        }
        return false;
    }

    printForHitOrStay(){
        Display.print("Do you want to or stay?")
    }

    printWhatyouWantToBet(){
        Display.print("How much do you want to bet?")
    }

    printHelloStatement(){
        Display.print("Hello welcome to the Black Jack table.")
    }

    printPlayersHand(){
        Display.print(this.blackJackPlayer.getHand());
    }

    printDealerHand(){
        Display.print(this.dealer.getHand());
    }

    printPlayerScore(){
        Display.print(this.blackJackPlayer.getHandTotal().toString());
    }

    printDealerScore(){
        Display.print(this.dealer.getHandTotal().toString())
    }
}
