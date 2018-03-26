class App {
   public static main(): void{
      var profile = new Profile(123,"Bob", 100);
      var  newPlayer = new Player(profile);
       var craps : Craps = new Craps(newPlayer)
       craps.startGame();
       craps.userPlacesBet();
   
   }
}
class UI{
        static textBox = <HTMLInputElement>document.getElementById("user_input");
        static displayWindow = <HTMLDivElement>document.getElementById('display');
        static submitButton = <HTMLDivElement>document.getElementById('submit');
        static actualUserInput: any;
        private static instance: UI;
    
        private constructor() {
            UI.submitButton.addEventListener("click", (e: Event) => { UI.actualUserInput = UI.textBox.value });
            UI.submitButton.addEventListener("click", (e: Event) => { UI.textBox.value = '' });
        }
    
        static display(input: string): void {
            this.displayWindow.innerText += input + '\n';
        }
    
        static clearScreen(): void {
            this.displayWindow.innerText = '';
        }
    
        public static get Instance(): UI {
            return this.instance || (this.instance = new UI());
        }
    
        public static get lastInput(): any {
            return this.actualUserInput;
        }  
}

class Craps{
    
        crapsPlayer: Player;
        betAmount: any;
        betUserPlaces: any;
    
        constructor(player: Player){
            this.crapsPlayer = player;
            this.userPlacesBet = this.userPlacesBet.bind(this);
             

        }

        userPlacesBet(){
            UI.submitButton.removeEventListener("click", this.userPlacesBet);
            if (UI.lastInput === "Pass Line"){
              UI.display("Hello");  
            } else{
                UI.display("Bye");
            }
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
        UI.display("Hello!, please enter in Pass Line or Don't pass line for you bet below");
        UI.submitButton.addEventListener("click", this.userPlacesBet);
        }
}

class Dice{
    sides = 6;
    rollDice(){
        var randNumber = Math.floor(Math.random()* this.sides) + 1;
        return randNumber;
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
