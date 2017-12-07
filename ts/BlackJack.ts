class BlackJack extends CardGame<BlackJack> implements Gamble{

  public const MIN_NUMBER_OF_PLAYERS = 1;
  public const MAX_NUMBER_OF_PLAYERS = 7;
  private const  pointValues:Map<Card.FaceValue, Integer> = new HashMap<Card.FaceValue, Integer>();
  private  dealer:BlackJackPlayer = new BlackJackPlayer("Dealer");
  private  bets:HashMap<Player<BlackJack>, Double> = new HashMap<Player<BlackJack>, Double>();
  private winners:Array<BlackJackPlayer>  = new Array<>();
  private push:Array<BlackJackPlayer>  = new Array<>();

  constructor(numStandardDecks:number) {
      super(numStandardDecks);
      this.setPointValues();
  }

  public  getPlayers():Array<BlackJackPlayer> {
      return  this.players:Array<BlackJackPlayer>;
  }

  public  getDealer():BlackJackPlayer {
      return this.dealer;
  }

  public dealInitialCards() {
      for(let i = 0; i < 2; i++) {
          for(let player in this.getPlayers()) {
              if(this.bets.containsKey(this.getPlayers()[player])) {
                  this.dealCardToHand(this.getPlayers()[player]);
              }
          }
          this.dealCardToHand(this.dealer);
      }
  }

  public dealCardToHand(player:BlackJackPlayer) {
      this.shuffleCardsWhenStockIsEmpty();
      this.player.addCardToHand(this.drawFromStock());
  }

  public putCardsInDiscardPile() {
      this.discardCards(this.dealer.getHand());
      for(let player in this.getPlayers()) {
          this.discardCards(this.getPlayers()[player].getHand());
      }
  }

  public shuffleCardsWhenStockIsEmpty() {
      if(this.getStockPile().numCards() == 0) {
          this.shuffleDiscardPileBackToStock();
      }
  }

  public calculatePlayerScore( player:BlackJackPlayer):number {
      let score = 0;
      for(let card in player.getHand().getCards()) {
          score += this.pointValues.get(player.getHand().getCards()[card].getFaceValue());
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
          for(let player in this.getPlayers()) {
            if(this.bets.containsKey(player)) {
                    if (!this.playerHasBust(player)) {
                      this.winners.push(this.getPlayers()[player]);
                  }
              }
          }
      }
      else {
          for(let player in this.getPlayers()) {
              if(this.bets.containsKey(this.getPlayers()[player])) {
                  if (!this.playerHasBust(this.getPlayers()[player]) && this.calculatePlayerScore(this.getPlayers()[player]) > this.calculatePlayerScore(this.dealer)) {
                      this.winners.push(player);
                  } else if (this.calculatePlayerScore(this.getPlayers()[player])==(this.calculatePlayerScore(this.dealer))) {
                      this.winners.push(player);
                  }
              }
          }
      }
  }

  @Override
  public void takeBet(Player player, Double amount) {
      bets.put(player, amount);
      player.bet(amount);
  }

  public void payOutBets() {
      for(BlackJackPlayer player : winners) {
          Double amountWon = bets.get(player) * 2;
          player.receiveWinnings(amountWon);
      }
      for(BlackJackPlayer player : push) {
          Double amountWon = bets.get(player);
          player.receiveWinnings(amountWon);
      }
      clearAllBets();
  }

  @Override
  public void clearAllBets() {
      bets.clear();
      winners.clear();
      push.clear();
  }

  public HashMap<Player<BlackJack>, Double> getBets() {
      return bets;
  }

  public ArrayList<BlackJackPlayer> getWinners() {
      return winners;
  }

  public ArrayList<BlackJackPlayer> getPush() {
      return push;
  }

  @Override
  public void setPointValues() {
      pointValues.put(TWO, 2);
      pointValues.put(THREE, 3);
      pointValues.put(FOUR, 4);
      pointValues.put(FIVE, 5);
      pointValues.put(SIX, 6);
      pointValues.put(SEVEN, 7);
      pointValues.put(EIGHT, 8);
      pointValues.put(NINE, 9);
      pointValues.put(TEN, 10);
      pointValues.put(JACK, 10);
      pointValues.put(QUEEN, 10);
      pointValues.put(KING, 10);
      pointValues.put(ACE, 1);
  }
}
