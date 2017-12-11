class Player{
  name:string;
  age:number;
  amount:number;

  constructor(name:string,age:number,amount:number){
    this.name = name;
    this.age = age;
    this.amount = amount;
  }

  getName():string{
    return this.name;
  }
  getAge():number{
    return this.age;
  }
  getAmount():number{
    return this.amount;
  }

  toString(): string{
    return "Name: "+this.name+" | Age: "+this.age+" | Amount: "+this.amount;
  }
}
