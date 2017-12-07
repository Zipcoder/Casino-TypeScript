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
    // updateDisplay(stringToDisplay:string):void{
    //     document.getElementById("display").innerHTML+="</br>"+stringToDisplay;
    // }

    initialize():void{
        this.displayElement=document.getElementById("display");
        this.inputElement=document.getElementById("input");
        this.inputElement.innerHTML= '<input type="number" name="bet_input" id="bet_input">' +
                                     '<input type="submit" value="Bet" id="bet_submit" onclick=""/>    '  +
                                     '<input type="button" value="Roll" id="roll" onclick="craps.determineFirstRoller()"/>    ' +
                                     '<input type="button" value="Continue" id="continue" onclick="craps.welcomePlayer()"/>' +
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
    }
    run():void{
        this.initialize();

        this.welcomePlayer();
        // do {
                                //     while (!this.pointSet) {//Continue to bet until the roller
                                //         //throws a point instead of a win/loss.
                                //        this.initialBetCycle();
                                //     }
                                //     while (!this.pointMet) {//Continue to bet until the roller
                                //         //meets their point or craps out
                                //         this.secondaryBet();
                                //         this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());
                                //     }
        //     if (this.crappedOut) {
        //         this.changeTurns();//Reset flags, change active player
        //     } else{
        //         this.resetFlags();
        //     }
        // }while(this.game.play("Y"));//getStringInput("Continue playing? [Y/N] ")));
        // //NEED TO REWORK PLAY AND INPUT TO ACCOUNT FOR HTML FORMS
        // this.finalize();
    }
    determineFirstRoller():void{
        this.game.determineFirstRoller();
        this.submitBetButton.setAttribute("onclick","craps.playerInitialBets()");
        this.initialBetCycle();
    }

    initialBetCycle():void {
        if (!this.pointSet) {
            this.initialBet();
        }else{
            this.secondaryBetCycle();
        }
    }

    secondaryBetCycle():void{
        this.rollButton.setAttribute("onclick","craps.playerSecondaryBets()");
        if (!this.pointMet){
            this.secondaryBet();
        } else{
            //move on from secondaryBet logic
        }
    }


    getInput():number{
        let inputAlias:any = document.getElementById("bet_input");

        return +inputAlias.value;
    }

    initialBet():void{

        updateDisplay(this.game.toString());


        if (this.game.getPlayerTurn())
        {
            this.opponentInitialBets(this.generateBotBet());
        }
        else
        {
            updateDisplay("Enter your bet in the field below and click 'Bet'");
        }

    }
    playerInitialBets():void{
        this.mainPotBet = this.getInput();
        if (this.player.Wallet.getMoney()<this.mainPotBet){
            alert("You don't have that much money");
            this.initialBet();
        }else {
            alert("Ok, you bet $"+this.mainPotBet);
            this.game.takeBet(this.player.Wallet.takeOutMoney(this.mainPotBet));//player bet
            this.game.takeBet(this.mainPotBet);//house bet matches

            this.displayPlayerBetting(this.mainPotBet);
            this.pointSet = this.resolveInitialThrow(this.game.initialThrow());

            this.initialBetCycle();
        }

    }
    opponentInitialBets(betToMatch:number):void{
        this.game.takeBet(betToMatch);//house bet to match
        this.game.takeBet(this.player.Wallet.takeOutMoney(betToMatch));//player matches bet
        this.mainPotBet=betToMatch;

        this.displayOpponentBetting(betToMatch);
        this.pointSet = this.resolveInitialThrow(this.game.initialThrow());

        this.initialBetCycle();

    }

    generateBotBet():number{
        return(Math.random()*(this.player.Wallet.getMoney()/2));
    }

    secondaryBet():void{

        updateDisplay(this.game.toString());

        if (this.game.getPlayerTurn())
        {
            this.opponentSecondaryBets(this.generateBotBet());
        }
        else
        {
            updateDisplay("Enter your bet in the field below and click 'Bet'");
        }
    }
    playerSecondaryBets():void{
        this.sidePotBet = this.getInput();
        if (this.player.Wallet.getMoney()<this.sidePotBet){
            alert("You don't have that much money");
            this.secondaryBet();
        }else {
            alert("Ok, you bet $"+this.sidePotBet);
            this.game.takeBet(this.player.Wallet.takeOutMoney(this.sidePotBet));//player bet
            this.game.takeBet(this.sidePotBet);//house bet matches

            this.displayPlayerBetting(this.sidePotBet);
            this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());

            this.secondaryBetCycle();
        }
    }
    opponentSecondaryBets(betToMatch:number):void{

    this.game.takeSideBet(betToMatch);//house bet to match
    this.game.takeSideBet(this.player.Wallet.takeOutMoney(betToMatch));//player matches bet
    this.sidePotBet=betToMatch;

    this.displayOpponentBetting(betToMatch);
    this.pointMet = this.resolveSecondaryThrow(this.game.secondaryThrow());
    this.secondaryBetCycle();
}

    resolveInitialThrow(resultOfThrownDice:number):boolean{
        if (resultOfThrownDice!=0){
            //non-Thrower (-1) or thrower (1) wins the mainPotBet
            this.resolveInitialThrowBet(resultOfThrownDice);
            return false;
        }
        //Point for the first time
        this.firstPointRolled();
        return true;
    }
    resolveInitialThrowBet(a:number):void{
        if (a==1){
            if (this.game.getPlayerTurn()){//If the thrower is the player and they won, pay them
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
            else{//if the bot is the thrower and they lost, pay the player
                this.playerWinsBothPots();
            }
        }
    }

    resolveSecondaryThrow(resultOfThrownDice:number):boolean{
        switch (resultOfThrownDice) {

            case 0: {//Not a point, not a pair, not a crap. Roll again
                this.neitherWinsAnyPot();
                return false;
            }
            case -1: {//Crapped out. pay non-thrower
                this.crappedOut=true;
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
    resolveSecondaryThrowBet(a:number):void{
        if (a==1){//Point met, pay out thrower from mainPot and sidePot
            if (this.game.getPlayerTurn())
            {//if player is the thrower, give them the pots and then reset bet vars
                this.playerWinsBothPots();

            }
            else//if player is not the thrower, empty pot and reset bet vars
            {
                this.opponentWinsBothPots();
            }
        } else
        if(a==-1)//Crapped out. Pay out the non-thrower from mainPot and sidePot
        {
            if (this.game.getPlayerTurn())
            {
                this.opponentWinsBothPots();
            }
            else
            {
                this.playerWinsBothPots();
            }
        } else//Won the pair, but not the point. Pay non-thrower the sidePot
        {
            if (this.game.getPlayerTurn())
            {
                this.playerWinsSidePot();
            }
            else
            {
                this.opponentWinsSidePot();
            }
        }
    }

    displayOpponentBetting(passedOpponentBet:number):void{//Called _AFTER_ the money transfers have already taken place

        updateDisplay("Opponent bets $"+passedOpponentBet);
        updateDisplay("You match $"+passedOpponentBet);
        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    }
    displayPlayerBetting(passedPlayerBet:number):void{//Called _AFTER_ the money transfers have already taken place
        //_AND_ after the player enters their bet amount
        updateDisplay("You bet $"+passedPlayerBet);
        updateDisplay("Opponent matches $"+passedPlayerBet);
        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    }

    firstPointRolled():void{
        updateDisplay(this.game.getNumberRolled()+" was rolled... that's our new point.");
        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet now.");
        this.printPots();
        this.enterAnyKeyToContinue();

    }
    neitherWinsAnyPot():void{
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled... nothing special.");
        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet now.");
        this.printPots();
        this.enterAnyKeyToContinue();
    }
    playerWinsSidePot():void{

        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and you won the Side Pot!");
        updateDisplay("$"+this.game.getSidePot().getMoney()+" from Side Pot");

        this.player.Wallet.addMoney(this.game.emptySidePot());

        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet now");
        this.printPots();

        this.enterAnyKeyToContinue();

        this.sidePotBet=0;
    }
    opponentWinsSidePot():void{
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and your opponent won the Side Pot!");
        updateDisplay("$"+this.game.getSidePot().getMoney()+" from Side Pot");

        this.sidePotBet=this.game.emptySidePot();

        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet now");
        this.printPots();

        this.enterAnyKeyToContinue();

        this.sidePotBet=0;
    }
    opponentWinsBothPots():void{
        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and your opponent won everything!");
        updateDisplay("$"+this.game.getMainPot().getMoney()+" from Main Pot");
        updateDisplay("$"+this.game.getSidePot().getMoney()+" from Side Pot");

        this.mainPotBet=this.game.emptyPot();
        this.sidePotBet=this.game.emptySidePot();

        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet now");
        this.printPots();

        this.enterAnyKeyToContinue();

        this.mainPotBet=0;
        this.sidePotBet=0;
    }
    playerWinsBothPots():void{

        updateDisplay("A "+this.game.getNumberRolled()+" was rolled, and you won everything!");
        updateDisplay("$"+this.game.getMainPot().getMoney()+" from Main Pot");
        updateDisplay("$"+this.game.getSidePot().getMoney()+" from Side Pot");

        this.player.Wallet.addMoney(this.game.emptyPot());
        this.player.Wallet.addMoney(this.game.emptySidePot());

        updateDisplay("You have $"+this.player.Wallet.getMoney()+" in your wallet now");
        this.printPots();

        this.enterAnyKeyToContinue();
        this.mainPotBet=0;
        this.sidePotBet=0;
    }

    welcomePlayer():void{
        updateDisplay("Hello, "+this.player.Name+". Welcome to the Craps table.");
        updateDisplay("Roll to determine who goes first!");
    }
    changeTurns():void{
        this.resetFlags();
        this.game.changePlayerTurn();
    }
    resetFlags():void{
        this.mainPotBet=0;
        this.sidePotBet=0;
        this.pointSet=false;
        this.pointMet=false;
        this.crappedOut=false;
        this.game.resetTurn();
    }

    printPots():void{
        updateDisplay("$"+this.game.getMainPot().getMoney()+" now in Main Pot");
        updateDisplay("$"+this.game.getSidePot().getMoney()+" now in Side Pot</br>");
    }
    enterAnyKeyToContinue():void{

    }
}