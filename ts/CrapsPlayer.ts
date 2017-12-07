import {Player} from './Player';
import {Craps} from './Craps';
export class CrapsPlayer extends Player<Craps> {
  constructor(name: string) {
    super(name);
  }
}
