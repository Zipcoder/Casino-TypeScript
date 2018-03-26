import {Escrow} from "./escrow"

export interface Gambler {
    hasStood: boolean;
    isBusted: boolean;
    escrow: Escrow;

    bet: (amout: number) => boolean;
    win: () => void;
    lose: () => void;
}