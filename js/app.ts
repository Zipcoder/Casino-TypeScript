class Startup {

    public static main(): void {
        var casino = new Casino();
        casino.start();
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

    public addToBalance(amount: number): void {
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

    public get hand(): Hand {
        return this._hand;
    }

}

class BlackJackPlayer extends CardPlayer implements Gamble {

    escrow: Escrow;
    private _busted: boolean;
    private _stand: boolean;
    private _score: number;

    constructor(profile: Profile) {
        super(profile);
        this.escrow = new Escrow();
    }

    bet(amount: number): void {
        this.escrow.addToEscrowBalance(amount);
        this.getProfile().balance -= amount;
    }
    win(multiplier: number): void {
        let winnings: number = this.escrow.escrowBalance + (this.escrow.escrowBalance * multiplier);
        this.getProfile().addToBalance(winnings);
        this.escrow.escrowBalance = 0;
    }
    lose(): void {
        this.escrow.escrowBalance = 0;
    }

    public get busted(): boolean {
        return this.busted;
    }

    public set busted(state: boolean) {
        this._busted = state;
    }

    public get stand(): boolean {
        return this._stand;
    }

    public set stand(state: boolean) {
        this._stand = state;
    }

    public get score(): number {
        return this._score;
    }

    public set score(amount: number) {
        this._score = amount;
    }

    public isBusted(): boolean {
        if (this._score > 21) {
            return true;
        }
        else {
            return false;
        }
    }

    public calculateScore(): void {
        let hasAce: boolean = false;
        let tempScore: number = 0;
        this.hand.cards.forEach(element => {
            if (element.rank === Rank.TWO) tempScore += 2;
            else if (element.rank === Rank.THREE) tempScore += 3;
            else if (element.rank === Rank.FOUR) tempScore += 4;
            else if (element.rank === Rank.FIVE) tempScore += 5;
            else if (element.rank === Rank.SIX) tempScore += 6;
            else if (element.rank === Rank.SEVEN) tempScore += 7;
            else if (element.rank === Rank.EIGHT) tempScore += 8;
            else if (element.rank === Rank.NINE) tempScore += 9;
            else if (element.rank === Rank.TEN) tempScore += 10;
            else if (element.rank === Rank.JACK) tempScore += 10;
            else if (element.rank === Rank.QUEEN) tempScore += 10;
            else if (element.rank === Rank.KING) tempScore += 10;
            else if (element.rank === Rank.ACE) {
                tempScore += 11;
                hasAce = true;
            }
        });
        if (tempScore > 21 && hasAce) {
            tempScore = 0;
            this.hand.cards.forEach(element => {
                if (element.rank === Rank.TWO) tempScore += 2;
                else if (element.rank === Rank.THREE) tempScore += 3;
                else if (element.rank === Rank.FOUR) tempScore += 4;
                else if (element.rank === Rank.FIVE) tempScore += 5;
                else if (element.rank === Rank.SIX) tempScore += 6;
                else if (element.rank === Rank.SEVEN) tempScore += 7;
                else if (element.rank === Rank.EIGHT) tempScore += 8;
                else if (element.rank === Rank.NINE) tempScore += 9;
                else if (element.rank === Rank.TEN) tempScore += 10;
                else if (element.rank === Rank.JACK) tempScore += 10;
                else if (element.rank === Rank.QUEEN) tempScore += 10;
                else if (element.rank === Rank.KING) tempScore += 10;
                else if (element.rank === Rank.ACE) {
                    tempScore += 1;
                }
            });
        }
        this._score = tempScore;
    }

}

class Escrow {

    private _escrowBalance: number;

    constructor() {
        this._escrowBalance = 0;
    }

    public get escrowBalance(): number {
        return this._escrowBalance;
    }

    public set escrowBalance(amount: number) {
        this._escrowBalance = amount;
    }

    public addToEscrowBalance(amount: number) {
        <number>this._escrowBalance;
        <number>amount;
        this.escrowBalance = this.escrowBalance + amount;
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

    public getSize():number{
        return this._cards.length;
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
    evaluateTurn(player: PlayerInterface): void;

}

abstract class GameEngine implements GameEngineInterface<GameInterface<PlayerInterface>, PlayerInterface>{


    abstract run(): void;
    abstract evaluateTurn(): void;



}

interface Gamble {

    escrow: Escrow;

    bet(amount: number): void;
    win(multiplier: number): void;
    lose(): void;

}


abstract class CardGame extends GameEngine implements GameInterface<CardPlayer> {

    private _players: CardPlayer[];
    private _deck: Deck;

    constructor() {
        super();
        this._players = new Array<CardPlayer>();
        this._deck = new Deck();
        this._deck.shuffle();
    }


    public get deck(): Deck {
        return this._deck;
    }

    public replaceDeck(){
        this._deck = new Deck();
        this._deck.shuffle();
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

    currentPlayer: BlackJackPlayer;
    dealer: BlackJackPlayer;

    constructor(playerProfile: Profile) {
        super();
        this.dealer = new BlackJackPlayer(new Profile('Dealer', 0));
        this.currentPlayer = new BlackJackPlayer(playerProfile);
        this.addPlayer(this.dealer);
        this.addPlayer(this.currentPlayer);
        this.startRound = this.startRound.bind(this);
        this.placeBet = this.placeBet.bind(this);
        this.run = this.run.bind(this);
        this.initialDeal = this.initialDeal.bind(this);
        this.restart = this.restart.bind(this);
        this.naturalCheck = this.naturalCheck.bind(this);
        this.nextMove = this.nextMove.bind(this);
        this.hitOrStand = this.hitOrStand.bind(this);
    }

    start():void{
        UI.clearScreen();
        this.header();
        UI.display("Welcome to Black Jack");
        UI.display("Press [submit] to begin");
        UI.button.addEventListener("click", this.run, { once: true });
    }
    
    run(): void {
        this.startRound();
    }

    evaluateTurn(): void {
        UI.clearScreen();
        this.tallyScores();
        this.dealerTurn();
        this.tallyScores();
        this.header();
        this.showCards(false);
        if (!this.isWinner()) {
            this.nextMove(false);
        }
        if (this.currentPlayer.stand) {
            this.evaluateTurn();
        }

    }

    private isWinner(): boolean {
        if (this.currentPlayer.isBusted() && this.dealer.isBusted()) {
            this.currentPlayer.win(0);
            this.endScreen();
            UI.display("You and the Dealer are both Bust");
            UI.display("You break even");
            this.restart();
            return true;
        }
        else if (this.currentPlayer.isBusted()) {
            this.currentPlayer.lose();
            this.endScreen();
            UI.display("You went Bust");
            UI.display("You lose your bet");
            this.restart();
            return true;
        }
        else if (this.dealer.isBusted()) {
            this.currentPlayer.win(1);
            this.endScreen();
            UI.display("The Dealer went Bust!");
            UI.display("Your bet pays even money!");
            this.restart();
            return true;
        }
        else if (this.currentPlayer.stand && this.dealer.stand) {
            if (this.currentPlayer.score === this.dealer.score) {
                this.currentPlayer.win(0);
                this.endScreen();
                UI.display("The Dealer has the same score as you. You push");
                UI.display("You break even");
                this.restart();
                return true;
            }
            else if (this.currentPlayer.score > this.dealer.score) {
                this.currentPlayer.win(1);
                this.endScreen();
                UI.display("You have a higher score. You win!");
                UI.display("Yor bet pays even money!");
                this.restart();
                return true;
            }
            else if (this.currentPlayer.score < this.dealer.score) {
                this.currentPlayer.lose();
                this.endScreen();
                UI.display("The Dealer has a higher score. You lose");
                UI.display("You lose your bet");
                this.restart();
                return true;
            }
        }
        else {
            return false;
        }
    }

    private endScreen(): void {
        UI.clearScreen();
        this.header();
        this.showCards(true);
    }

    private startRound(errorMessage?: string): void {
        this.currentPlayer.discardAll();
        this.dealer.discardAll();
        UI.clearScreen();
        this.header();
        UI.display("How much would you like to bet?");
        UI.display("The minimum bet is $10");
        if (typeof errorMessage !== "undefined") UI.display(errorMessage);
        UI.button.addEventListener("click", this.placeBet);
    }

    private placeBet(): void {
        UI.button.removeEventListener("click", this.placeBet);
        UI.clearScreen();
        if (UI.lastInput <= this.currentPlayer.getProfile().balance && UI.lastInput > 10) {
            this.currentPlayer.bet(parseInt(UI.lastInput));
            this.initialDeal();
        }
        else if (UI.lastInput < 10) {
            this.startRound("That amount is below the minimum bet");
        }
        else if (UI.lastInput > this.currentPlayer.getProfile().balance) {
            this.startRound("You cannot bet more money than you have");
        }
        else {
            this.startRound("You must input a number to place a bet");
        }
    }

    private initialDeal(): void {
        UI.clearScreen();
        this.currentPlayer.takeCard(this.deck.deal());
        this.dealer.takeCard(this.deck.deal());
        this.currentPlayer.takeCard(this.deck.deal());
        this.dealer.takeCard(this.deck.deal());
        this.tallyScores();
        this.header();
        this.showCards(false);
        let natural: boolean = this.naturalCheck();
        if (!natural) {
            this.nextMove(false);
        }



    }

    private dealerTurn(): void {
        if (this.dealer.score < 17) {
            this.dealer.takeCard(this.deck.deal());
        }
        else {
            this.dealer.stand = true;
        }
    }

    private nextMove(secondTime: boolean) {
        if (secondTime === true) {
            UI.clearScreen();
            this.header();
            this.showCards(false);
            UI.display("Invalid input detected");
            UI.display("Would you like to [hit] or [stand]?");
            UI.button.addEventListener("click", this.hitOrStand);
        }
        else {
            UI.display("Would you like to [hit] or [stand]?");
            UI.button.addEventListener("click", this.hitOrStand);
        }

    }

    private hitOrStand(): void {
        UI.button.removeEventListener("click", this.hitOrStand);
        if (UI.lastInput === 'hit') {
            this.currentPlayer.takeCard(this.deck.deal());
            this.evaluateTurn();
        }
        else if (UI.lastInput === 'stand') {
            this.currentPlayer.stand = true;
            this.evaluateTurn();
        }
        else { this.nextMove(true) }

    }

    private header(): void {
        UI.display("Current Player: " + this.currentPlayer.getProfile().name + "\t|\tCurrent Balance: $" + this.currentPlayer.getProfile().balance + "\t|\t Amount Wagered: $" + this.currentPlayer.escrow.escrowBalance);
        UI.display("");
    }

    private score(): void {
        UI.display("Current Score: " + this.currentPlayer.score)
    }

    private showCards(showHole: boolean): void {
        UI.display("Your Cards");
        let yourCards: string = this.currentPlayer.hand.cards[0].toString() + ' ';
        for (let i = 1; i < this.currentPlayer.hand.cards.length; i++) {
            yourCards += "| " + this.currentPlayer.hand.cards[i];
        }
        UI.display(yourCards);
        this.score();
        UI.display('');
        UI.display("Dealer Cards");
        if (showHole === false) {
            let dealerCards: string = "UNKNOWN ";
            for (let i = 1; i < this.dealer.hand.cards.length; i++) {
                dealerCards += "| " + this.dealer.hand.cards[i];
            }
            UI.display(dealerCards);
        }
        else if (showHole === true) {
            let dealerCards: string = this.dealer.hand.cards[0].toString() + ' ';
            for (let i = 1; i < this.dealer.hand.cards.length; i++) {
                dealerCards += "| " + this.dealer.hand.cards[i];
            }
            UI.display(dealerCards);
            UI.display("Dealer Score: " + this.dealer.score);
        }
        UI.display('');
    }

    private tallyScores() {
        this.dealer.calculateScore();
        this.currentPlayer.calculateScore();
    }

    private naturalCheck(): boolean {
        if (this.currentPlayer.score === 21 && this.dealer.score === 21) {
            this.currentPlayer.win(0);
            this.endScreen();
            UI.display("Improbably, both you and the Dealer got natural Black Jack");
            UI.display("You break even");
            this.restart();
            return true;
        }
        else if (this.currentPlayer.score === 21) {
            this.currentPlayer.win(1.5);
            this.endScreen();
            UI.display("You got a natural Black Jack!");
            UI.display("Your bet pays 3:2!");
            this.restart();
            return true;
        }
        else if (this.dealer.score === 21) {
            this.currentPlayer.lose();
            this.endScreen();
            UI.display("The Dealer got a natural Black Jack");
            UI.display("You lose your bet");
            this.restart();
            return true;
        }
        else { return false; }
    }

    private restart(): void {
        UI.display("Press [submit] to play again");
        this.currentPlayer.stand = false;
        this.dealer.stand = false;
        this.newDeck();
        UI.button.addEventListener("click", this.run, { once: true })
    }

    private newDeck(){
        if(this.deck.getSize()<=20){
            this.replaceDeck();
        }
    }


}

class Casino {

    private name: string;
    private amount: number;
    private profiles: Profile[];
    private currentPlayer: Profile;
    constructor() {
        this.profiles = new Array<Profile>();
        this.chooseGame = this.chooseGame.bind(this);
        this.stepTwo = this.stepTwo.bind(this);
        this.mainMenu = this.mainMenu.bind(this);
        this.register = this.register.bind(this);
        this.start = this.start.bind(this);
        this.stepOne = this.stepOne.bind(this);
    }

    start() {
        UI.display("Welcome to Casino Royale With Cheese!");
        UI.display("Let's start by registering your profile");
        UI.display("What is your name?")
        UI.button.addEventListener("click", this.stepOne,{once:true});
    }

    stepOne(): void {
        this.name = UI.lastInput;
        this.stepTwo();
    }

    stepTwo(errorMessage?: string): void {
         //UI.button.removeEventListener("click", this.stepOne);
        UI.clearScreen();
        UI.display("Nice to meet you " + this.name);
        UI.display("How much money would you like to change into chips?")
        UI.display("The minimum desposit is $1000");
        if (typeof errorMessage !== "undefined") UI.display(errorMessage);
        UI.button.addEventListener("click", this.register);
    }

    register(): void {
        UI.button.removeEventListener("click", this.register);
        if (parseInt(UI.lastInput) > 1000) {
            this.amount = parseInt(UI.lastInput);
            this.currentPlayer = new Profile(this.name, this.amount);
            this.profiles.push(this.currentPlayer);
            this.mainMenu();
        }
        else if (parseInt(UI.lastInput) < 1000) {
           // UI.button.addEventListener("Click", this.register);
            this.stepTwo("You must change at least $1000 into chips to play in our casino");
        }
        else {
            //UI.button.addEventListener("Click", this.register);
            this.stepTwo("You must enter a number for your deposit");
        }

    }

    mainMenu(errorMessage?: string): void {
        UI.clearScreen();
        this.header();
        UI.display("What game would you like to play?")
        UI.display("[Black Jack]");
        UI.display('');
        if (typeof errorMessage !== "undefined") UI.display(errorMessage);
        UI.button.addEventListener("click", this.chooseGame);

    }

    private header(): void {
        UI.display("Current Player: " + this.currentPlayer.name + "\t|\tCurrent Balance: $" + this.currentPlayer.balance);
        UI.display("");
    }


    chooseGame(): void {
        UI.button.removeEventListener("click", this.chooseGame);
        if (UI.lastInput === "Black Jack") {
            var currentGame = new BlackJackGame(this.currentPlayer);
            currentGame.start();
        }

        else {
            this.mainMenu("I'm sorry. We don't have that game yet.");
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