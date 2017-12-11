///<reference path="../io.ts"/>
class Casino {

    displayele:any;
    userInputEle: any;
    listener: any;
    name:string;
    money:number;
    player:any;
    visibillity:any;

    constructor() {
    }


    casinoWelcome() {
        IO.display("Welcome to the Casino");
    }

    askForName(){
        this.name = this.userInputEle.value;
        this.displayele.innerHTML + this.name;
    }

    printCardName() {
        let c = new Card(6, Suit.Diamonds);
        console.log(c.name);
        IO.display((c.name));
    }

    printGameName() {
        let c = new Game(3, Games.GoFish);
        console.log(c.name);
        IO.display((c.name));
    }

    hitMe(){
        let c = new Deck();
        let d = new Blackjack();
        console.log( d.hand())
    }

    hitDealer(){
        let c = new Deck();
        let d = new Blackjack();
        console.log(d.hand())
    }


}