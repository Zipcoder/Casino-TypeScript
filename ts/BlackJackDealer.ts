/// <reference path="BlackJackPlayer.ts"/>

class BlackJackDealer extends BlackJackPlayer {

  constructor(person: Player) {
    super(person);
  }
  
  public hitDealer(): boolean {
    return this.getScore() <17;
  }

  //getinitialdealerhand method


}
