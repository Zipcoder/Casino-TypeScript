/// <reference path="Player.ts" />
/// <reference path="BlackJackConsole.ts" />

var blackJackConsole = new BlackJackConsole(new Player("Player", 1000));
blackJackConsole.init();

function changeDisplay(input: string) {
    document.getElementById("display").innerHTML += "<br />" + input;
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
