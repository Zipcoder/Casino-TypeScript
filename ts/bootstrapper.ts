/// <reference path="CrapsConsole.ts" />
///<reference path="BlackJackConsole.ts"/>

/// <reference path="User.ts" />
/// <reference path="Casino.ts"/>
///<reference path="PlayingDeck.ts"/>

function updateDisplay(stringToDisplay:string):void{
    document.getElementById("display").innerHTML+="</br>"+stringToDisplay;
}

var casino:Casino = new Casino();
var user: User;