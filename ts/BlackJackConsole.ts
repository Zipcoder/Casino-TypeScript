import * as console from './Console';
export class BlackJackConsole extends console.Console {

  private  nameOfGame:string = "BlackJack";

    private  game:BlackJack = new BlackJack(1);
    private  currentPlayer:BlackJackPlayer;


    public start() {
        this.setUpGame();
        this.playRoundsUntilAllPlayersCashOut(this.game);
    }

    public  setUpGame() {
        this.printMenuName(string.format("Welcome to %s", this.nameOfGame));
        let numPlayers:number = getNumPlayers(this.game.MIN_NUMBER_OF_PLAYERS, this.game.MAX_NUMBER_OF_PLAYERS);
        let playerNames:Array<string> = getPlayerNames(numPlayers);
        let players:Array<BlackJackPlayer>  = Array<BlackJackPlayer>();
        for(let name in playerNames) {
            let player:BlackJackPlayer  = new BlackJackPlayer(playerNames[name]);
            players.push(player);
        }
        this.game.addPlayers(players);
        this.getPlayerChips(this.game);
    }

    public  playRound() {
        for(let player:BlackJackPlayer in this.game.getPlayers()) {
            if(this.game.getPlayers()[player].getMoney() > 0) {
                this.makeBet(player);
            }
        }

        System.out.println("\nDealing cards...\n");
        this.game.dealInitialCards();

        this.displayDealerFaceUpCard();

        for(let currentPlayerIndex = 0; currentPlayerIndex < this.game.getNumPlayers(); currentPlayerIndex++) {
            let currentPlayer = this.game.getPlayers().get(currentPlayerIndex);
            if(this.game.getBets().containsKey(currentPlayer)) {
                System.out.printf("Player %d, %s turn:\n", currentPlayerIndex + 1, currentPlayer.getName());
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
        System.out.printf("Dealer showing %s\n\n", game.getDealer().getHand().getCard(0));
    }

    public playerTakeTurn(BlackJackPlayer player) {
         let finishedTurn = false;
        while(!finishedTurn) {
            System.out.printf("Your cards: %s\n", player.getHand());
            finishedTurn = this.hitOrStay();
        }
        System.out.println();
    }

    public  makeBet( player:BlackJackPlayer) {
        let amountAvailableToBet = player.getMoney();
        let amount = 0.0;
        let isValidInput = false;
        while(!isValidInput) {
            amount = this.getMoneyInput(String.format("%s, how much would you like to bet?", player.getName()));
            if(amount <= amountAvailableToBet) {
                isValidInput = true;
            } else {
                System.out.println("Sorry you do not have that much money to bet.");
            }
        }
        this.game.takeBet(player, amount);
    }

    public hitOrStay():boolean {
        if(this.game.calculatePlayerScore(this.currentPlayer) == 21) {
            System.out.println("21!!");
            return true;
        }
        let toHit:boolean = this.getYesOrNoInput("Do you want to hit? Y or N");
        if(toHit) {
            this.game.dealCardToHand(this.currentPlayer);
        } else {
            return true;
        }
        if(this.game.playerHasBust(this.currentPlayer)) {
            System.out.printf("Bust! %s\n", this.currentPlayer.getHand());
            return true;
        }
        return false;
    }

    public dealerHitsUntilFinished() {
        while(this.game.calculatePlayerScore(this.game.getDealer()) <= 16 ||
                (this.currentPlayergame.calculatePlayerScore(game.getDealer()) == 17 && this.game.getDealer().hasAceInHand())) {
            this.game.dealCardToHand(this.game.getDealer());
        }
    }

    public displayEndOfRound() {
        System.out.printf("\nDealer score: %d %s\n", game.calculatePlayerScore(game.getDealer()),
                this.game.getDealer().getHand());
        for(let player in this.game.getPlayers()) {
            if(this.game.getBets().containsKey(this.game.getPlayers()[player])) {
                System.out.printf("%s score: %d %s\n", this.game.getPlayers()[player].getName(), this.game.calculatePlayerScore(this.game.getPlayers()[player]),
                        player.getHand());
            }
        }
        System.out.println();
    }

    public payOutBets() {
        this.game.determineWinners();
        this.game.payOutBets();
    }

    public  askContinueOrCashOut() {
        System.out.println(this.game.printPlayersMoney());
        for(let player in this.game.getPlayers()) {
            if(this.game.getPlayers()[player].getMoney() > 0) {
                boolean cashOut = getYesOrNoInput(String.format("%s, Cash Out? Y or N", this.game.getPlayers()[player].getName()));
                if(cashOut) {
                    this.game.getPlayers()[player].cashOut();
                }
            }
        }
    }


    public getNameOfGame():string {
        return this.nameOfGame;
    }
}
