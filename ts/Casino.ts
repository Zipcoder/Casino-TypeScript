///<reference path="IO.ts"/>

class Casino{
    
        askForName(){
            let name: string = IO.getStringInput("Player Name:")
            IO.display(name)   
        }
    
        askForMoney(){
            let amount: any = IO.getNumberInput("Money Pot:")
            IO.display(amount)  
        }

        askWhichGameToPlay(){
            let name: string =IO.getStringInput("~~Pick a Game to Play: Street Craps or BlackJack~~ Click Below")
        }

createPlayer():void{
    let namePlayer: any = document.getElementById("user_input");
    let moneyPlayer: any = document.getElementById("money_input");
    
}
}