var el = document.getElementById('display');
var title = document.getElementById('game_title');
var shot = document.getElementById('drink');
var overlay = document.getElementById('overlay');
var body = document.getElementById('body');
let userInput;
let currentGame = false;
let userName;
let userFunds;
let drinks = 0;
function addToDisplayText(text) {
    if (text != '') {
        el.innerText += '\n';
        el.innerText += text;
    }
}
function setInput(newInput) {
    userInput = newInput;
}
var btn = document.getElementById('submit');
var startbtn = document.getElementById('start');
var inputField = document.getElementById("user_input");
btn.addEventListener("click", (e) => setInput(inputField.value));
btn.addEventListener("click", (e) => addToDisplayText('you input ' + userInput));
var flipper = document.getElementById('coinflip');
var coinflipper = new CoinFlip();
flipper.addEventListener('click', (e) => coinflipper.flipCoin());
shot.addEventListener('click', (e) => takeShot());
function takeShot() {
    drinks += 1;
    body.style.webkitFilter = "blur(" + drinks + "px)";
}
function clearInput() {
    inputField.value = '';
}
let mainMenu = new MainMenu();
mainMenu.profileSetup();
// blackJackTurn();
//# sourceMappingURL=app.js.map