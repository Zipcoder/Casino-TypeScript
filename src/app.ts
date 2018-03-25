import { Player } from './player';

function startGame(): void {
    log("game start");
    display("game start");
}

function display(content: string) {
    let displayElement: HTMLElement | null = document.getElementById('display');
    displayElement!.innerText = content;
}

function log(msg: any) {
    console.log(msg);
}

document.getElementById('submit')!.addEventListener('click', {
    handleEvent: (event) => {
        startGame();
    }
});
