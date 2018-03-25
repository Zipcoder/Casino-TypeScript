export class Card{
    rank: string;
    suit: string;
    value: number;
    
    constructor(rank: string, suit: string){
        this.rank = rank;
        this.suit = suit;
        switch(rank){
            case 'A':
                this.value = 11;
            break;
            case 'K':
            case 'Q':
            case 'J':
                this.value = 10;
                break;
            default: 
                this.value = parseInt(rank);
                break;
        }
    }
    rankToString(): string {
        switch (this.rank){
            case 'A':
                return "Ace";
            case 'K':
                return "King";
            case 'Q':
                return "Queen";
            case 'J':
                return "Jack";
            default:
                return this.value.toString();
        }
    }
    suitToString(): string {
        switch (this.suit){
            case '♥':
                return "Hearts";
            case '♦':
                return "Diamonds";
            case '♣':
                return "Clubs";
            case '♠':
                return "Spades";
            default:
                return this.value.toString();
        }
    }
    cardToString(): string {
        return `${this.rankToString()} of ${this.suitToString()}`;
    }
}