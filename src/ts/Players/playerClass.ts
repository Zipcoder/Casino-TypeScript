namespace game{
    
export interface PlayerInterface{
    name: string;
    id: number;
    wallet: number;
     
 }

export class Player implements PlayerInterface {
    
    name: string;
    id: number;
    wallet: number;

    constructor(name: string){
    }

    setName(name:string):void{
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setId(id:number):void{
        this.id = id;
    }

    getId(): number {
        return this.id;
    }

    setWallet(chips:number):void{
        this.wallet = chips;
    }

    getWallet(): number{
        return this.wallet;
    }
}
    
}