class Dice{

displayElement:any

constructor(){
    this.displayElement = document.getElementById("display")
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
