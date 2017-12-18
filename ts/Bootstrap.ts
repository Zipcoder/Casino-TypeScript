/// <reference path="Player.ts" />
/// <reference path="BlackJackConsole.ts" />

var blackJackConsole = new BlackJackConsole(new Player("Player", 1000));
blackJackConsole.init();

function changeDisplay(input: string) {
    document.getElementById("display").innerHTML += "<br />" + input;
}

function clearHTMLTag(elementID: string) {
    document.getElementById(elementID).innerHTML = "";
    
}

function displayCard(value:string, suit:string, elementId:string){
    var cardDiv = "<img src=\"./images/cards/"+ suit +"/"+value+".jpg\" alt=\""+value+suit+"\"/>"
    document.getElementById(elementId).innerHTML +=  cardDiv;
}

function displayWinnerImage(){
    var cardDiv = "<br><img src=\"./images/200w_d.gif\" alt=\"sloth-gif\"/>"
    document.getElementById("display").innerHTML +=  cardDiv;
}

function displayLoserImage(){
    var cardDiv = "<br><img src=\"./images/loser.gif\" alt=\"loser-gif\"/>"
    document.getElementById("display").innerHTML +=  cardDiv;
}

// var player = new Player();
// player.setName("Tariq");
// console.log(player.getName());

//  play()     
//  dealInitialCards(player);
//  dealInitialCards(dealer)
//    askForHitOrStay();
//    dealerPlay();
//    checkWin();
    // if(playAgain()){
    //     play();
    // }else{
// exit
