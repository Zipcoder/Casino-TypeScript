///<reference path="User.ts"/>
///<reference path="Casino.ts"/>


let casino: Casino = new Casino();
let user:User;

function updateDisplay(stringToDisplay:string):void{
    document.getElementById("display").innerHTML+="</br>"+stringToDisplay;
}
