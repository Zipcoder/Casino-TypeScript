/// <reference path="Player/player.ts"/>
/// <reference path="games/goFish.ts"/>
/// <reference path="games/craps.ts"/>
/// <reference path="games/blackjack.ts"/>

class Casino{
  displayEle: any;
  textInput: any;
  name:string;
  submit:any;
  age:number;
  amount:number;
  player:Player;
  public goFish;
  public craps;
  public blackjack;

  constructor() {
    this.displayEle = document.getElementById("display");
    this.textInput = document.getElementById("text_input");
    this.submit = document.getElementById("submit");
  }

  init():void{
    this.loginOptions();
    //this.gameOptions();
  }

  loginOptions():void{
    this.displayEle.innerHTML = "Enter your name";
  }

  refresh(): void {
    window.location.reload(true);
  }

  getName():void{
    this.name = this.textInput.value;
    this.textInput.value = "";
    this.textInput.setAttribute("placeholder","AGE");
    this.textInput.setAttribute("type", "number")
    this.submit.setAttribute("onclick","casino.getAge()")
    this.displayEle.innerHTML = "Enter age";
  }

  getAge():void{
    this.age = parseInt(this.textInput.value);
    this.textInput.value = "";
    this.textInput.setAttribute("placeholder","AMOUNT");
    this.submit.setAttribute("onclick","casino.getAmount()")
    this.displayEle.innerHTML = "Enter amount";
  }

  getAmount():void{
    this.amount = parseInt(this.textInput.value);
    this.textInput.value = "";
    this.textInput.setAttribute("type","text")
    this.player = new Player(this.name,this.age,this.amount);
    document.getElementById("userInfo").innerHTML = this.player.toString();
    document.getElementById("userInfo").hidden = false;
    this.gameOptions();
  }

  gameOptions():void{
    document.getElementById("cardGame").hidden = true;
    this.displayEle.innerHTML = "What game would you like to play?<br>Options:<br>| BLACKJACK | GO FISH | CRAPS |"
    this.submit.setAttribute("onclick","casino.takeOptions()")
    this.textInput.setAttribute("placeholder","GAME")
    this.submit.hidden = false;
    this.textInput.hidden = false;
    // document.getElementById("gameOptions").hidden = false;
    // this.submit.hidden = true;
    // this.textInput.hidden = true;
    // this.goFish = new GoFish(this.player);
    // this.craps = new Craps(this.player);
    // this.blackjack = new Blackjack(this.player);
  }

  takeOptions():void{
    let input:string = this.textInput.value;
    switch(input.toLowerCase()){
      case "go fish":{
        this.goFish = new GoFish(this.player);
        this.goFish.init();
        break;
      }
      case "craps":{
        this.craps = new Craps(this.player);
        this.craps.init();
        break;
      }
      case "blackjack":{
        this.blackjack = new Blackjack(this.player);
        this.blackjack.init()
        break;
      }
    }
  }

  nameInput():void{
    this.displayEle.innerHTML += "<br>Enter name below";
  }

  getPlayer():Player{
    return this.player;
  }



}
