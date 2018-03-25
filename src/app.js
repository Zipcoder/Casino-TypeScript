"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function startGame() {
    log("game start");
    display("game start");
}
function display(content) {
    let displayElement = document.getElementById('display');
    displayElement.innerText = content;
}
function log(msg) {
    console.log(msg);
}
document.getElementById('submit').addEventListener('click', {
    handleEvent: (event) => {
        startGame();
    }
});
//# sourceMappingURL=app.js.map