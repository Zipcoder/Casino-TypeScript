var el: HTMLElement = document.getElementById('display');
var title: HTMLElement = document.getElementById('game_title');
var shot:HTMLElement = document.getElementById('drink');
var overlay:HTMLElement = document.getElementById('overlay');
var body:HTMLElement = document.getElementById('body');

let userInput:string;
let currentGame = false;
let userName:string;
let userFunds:number;
let drinks:number = 0;

function addToDisplayText(text: string) {
    if (text != '') {
        el.innerText += '\n';
        el.innerText += text;
    }
}

function setInput(newInput:string) {
    userInput = newInput;
}

var btn = document.getElementById('submit');
var startbtn = document.getElementById('start');
var inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("user_input");
btn.addEventListener("click", (e: Event) => setInput(inputField.value));
btn.addEventListener("click", (e:Event) => addToDisplayText('you input ' + userInput));

var flipper:HTMLElement = document.getElementById('coinflip')
var coinflipper:CoinFlip = new CoinFlip();
flipper.addEventListener('click', (e:Event) => coinflipper.flipCoin());

shot.addEventListener('click', (e:Event) => takeShot());
function takeShot() {
    drinks += 1
    body.style.webkitFilter = "blur("+ drinks +"px)";
}

function clearInput() {
    inputField.value = '';
}

let mainMenu:MainMenu = new MainMenu();
mainMenu.profileSetup();

// blackJackTurn();