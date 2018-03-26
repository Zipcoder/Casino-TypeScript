class App {
   public static main(): void{
      var profile = new Profile(123,"Bob", 100);
      var  newPlayer = new Player(profile);
      var mainMenu = new MainMenu;
      var craps : Craps = new Craps(newPlayer)
      mainMenu.start();
    
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
        setOfDice: Dice;
        crapsPlayer: Player;
        betAmount: any;
        betUserPlaces: any;
        rollValue: number;

        constructor(player: Player){
            this.crapsPlayer = player;
            this.userPlacesBet = this.userPlacesBet.bind(this);
        }

        userPlacesBet(){
            UI.submitButton.removeEventListener("click", this.userPlacesBet);
            if (UI.lastInput === "Pass Line"){
              this.passLineBetTurnSequence(this.rollValue); 
            } else if(UI.lastInput === "Don't Pass Line"){
                this.dontPassLineBetTurnSequence(this.rollValue)
            }
            UI.clearScreen();
        }
    
        userBetAmount(){
            UI.display("Please enter your bet amount down below");
            if(this.betAmount > this.crapsPlayer.getBalance()){
                    UI.display("You can't bet that much!");
            } else{
                    this.betAmount = UI.lastInput();
            }
            UI.clearScreen();
        }

        addDiceTogether(): number{
            UI.display("Rolling Dice");
            this.rollValue = this.setOfDice.rollDice() + this.setOfDice.rollDice();
            return this.rollValue;
        }

        passLineBetTurnSequence(rollValue: number): void {
            if (rollValue === 7 || rollValue === 11) {
                this.playerWins();
            } else if (rollValue === 2 || rollValue === 3 || rollValue === 12) {
                this.playerLoses();
            } else {
                this.passLineBetRollsNonWinOrLoseNumber(rollValue);
            }
        }

        passLineBetRollsNonWinOrLoseNumber(rollValue: number): void {
          let currentRoll= 0;
            do {
                currentRoll = this.addDiceTogether();
    
                if (currentRoll === 7) {
                    this.playerLoses();
                    break;
    
                } else if (currentRoll === this.rollValue) {
    
                    this.playerWins();
                    break;
                }
            } while (currentRoll !== 7 || currentRoll !== this.rollValue);
    
        }


    dontPassLineBetTurnSequence(rollValue: number): void {
        if (rollValue == 2 || rollValue == 3) {
            this.playerWins();
        } else if (rollValue == 7 || rollValue == 11) {
            this.playerLoses();
        } else {
            this.dontPassLineBetRollNonWinLoseNumber(rollValue);
        }
    }
   dontPassLineBetRollNonWinLoseNumber(rollValue: number) {
        let currentRoll = 0;
        do {
            currentRoll = this.addDiceTogether();

            if (rollValue === 7) {
                this.playerWins();
                break;
            } else if (currentRoll === rollValue) {
                this.playerLoses();
                break;
            }
        } while (currentRoll !== 7 || currentRoll !== rollValue);

    }

        playerWins(){
            UI.display("You Win!");
        }

        playerLoses(){
            UI.display("You Lose!");
        }

        willUserPlayAgain(){
            UI.display("Do you want to play again? Y/N")
        }
        startGame(){
        UI.display("Hello! Please enter in Pass Line or Don't Pass Line for you bet below");
        UI.submitButton.addEventListener("click", this.userPlacesBet);
        this.rollValue = this.addDiceTogether();
        this.userPlacesBet();
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
            UI.display("Ok, that's cool. Good Bye!");
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

class Wallet{
    private balance: number;

    constructor(){
            this.balance = 0;
    }

    get Balance(){
        return this.balance;
    }

    add(money: number): void{
     this.balance =+ money;
    }

    subtract(money: number){
        this.balance =+ money;
    }
}
const instance = UI.Instance;
App.main();
