function startGame() {
    log("game start");
    display("game start");
}
function display(content) {
    document.getElementById('display').innerText = content;
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