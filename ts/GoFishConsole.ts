///<reference path="GoFish.ts"/>

class GoFishConsole{

    inputElement: any;
    displayElement: any;
    continueButton: any;
    quitButton: any;
    submitAskButton: any;

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
            '<input type="submit" value="Ask" id="ask_submit" onclick="casino.goFish.playerAsks()" disabled="false"/>    '  +
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

    playerAsks(){


    }

    welcomePlayer():void{
        updateDisplay("Hello, "+this.game.player.name+"! Welcome to the GoFish Table");
        updateDisplay("You may go first.");
    }

}