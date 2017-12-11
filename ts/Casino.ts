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

    // createPlayer(){
    //     let namePlayer: any = document.getElementById("user_input");
    //     let moneyPlayer: any = document.getElementById("money_input");

    //     IO.display(namePlayer)
    //     IO.display(moneyPlayer)
    // }
}