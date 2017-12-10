///<reference path="User.ts"/>
///<reference path="Casino.ts"/>

var casino: Casino = new Casino;
var user:User;

function updateDisplay(stringToDisplay:string):void{
    document.getElementById("display").innerHTML+="</br>"+stringToDisplay;
}
