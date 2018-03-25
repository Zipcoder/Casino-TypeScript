import { Profile } from './profile';

export interface PlayerInterface {
    getProfile(): Profile;
    getName(): string;
    getId(): number;
}
