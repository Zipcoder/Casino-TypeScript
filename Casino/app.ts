class App {
        newMainMenu = new MainMenu;
   public static main(): void{

   }
}
class UI{
    static userInput = <HTMLInputElement>document.getElementById("user_input");
        static window = <HTMLDivElement>document.getElementById('display');
        static submitButton = <HTMLDivElement>document.getElementById('submit');
        static _lastInput: any;
        private static _instance: UI;
    
        private constructor() {
            UI.submitButton.addEventListener("click", (e: Event) => { UI._lastInput = UI.userInput.value });
            UI.submitButton.addEventListener("click", (e: Event) => { UI.userInput.value = '' });
        }
    
        static display(input: string): void {
            this.window.innerText += input + '\n';
        }
    
        static clearScreen(): void {
            this.window.innerText = '';
        }
    
        public static get Instance(): UI {
            return this._instance || (this._instance = new UI());
        }
    
        public static get lastInput(): any {
            return this._lastInput;
        }  
}

class Craps{
    
        crapsPlayer: Player;
        betAmount: number = 0;
        betUserPlaces: any = 0;
    
        constructor(player: Player){
            this.crapsPlayer = player;
        }
        
        userPlacesBet(){
            UI.display("Hello!, please enter in Pass Line or Don't pass line for you bet below");
            // event handler here for the bet type
            // set user bet places to the input
    
            UI.clearScreen();
        }
    
        userBetAmount(){
            UI.display("Please enter your bet amount down below");
            if(this.betAmount > this.crapsPlayer.getBalance()){
                    UI.display("You can't bet that much!");
            } else{
              //event handler here for bet amount      
            }
            UI.clearScreen();
        }
        
        startGame(){
                
        }
}

class Dice{
    sides = 6;
    rollDice(){
        
    }
}

class MainMenu{
    mainPlayer: Player;
    newCrapsGame = new Craps(this.mainPlayer);
    constructor(){
        this.chooseGame = this.chooseGame.bind(this);
    }

    start() {
        UI.display("What game do you want to play?");
        UI.display("Craps or Craps?");
        UI.submitButton.addEventListener("click", this.chooseGame);
    }

     chooseGame(): void {
        UI.submitButton.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Craps") {
           this.newCrapsGame.startGame();
    
        } else {
            UI.display("Too bad you're playing Craps!");
            this.newCrapsGame.startGame();
        }
    }


}

class Player implements PlayerInterface {
    
    private playerProfile: Profile;

    constructor(profile: Profile){
        this.playerProfile = profile;
    }
    getProfile(): Profile {
        return this.playerProfile;
    }
    getName(): string {
       return this.playerProfile.getName;
    }
    getId(): number {
        return this.playerProfile.getId;
    }

    getBalance(): number{
        return this.playerProfile.getBalance;
    }
}

interface PlayerInterface{
    getProfile(): Profile;
    getName(): string;
    getId(): number;
} 

class Profile{
    private id: number;
    private name: string;
    private balance: number;
 
    public listOfProfiles: Profile[];
     
     constructor(id, name, balance){
         this.id = id;
         this.name = name;
         this.balance = balance;
     }
     get getName(){
         return this.name;
     }
 
     get getId(){
         return this.id;
     }
 
     get getBalance(){
         return this.balance;
     }
 
     set setId(id){
         this.id = id;
     }
 
     set setName(name){
         this.name = name;
     }
 
     set setBalance(balance){
         this.balance = balance;
     }
 
     public addProfile(profile: Profile): void{
         this.listOfProfiles.push(profile);
     }
     
}

const instance = UI.Instance;
App.main();
