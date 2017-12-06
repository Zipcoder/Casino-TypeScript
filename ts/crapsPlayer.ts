/// <reference path="player.ts"/>
/// <reference path="die.ts"/>

class CrapsPlayer extends Player{
  die: Die = new Die();

  super(){
    this.name = "Craps Player";

  }

}
