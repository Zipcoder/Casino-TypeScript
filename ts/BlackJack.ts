///<reference path="Deck.ts" />
///<reference path="Player.ts" />
///<reference path="BlackJackPlayer.ts" />
///<reference path="BlackJackDealer.ts" />
///<reference path="CardGame.ts" />
/// <reference path="UI.ts" />

class BlackJack extends CardGame {

    player: BlackJackPlayer;
    dealer: BlackJackDealer;
    betAmount: number;
    ui: UI = new UI();
    CasinoButtons: any;
    CasinoMain:any;
    BlackJackScreen: any;

    getPlayer(): BlackJackPlayer {
        return this.player;
    }

    getDealer(): BlackJackDealer {
        return this.dealer;
    }

    constructor(player: Player, dealer: Player) {
        super();
        this.player = new BlackJackPlayer(player);
        this.dealer = new BlackJackDealer(dealer);
        this.CasinoButtons = document.getElementById("buttonsArea");
        this.CasinoMain = document.getElementById("CasinoMain");
        this.BlackJackScreen = document.getElementById("blackJackMain");
    }

    init() {
        this.CasinoMain.hidden = true;
        this.BlackJackScreen.hidden = false;
        this.ui.clearBetAmountBox();
        this.ui.initDisplay(this.player);
        this.play();
    }

    play() {
        this.deal(this.player, this.dealer, 2);
        this.ui.displayInitialHands(this.player, this.dealer);
    }

    hit() {
        this.player.addCard(this.deck.getCard());
        this.ui.displayDealtCard(this.player);
        this.checkForOver21();
    }

    stay() {
        this.player.calculateScore();
        this.dealerPlay();
        this.checkForWin();
        this.ui.displayScores(this.player, this.dealer);
        this.ui.updateBalance(this.player);
        this.checkBalanceAmount();
    }

    checkBalanceAmount() {
        if (this.player.balance < 1) {
            this.ui.outOfMoney();
        }
    }

    checkForOver21() {
        this.player.calculateScore();
        if (this.player.getScore() > 21) {
            this.checkForWin();
            this.ui.displayHand(this.dealer);
            this.dealer.calculateScore();
            this.ui.displayScore(this.dealer);
        }
    }

    checkForWin() {
        this.ui.endOfHandButtonsDisplay();
        if (this.didPlayerWin()) {
            this.ui.printToPlayer("</br> YOU WIN!!!</br>");
            this.player.balance += this.betAmount;
        } else {
            this.ui.printToPlayer("<br> YOU LOSE!!!</br>");
            this.player.balance -= this.betAmount;
        }
    }

    didPlayerWin(): boolean {
        let playerScore = this.player.getScore();
        let dealerScore = this.dealer.getScore();
        if ((playerScore == 21 && dealerScore != 21) ||
            (playerScore < 21 && dealerScore < playerScore) ||
            (playerScore < 21 && dealerScore > 21)) {
            return true;
        } else {
            return false;
        }
    }

    dealerPlay() {
        this.dealer.calculateScore();
        while (this.dealer.getScore() < 17) {
            this.dealer.addCard(this.deck.getCard());
            this.dealer.calculateScore();
        }
        this.ui.clearDealerScreen();
        this.ui.displayHand(this.dealer);
    }

    playAgain() {
        this.deck = new Deck();
        this.ui.clearScreen();
        this.init();
    }

    placeBet() {
        if (this.checkBetInput(this.ui.userBet.value)) {
            this.betAmount = parseInt(this.ui.userBet.value);
            this.ui.displayBet.value = this.betAmount;
            this.ui.resetPlayButtons();
            this.ui.displayHand(this.player);
        } else {
            this.ui.invalidInput();
        }
    }

    checkBetInput(input: any): boolean {
        if (input > 0 && input <= this.player.balance) {
            return true;
        }
        else {
            return false;
        }
    }
}
