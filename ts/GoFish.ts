import {CardGame} from './CardGame';
import {GoFishPlayer} from './GoFishPlayer';

export class GoFish extends CardGame<GoFish> {

  public readonly MIN_NUMBER_OF_PLAYERS = 2;
  public readonly MAX_NUMBER_OF_PLAYERS = 5;
  private readonly pointValues = {
    "TWO": 1,
    "THREE": 2,
    "FOUR": 3,
    "FIVE": 4,
    "SIX": 5,
    "SEVEN": 6,
    "EIGHT": 7,
    "NINE": 8,
    "TEN": 9,
    "JACK": 10,
    "QUEEN": 11,
    "KING": 12,
    "ACE": 13,
  };
  private numPlayers: number = 0;
  private numInitialCards: number = 0;

  players: GoFishPlayer[] = [];

  constructor() {
    super(1);
  }

  setNumInitialCards() {
    this.numPlayers = this.getNumPlayers();
    if(this.numPlayers >= this.MIN_NUMBER_OF_PLAYERS && this.numPlayers <= 3) {
      this.numInitialCards = 7;
    }
    else {
      this.numInitialCards = 5;
    }
  }

  dealInitialCards() {
    for(let i = 0; i < this.numInitialCards; i++) {
      for(let player in this.players) {
        this.players[player].addCardToHand(this.drawFromStock());
      }
    }
  }

  playerGoFish(player: GoFishPlayer) {
    player.goFish(this.drawFromStock());
  }

  determineWinner() : GoFishPlayer {
    let maxPoints = 0;
    let winner = undefined;
    for(let player in this.players) {
      let goFishPlayer = this.players[player];
      let score = 0;
      for(let book in goFishPlayer.getBooks()) {
        let currentBook = goFishPlayer.getBooks()[book];
        let rankOfBook = currentBook.getCard(0).getFaceValue();
        score += this.pointValues[rankOfBook];
      }
      if(score > maxPoints) {
        winner = goFishPlayer;
        maxPoints = score;
      }
    }
    return winner;
  }

  addPlayers(players: GoFishPlayer[]) {
    this.players = players;
  }

  getPlayers() : GoFishPlayer[] {
    return this.players;
  }

  getNumPlayers() : number {
    return this.players.length;
  }
}
