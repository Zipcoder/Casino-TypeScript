///<reference path="Player.ts"/>
///<reference path="MenuCreation.ts"/>
///<reference path="WebPageInteraction.ts"/>
///<reference path="Casino.ts"/>
///<reference path="Craps.ts"/>
///<reference path="CrapsButtonLogic.ts"/>
///<reference path="Deck.ts"/>
///<reference path="BlackJack.ts"/>
///<reference path="BlackJackButtonLogic.ts"/>



let menuCreation = new MenuCreation();
WebPageInteraction.getInstance().displayToWebpage(menuCreation.menuTitle());
let casino: Casino = new Casino();
let crapsButtonLogic = new CrapsButtonLogic();
let craps: Craps = new Craps(casino);
let blackJackConsole: BlackJackButtonLogic = new BlackJackButtonLogic();
let blackJack: BlackJack = new BlackJack(casino);




// submitButton.addEventListener("click", createPlayer);
//
//
//
//
//
//
// let crapsGame = document.getElementById("crapsGame");
//
// crapsGame.addEventListener("click", () => {
//     let newCrapsGame:Craps = new Craps(aPlayer);
//
//     submitButton.hidden = false;
//     gameSelectionButtons.hidden = true;
//
//     //newCrapsGame.printWelcomeMessage();
//     //newCrapsGame.takeBet();
//     newCrapsGame.playCraps();
//
//
//
//
//
//
//
// });




