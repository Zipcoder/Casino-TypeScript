class BlackjackDealer extends BlackjackPlayer{

  constructor(){
    super(new Player("DEALER",0,0))
  }

  hitDealer():boolean{
    return super.getScore() < 17;
  }
}
