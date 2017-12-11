class Dice{

displayElement:any
userInputElement:any

constructor(){
    this.displayElement = document.getElementById("display")
    this.userInputElement=document.getElementById("user_input");
}

rollDice(diceNumber: number){

    var diceSum:number = 0
    var singleRandomNumber:number

    for(var i = 0; i <diceNumber; i++)
    {
        singleRandomNumber = Math.ceil(Math.random()*6)  // gives you one random number from one dice
        diceSum += singleRandomNumber;                   //adds up my random number from each dice
    }

    return diceSum
}


showDice(){
    this.displayElement.innerHTML +=this.rollDice(2);
}
}
