///<reference path="GoFish.ts"/>


class GoFishConsole{

    inputElement: any;
    displayElement: any;
    continueButton: any;
    quitButton: any;
    submitAskButton: any;
    reqValue:PlayingValue;
    game:GoFish;

    constructor(user:User){
        this.game=new GoFish(user);
    }

    getInput():string{
        let inputAlias:any = document.getElementById("ask_input");

        return inputAlias.value;
    }

    initialize():void{
        this.displayElement=document.getElementById("display");
        this.inputElement=document.getElementById("input");
        this.inputElement.innerHTML= '<input type="text" name="ask_input" id="ask_input">' +
            '<input type="submit" value="Ask" id="ask_submit" onclick="casino.goFish.playerAsks()"/>    '  +
            '<input type="button" value="Continue" id="continue" onclick="" disabled="true"/>' +
            '<input type="button" value="Quit" id="quit" onclick="casino.goFish.finalize()"/>';
        this.submitAskButton=document.getElementById("ask_submit");
        this.continueButton=document.getElementById("continue");
        this.quitButton=document.getElementById("quit");
    }
    finalize():void {
        this.displayElement.innerText = '';
        casino.run();
        return;
    }

    run():void{
        this.initialize();
        this.welcomePlayer();
        updateDisplay(this.game.tableString());
    }

    playerAsks():void{
        let textAsk:string = this.getInput();

        updateDisplay("You asked for "+textAsk);
        //Convert String to PlayingValue
        //Assign to reqValue
        if(this.game.playerAskForCard(this.reqValue)){
            updateDisplay("You got what you wanted!");
            updateDisplay("Ask again!");
        } else{
            updateDisplay("You didn't get what you wanted.");
            updateDisplay("Go Fish!");
            this.submitAskButton.setAttribute("value", "Go Fish!");
            this.submitAskButton.setAttribute("onclick", "casino.goFish.playerGoFish()");
            this.submitAskButton.setAttribute("disabled", "false");
        }
        updateDisplay(this.game.tableString());
    }

    playerGoFish():void{
        if (this.game.playerGoFish(this.reqValue)){
            updateDisplay("You got what you wanted!");
            updateDisplay("Ask again!");
            this.submitAskButton.setAttribute("value", "Ask");
            this.submitAskButton.setAttribute("onclick","casino.goFish.playerAsks()");
            this.submitAskButton.setAttribute("disabled", "false");
        } else{
            updateDisplay("You didn't get what you wanted.");
            updateDisplay("Opponent's turn.");
            this.submitAskButton.setAttribute("value", "Ask");
            this.submitAskButton.setAttribute("onclick", "casino.goFish.playerAsks()");
            this.submitAskButton.setAttribute("disabled", "true");
        }
        updateDisplay(this.game.tableString());
    }

    dealerAsks():void{
        let dealerHand=this.game.dealer.getHandValues();
        this.reqValue=dealerHand[parseInt(""+Math.random()*dealerHand.length)];

        if (this.game.dealerAskForCard(this.reqValue)){
            updateDisplay("Opponent got what they wanted!");
            updateDisplay("Opponent asks again!");
            updateDisplay(this.game.tableString());
            this.dealerAsks();
        } else{
            updateDisplay("Opponent didn't get what they wanted.");
            updateDisplay("Opponent Goes Fishing.");
            updateDisplay(this.game.tableString());
            this.dealerGoFish();
        }
    }

    dealerGoFish():void{
        if (this.game.dealerGoFish(this.reqValue)){
            updateDisplay("Opponent got what they wanted!");
            updateDisplay("Opponent asks again!");
            updateDisplay(this.game.tableString());
            this.dealerAsks();
        } else{
            updateDisplay("Opponent didn't get what they wanted.");
            updateDisplay("Your turn.");
            this.submitAskButton.setAttribute("value", "Ask");
            this.submitAskButton.setAttribute("onclick", "casino.goFish.playerAsks()");
            this.submitAskButton.setAttribute("disabled", "false");
            updateDisplay(this.game.tableString());
        }
    }

    welcomePlayer():void{
        updateDisplay("Hello, "+this.game.player.name+"! Welcome to the GoFish Table");
        updateDisplay("You may go first.");
    }

}