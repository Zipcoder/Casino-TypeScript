///<reference path="User.ts"/>
///<reference path="PlayingValue.ts"/>
///<reference path="PlayingCard.ts"/>
///<reference path="Hand.ts"/>
///<reference path="PlayingDeck.ts"/>

class GoFishPlayer{
    name:string;
    hand:Hand;
    completedBooks:number;

    constructor(user:User){
        this.name=user.Name;
        this.completedBooks=0;
        this.hand=new Hand();
    }

    getHandValues():PlayingValue[]{
        let valuesInHand:PlayingValue[] = [];

        for (let i=0; i<this.hand.getAllCards().length; i++){
            let contain:boolean = false;

            for (let j=0; j<valuesInHand.length; j++){
                if (valuesInHand[j]==this.hand.getAllCards()[i].getValue()){
                    contain=true;
                }
            }
            if (!contain){
                valuesInHand.push(this.hand.getAllCards()[i].getValue());
            }
        }
        return valuesInHand;
    }
}

class GoFish implements CardGame{

    deck:PlayingDeck = new PlayingDeck();
    player:GoFishPlayer;
    dealer:GoFishPlayer;

    constructor(user:User){
        this.player=new GoFishPlayer(user);
        this.dealer=new GoFishPlayer(new User("Dealer",0));
        this.deck.shuffle();
    }

    initialDeal():void{
        for (let i=0; i<5; i++) {
            this.player.hand.addCard(this.deck.getAndRemoveCard());
            this.dealer.hand.addCard(this.deck.getAndRemoveCard());
        }
    }

    playerGoFish(askedForValue:PlayingValue):boolean{
        let drawnCard:PlayingCard = this.deck.getAndRemoveCard()
        this.player.hand.addCard(drawnCard);
        return (askedForValue==drawnCard.getValue());
    }

    dealerGoFish(askedForValue:PlayingValue):boolean{
        let drawnCard:PlayingCard = this.deck.getAndRemoveCard()
        this.player.hand.addCard(this.deck.getAndRemoveCard());
        return (askedForValue==drawnCard.getValue());
    }

    playerAskForCard(requestedValue:PlayingValue):boolean{
        let dealerHand = this.dealer.hand.getAllCards();

        for (let i=0; i<dealerHand.length; i++){
            if (dealerHand[i].getValue()==requestedValue){
                for (let j=0; j<dealerHand.length; j++){
                    if (dealerHand[j].getValue()==requestedValue){
                        this.player.hand.addCard(dealerHand[j]);
                        this.dealer.hand.removeCard(dealerHand[j]);
                    }
                }
                return true;
            }
        }
        return false;
    }

    dealerAskForCard(requestedValue:PlayingValue):boolean{
        let playerHand = this.player.hand.getAllCards();

        for (let i=0; i<playerHand.length; i++){
            if (playerHand[i].getValue()==requestedValue){
                for (let j=0; j<playerHand.length; j++){
                    if (playerHand[j].getValue()==requestedValue){
                        this.dealer.hand.addCard(playerHand[j]);
                        this.player.hand.removeCard(playerHand[j]);
                    }
                }
                return true;
            }
        }
        return false;
    }

    private removeBook(valueToRemove:PlayingValue):void{
        for (let i=0; i<this.player.hand.getAllCards().length; i++){
            if (this.player.hand.getAllCards()[i].getValue()==valueToRemove){
                this.player.hand.removeCard(this.player.hand.getAllCards()[i]);
            }
        }
        this.player.completedBooks++;

        for (let i=0; i<this.dealer.hand.getAllCards().length; i++){
            if (this.dealer.hand.getAllCards()[i].getValue()==valueToRemove){
                this.dealer.hand.removeCard(this.dealer.hand.getAllCards()[i]);
            }
        }
        this.dealer.completedBooks++;
    }

    checkForCompleteBooks():void{//calls removeBook inside
        let valueCounter:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
        let hand:PlayingCard[] = this.player.hand.getAllCards();
        for (let i=0; i<hand.length; i++){
            switch(hand[i].getValue()){
                case "2":
                {
                    valueCounter[0]++;
                    if (valueCounter[0]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "3":
                {
                    valueCounter[1]++;
                    if (valueCounter[1]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "4":
                {
                    valueCounter[2]++;
                    if (valueCounter[2]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "5":
                {
                    valueCounter[3]++;
                    if (valueCounter[3]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "6":
                {
                    valueCounter[4]++;
                    if (valueCounter[4]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "7":
                {
                    valueCounter[5]++;
                    if (valueCounter[5]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "8":
                {
                    valueCounter[6]++;
                    if (valueCounter[6]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "9":
                {
                    valueCounter[7]++;
                    if (valueCounter[7]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "10":
                {
                    valueCounter[8]++;
                    if (valueCounter[8]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "J":
                {
                    valueCounter[9]++;
                    if (valueCounter[9]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "Q":
                {
                    valueCounter[10]++;
                    if (valueCounter[10]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "K":
                {
                    valueCounter[11]++;
                    if (valueCounter[11]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "A":
                {
                    valueCounter[12]++;
                    if (valueCounter[12]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
            }
        }

        valueCounter = [0,0,0,0,0,0,0,0,0,0,0,0,0];
        hand = this.dealer.hand.getAllCards();
        for (let i=0; i<hand.length; i++){
            switch(hand[i].getValue()){
                case "2":
                {
                    valueCounter[0]++;
                    if (valueCounter[0]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "3":
                {
                    valueCounter[1]++;
                    if (valueCounter[1]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "4":
                {
                    valueCounter[2]++;
                    if (valueCounter[2]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "5":
                {
                    valueCounter[3]++;
                    if (valueCounter[3]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "6":
                {
                    valueCounter[4]++;
                    if (valueCounter[4]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "7":
                {
                    valueCounter[5]++;
                    if (valueCounter[5]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "8":
                {
                    valueCounter[6]++;
                    if (valueCounter[6]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "9":
                {
                    valueCounter[7]++;
                    if (valueCounter[7]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "10":
                {
                    valueCounter[8]++;
                    if (valueCounter[8]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "J":
                {
                    valueCounter[9]++;
                    if (valueCounter[9]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "Q":
                {
                    valueCounter[10]++;
                    if (valueCounter[10]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "K":
                {
                    valueCounter[11]++;
                    if (valueCounter[11]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
                case "A":
                {
                    valueCounter[12]++;
                    if (valueCounter[12]==4){
                        this.removeBook(hand[i].getValue());
                    }
                    break;
                }
            }
        }

    }

    tableString():string{
        return(this.player.hand.toString()+"<br/>Completed Books: "+this.player.completedBooks+
                                           "<br/><br/>"+this.dealer.hand.toString()+"<br/>Completed Books:"+this.dealer.completedBooks);
    }

    isGameOver():boolean{
        return (this.player.completedBooks+this.dealer.completedBooks==13);
    }

    getWinnerName():string{
        if (this.player.completedBooks>this.dealer.completedBooks){
            return (this.player.name);
        } else{
            return (this.dealer.name);
        }
    }

    play(userInput:string):boolean {
        return ("Y"==userInput.toUpperCase());
    }

}
