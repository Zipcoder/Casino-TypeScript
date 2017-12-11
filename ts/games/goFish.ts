/// <reference path="cardGame.ts"/>
class GoFish extends CardGame{
  player:GoFishPlayer;
  dealer:GoFishPlayer;
  display:any;
  input:any;
  button:any;
  playAgainEle:any;
  constructor(player:Player){
    super();
    this.display = document.getElementById("display");
    this.input = document.getElementById("text_input");
    this.button = document.getElementById("submit");
    this.player = new GoFishPlayer(player);
    this.dealer = new GoFishPlayer(new Player("Dealer",0,0));
    this.playAgainEle = document.getElementById("playAgain")
  }
  init(){
    this.player.clearBooks();
    this.dealer.clearBooks();
    super.createNewDeck();
    this.playAgainEle.setAttribute("onclick","casino.goFish.playAgain()")
    this.display.innerHTML = "";
    document.getElementById("header").innerHTML = "Welcome to Go Fish!"
    document.getElementById("cardGame").hidden = false;
    this.input.setAttribute("placeholder","ASK CARD")
    this.input.value = "";
    this.button.setAttribute("onclick","casino.goFish.askPlayerForCardClick()");
    this.dealCards(this.dealer,this.player,7);
    this.playerTurn();
  }

  playerTurn():void{
    this.display.innerHTML += "What would you like to ask for?"
    this.player.displayHand(true);
    document.getElementById("userNameHand").innerHTML = "User Hand | You have "+this.player.getBookCount()+this.spelling(this.player.getBookCount());
    console.clear();
    console.log("Dealer Hand");
    this.dealer.logHand()
  }

  spelling(num:number):string{
    if(num == 1){
      return " book"
    }
    return " books"
  }

  dealerTurn():void{
    let randonNum:number = Math.floor(Math.random()*this.dealer.getHand().length);
    let dealerAsk:string = this.dealer.getHand()[randonNum].getFaceValue();
    this.display.innerHTML+="<br>Dealer asks for "+dealerAsk+".";
    this.dealerCheck(dealerAsk);
  }

  dealerCheck(askCard:string){
    if(this.checkInHand(askCard,this.player)){
      this.swapCards(this.player,this.dealer,askCard);
      this.checkHandSize(this.player);
      this.display.innerHTML += "<br>Dealer got a match<br>";
      this.checkBooks(this.dealer);
      if(this.endGame()){
        this.displayEnd()
      }else{
        this.dealerTurn();
      }
    }else{
      this.display.innerHTML += "<br>Dealer did not get a match<br>";
      super.giveCards(this.dealer,1);
      this.playerTurn();
    }
  }

  askPlayerForCardClick(){
    let playerInput:string = this.input.value.toLowerCase();
    this.input.value = "";
    if(this.checkInHand(playerInput,this.dealer)){
      this.swapCards(this.dealer,this.player,playerInput);
      this.checkHandSize(this.dealer);
      this.display.innerHTML = "You got a match<br>";
      this.checkBooks(this.player);
      if(this.endGame()){
        this.displayEnd()
      }else{
        this.playerTurn();
      }
    }else{
      this.display.innerHTML = "No match GO FISH!<br>";
      super.giveCards(this.player,1);
      this.dealerTurn();
    }

  }


  checkHandSize(player:CardPlayer){
    if(player.getHand().length == 0){
      super.giveCards(player,5);
    }
  }

  swapCards(fromPlayer:GoFishPlayer,toPlayer:GoFishPlayer,swap:string):void{
    let newHand:Card[] = [];
    for (let i = 0; i < fromPlayer.getHand().length; i++) {
      let currentCard:Card = fromPlayer.getHand()[i]
      if(currentCard.getFaceValue().toLowerCase() == swap.toLowerCase()){
        toPlayer.addCard(currentCard);
      }else{
        newHand.push(currentCard);
      }
    }
    fromPlayer.setHand(newHand);
  }

  checkInHand(input:string,player:GoFishPlayer):boolean{
    for (let i = 0; i < player.getHand().length; i++) {
        if(input.toLowerCase() == player.getHand()[i].getFaceValue().toLowerCase()){
          return true;
        }
    }
    return false;
  }

  checkBooks(player:GoFishPlayer):void{
    let map = [];
    for (let i = 0; i < player.getHand().length; i++) {
        let place = player.getHand()[i].getFaceValue()
        if(map[place] == undefined){
          map[place] = 1
        }else{
          map[place] +=1;
        }

    }
    for (let key in map) {
        if(map[key] == 4){
          console.log("Book Found")
          this.makeBook(player,key);

        }
    }
  }

  makeBook(player:GoFishPlayer,value:string){
    let newHand:Card[] = [];
    for (let i = 0; i < player.getHand().length; i++) {
      let currentCard:Card = player.getHand()[i];
      if(currentCard.getFaceValue().toLowerCase() != value.toLowerCase()){
        newHand.push(currentCard);
      }
    }
    player.setHand(newHand);
    player.addBook();
  }

  endGame():boolean{
    return super.getDeck().length < 5;
  }

  playAgain():void{
    this.playAgainEle.hidden = true;
    document.getElementById("mainMenu").hidden = true;
    this.button.hidden = false;
    this.input.hidden = false;
    this.init()
  }

  displayEnd():void{
    this.display.innerHTML = "Game over<br>"
    this.display.innerHTML += "<br>your score: "+this.player.getBookCount();
    this.display.innerHTML += "<br>computer score: "+this.dealer.getBookCount()+"<br>";
    this.display.innerHTML += (this.player.getBookCount() > this.dealer.getBookCount()) ? "You won":"You lose"
    this.playAgainEle.hidden = false;
    document.getElementById("mainMenu").hidden = false;
    this.button.hidden = true;
    this.input.hidden = true;
  }
}
