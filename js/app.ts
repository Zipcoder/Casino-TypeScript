class Startup {

    public static main(): void {
        // var casino = new Casino();
        // casino.start();

        // var club = new Card(Rank.ACE, Suit.CLUBS);
        // var diamond = new Card(Rank.FIVE, Suit.DIAMONDS);
        // var spade = new Card(Rank.QUEEN, Suit.SPADES);
        // var heart = new Card(Rank.JACK, Suit.HEARTS);


        // UI.display(club);
        // UI.display(heart);
        // UI.display(spade);
        // UI.display(diamond);
        var deck = new Deck();
        deck.shuffle();
        for (var i = 0; i <= 51; i++) {
            UI.display(deck.deal());
        }

    }
}


class Profile {
    private static _lastId: number = 1;
    private _id: number;
    private _name: string;
    private _balance: number;

    constructor(name: string, balance: number) {
        this._id = Profile._lastId;
        Profile._lastId++;
        this._name = name;
        this._balance = balance;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get balance(): number {
        return this._balance;
    }

    public set balance(newBalance: number) {
        this._balance = newBalance;
    }

    public addToBalance(amount:number):void{
        this._balance += amount;
    }

}

interface PlayerInterface {

    getProfile(): Profile;
    getName(): string;
    getId(): number;

}

abstract class Player implements PlayerInterface {

    private _playerProfile: Profile;

    constructor(playerProfile: Profile) {
        this._playerProfile = playerProfile;
    }

    public getProfile(): Profile {
        return this._playerProfile;
    }

    public getName(): string {
        return this._playerProfile.name;
    }

    public getId(): number {
        return this._playerProfile.id;
    }

}

abstract class CardPlayer extends Player {

    private _hand: Hand;

    constructor(profile: Profile) {
        super(profile);
        this._hand = new Hand();
    }

    public takeCard(card: Card): void {
        this._hand.cards.push(card);
    }

    public discardAll(): void {
        while (this._hand.cards.length > 0) {
            this._hand.cards.pop();
        }
    }

    public get hand():Hand{
        return this._hand;
    }

}

class BlackJackPlayer extends CardPlayer implements Gamble {
    
    escrow:Escrow;
    
    constructor(profile:Profile){
        super(profile);
        this.escrow = new Escrow();
    }
    
    bet(amount: number): void {
        this.escrow.addToEscrowBalance(amount);
        this.getProfile().balance -= amount;
    }
    win(amount: number, multiplier: number): void {
        let winnings:number = this.escrow.escrowBalance + (this.escrow.escrowBalance * multiplier);
        this.getProfile().addToBalance(winnings);
        this.escrow.escrowBalance=0;
    }
    lose(): void {
        this.escrow.escrowBalance=0;
    }
}

class Escrow{

    private _escrowBalance:number;
    
    constructor(){
        this._escrowBalance = 0;
    }

    public get escrowBalance():number{
        return this._escrowBalance;
    }

    public set escrowBalance(amount:number){
        this._escrowBalance=amount;
    }

    public addToEscrowBalance(amount:number){
        this._escrowBalance+=amount;
    }

    

}

enum Suit {
    HEARTS,
    CLUBS,
    DIAMONDS,
    SPADES

}

enum Rank {
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    ACE
}

class Card {

    private _suit: Suit;
    private _rank: Rank;

    constructor(rank: Rank, suit: Suit) {
        this._suit = suit;
        this._rank = rank;
    }

    public get suit(): Suit {
        return this._suit;
    }

    public get rank(): Rank {
        return this._rank;
    }

    public toString(): string {
        if (this._suit === Suit.CLUBS) {
            return Rank[this._rank] + ' \u{2663}';
        }
        else if (this._suit === Suit.DIAMONDS) {
            return Rank[this._rank] + ' \u{2666}';
        }
        else if (this._suit === Suit.SPADES) {
            return Rank[this._rank] + ' \u{2660}';
        }
        else if (this._suit === Suit.HEARTS) {
            return Rank[this._rank] + ' \u{2665}';
        }
        else {
            throw new Error("Something has gone horribly wrong");
        }

    }


}

class Deck {

    private _cards: Card[];

    constructor() {
        this._cards = new Array<Card>();
        this.populate();
    }

    public deal(): Card {
        return this._cards.pop();
    }

    public shuffle(): void {
        this._cards.sort(function (a, b) { return 0.5 - Math.random() });
    }

    private populate(): void {
        for (let suit = Suit.HEARTS; suit <= Suit.SPADES; suit++) {
            for (let rank = Rank.TWO; rank <= Rank.ACE; rank++) {
                this._cards.push(new Card(rank, suit))
            }
        }
    }

}

class Hand {
    private _cards: Card[];

    constructor() {
        this._cards = new Array<Card>();
    }

    public get cards(): Card[] {
        return this._cards;
    }

}

interface GameInterface<PlayerInterface> {

    getPlayers(): PlayerInterface[];
    getPlayer(playerId: number): PlayerInterface;
    addPlayer(player: PlayerInterface): void;
    removePlayer(player: PlayerInterface): void;
    contains(player: PlayerInterface): boolean;

}

interface GameEngineInterface<GameInterface, PlayerInterface> {

    run(): void;
    getGame(): GameInterface;
    evaluateTurn(player: PlayerInterface): void;

}

abstract class GameEngine implements GameEngineInterface<GameInterface<PlayerInterface>, PlayerInterface>{

    private _game: GameInterface<PlayerInterface>;

    constructor(game: GameInterface<PlayerInterface>) {
        this._game = game;

    }
    abstract run(): void;
    abstract evaluateTurn(player: PlayerInterface): void;

    public getGame(): GameInterface<PlayerInterface> {
        return this._game;
    }

}

interface Gamble {

    escrow:Escrow;

    bet(amount: number): void;
    win(amount: number, multiplier: number): void;
    lose(): void;

}


abstract class CardGame extends GameEngine implements GameInterface<CardPlayer> {

    private _players: CardPlayer[];
    private _deck: Deck;

    constructor(game: CardGame) {
        super(game);
        this._players = new Array;
        this._deck = new Deck();

    }


    public get deck(): Deck {
        return this._deck;
    }


    getPlayers(): CardPlayer[] {
        return this._players;

    }

    getPlayer(playerId: number): CardPlayer {
        this._players.forEach(element => {
            if (element.getId() === playerId) {
                return element;
            }
        });
        throw new Error("Player not found");
    }

    addPlayer(player: CardPlayer): void {
        this._players.push(player);
    }

    removePlayer(player: CardPlayer): void {
        this._players.splice(this._players.indexOf(player), 1);
    }

    contains(player: CardPlayer): boolean {
        this._players.forEach(element => {
            if (element === player) {
                return true;
            }
        });
        return false;
    }
}

class BlackJackGame extends CardGame {

    run(): void {

    }

    evaluateTurn(player: BlackJackPlayer): void {

    }



}



class Casino {


    constructor() {
        this.chooseGame = this.chooseGame.bind(this);
    }

    start() {
        UI.display("What game do you want to play?");
        UI.display("Black Jack or Go Fish?");
        UI.button.addEventListener("click", this.chooseGame);
    }

    chooseGame(): void {
        UI.button.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Black Jack") {



        }
        else if (UI.lastInput === "Go Fish") {


        }
        else {
            UI.button.addEventListener("click", this.chooseGame);
        }
    }


}

class UI {
    static userInput = <HTMLInputElement>document.getElementById("user_input");
    static window = <HTMLDivElement>document.getElementById('display');
    static button = <HTMLDivElement>document.getElementById('submit');
    static _lastInput: any;
    private static _instance: UI;

    private constructor() {
        UI.button.addEventListener("click", (e: Event) => { UI._lastInput = UI.userInput.value });
        UI.button.addEventListener("click", (e: Event) => { UI.userInput.value = '' });
    }

    static display(input: any): void {
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

const UIInstance = UI.Instance;
Startup.main();