import { GameTypePlayer } from '../gameTypePlayer';
import { Player } from '../player';
import { Card } from './card';

export class BlackjackPlayer extends Player implements GameTypePlayer {
	hand: Card[];	
	bet: number;
}