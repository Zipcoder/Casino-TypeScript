namespace game{
export class UserInterface {
    war:War;
    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.chooseGame = this.chooseGame.bind(this);
        this.war = new War();
    }

    display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }

    clearScreen(): void {
        this.displayWindow.innerText = '';
    }

    lastInput(): any {
        return this._lastInput;
    }

    start() {
        this.display("Do you want to play? (yes/no)");
        this.button.addEventListener("click", (e:Event) => this.chooseGame());
    }
    
    chooseGame(): void {
        if (this.lastInput() === "yes") {
            this.button.removeEventListener("click",(e:Event)=>this.chooseGame());
            this.clearScreen();
            this.display("Let's Go To War!");
            this.button.addEventListener("click",(e:Event)=>this.war.start());
        
        }
        else if (this.lastInput() === "no") {
            this.clearScreen();
            this.display("Well fine then, be that way.  Bye.");

        }
        else {
            this.button.addEventListener("click", (e:Event) => this.chooseGame());

        }
    }

}


let UI: UserInterface = new UserInterface();
UI.start();

// class War{

//     private isGameRunning: boolean;
//     private dealer: Player;
//     private player: Player;
//     private deck: Deck;
//     private dealerHand: Card[] = [];
//     private playerHand: Card[] = [];
//     private dealerPlayedCards: Card[] = [];
//     private playerPlayedCards: Card[] = [];


//     public start():void{

// //        this.display("Welcome to War");
//         this.isGameRunning = true;
//         this.dealerHand = this.deck.shuffleDeck();
//         this.playerHand = this.deck.splitDeck();
//  //       console.log(this.dealerHand.length);
//         this.engine();
//     }

//     // display(input: any): void {
//     //     this.displayWindow.innerText += input + '\n';
//     // }

//     engine():void{
//         while(((this.dealerHand.length + this.dealerPlayedCards.length) < 52) 
//         && ((this.playerHand.length + this.playerPlayedCards.length) <52)){
//             // if(this.playerHand.length == 0 && this.playerPlayedCards.length>0){
//             //     this.playerHand = this.playerPlayedCards;
//             //     this.playerPlayedCards = 
//             // }
//             let card1 = this.dealerHand.pop();
//             let card2 = this.playerHand.pop();
//             if(card1.rank>card2.rank){
//                   this.dealerPlayedCards.push(card1, card2);
//                 } else if(card1.rank == card2.rank){
//                     this.iDeclareWar();
//                 }
//                 else{
//                     this.playerPlayedCards.push(card1, card2);
//                 }
//         }
//     }

//     private iDeclareWar():void{

//     }

// }

// // let war: War = new War();
// // war.start();

}