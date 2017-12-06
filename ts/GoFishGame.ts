/// <reference path="GoFish.ts" />


class GoFishGame{

displayElement:any
goFish: GoFish = new GoFish
goFishPlayer:Player = new Player
    userInputElement: any

    constructor(){
        this.displayElement = document.getElementById("display");
        this.userInputElement= document.getElementById("user_input");


    }

    init(){
        this.getUserResponse();

    }


    getUserResponse () {

      
     var response = this.userInputElement.value
     this.displayElement.innerHTML += "Welcome, " + this.userInputElement.value + ". Press the GetHand button to continue!" ;


    }




}