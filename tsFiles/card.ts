class Card {
	suit: string;
	value: number;
	constructor(i: number){
		var s = "null";
		switch (Math.floor(i / 13)){ // 13 since each type contains 4
			case 0:
				s = "Hearts"; 	break;
			case 1:
				s = "Diamonds"; break;
			case 2:
				s = "Spades"; 	break;
			case 3:
				s = "Clubs"; 	break;
		}
		this.suit = s;
		this.value = Math.floor(i % 13);
	}
	val(): string{
		if (this.value < 9)
			return (this.value + 2).toString();
		else
			switch(this.value){
				case 9:
					return "Jack";
				case 10:
					return "Queen";
				case 11:
					return "King";
				case 12:
					return "Ace";
			}
	}
	valNum(): number{
		return (this.value < 9) ? this.value + 2 : 10;
	}
}

class Deck {
	data: Card[] = [];
	currentCard: number = 0;

	constructor(){
		for (var i = 0; i < 52; i++){
			this.data.push(new Card(i));
		}
		this.shuffle();
	}
	printAll(){
		this.data.forEach(function(c){
			console.log(c.suit + " " + c.value);
		});
	}

	shuffle(){ 
		for(var j, x, i = this.data.length;
			i;
			j = Math.floor(Math.random() * i),
			x = this.data[--i],
			this.data[i] = this.data[j],
			this.data[j] = x);
		this.currentCard = 0;
	}

	deal(): Card{
		return this.data[this.currentCard++];
	}
}