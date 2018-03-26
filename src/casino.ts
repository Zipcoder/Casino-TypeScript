import { Profile } from './profile';
import { BlackjackEngine } from './blackjack/blackjackEngine';
import { GameEngineInterface } from './gameEngineInterface';
import { GameInterface } from './gameInterface';

export class Casino {
	profile: Profile;

	constructor(name: string, balance = 500) {
		this.profile = new Profile(1, name, balance);
	}

	receiveCommand(cmd: string) {
		if (cmd == "blackjack") {
			console.log("Star Blackjack!");
			let engine = new BlackjackEngine(this.profile);
			engine.run();
		}
	}
}