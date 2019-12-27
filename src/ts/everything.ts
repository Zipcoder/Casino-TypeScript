namespace Everything{

export class UserInterface {
    
    war:War;
    blackJack:BlackJack;
    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.chooseGame = this.chooseGame.bind(this);
        this.war = new War();
        this.blackJack = new BlackJack();
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

export interface PlayerInterface{
    name: string;
    id: number;
    wallet: number;
     
 }

export class Player implements PlayerInterface {
    
    name: string;
    id: number;
    wallet: number;

    constructor(name: string){
    }

    setName(name:string):void{
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setId(id:number):void{
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    setWallet(chips:number):void{
        this.wallet = chips;
    }

    getWallet(): number{
        return this.wallet;
    }
}

export class War implements GameInterface{

    isGameRunning: boolean;
    players: Player[];
    userHand: Card[];
    dealerHand: Card[];
    tableCards: Card[];

    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor() {
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.start = this.start.bind(this);

        this.isGameRunning = true;
        this.players = new Array<Player>(new Player("dealer") ,new Player("player"));
        let deck: Deck = new Deck();
        this.userHand = deck.splitDeck();
        this.dealerHand = deck.getDeck();
        this.tableCards = new Array<Card>();
    }

    getPlayers(): Player[] {
        return this.players;
    }

    getPlayer(id: number): Player {
        let temp: Player = new Player("");
        this.players.forEach(p => {
            if(p.getId() == id){
                temp = p;
            }
        });
        return temp;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    removePlayer(player: Player): void {
        this.players = this.players.filter(p => p.getId() != player.getId());
    }

    public start():void{
        this.button.removeEventListener("click",(e:Event)=>war.start());

        this.display("Welcome to War");
        do{
            this.engine();
        } while (this.dealerHand.length<52 && this.userHand.length<52);
        
    }

    public display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }

    public engine():void{
        let dealerTableCard: Card;
        let userTableCard: Card;
        
    }

    public iDeclareWar():void{

    }


    public end(): void {
        this.isGameRunning = false;
    }

}

let war: War = new War();
war.start();

export interface GameInterface {

    players: Array<Player>;

    start():void;
    engine():void;
    end():void;

    getPlayers(): Player[];
    getPlayer(id:number): Player;
    addPlayer(player:Player): void;
    removePlayer(player:Player): void;
}

export class BlackJack implements GameInterface{
    

    player: Player;
    dealer: Player;
    deck: Deck;
    players: Player[] = [];
    isGameRunning: boolean;

    public userInput: HTMLInputElement = <HTMLInputElement>document.getElementById('user_input');
    public displayWindow: HTMLDivElement = <HTMLDivElement>document.getElementById('display');
    public button: HTMLDivElement = <HTMLDivElement>document.getElementById('submit');
    public _lastInput: any;

    constructor(){
        this.button.addEventListener("click", (e: Event) => { this._lastInput = this.userInput.value });
        this.button.addEventListener("click", (e: Event) => { this.userInput.value = '' });
        this.start = this.start.bind(this);

        this.deck = new Deck();
        this.players = new Array<Player>(this.player,this.dealer);
    };


    public start(): void{
        this.button.removeEventListener("click",(e:Event)=>blackJack.start());
        this.display("Welcome to War");
        this.isGameRunning = true;
    }

    public display(input: any): void {
        this.displayWindow.innerText += input + '\n';
    }
  
    getPlayers(): Player[] {
        return this.players;
    }
    getPlayer(id: number): Player {
        let temp: Player = new Player("");
        this.players.forEach(p => {
            if(p.getId() == id){
                temp = p;
            }
        });
        return temp;
        // let player1: Player = new Player("");
        // let index: number =this.players.findIndex(p => p.getId() == id);
        // return player1;
    }
    
    addPlayer(player: Player): void {
        this.players.push(player);
    }

    removePlayer(player: Player): void {
        this.players = this.players.filter(p => p.getId() != player.getId());
    }

    engine(): void {
        throw new Error("Method not implemented.");
    }
    end(): void {
        throw new Error("Method not implemented.");
    }

}
let blackJack: BlackJack = new BlackJack();
blackJack.start();

export enum Suit{
    HEARTS = "\u2665", CLUBS = "\u2663", SPADES = "\u2660", DIAMONDS = "\u2666",
}

export enum Rank{
    ACE = 1, TWO = 2, THREE = 3, FOUR = 4, FIVE = 5, SIX = 6, SEVEN = 7, EIGHT = 8, NINE = 9, TEN = 10, 
    JACK = 11, QUEEN = 12, KING = 13,
}

export class Card{
    suit: Suit;
    rank: Rank; 

    constructor(){}
}

export class Deck extends Card {
    
    _deck: Card[];
    
    constructor(){
        super();
        this._deck = new Array<Card>();
        let fullSuit: Suit[] = new Array<Suit>(Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES);
        let fullRank: Array<Rank> = new Array<Rank>(Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, 
            Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN,Rank.JACK, Rank.QUEEN, Rank.KING);
        for(let suit of fullSuit){
            for(let rank of fullRank){
                this._deck.push({suit, rank});
            }
        }
        for(let i =this._deck.length-1; i>=0; i--){
            let randomI = Math.floor(Math.random()*(i+1));
            let temp:Card = this._deck[i];
            this._deck[i] = this._deck[randomI];
            this._deck[randomI] = temp;
        }
    }


getDeck(){
    return this._deck;
}

shuffleDeck():Array<Card>{
    for(let i =this._deck.length-1; i>=0; i--){
        let randomI = Math.floor(Math.random()*(i+1));
        let temp:Card = this._deck[i];
        this._deck[i] = this._deck[randomI];
        this._deck[randomI] = temp;
    }
    return this._deck;
}

drawCard():Card{
    return this._deck.pop();
}

splitDeck():Card[]{
    return this._deck.splice(0, (this._deck.length-1)/2);
}

addCard(card:Card):void{
    this._deck.push(card);
}

dealHand(nCards:number):Array<Card>{
    return this._deck.splice(0, nCards);
}

}
}