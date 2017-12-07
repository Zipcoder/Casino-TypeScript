import {Gamble} from './Gamble';
import {CardGame} from './CardGame';
import {BlackJackPlayer} from './BlackJackPlayer';

export class BlackJack extends CardGame<BlackJack> implements Gamble{

  public readonly MIN_NUMBER_OF_PLAYERS = 1;
  public readonly MAX_NUMBER_OF_PLAYERS = 7;
  private readonly pointValues= {TWO: 2,THREE:3,FOUR:4,FIVE:5,SIX:6,SEVEN:7,EIGHT:8,NINE:9,TEN:10,JACK:10,QUEEN:10,KING:10,ACE:1};
  private  dealer:BlackJackPlayer = new BlackJackPlayer("Dealer");
  private  bets= {};
  private winners:Array<BlackJackPlayer>  = [];
  private push:Array<BlackJackPlayer>  = [];

  constructor(numStandardDecks:number) {
      super(numStandardDecks);
  }

  public  getPlayers() {
      return  this.players;
  }

  public  getDealer() {
      return this.dealer;
  }

  public dealInitialCards() {
      for(let i = 0; i < 2; i++) {
          for(let p in this.getPlayers()) {
            let player = this.getPlayers()[p];
              if(this.bets[player.id]!=undefined) {
                  this.dealCardToHand(player);
              }
          }
          this.dealCardToHand(this.dealer);
      }
  }

  public dealCardToHand(player:BlackJackPlayer) {
      this.shuffleCardsWhenStockIsEmpty();
      player.addCardToHand(this.drawFromStock());
  }

  public putCardsInDiscardPile() {
      this.discardCards(this.dealer.getHand());
      for(let p in this.getPlayers()) {
        let player = this.getPlayers()[p];
          this.discardCards(player.getHand());
      }
  }

  public shuffleCardsWhenStockIsEmpty() {
      if(this.getStockPile().numCards() == 0) {
          this.shuffleDiscardPileBackToStock();
      }
  }

  public calculatePlayerScore( player:BlackJackPlayer):number {
      let score = 0;
      for(let c in player.getHand().getCards()) {
        let card = player.getHand().getCards()[c];
          score += this.pointValues[card.getFaceValue()];
      }
      if(player.hasAceInHand() && score <= 11) {
          score += 10;
      }
      return score;
  }

  public playerHasBust( player:BlackJackPlayer):boolean {
      if(this.calculatePlayerScore(player) > 21) {
          return true;
      }
      else {
          return false;
      }
  }

  public determineWinners() {
      if(this.playerHasBust(this.dealer)) {
          for(let p in this.getPlayers()) {
            let player=this.getPlayers()[p];
            if(this.bets[player.id]!=undefined) {
                    if (!this.playerHasBust(player)) {
                      this.winners.push(player);
                  }
              }
          }
      }
      else {
          for(let p in this.getPlayers()) {
            let player=this.getPlayers()[p];
              if(this.bets[player.id]!=undefined) {
                  if (!this.playerHasBust(player) && this.calculatePlayerScore(player) > this.calculatePlayerScore(this.dealer)) {
                      this.winners.push(player);
                  } else if (this.calculatePlayerScore(player)==(this.calculatePlayerScore(this.dealer))) {
                      this.winners.push(player);
                  }
              }
          }
      }
  }

  public  takeBet( player:BlackJackPlayer, amount:number) {
    if(this.bets[player.id]==undefined)
      this.bets[player.id]= amount;
      else this.bets[player.id]+= amount
      player.bet(amount);
  }

  public payOutBets() {
      for(let player in this.winners) {
          let amountWon = this.bets[this.winners[player].id] * 2;
          this.winners[player].receiveWinnings(amountWon);
      }
      for(let player in this.push) {
          let amountWon = this.bets[this.push[player].id];
          this.push[player].receiveWinnings(amountWon);
      }
      this.clearAllBets();
  }

  public clearAllBets() {
      this.bets={};
      this.winners=[];
      this.push=[];
  }

  public getBets()  {
      return this.bets;
  }

  public getWinners() {
      return this.winners;
  }

  public  getPush() {
      return this.push;
  }
}
