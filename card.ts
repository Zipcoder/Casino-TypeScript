class Card {
    private card: string;
    firstName = "Ezio";

    constructor(card: string) {
        this.card = card;
    }
    
    getCard(){
        return this.card;
    }

    passOutCards(numCards: number){
        console.log("I am passing out " + numCards + " and they are " + this.card);
    }

    sayHello(){
        setTimeout(() => 
        { console.log("Hello, " + this.firstName);
            }
        , 500);
    }
}

let myCard = new Card("Hearts");
myCard.passOutCards(4);
myCard.sayHello();

function greet(firstName: string, lastName : string = "Wu"): void{
    console.log("Hello, my name is " + firstName + " " + lastName);
    
}
greet("Lawrence", "Stu");

export {Card}