import { Player } from './player';
import { GameEngineInterface } from './gameEngineInterface';

function startGame(): void {
	log("game start");
	display("game start");
}

function handleInput(event: Event): void {
	if (event !== null) {
		let text: string = event.srcElement!.innerHTML;
		display(text);
	}
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

document.getElementById('user_input')!.addEventListener('keypress', {
	handleEvent: (event) => {
		console.log(event);
	}
});