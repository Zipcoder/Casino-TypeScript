import { Player } from './player';
import { GameEngineInterface } from './gameEngineInterface';
import { Casino } from './casino';

var casino: Casino = new Casino("vince", 500);

function handleInput(event: KeyboardEvent): void {
	let inputElement: HTMLInputElement = <HTMLInputElement>event.target;

	casino.receiveCommand(inputElement.value);
	
	inputElement.value = "";
}

function display(content: string) {
	let displayElement: HTMLElement | null = document.getElementById('display');
	displayElement!.innerHTML = content;
}

function log(msg: any) {
	console.log(msg);
}

document.getElementById('user_input')!.addEventListener('keypress', {
	handleEvent: (event: KeyboardEvent) => {
		if (event.key == 'Enter') {
			handleInput(event);
		}
	}
});