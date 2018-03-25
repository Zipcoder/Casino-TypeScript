class Craps{
    
    crapsPlayer: Player;
    betAmount: number = 0;
    betUserPlaces: any = 0;

    constructor(player: Player){
        this.crapsPlayer = player;
    }
    
    userPlacesBet(){
        document.write("Hello!, please enter in Pass Line or Don't pass line for you bet below");
        // event handler here for the bet type
        // set user bet places to the input
        UI.clearScreen();
    }

    userBetAmount(){
        document.write("Please enter your bet amount down below");
        if(this.betAmount > this.crapsPlayer.getBalance()){
                UI.display("You can't bet that much!");
        } else{

        }
        //event handler here for bet amount
        UI.clearScreen();
    }
    startGame(){
            
    }
 }


    
