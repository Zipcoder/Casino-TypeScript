class GoFish{

private deck: Deck
private goFishPlayer: Player
private computerPlayer: Player
private playerHand: Card[]=[]
private computerHand: Card[]=[]

constructor(){
this.goFishPlayer = new Player()
this.deck = new Deck()
this.computerPlayer = new Player
this.computerHand = []
this.playerHand =[]

}

getPlayerHand():Card[]{
    let i: number = 0
    while(this.playerHand.length!=7){
        this.playerHand.push(this.deck[i])
        this.deck.cards.shift
        i++
    }

        return this.playerHand
}

getComputerHand():Card[]{
    let i: number = 0
    while(this.computerHand.length!=7){
        this.computerHand.push(this.deck[i])
        this.deck.cards.shift
        i++
    }

        return this.computerHand
}
getGoFishPlayer(){

    return this.goFishPlayer
}

}