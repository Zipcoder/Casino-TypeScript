"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function startGame() {
    log("game start");
    display("game start");
}
function handleInput(event) {
    let inputElement = event.target;
    // build command and dispatch to Casino
    inputElement.value = "";
}
function display(content) {
    let displayElement = document.getElementById('display');
    displayElement.innerHTML = content;
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
        if (event.key == 'Enter') {
            handleInput(event);
        }
    }
});
//# sourceMappingURL=app.js.map