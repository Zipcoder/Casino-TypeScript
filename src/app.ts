function startGame(): void {
    log("game start");
    display("game start");
}

function display(content: string) {
    document.getElementById('display').innerText = content;
}

function log(msg: any) {
    console.log(msg);
}

document.getElementById('submit').addEventListener('click', {
    handleEvent: (event) => {
        startGame();
    }
});
