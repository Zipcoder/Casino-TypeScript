///<reference path="Casino.ts"/>
///<reference path="User.ts"/>

var casino: Casino = new Casino();
var user:User;

function updateDisplay(stringToDisplay:string):void{
    document.getElementById("display").innerHTML+="</br>"+stringToDisplay;
}
