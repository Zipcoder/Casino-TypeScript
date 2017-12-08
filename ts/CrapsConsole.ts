<<<<<<< HEAD
class CrapsConsole {

    inputElement: any;
    displayElement: any;
    rollButton: any;
    continueButton: any;
    quitButton: any;
    submitBetButton: any;

    game: Craps = new Craps();
    player: User;
    mainPotBet: number;
    sidePotBet: number;
    pointSet: boolean = false;
    pointMet: boolean = false;
    crappedOut: boolean = false;
    cont: boolean = false;

    constructor(user: User) {
        this.player = user;
    }

    set Cont(passedValue: boolean) {
        this.cont = passedValue;
    }

    updateDisplay(stringToDisplay: string): void {
        this.displayElement.innerHTML += "</br>" + stringToDisplay;
    }

    initialize(): void {
        this.displayElement = document.getElementById("display");
        this.inputElement = document.getElementById("input");
        this.inputElement.innerHTML = '<input type="number" name="bet_input" id="bet_input">' +
            '<input type="submit" value="Bet" id="bet_submit" onclick="craps.getInput()"/>    ' +
            '<input type="button" value="Roll" id="roll" onclick="craps.determineFirstRoller()"/>    ' +
            '<input type="button" value="Continue" id="continue" onclick="craps.welcomePlayer()"/>' +
            '<input type="button" value="Quit" id="quit" onclick="craps.finalize()"/>';
        this.submitBetButton = document.getElementById("bet_submit");
        this.rollButton = document.getElementById("roll");
        this.continueButton = document.getElementById("continue");
        this.quitButton = document.getElementById("quit");
    }

    finalize(): void {
        this.inputElement.innerHTML = '<input type="text" name="user_input" id="user_input"> ' +
            '<input type="submit" value="Submit" onclick="craps.run()">';
        this.displayElement.innerText = '';
    }

    run(): void {
=======
/// <reference path="User.ts"/>
/// <reference path="Craps.ts"/>

class CrapsConsole {

    inputElement:any;
    displayElement:any;
    rollButton:any;
    continueButton:any;
    quitButton:any;
    submitBetButton:any;

    game:Craps = new Craps();
    player:User;
    mainPotBet:number;
    sidePotBet:number;
    pointSet:boolean=false;
    pointMet:boolean=false;
    crappedOut:boolean=false;

    constructor(user:User){
        this.player=user;
    }

    initialize():void{
        this.displayElement=document.getElementById("display");
        this.inputElement=document.getElementById("input");
        this.inputElement.innerHTML= '<input type="number" name="bet_input" id="bet_input">' +
                                     '<input type="submit" value="Bet" id="bet_submit" onclick="" disabled="true"/>    '  +
                                     '<input type="button" value="Roll" id="roll" onclick="craps.determineFirstRoller()"/>    ' +
                                     '<input type="button" value="Continue" id="continue" onclick="craps.beginInitialPlay()" disabled="true"/>' +
                                     '<input type="button" value="Quit" id="quit" onclick="craps.finalize()"/>';
        this.submitBetButton=document.getElementById("bet_submit");
        this.rollButton=document.getElementById("roll");
        this.continueButton=document.getElementById("continue");
        this.quitButton=document.getElementById("quit");
    }
    finalize():void{
        this.inputElement.innerHTML= '<input type="text" name="user_input" id="user_input"> ' +
                                            '<input type="submit" value="Submit" onclick="craps.run()">';
        this.displayElement.innerText='';
        this.resetFlags();
        return;
    }
    run():void{
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.initialize();

        this.welcomePlayer();
    }

    determineFirstRoller(): void {
        this.game.determineFirstRoller();
        this.beginInitialPlay();
    }

    beginInitialPlay() {
        this.rollButton.disabled=true;
        this.submitBetButton.disabled=false;
        this.continueButton.disabled=true;
        this.submitBetButton.setAttribute("onclick", "craps.playerInitialBets()");
        this.initialBetCycle();
    }

    initialBetCycle():void {
        if (!this.pointSet) {
            this.initialBet();
        }else{
            this.submitBetButton.setAttribute("onclick","craps.playerSecondaryBets()");
            this.secondaryBetCycle();
        }
    }

    secondaryBetCycle():void{
        if (!this.pointMet){
            this.secondaryBet();
        } else{
            //move on from secondaryBet logic
            this.postRoundCleanup();
        }
    }


<<<<<<< HEAD
    getInput(): number {
        let inputAlias: any = document.getElementById("bet_input");
=======
    postRoundCleanup() {
        if (this.crappedOut) {
            this.changeTurns();//Reset flags, change active player
        } else {
            this.resetFlags();
        }
        this.continueButton.disabled=false;
        updateDisplay("Click 'Continue' to play again, or 'Quit' to not");
    }

    getInput():number{
        let inputAlias:any = document.getElementById("bet_input");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950

        return +(inputAlias.value);
    }

    initialBet(): void {

        updateDisplay(this.game.toString());


        if (this.game.getPlayerTurn()) {
            this.opponentInitialBets(this.generateBotBet());
        }
<<<<<<< HEAD
        else {
            this.updateDisplay("Enter your bet in the field below and click 'Bet'");
            this.submitBetButton.onclick(this.playerInitialBets());
        }

    }

    playerInitialBets(): void {
        do {
            this.mainPotBet = this.getInput();
        } while (this.player.Wallet.getMoney() < this.mainPotBet);

        this.game.takeBet(this.player.Wallet.takeOutMoney(this.mainPotBet));//player bet
        this.game.takeBet(this.mainPotBet);//house bet matches

        this.displayPlayerBetting(this.mainPotBet);
=======
        else
        {
            updateDisplay("Enter your bet in the field below and click 'Bet'");
        }

    }
    playerInitialBets():void{
        this.mainPotBet = this.getInput();
        if (this.player.Wallet.getMoney()<this.mainPotBet){
            updateDisplay("You don't have that much money");
            this.initialBet();
        }else {
            this.game.takeBet(this.player.Wallet.takeOutMoney(this.mainPotBet));//player bet
            this.game.takeBet(this.mainPotBet);//house bet matches

            this.displayPlayerBetting(this.mainPotBet);
            this.pointSet = this.resolveInitialThrow(this.game.initialThrow());

            this.initialBetCycle();
        }
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950

    }

    opponentInitialBets(betToMatch: number): void {
        this.game.takeBet(betToMatch);//house bet to match
        this.game.takeBet(this.player.Wallet.takeOutMoney(betToMatch));//player matches bet
        this.mainPotBet = betToMatch;

        this.displayOpponentBetting(betToMatch);
        this.pointSet = this.resolveInitialThrow(this.game.initialThrow());

        this.initialBetCycle();

    }

    generateBotBet(): number {
        return (Math.random() * (this.player.Wallet.getMoney() / 2));
    }

    secondaryBet(): void {

        updateDisplay(this.game.toString());

        if (this.game.getPlayerTurn()) {
            this.opponentSecondaryBets(this.generateBotBet());
<<<<<<< HEAD
        }
        else {
            this.playerSecondaryBets();
        }
    }

    playerSecondaryBets(): void {
        do {
            //this.sidePotBet = getPositiveDoubleInput("How much would you like to bet? ");
        } while (this.player.Wallet.getMoney() < this.sidePotBet);

        this.game.takeSideBet(this.player.Wallet.takeOutMoney(this.sidePotBet));//player bet
        this.game.takeSideBet(this.sidePotBet);//house bet matches

        this.displayPlayerBetting(this.sidePotBet);
=======
        } else {
            updateDisplay("Enter your bet in the field below and click 'Bet'");
        }
    }
    playerSecondaryBets():void{
        this.sidePotBet = this.getInput();
        if (this.player.Wallet.getMoney()<this.sidePotBet){
            updateDisplay("You don't have that much money");
            this.secondaryBet();
        }else {
            this.game.takeSideBet(this.player.Wallet.takeOutMoney(this.sidePotBet));//player bet
            this.game.takeSideBet(this.sidePotBet);//house bet matches

            this.displayPlayerBetting(this.sidePotBet);
            this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());

            this.secondaryBetCycle();
        }
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
    }

    opponentSecondaryBets(betToMatch: number): void {

        this.game.takeSideBet(betToMatch);//house bet to match
        this.game.takeSideBet(this.player.Wallet.takeOutMoney(betToMatch));//player matches bet
        this.sidePotBet = betToMatch;

<<<<<<< HEAD
        this.displayOpponentBetting(betToMatch);
    }
=======
    this.displayOpponentBetting(betToMatch);
    this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());
    this.secondaryBetCycle();
}
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950

    resolveInitialThrow(resultOfThrownDice: number): boolean {
        if (resultOfThrownDice != 0) {
            //non-Thrower (-1) or thrower (1) wins the mainPotBet
            this.resolveInitialThrowBet(resultOfThrownDice);
            return false;
        }
        //Point for the first time
        this.firstPointRolled();
        return true;
    }

    resolveInitialThrowBet(a: number): void {
        if (a == 1) {
            if (this.game.getPlayerTurn()) {//If the thrower is the player and they won, pay them
                this.playerWinsBothPots();//Player wins the pot and we go back to bet again
            }
            else//If the bot is the thrower, empty the pot
            {
                this.opponentWinsBothPots();//mainPotBet will be overwritten in the next
                //function call, so we can use it here to catch this
                //method's return
            }
        }
        else {
            if (this.game.getPlayerTurn()) {//If the thrower is the player and they lost, empty the pot and bet again
                this.opponentWinsBothPots();
            }
            else {//if the bot is the thrower and they lost, pay the player
                this.playerWinsBothPots();
            }
        }
    }

    resolveSecondaryThrow(resultOfThrownDice: number): boolean {
        switch (resultOfThrownDice) {

            case 0: {//Not a point, not a pair, not a crap. Roll again
                this.neitherWinsAnyPot();
                return false;
            }
            case -1: {//Crapped out. pay non-thrower
                this.crappedOut = true;
            }
            case 1 : {//Point met. Pay out to thrower
                this.resolveSecondaryThrowBet(resultOfThrownDice);
                return true;
            }
            default: {//Pair made, pay sideBet to non-thrower.
                this.resolveSecondaryThrowBet(resultOfThrownDice);
                return false;
            }
        }//end switch
    }

    resolveSecondaryThrowBet(a: number): void {
        if (a == 1) {//Point met, pay out thrower from mainPot and sidePot
            if (this.game.getPlayerTurn()) {//if player is the thrower, give them the pots and then reset bet vars
                this.playerWinsBothPots();

            }
            else//if player is not the thrower, empty pot and reset bet vars
            {
                this.opponentWinsBothPots();
            }
        } else if (a == -1)//Crapped out. Pay out the non-thrower from mainPot and sidePot
        {
            if (this.game.getPlayerTurn()) {
                this.opponentWinsBothPots();
            }
            else {
                this.playerWinsBothPots();
            }
        } else//Won the pair, but not the point. Pay non-thrower the sidePot
        {
            if (this.game.getPlayerTurn()) {
                this.playerWinsSidePot();
            }
            else {
                this.opponentWinsSidePot();
            }
        }
    }

    displayOpponentBetting(passedOpponentBet: number): void {//Called _AFTER_ the money transfers have already taken place

<<<<<<< HEAD
        this.updateDisplay("Opponent bets $" + passedOpponentBet);
        this.updateDisplay("You match $" + passedOpponentBet);
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet");
=======
        updateDisplay("Opponent bets $"+passedOpponentBet.toFixed(2));
        updateDisplay("You match $"+passedOpponentBet.toFixed(2));
        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();
        this.enterAnyKeyToContinue();
    }

    displayPlayerBetting(passedPlayerBet: number): void {//Called _AFTER_ the money transfers have already taken place
        //_AND_ after the player enters their bet amount
<<<<<<< HEAD
        this.updateDisplay("You bet $" + passedPlayerBet);
        this.updateDisplay("Opponent matches $" + passedPlayerBet);
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet");
=======
        updateDisplay("You bet $"+passedPlayerBet.toFixed(2));
        updateDisplay("Opponent matches $"+passedPlayerBet.toFixed(2));
        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();
        this.enterAnyKeyToContinue();
    }

<<<<<<< HEAD
    firstPointRolled(): void {
        this.updateDisplay(this.game.getNumberRolled() + " was rolled... that's our new point.");
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now.");
=======
    firstPointRolled():void{
        updateDisplay(this.game.getNumberRolled()+" was rolled... that's our new point.");
        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet now.");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();
        this.enterAnyKeyToContinue();

    }
<<<<<<< HEAD

    neitherWinsAnyPot(): void {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled... nothing special.");
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now.");
=======
    neitherWinsAnyPot():void{
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled... nothing special.");
        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet now.");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();
        this.enterAnyKeyToContinue();
    }

<<<<<<< HEAD
    playerWinsSidePot(): void {

        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and you won the Side Pot!");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");

        this.player.Wallet.addMoney(this.game.emptySidePot());

        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
=======
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and you won the Side Pot!");
        updateDisplay("$"+this.game.getSidePot().getMoney().toFixed(2)+" from Side Pot");

        this.player.Wallet.addMoney(this.game.emptySidePot());

        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet now");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();

        this.enterAnyKeyToContinue();

        this.sidePotBet = 0;
    }
<<<<<<< HEAD
=======
    opponentWinsSidePot():void{
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and your opponent won the Side Pot!");
        updateDisplay("$"+this.game.getSidePot().getMoney().toFixed(2)+" from Side Pot");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950

    opponentWinsSidePot(): void {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and your opponent won the Side Pot!");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");

<<<<<<< HEAD
        this.sidePotBet = this.game.emptySidePot();

        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
=======
        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet now");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();

        this.enterAnyKeyToContinue();

        this.sidePotBet = 0;
    }
<<<<<<< HEAD
=======
    opponentWinsBothPots():void{
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and your opponent won everything!");
        updateDisplay("$"+this.game.getMainPot().getMoney().toFixed(2)+" from Main Pot");
        updateDisplay("$"+this.game.getSidePot().getMoney().toFixed(2)+" from Side Pot");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950

    opponentWinsBothPots(): void {
        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and your opponent won everything!");
        this.updateDisplay("$" + this.game.getMainPot().getMoney() + " from Main Pot");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");

        this.mainPotBet = this.game.emptyPot();
        this.sidePotBet = this.game.emptySidePot();

<<<<<<< HEAD
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
=======
        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet now");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();

        this.enterAnyKeyToContinue();

        this.mainPotBet = 0;
        this.sidePotBet = 0;
    }

<<<<<<< HEAD
    playerWinsBothPots(): void {

        this.updateDisplay("A " + this.game.getNumberRolled() + " was rolled, and you won everything!");
        this.updateDisplay("$" + this.game.getMainPot().getMoney() + " from Main Pot");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " from Side Pot");
=======
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and you won everything!");
        updateDisplay("$"+this.game.getMainPot().getMoney().toFixed(2)+" from Main Pot");
        updateDisplay("$"+this.game.getSidePot().getMoney().toFixed(2)+" from Side Pot");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950

        this.player.Wallet.addMoney(this.game.emptyPot());
        this.player.Wallet.addMoney(this.game.emptySidePot());

<<<<<<< HEAD
        this.updateDisplay("You have $" + this.player.Wallet.getMoney() + " in your wallet now");
=======
        updateDisplay("You have $"+this.player.Wallet.getMoney().toFixed(2)+" in your wallet now");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
        this.printPots();

        this.enterAnyKeyToContinue();
        this.mainPotBet = 0;
        this.sidePotBet = 0;
    }

<<<<<<< HEAD
    welcomePlayer(): void {
        this.updateDisplay("Hello, " + this.player.Name + ". Welcome to the Craps table.");
        this.updateDisplay("Roll to determine who goes first!");


=======
    welcomePlayer():void{
        updateDisplay("Hello, "+this.player.Name+". Welcome to the Craps table. Click 'Quit' anytime to leave the game");
        updateDisplay("Roll to determine who goes first!");
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
    }

    changeTurns(): void {
        this.resetFlags();
        this.game.changePlayerTurn();
    }

    resetFlags(): void {
        this.mainPotBet = 0;
        this.sidePotBet = 0;
        this.pointSet = false;
        this.pointMet = false;
        this.crappedOut = false;
        this.game.resetTurn();
    }

<<<<<<< HEAD
    printPots(): void {
        this.updateDisplay("$" + this.game.getMainPot().getMoney() + " now in Main Pot");
        this.updateDisplay("$" + this.game.getSidePot().getMoney() + " now in Side Pot</br>");
    }

    enterAnyKeyToContinue(): void {

=======
    printPots():void{
        updateDisplay("$"+this.game.getMainPot().getMoney().toFixed(2)+" now in Main Pot");
        updateDisplay("$"+this.game.getSidePot().getMoney().toFixed(2)+" now in Side Pot</br>");
    }
    enterAnyKeyToContinue():void{
>>>>>>> dec27607c19af1ea920292aa1020555bd3df1950
    }
}