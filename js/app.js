"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function startGame() {
    log("game start");
    display("game start");
}
function handleInput(event) {
    if (event !== null) {
        let text = event.srcElement.innerHTML;
        display(text);
    }
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
document.getElementById('user_input').addEventListener('keypress', {
    handleEvent: (event) => {
        console.log(event);
    }
});
//# sourceMappingURL=app.js.map