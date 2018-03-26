
namespace Casino{
    export class Profile {
        private id: string;
        private name: string;
        private balance: number;

        constructor(profileId: string, username: string, balance: number){
            this.id = profileId;
            this.name = username;
            this.balance = balance;
         }

        get id(){
        return this._id;
        }

        get name(){
        return this._name;
        }

        get balance(){
        return this.balance;
        }
    
    }
}

