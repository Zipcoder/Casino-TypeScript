///<reference path="player.ts"/>
///<reference path="card.ts"/>



class BlackJackPlayer extends Player{

    hand: Card[] = new Array<Card>();

    super(){
        this.setName("BlackJack PLayer");
    }

    public removeAllCards(){
        this.hand.length = 0;
    }

    public hitStay(answer: String){
        if(answer.toLowerCase() == "yes"){
            return true;
        }
        return false;
    }

    public placeBet(bet: number): number{
        this.setMoney(this.getMoney() - bet);
        return bet;
    }

    public getHand(){
        let theHand = new Array<Card>();
        for(let card of this.hand){
            theHand.push(card)
        }
        return theHand.toString();
    }

    public getHandTotal(){
        let total = 0;
        for(let card of this.hand){
            total += card.getValue();
        }
        return total;
    }

}
