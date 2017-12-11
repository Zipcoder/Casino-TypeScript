class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    getValue() {
        return this.value;
    }
    getSuit() {
        return this.suit;
    }
}
var Value;
(function (Value) {
    Value[Value["Ace"] = 1] = "Ace";
    Value[Value["Two"] = 2] = "Two";
    Value[Value["Three"] = 3] = "Three";
    Value[Value["Four"] = 4] = "Four";
    Value[Value["Five"] = 5] = "Five";
    Value[Value["Six"] = 6] = "Six";
    Value[Value["Seven"] = 7] = "Seven";
    Value[Value["Eight"] = 8] = "Eight";
    Value[Value["Nine"] = 9] = "Nine";
    Value[Value["Ten"] = 10] = "Ten";
    Value[Value["Jack"] = 10] = "Jack";
    Value[Value["Queen"] = 10] = "Queen";
    Value[Value["King"] = 10] = "King";
})(Value || (Value = {}));
var Suit;
(function (Suit) {
    Suit[Suit["Spade"] = 1] = "Spade";
    Suit[Suit["Heart"] = 2] = "Heart";
    Suit[Suit["Diamond"] = 3] = "Diamond";
    Suit[Suit["Club"] = 4] = "Club";
})(Suit || (Suit = {}));
class Player {
    constructor(name, wallet) {
        this.name = name;
        this.wallet = wallet;
        this.score = 0;
    }
    get Name() {
        return this.name;
    }
    get Wallet() {
        return this.wallet;
    }
    set Wallet(wallet) {
        this.wallet = wallet;
    }
    addToWallet(amount) {
        this.wallet += amount;
    }
    get Score() {
        return this.score;
    }
    set Score(score) {
        this.score = score;
    }
}
/// <reference path="Card.ts" />
/// <reference path="Player.ts" />
class CardPlayer extends Player {
    constructor(player) {
        super(player.Name, player.Wallet);
        this.hand = [];
    }
    getHand() {
        return this.hand;
    }
    clearHand() {
        while (this.hand.length > 0)
            this.hand.pop();
    }
    displayPlayerHand() {
        var output = " ";
        for (var i = 0; i < this.hand.length; i++) {
            output += this.hand[i].getValue() + ", ";
        }
        return output;
    }
    displayPlayerHandImages(id) {
        for (var i = 0; i < this.hand.length; i++) {
            displayCard(this.hand[i].getValue(), this.hand[i].getSuit(), id);
        }
    }
    displayPlayerHandImageByIndex(index, id) {
        displayCard(this.hand[index].getValue(), this.hand[index].getSuit(), id);
    }
    addCardToHand(card) {
        this.hand.push(card);
    }
    hasCardOfValue(cardValueAsked) {
        for (var i = 0; i < this.hand.length; i++) {
            if (cardValueAsked == this.hand[i].getValue()) {
                return true;
            }
        }
        return false;
    }
    getCardByValue(cardValueAsked) {
        for (var i = 0; i < this.hand.length; i++) {
            if (cardValueAsked == this.hand[i].getValue()) {
                var cardToReturn = this.hand[i];
                this.hand = this.hand.filter(e => e != cardToReturn);
                return cardToReturn;
            }
        }
        return undefined;
    }
}
// var cardPlayer = new CardPlayer();
// var card = new Card("Queen", "Hearts");
// var card2 = new Card("King", "Clubs");
// var card3 = new Card("7", "Spades");
// cardPlayer.addCardToHand(card);
// cardPlayer.addCardToHand(card2);
// cardPlayer.addCardToHand(card3);
// cardPlayer.hasCardOfValue("Queen");
// console.log(cardPlayer.hasCardOfValue("Queen"));
// console.log(cardPlayer.getCardByValue("Queen"));
// console.log(cardPlayer.hasCardOfValue("Queen"));
// console.log(cardPlayer.getHand());
/// <reference path="CardPlayer.ts" />
class BlackJackPlayer extends CardPlayer {
    constructor(player) {
        super(player);
    }
    hasAceInHand() {
        return this.hasCardOfValue("A");
    }
}
class Game {
    // addPlayer(player: Player){
    //     this.players.push(player);
    // }
    getPlayers() {
        return this.players;
    }
}
/// <reference path="Game.ts" />
class CardGame {
}
class Deck {
    constructor() {
        this.deck = [];
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 4; j++) {
                //let card = new Card(Value[Value[i]], Suit[Suit[j]]);
                this.deck.push(new Card(Deck.VALUE[i], Deck.SUIT[j]));
            }
        }
    }
    getTopCard() {
        return this.deck.pop();
    }
    shuffle(times) {
        for (var i = 0; i < (times || 1); i++) {
            this.deck.sort(function (a, b) { return (0.5 - Math.random()); });
        }
    }
}
Deck.SUIT = ["Heart", "Spade", "Club", "Diamond"];
Deck.VALUE = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// var deck = new Deck();
// deck.shuffle(4);
// console.log(deck);
/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardGame.ts" />
/// <reference path="CardPlayer.ts" />
/// <reference path="Deck.ts" />
class BlackJack extends CardGame {
    constructor(player) {
        super();
        this.dealer = new BlackJackPlayer(new Player("dealer", 1000000));
        this.player = new BlackJackPlayer(player);
        this.deck = new Deck();
        this.pot = 0;
        this.initialize();
    }
    initialize() {
        this.deck.shuffle();
    }
    takeBet(bet) {
        this.pot += bet;
    }
    get Pot() {
        return this.pot;
    }
    getDealer() {
        return this.dealer;
    }
    dealCards(player) {
        for (let i = 0; i < 2; i++) {
            player.addCardToHand(this.deck.getTopCard());
        }
    }
    hitPlayer(player) {
        player.addCardToHand(this.deck.getTopCard());
    }
    getCardPointValue(card) {
        if (card.getValue() == "K" ||
            card.getValue() == "Q" ||
            card.getValue() == "J") {
            return 10;
        }
        else if (card.getValue() == "A") {
            //return 1;
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
    isBust(player) {
        if (this.calculatePlayerScore(player) > 21) {
            return true;
        }
        else {
            return false;
        }
    }
    calculatePlayerScore(player) {
        let score = 0;
        for (let i = 0; i < player.getHand().length; i++) {
            score += this.getCardPointValue(player.getHand()[i]);
            player.Score = score;
        }
        if (player.hasAceInHand() && score > 21) {
            score -= 10;
            player.Score = score;
        }
        return score;
    }
    isPlayerWinner(player, dealer) {
        if (this.isBust(this.dealer) ||
            this.calculatePlayerScore(player) > this.calculatePlayerScore(this.dealer)) {
            return true;
        }
        else {
            return false;
        }
    }
    dealerPlays() {
        var output = "";
        while (this.calculatePlayerScore(this.getDealer()) <= 16 ||
            (this.calculatePlayerScore(this.getDealer()) == 17 && this.getDealer().hasAceInHand())) {
            this.hitPlayer(this.getDealer());
        }
        var dealerHand = this.dealer.getHand();
        for (var i = 0; i < dealerHand.length; i++) {
            output += dealerHand[i].getValue() + ", ";
        }
        return output;
    }
}
// var blackJack = new BlackJack();
// var blackJackPlayer = new CardPlayer();
// blackJack.addCardPlayer(blackJackPlayer);
// blackJack.deal(2);
// var score = blackJack.calculatePlayerScore(blackJackPlayer);
// console.log(score);
/// <reference path="BlackJack.ts" />
/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardPlayer.ts" />
/// <reference path="Player.ts" />
class BlackJackConsole {
    constructor(player) {
        // this.displayPlayerScore = document.getElementById("display player score");
        this.hitButtonInputEle = document.getElementById("hit");
        this.stayButtonInputEle = document.getElementById("stay");
        this.playButtonInputEle = document.getElementById("play again");
        this.betInputEle = document.getElementById("betInput");
        this.betButtonInputEle = document.getElementById("betButton");
        this.player = new BlackJackPlayer(player);
        this.wallet = 1000;
    }
    init() {
        this.game = new BlackJack(this.player);
        this.dealer = this.game.getDealer();
        this.dealer.clearHand();
        this.player.clearHand();
        clearHTMLTag("player-cards");
        clearHTMLTag("dealer-cards");
        this.betInputEle.disabled = false;
        this.betButtonInputEle.disabled = false;
        this.playButtonInputEle.disabled = true;
        this.hitButtonInputEle.disabled = true;
        this.stayButtonInputEle.disabled = true;
        changeDisplay("Your current balance is $" + this.player.Wallet + " enter your wager below and hit \"Bet\" to play! ");
    }
    startGame() {
        this.playButtonInputEle.disabled = true;
        this.hitButtonInputEle.disabled = false;
        this.stayButtonInputEle.disabled = false;
        this.betInputEle.disabled = true;
        this.betButtonInputEle.disabled = true;
        this.game.dealCards(this.dealer);
        this.game.dealCards(this.player);
        var dealerShowing = this.dealer.getHand()[0].getValue();
        this.playerScore = this.game.calculatePlayerScore(this.player);
        changeDisplay("You were dealt a hand of " + this.player.displayPlayerHand() + " totaling " + this.playerScore +
            "<br>The dealer is showing " + dealerShowing + " hit or stay?<br>");
        this.player.displayPlayerHandImages("player-cards");
        this.dealer.displayPlayerHandImageByIndex(0, "dealer-cards");
    }
    checkValidBet() {
        var errorMessage = document.getElementById("errorMessage");
        var input = parseInt(this.betInputEle.value);
        try {
            if (isNaN(input))
                throw "Not a number";
            if (input < 0)
                throw "We don't accept negative wagers";
            if (input > this.player.Wallet)
                throw "Insufficient funds";
            clearHTMLTag("errorMessage");
            this.bet();
        }
        catch (error) {
            document.getElementById("errorMessage").innerHTML = error;
        }
    }
    bet() {
        var bet = parseInt(this.betInputEle.value);
        this.game.takeBet(bet);
        changeDisplay("You have wagered $" + this.game.Pot);
        this.startGame();
    }
    hit() {
        this.game.hitPlayer(this.player);
        this.playerScore = this.game.calculatePlayerScore(this.player);
        if (this.playerScore <= 21) {
            changeDisplay("You now have: " + this.player.displayPlayerHand() + " worth " + this.playerScore + "<br />");
            changeDisplay("Would you like to hit or stay?");
            clearHTMLTag("player-cards");
            this.player.displayPlayerHandImages("player-cards");
        }
        else {
            this.player.Wallet -= this.game.Pot;
            changeDisplay("Your hand of " + this.player.displayPlayerHand() + " worth " + this.playerScore + " is a bust!<br />You lose! Your new balance is $" + this.player.Wallet);
            clearHTMLTag("player-cards");
            this.player.displayPlayerHandImages("player-cards");
            displayLoserImage();
            this.hitButtonInputEle.disabled = true;
            this.stayButtonInputEle.disabled = true;
            this.playButtonInputEle.disabled = false;
        }
    }
    stay() {
        var dealerFinalHand = this.game.dealerPlays();
        changeDisplay("Dealer plays out the hand, " + dealerFinalHand);
        clearHTMLTag("dealer-cards");
        this.dealer.displayPlayerHandImages("dealer-cards");
        this.hitButtonInputEle.disabled = true;
        this.stayButtonInputEle.disabled = true;
        this.playButtonInputEle.disabled = false;
        if (this.game.isPlayerWinner(this.player, this.dealer)) {
            this.player.Wallet += this.game.Pot;
            changeDisplay("Winner winner, chicken dinner! Your new balance is $" + this.player.Wallet);
            displayWinnerImage();
        }
        else {
            this.player.Wallet -= this.game.Pot;
            changeDisplay("You're a loser. Your new balance is $" + this.player.Wallet);
            displayLoserImage();
        }
    }
    reset() {
        clearHTMLTag("display");
        this.init();
    }
}
/// <reference path="Player.ts" />
/// <reference path="BlackJackConsole.ts" />
var blackJackConsole = new BlackJackConsole(new Player("Player", 1000));
blackJackConsole.init();
function changeDisplay(input) {
    document.getElementById("display").innerHTML += "<br />" + input;
}
function clearHTMLTag(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
function displayCard(value, suit, elementId) {
    var cardDiv = "<img src=\"./images/cards/" + suit + "/" + value + ".jpg\" alt=\"" + value + suit + "\"/>";
    document.getElementById(elementId).innerHTML += cardDiv;
}
function displayWinnerImage() {
    var cardDiv = "<br><img src=\"./images/200w_d.gif\" alt=\"sloth-gif\"/>";
    document.getElementById("display").innerHTML += cardDiv;
}
function displayLoserImage() {
    var cardDiv = "<br><img src=\"./images/loser.gif\" alt=\"loser-gif\"/>";
    document.getElementById("display").innerHTML += cardDiv;
}
// var player = new Player();
// player.setName("Tariq");
// console.log(player.getName());
//  play()     
//  dealInitialCards(player);
//  dealInitialCards(dealer)
//    askForHitOrStay();
//    dealerPlay();
//    checkWin();
// if(playAgain()){
//     play();
// }else{
// exit
// class Craps extends DicePlayer and implements Game, Gamble{
//     private point: number;
//     private pot: number = 0.0;
//     //DicePlayer crapsPlayer = new DicePlayer();
//
//     constructor(){
//         this.point = 0;
//         //die.rollDice();
//     }
//
//     getPoint(): number{
//         return this.point;
//     }
//
//     setPoint(point: number){
//         this.point = point;
//     }
//
//     getPot(): number {
//         return this.pot;
//     }
//
//     setPot(moneyToBet: number){
//         this.pot = moneyToBet;
//     }
//
//     placeBet(moneyToBet: number): number{
//         if (hasMoneyToMakeBet(moneyToBet)) {
//             setPot(moneyToBet);
//             tempMoney: number = crapsPlayer.getMoney();
//             crapsPlayer.setMoney(tempMoney - moneyToBet);
//             return 0;
//         } else {
//             System.out.println("You do not have enough money to make a bet! Your current balance is " + crapsPlayer.getMoney());
//             return 1;
//         }
//     }
//
//     hasMoneyToMakeBet(moneyToBet: number): boolean{
//         if (crapsPlayer.getMoney() < moneyToBet) {
//             return false;
//         }
//         return true;
//     }
//
//     cashInWinnings(): number{
//         crapsPlayer.setMoney(crapsPlayer.getMoney() + getPot() * 2);
//     }
//
//     firstRoll(): number{
//         if (die.diceTotal() == 7 || die.diceTotal() == 11) {
//             cashInWinnings();
//             System.out.println("You win!" + die.diceTotal());
//             return 0;
//
//         } else if (die.diceTotal() == 2 || die.diceTotal() == 3 || die.diceTotal() == 12) {
//             setPot(0.0);
//             System.out.println("You lose!" + die.diceTotal());
//             return 0;
//
//         } else {
//             point = die.diceTotal();
//             System.out.println("New target roll" + die.diceTotal());
//             return 1;
//         }
//     }
//
//     secondRoll(): number{
//         do {
//             die.rollDice();
//             if (die.diceTotal() == getPoint()) {
//                 cashInWinnings();
//                 System.out.println("You win!" + die.diceTotal());
//                 break;
//             } else if (die.diceTotal() == 7 || die.diceTotal() == 11) {
//                 setPot(0.0);
//                 System.out.println("You lose!" + die.diceTotal());
//                 break;
//             } else {
//                 System.out.println("Rolling again" + die.diceTotal());
//             }
//         } while (die.diceTotal() != getPoint());
//     }
//
//     play(): void {
//         playAgain: String;
//         bet: number;
//
//         do {
//             Craps crapsGame = new Craps();
//             System.out.println("================================================================\n" +
//                     "Greetings player! Welcome to Basic AF Casino's version of Craps!\n " +
//                     "\t\t\tLets get started!\n" +
//                     "================================================================");
//             do {
//                 bet = ConsoleInput.getDoubleInput("How much would you like to bet?");
//                 crapsGame.placeBet(bet);
//             }while (placeBet(bet) == 1);
//
//
//             System.out.println("Your current bet is " + bet);
//             System.out.println("Let's get the dice rolling!");
//
//             if (crapsGame.firstRoll() == 1) {
//                 crapsGame.secondRoll();
//             }
//             playAgain = ConsoleInput.getStringInput("Would you like to play again? Yes or No");
//         } while (!playAgain.equals("no"));
//     }
// } 
/// <reference path="Player.ts" />
// /// <reference path="CardGame.ts" />
// /// <reference path="CardPlayer.ts" />
// /// <reference path="Deck.ts" />
// /// <reference path="GoFIshPlayer.ts" />
//
// class GoFish extends CardGame {
//
//         constructor(){
//             super();
//         }
//
//         goFishStart() {
//             var goFish = new GoFish();
//             var dealer = new CardPlayer();
//             var player = new CardPlayer();
//
//             goFish.addCardPlayer(dealer);
//             goFish.addCardPlayer(player);
//             goFish.deal(7);
//
//             console.log("Let's play some GoFish!");
//             console.log("player hand");
//             goFish.showPlayerHand();
//             console.log("dealer hand");
//             goFish.showDealerHand();
//         //     boolean playing = true;
//         //     while (playing) {
//         //         playerTurn();
//         //         dealerTurn();
//         //         playing = checkForWin();
//         //     }
//         //     gameOptions();
//         // }
//         }
//
//         // private boolean checkForWin() {
//         //     if (deck.getAllCards().size() == 0) {
//         //         compareBooks();
//         //         return false;
//
//         //     }
//         //     return true;
//         // }
//
//         // private void playerTurn() {
//         //     boolean playing = true;
//         //     checkHandSize(player);
//         //     while (playing) {
//         //         checkForBooks(player);
//         //         Console.print(player.getStringDisplayHand());
//         //         String askCard;
//         //         do {
//         //             askCard = Console.getString("Enter card you are looking for: ");
//         //         } while (!isCardInHand(askCard.toUpperCase(), player.getHand()));
//
//         //         if (isCardInHand(askCard.toUpperCase(), dealer.getHand())) {
//         //             swapCard(dealer, player, askCard);
//         //             Console.print("You got a match!");
//         //         } else {
//         //             Console.print("GO FISH!");
//         //             giveCard(player);
//         //             playing = false;
//         //         }
//         //     }
//         // }
//
//
//         // private void dealerTurn() {
//         //     boolean playing = true;
//         //     checkHandSize(dealer);
//         //     while (playing) {
//         //         checkForBooks(dealer);
//         //         Console.print("Opponent looking for card...");
//         //         Card dealerCard = dealerFindCard();
//         //         Console.print("Do you have any: " + dealerCard.getGoFishValue() + "'S ?");
//         //         if (isCardInHand(dealerCard.getGoFishValue(), player.getHand())) {
//         //             swapCard(player, dealer, dealerCard.getGoFishValue());
//         //         } else {
//         //             Console.print("Guess I'll go fish...");
//         //             giveCard(dealer);
//         //             playing = false;
//         //         }
//         //     }
//         // }
//
//         // private Card dealerFindCard() {
//         //     Random r = new Random();
//         //     int x = r.nextInt(dealer.getHand().size() - 1);
//         //     return dealer.getHand().get(x);
//         // }
//
//         // public boolean isCardInHand(String askCard, ArrayList<Card> hand) {
//         //     for (Card card : hand) {
//         //         if (card.getGoFishValue().equals(askCard)) {
//         //             return true;
//         //         }
//         //     }
//         //     return false;
//         // }
//
//         // private void swapCard(CardPlayer fromPlayer, CardPlayer toPlayer, String cardValue) {
//         //     ArrayList<Card> newHand = new ArrayList<>();
//         //     for (Card card : fromPlayer.getHand()) {
//         //         if (cardValue.equalsIgnoreCase(card.getGoFishValue())) {
//         //             toPlayer.addCard(card);
//         //         } else {
//         //             newHand.add(card);
//         //         }
//         //     }
//         //     fromPlayer.setHand(newHand);
//         // }
//
//         // public void checkForBooks(GoFishPlayer player) {
//         //     for (Map.Entry<String, Integer> entry : getHandMap(player).entrySet()) {
//         //         if (entry.getValue() == 4) {
//         //             player.addBookCounter(1);
//         //             removeBooks(player, entry.getKey());
//         //         }
//         //     }
//         // }
//
//         // public HashMap<String, Integer> getHandMap(GoFishPlayer player) {
//         //     HashMap<String, Integer> handMap = new HashMap<>();
//         //     for (Card card : player.getHand()) {
//         //         if (!handMap.containsKey(card.getGoFishValue())) {
//         //             handMap.put(card.getGoFishValue(), 1);
//         //         } else {
//         //             handMap.put(card.getGoFishValue(), handMap.get(card.getGoFishValue()) + 1);
//         //         }
//         //     }
//         //     return handMap;
//         // }
//
//         // public void removeBooks(GoFishPlayer player, String cardValue) {
//         //     ArrayList<Card> newHand = new ArrayList<>();
//         //     for (Card card : player.getHand()) {
//         //         if (!cardValue.equals(card.getGoFishValue())) {
//         //             newHand.add(card);
//         //         }
//         //     }
//         //     player.setHand(newHand);
//         // }
//
//
//         // private void compareBooks() {
//         //     if (player.getBookCounter() > dealer.getBookCounter()) {
//         //         System.out.println("You win!");
//         //     } else if (player.getBookCounter() < dealer.getBookCounter()) {
//         //         System.out.println("You lose!");
//         //     } else {
//         //         System.out.println("LET US FIGHT TO THE DEATH " + player.name.toUpperCase());
//         //     }
//         // }
//
//         // private void checkHandSize(CardPlayer player) {
//         //     if (player.getHand().size() < 1) {
//         //         giveCard(player);
//         //     }
//         // }
//
//
//     }
//
//     var goFish = new GoFish();
//     goFish.goFishStart();
// 
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
//# sourceMappingURL=app.js.map