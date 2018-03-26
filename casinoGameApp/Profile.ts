
namespace Casino{
    export class Profile {
        private userId: number;
        private userName: string;
        private balance: number;

        constructor(userName: string){
            this.userId = Math.random()*100;
            this.userName = userName;
            this.balance = 250;
         }

        public getUserId(){
        return this.userId;
        }

        public getUserName(){
        return this.userName;
        }

        public getUserBalance(){
        return this.balance;
        }
    
    }
}

