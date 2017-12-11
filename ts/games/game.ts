
enum Games {
    GoFish,
    Blackjack,
    Craps,
}

class Game {
    suit: any;
    rank: any;
    constructor(rank: number, game: Games){
        this.rank = rank;
        this.suit = game;
    }

    static rankNames = [
        '1',
        '2',
        '3'
    ];

    get rankName (): string {
        return Game.rankNames[this.rank-1];
    }

    get suitName(): string {
        return Games[this.suit]
    }

    get name(): string{
        return this.suitName + ', level ' + this.rankName;
    }
}