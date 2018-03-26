import { Player } from './player';
import { GameEngineInterface } from './gameEngineInterface';
import { Casino } from './casino';

function startGame(): void {
	log("game start");
	display("game start");
}

function handleInput(event: KeyboardEvent): void {
	let inputElement: HTMLInputElement = <HTMLInputElement>event.target;

	// build command and dispatch to Casino

	inputElement.value = "";
}

function display(content: string) {
	let displayElement: HTMLElement | null = document.getElementById('display');
	displayElement!.innerHTML = content;
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
	handleEvent: (event: KeyboardEvent) => {
		if (event.key == 'Enter') {
			handleInput(event);
		}
	}
});