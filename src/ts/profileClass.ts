class Profile {
   private _id:number;
   private _name: string;
   private _balance: number;

constructor(_id:number, _name:string, _balance: number){
}
set id(userid: number){
    this.id = userid;
}
get id(){
    return this.id;
}
set name(name: string){
    this.name = name;
}
get name(){
    return this.name;
}

}