// /// <reference path="Deck.ts" />
// /// <reference path="CardPlayer.ts" />
//
// class GoFishPlayer extends CardPlayer {
//     private books: Card[];
//     private cardPointValues;
//     constructor(){
//         super();
//
//     }
//
//     askOpponentForCard(otherPlayer: CardPlayer, cardRequest: String): boolean{
//         if(otherPlayer.hasCardOfValue(cardRequest)){
//             return true;
//         }else{
//             return false;
//         }
//     }
//
//     tallyBooks(): number{
//
//         var counts = {};
//         var numBooks = 0
//
//         for(var i = 0; i<this.hand.length;i++){
//               var rank = this.hand[i].getValue();
//               counts[rank] = (counts[rank] || 0) + 1;
//
//               if (counts[rank] == 4){
//                 console.log("you have four " + this.hand[i].getValue()+ "s. Book it!");
//                 numBooks++;
//                 }
//
//         }
//         return numBooks;
//     }
//
//     playerHasABook(): boolean{
//         if(this.tallyBooks() > 0){
//             return true;
//         }
//         return false;
//     }
//
//     removeAllCardsByValue(cardValueToDiscard: String){
//         for(var i = 0; i < this.hand.length; i++){
//             if(cardValueToDiscard == this.hand[i].getValue()){
//                 this.hand = this.hand.filter(e => e != this.getCardByValue(cardValueToDiscard));
//             }
//         }
//     }
//     // removeCardFromHand(card: Card) {
//     //     this.hand = this.hand.filter(e => e !== card);
//     // }
// }
//
// var goFishPlayer = new GoFishPlayer();
// var card0 = new Card("Queen", "Hearts");
// var card1 = new Card("Queen", "Hearts");
// var card2 = new Card("Queen", "Hearts");
// var card3 = new Card("Queen", "Hearts");
// var card4 = new Card("King", "Hearts");
// var card5 = new Card("King", "Hearts");
// var card6 = new Card("King", "Hearts");
// var card7 = new Card("King", "Hearts");
//
//
//
// goFishPlayer.addCardToHand(card0);
// goFishPlayer.addCardToHand(card1);
// goFishPlayer.addCardToHand(card2);
// goFishPlayer.addCardToHand(card3);
// goFishPlayer.addCardToHand(card4);
// goFishPlayer.addCardToHand(card5);
// goFishPlayer.addCardToHand(card6);
// goFishPlayer.addCardToHand(card7);
//
//
// console.log("books tally output: "+ goFishPlayer.tallyBooks());
// goFishPlayer.removeAllCardsByValue("Queen");
// console.log("books tally after remove: "+ goFishPlayer.tallyBooks());
//
//
//
//