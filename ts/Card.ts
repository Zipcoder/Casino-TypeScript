enum Suit {
    Spades,
    Clubs,
    Hearts,
    Diamonds,
};

class Card {
    public rank: number;
    public suit: number;
    public _value: number;

    public constructor (rank: number, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }

    public static rankNames = [
        'Ace',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'Jack',
        'Queen',
        'King',
    ];

    public get rankName(): string {
        return Card.rankNames[this.rank - 1];
    }

    public get suitName(): string {
        return Suit[this.suit];
    }

    public get toCardName(): string {
        return this.rankName + ' of ' + this.suitName;
    }

    public get value(): number{
        if(this.rankName === 'Ace'){
            return 1;
        }
        else if(this.rankName === '2'){
            return 2;
        }
        else if(this.rankName === '3'){
            return 3;
        }
        else if(this.rankName === '4'){
            return 4;
        }
        else if(this.rankName === '5'){
            return 5;
        }
        else if(this.rankName === '6'){
            return 6;
        }
        else if(this.rankName === '7'){
            return 7;
        }
        else if(this.rankName === '8'){
            return 8;
        }
        else if(this.rankName === '9'){
            return 9;
        }
        else if(this.rankName === '10'){
            return 10;
        }
        else if(this.rankName === 'Jack'){
            return 10;
        }
        else if(this.rankName === 'Queen'){
            return 10;
        }
        else if(this.rankName === 'King'){
            return 10;
        }else{
            return 0;
        }    
    }
}