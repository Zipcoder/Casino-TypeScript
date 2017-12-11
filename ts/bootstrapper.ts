///<reference path="MenuCreation.ts"/>
///<reference path="WebPageInteraction.ts"/>
///<reference path="Casino.ts"/>
///<reference path="CrapsButtonLogic.ts"/>
///<reference path="Craps.ts"/>
///<reference path="BlackJackButtonLogic.ts"/>
///<reference path="BlackJack.ts"/>


let menuCreation = new MenuCreation();
WebPageInteraction.getInstance().displayToWebpage(menuCreation.menuTitle());
let casino: Casino = new Casino();
let crapsButtonLogic = new CrapsButtonLogic();
let craps: Craps = new Craps(casino);
let blackJackConsole: BlackJackButtonLogic = new BlackJackButtonLogic();
let blackJack: BlackJack = new BlackJack(casino);


