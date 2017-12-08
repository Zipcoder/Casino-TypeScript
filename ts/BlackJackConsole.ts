import {Console} from './Console';
import {Utilities} from './Utilities';
import {BlackJack} from './BlackJack';
import {Player} from './Player';

export class BlackJackConsole extends Console {

  private  nameOfGame:string = "BlackJack";

    private  game:BlackJack = new BlackJack(1);
    private  currentPlayer:Player<BlackJack>;


    public start() {
        this.setUpGame();
        this.playRoundsUntilAllPlayersCashOut(this.game);
    }

    public  setUpGame() {
        Utilities.printMenuName("Welcome to " + this.getNameOfGame());
        let numPlayers:number = this.getNumPlayers(this.game.MIN_NUMBER_OF_PLAYERS, this.game.MAX_NUMBER_OF_PLAYERS);
        let playerNames:string[] = this.getPlayerNames(numPlayers);
        let players:Array<Player<BlackJack>>  = [];
        for(let name in playerNames) {
            let player:Player<BlackJack>  = new Player<BlackJack>(playerNames[name]);
            players.push(player);
        }
        this.game.addPlayers(players);
        this.getPlayerChips(this.game);
    }

    public  playRound() {
        for(let p in this.game.getPlayers()) {
          let player =this.game.getPlayers[p];
            if(player.getMoney() > 0) {
                this.makeBet(player);
            }
        }

        Utilities.printLine("<br/> Dealing cards...<br/>");
        this.game.dealInitialCards();

        this.displayDealerFaceUpCard();

        for(let currentPlayerIndex = 0; currentPlayerIndex < this.game.getNumPlayers(); currentPlayerIndex++) {
            let currentPlayer = this.game.getPlayers()[currentPlayerIndex];
            if(this.game.getBets()[currentPlayer.id]!=undefined) {
              let playerNumber = currentPlayerIndex + 1;
              Utilities.printLine("Player " + playerNumber + ", " + currentPlayer.getName() + " turn:");
              this.playerTakeTurn(currentPlayer);
            }
        }
        this.dealerHitsUntilFinished();
        this.displayEndOfRound();
        this.payOutBets();
        this.game.putCardsInDiscardPile();
        this.askContinueOrCashOut();
    }

    public displayDealerFaceUpCard() {
        Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().getCard(0));
    }

    public playerTakeTurn(player: Player<BlackJack>) {
        let finishedTurn = false;
        while(!finishedTurn) {
            Utilities.printLine("Your cards: " + player.getHand());
            finishedTurn = this.hitOrStay();
        }
        Utilities.printLine("");
    }

    public  makeBet(player: Player<BlackJack>) {
        let amountAvailableToBet = player.getMoney();
        let amount = 0.0;
        let isValidInput = false;
        while(!isValidInput) {
            amount = Utilities.getMoneyInput(player.getName() + ", how much would you like to bet?");
            if(amount <= amountAvailableToBet) {
                isValidInput = true;
            } else {
                Utilities.printLine("Sorry you do not have that much money to bet.");
            }
        }
        this.game.takeBet(player, amount);
    }

    public hitOrStay(): boolean {
        if(this.game.calculatePlayerScore(this.currentPlayer) == 21) {
            Utilities.printLine("21!!");
            return true;
        }
        let toHit = Utilities.getYesOrNoInput("Do you want to hit? Y or N");
        if(toHit) {
            this.game.dealCardToHand(this.currentPlayer);
        } else {
            return true;
        }
        if(this.game.playerHasBust(this.currentPlayer)) {
            Utilities.printLine("Bust! " + this.currentPlayer.getHand());
            return true;
        }
        return false;
    }

    public dealerHitsUntilFinished() {
        while(this.game.calculatePlayerScore(this.game.getDealer()) <= 16 ||
                (this.game.calculatePlayerScore(this.game.getDealer()) == 17 && this.game.getDealer().hasAceInHand())) {
            this.game.dealCardToHand(this.game.getDealer());
        }
    }

    public displayEndOfRound() {
        Utilities.printLine("<br/>Dealer score: " + this.game.calculatePlayerScore(this.game.getDealer()) + this.game.getDealer().getHand());
        for(let p in this.game.getPlayers()) {
          let player =this.game.getPlayers[p];
            if(this.game.getBets()[player.id]) {
                Utilities.printLine(player.getName() + " score: " + this.game.calculatePlayerScore(player) +
                        " " + player.getHand());
            }
        }
        Utilities.printLine("");
    }

    public payOutBets() {
        this.game.determineWinners();
        this.game.payOutBets();
    }

    public  askContinueOrCashOut() {
        Utilities.printLine(this.game.printPlayersMoney());
        for(let p in this.game.getPlayers()) {
          let player = this.game.getPlayers()[p];
            if(player.getMoney() > 0) {
                let cashOut = Utilities.getYesOrNoInput(player.getName() + ", Cash Out? Y or N");
                if(cashOut) {
                    player.cashOut();
                }
            }
        }
    }


    public getNameOfGame():string {
        return this.nameOfGame;
    }
}
