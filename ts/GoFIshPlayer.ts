/// <reference path="Deck.ts" />



class GoFishPlayer extends CardPlayer {
    private books: Card[];

    constructor(){
        super();
    }

    

    askOpponentForCard(otherPlayer: GoFishPlayer, cardRequest: Card): boolean{
        if(otherPlayer.hasCardOfRank(cardRequest)){
            return true;
        }else{
            return false;
        }
    }

    passCardRequested(cardRequest: Card): Card{
        for(var i=0; i<this.hand.length; i++){
            if(this.hand[i].getValue() == cardRequest.getValue()){
                return this.hand[i];
            }
        }
        return;
    }

    // tallyBooks(): any{

    //     var counts = {};
          
    //     for(var i = 0; i<this.hand.length;i++){
    //           var rank = this.hand[i].getValue();
    //           counts[value] = (counts[value] || 0) + 1;

    //           if (counts[value] == 4){
    //             console.log("you have four " + this.hand[i].getValue()+ "s. Book it!");
    //             }
                               
    //         }   
    //         return this.hand;
    // }
    
    removeCardFromHand(card: Card) {
        this.hand = this.hand.filter(e => e !== card);
    }
    
    
    
}        

var goFishPlayer = new GoFishPlayer();
var card0 = new Card("Queen", "Hearts");
var card1 = new Card("Queen", "Hearts");
var card2 = new Card("Queen", "Hearts");
var card3 = new Card("Queen", "Hearts");
var card4 = new Card("King", "Hearts");
var card5 = new Card("King", "Hearts");
var card6 = new Card("King", "Hearts");
var card7 = new Card("King", "Hearts");



goFishPlayer.addCardToHand(card0);
goFishPlayer.addCardToHand(card1);
goFishPlayer.addCardToHand(card2);
goFishPlayer.addCardToHand(card3);
goFishPlayer.addCardToHand(card4);
goFishPlayer.addCardToHand(card5);
goFishPlayer.addCardToHand(card6);
goFishPlayer.addCardToHand(card7);




//console.log(goFishPlayer.tallyBooks());

    
        // public Integer playPotentialBooksInHand() {
        //     HashMap<Card.FaceValue, Integer> numberOfEachValue = new HashMap<>();
        //     for(Card card : getHand().getCards()) {
        //         Card.FaceValue key = card.getFaceValue();
        //         if(numberOfEachValue.containsKey(key)) {
        //             numberOfEachValue.put(key, numberOfEachValue.get(key) + 1);
        //         } else {
        //             numberOfEachValue.put(key, 1);
        //         }
        //     }
    
        //     ArrayList<Card.FaceValue> fourOfAKindValues = new ArrayList<>();
    
        //     for(Card.FaceValue value : numberOfEachValue.keySet()) {
        //         if(numberOfEachValue.get(value) == 4) {
        //             fourOfAKindValues.add(value);
        //         }
        //     }
    
        //     for(Card.FaceValue value : fourOfAKindValues) {
        //         CardPile book = new CardPile();
        //         for(Card card : getHand().getCards()) {
        //             if(card.getFaceValue().equals(value)) {
        //                 book.addCardToPile(card);
        //             }
        //         }
        //         books.add(book);
        //         for(Card card : book.getCards()) {
        //             getHand().removeCard(card);
        //         }
        //     }
    
        //     return fourOfAKindValues.size();
        // }
    
        // public void goFish(Card card) {
        //     addCardToHand(card);
        // }
    
    