/// <reference path="BlackJack.ts" />
///<reference path="Deck.ts" />
///<reference path="Player.ts" />
///<reference path="BlackJackPlayer.ts" />
///<reference path="BlackJackDealer.ts" />
///<reference path="CardGame.ts" />

class UI {
    displayBalance: any;
    userBet: any;
    displayEle: any;
    displayElePLAYER: any;
    displayBet: any;
    CasinoScreen: any;
    BlackJackScreen: any;

    constructor() {
        this.displayBalance = document.getElementById("balanceOut");
        this.displayEle = document.getElementById("display");
        this.displayElePLAYER = document.getElementById("player");
        this.userBet = document.getElementById("betAmountBox");
        this.displayBet = document.getElementById("betOut");
        this.CasinoScreen = document.getElementById("casinoBody");
        this.BlackJackScreen = document.getElementById("blackJackMain");
    }

    setHitButtonVis(input: boolean) {
        document.getElementById("hit").hidden = input;
    }
    setStayButtonVis(input: boolean) {
        document.getElementById("stay").hidden = input;
    }
    setBetButtonVis(input: boolean) {
        document.getElementById("bet").hidden = input;
    }
    setPlayAgainButtonVis(input: boolean) {
        document.getElementById("playagain").hidden = input;
    }
    setBetAmountBoxButtonVis(input: boolean) {
        document.getElementById("betAmountBox").hidden = input;
    }
    setLeaveButtonVis(input: boolean) {
        document.getElementById("leave").hidden = input;
    }

    initDisplay(player: Player) {
        this.displayBalance.value = player.balance;
        this.displayBet.value = " ENTER BET BELOW"
        this.printToDealer("Dealer's Cards:</br>");
        this.printToPlayer(player.getName() + "\'s Cards:</br>");
        this.initButtonDisplay();
    }

    initButtonDisplay() {
        this.setHitButtonVis(true);
        this.setStayButtonVis(true);
        this.setBetAmountBoxButtonVis(false);
        this.setBetButtonVis(false);
        this.setPlayAgainButtonVis(true);
        this.setLeaveButtonVis(true);
    }

    endOfHandButtonsDisplay() {
        this.setHitButtonVis(true);
        this.setStayButtonVis(true);
        this.setPlayAgainButtonVis(false);
        this.setLeaveButtonVis(false);
    }

    resetPlayButtons() {
        this.setBetAmountBoxButtonVis(true);
        this.setBetButtonVis(true);
        this.setLeaveButtonVis(true);
        this.setPlayAgainButtonVis(true);
        this.setHitButtonVis(false);
        this.setStayButtonVis(false);
    }

    outOfMoney() {
        this.printToPlayer("</br>OUT OF MONEY! GET OUT!")
        this.setBetAmountBoxButtonVis(true);
        this.setBetButtonVis(true);
        this.setLeaveButtonVis(false);
        this.setPlayAgainButtonVis(true);
        this.setHitButtonVis(true);
        this.setStayButtonVis(true);
    }

    displayInitialHands(player: BlackJackPlayer, dealer: BlackJackDealer) {
        let dealerHandDisplay: String[] = dealer.getInitialDealerHand();
        let playerHandDisplay: String[] = player.getInitialPlayerHand();
        for (let i = 0; i < 2; i++) {
            this.printToDealer(dealerHandDisplay[i]);
            this.printToPlayer(playerHandDisplay[i]);
        }
    }

    displayDealtCard(player: Player) {
        this.printToPlayer(this.displayCard(player.hand[player.hand.length - 1]));
    }

    displayCard(card: Card): String {
        let cardDisplay: String = "<img src = ./images/cards/" + card.faceValue
            + "_of_" + card.suit + ".png width=\"90\" height=\"130\">";
        return cardDisplay;
    }

    displayScore(player: BlackJackPlayer) {
        if (player.getName() === "Dealer") {
            this.printToDealer("</br>Dealer's Score: " + player.getScore());
        } else {
            this.printToPlayer("Your Score: " + player.getScore());

        }
    }

    displayScores(player: BlackJackPlayer, dealer: BlackJackDealer) {
        this.printToDealer("</br>Dealer's Score: " + dealer.getScore());
        this.printToPlayer("Your Score: " + player.getScore());
    }

    displayHand(player: CardPlayer) {
        let hand: String[] = player.getFullHand();
        if (player.getName() === "Dealer") {
            this.clearDealerScreen();
            this.printToDealer("Dealer's Cards:</br>");
            for (let i = 0; i < hand.length; i++) {
                this.printToDealer(hand[i]);
            }
        }
        else {
            this.clearPlayerScreen();
            this.printToPlayer(player.getName() + "\'s Cards:</br>");
            for (let i = 0; i < hand.length; i++) {
                this.printToPlayer(hand[i]);
            }
        }
    }

    updateBalance(player: Player) {
        this.displayBalance.value = player.getBalance();
    }

    printToPlayer(prompt: String) {
        this.displayElePLAYER.innerHTML += prompt;
    }

    printToDealer(prompt: String) {
        this.displayEle.innerHTML += prompt;
    }

    invalidInput() {
        this.userBet.value = "INVALID INPUT";
    }

    clearDealerScreen() {
        this.displayEle.innerHTML = ""
    }

    clearPlayerScreen() {
        this.displayElePLAYER.innerHTML = ""
    }

    clearScreen() {
        this.displayEle.innerHTML = "";
        this.displayElePLAYER.innerHTML = "";
    }

    clearBetAmountBox() {
        this.userBet.value = "";
    }
}
