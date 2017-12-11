class Craps{

    displayElement:any
    userInputElement:any
    point: number
    openingMessage: string
    messageAfterFirstThrow: string
    messageAfterSecondThrow: string
    betInput:any
    player:Player

    constructor(player:Player){
        this.displayElement = document.getElementById("display")
        this.userInputElement=document.getElementById("user_input");
        this.betInput = document.getElementById("betAmount");
        this.player= player;
    }

//telling it to go to the html file and link it to this typescript class
    play():void{
        let play = document.getElementById("playStreetCraps");
        let firstThrow = document.getElementById("firstThrow");
        let secondThrow = document.getElementById("secondThrow");
        let newGame = document.getElementById("newStreetCrapsGame");
        play.setAttribute("hidden", "true");
        firstThrow.removeAttribute("hidden");
        secondThrow.removeAttribute("hidden");
        newGame.removeAttribute("hidden");
    }

showOpeningMessage(){
    this.openingMessage = "~Welcome to Street Craps~" + this.player.getName()
    return this.openingMessage
}
getName(){

}

showOpeningMsgCrapsHTML(){
        this.displayElement.innerHTML =  this.showOpeningMessage()
    
    }




initialThrow(){
    let diceRollSumOne = dice.rollDice(2);
    switch(diceRollSumOne){
  
    case 7: 
    case 11:
    this.messageAfterFirstThrow = "Your rolled a " + diceRollSumOne + ". "+ "You Win!"
// betamount + gambling money
    this.point = 1
    break;

    case 2:
    case 3:
    case 12:
    this.messageAfterFirstThrow = "You rolled a " + diceRollSumOne + ". " + "Sorry, you lose..."
//gambling money - betamount
    this.point = 0
    break;

    default: 
    this.messageAfterFirstThrow = "You rolled a " + diceRollSumOne + ". "+ "Click on Second Throw."
    this.point = diceRollSumOne;
    break;
    }
    return this.messageAfterFirstThrow;
}

firstThrowHTML(){
    this.displayElement.innerHTML += "<br/>" + this.initialThrow();
}

afterFirstThrowPoint(){
let pointAfterFirstThrow= this.point 
return pointAfterFirstThrow
}

secondThrow(){
    let diceRollSumTwo = dice.rollDice(2);
    
    console.log("You rolled a " + diceRollSumTwo)

    if(diceRollSumTwo == this.point){
        this.messageAfterSecondThrow = "You rolled a " + diceRollSumTwo + ". " + "You Win!"
    }
    else if(diceRollSumTwo == 7){
        this.messageAfterSecondThrow = "You rolled a " + diceRollSumTwo + ". " + "You Lose!"
    }
    else{
        this.messageAfterSecondThrow = "Meep, you rolled a " + diceRollSumTwo + ". Roll Again. "  }
        return this.messageAfterSecondThrow
}

secondThrowHTML(){
    this.displayElement.innerHTML += "<br/>" + this.secondThrow();
}
}