///<reference path="PlayingDeck.ts"/>
///<reference path="User.ts"/>
///<reference path="PlayingValue.ts"/>


class GoFish extends CardGame {

    private humanPlayer: GoFishPlayer;

    private compPlayer: GoFishPlayer;

    private deck: PlayingDeck;
    private winner: GoFishPlayer = null;

    public constructor(user: User) {
        super();
        this.humanPlayer = new GoFishPlayer(user);
        this.compPlayer = this.createCompPlayer();
        this.deck = new PlayingDeck();
        this.deck.shuffle();
    }


    public play(userInput: string): boolean {
        return false;
    }

    private createCompPlayer(): GoFishPlayer {
        return new GoFishPlayer(new User("Dealer", 1000000));
    }

    private lastPlayerHandEmpty(player: GoFishPlayer): boolean {
        return player.getHand().isHandEmpty();
    }

    public getHumanPlayer(): GoFishPlayer {
        return this.humanPlayer;
    }

    public getCompPlayer(): GoFishPlayer {
        return this.compPlayer;
    }

    public getDeck(): PlayingDeck {
        return this.deck;
    }

    public run(): void {
        this.humanPlayer.getHand().clear();
        this.compPlayer.getHand().clear();
        this.dealInitialHands(7); //change to 6, 5 for 3, 4 players
        do {
            this.playHumanTurn(this.humanPlayer);
            this.playComputerTurn(this.compPlayer);
        } while (this.winner == null);
        this.endGame();
    }

    private playHumanTurn(player: GoFishPlayer): void {
        this.displayHand(player);
        this.tryAskingForValue();
    }

    private playComputerTurn(compPlayer: GoFishPlayer): void {
        updateDisplay(compPlayer.getUser().getName() + " has " + compPlayer.getHand().getAllCards().length + " cards.");
        this.compAskingForValue();
    }

    private compAskingForValue(): void {
        let value: PlayingValue = null;
        let randomValue: PlayingValue = null;
        do {
            do {
                randomValue = this.getRandomPlayingValue(this.compPlayer);
            } while (randomValue == value);
            value = randomValue;
            updateDisplay(this.compPlayer.getUser().getName() + " asks for " + value + "!");
            if (this.compPlayer.askForValue(this.humanPlayer, value) > 0) {
                this.compPlayer.takeCardsFromOther(this.humanPlayer, value);
                updateDisplay("Since you had " + value + ", " + this.compPlayer.getUser().getName() + " takes it/them!");
                if (this.compPlayer.getHand().isHandEmpty()) {
                    this.winner = this.compPlayer;
                    updateDisplay(this.compPlayer.getUser().getName() + "'s hand is empty!");
                    break;
                }
                updateDisplay(this.compPlayer.getUser().getName() + " has " + this.compPlayer.getHand().getAllCards().length + " cards.");
            } else {
                updateDisplay("You didn't have any of those, " + this.compPlayer.getUser().getName() + " has to Go Fish!");
                let drawnCard: PlayingCard = this.compPlayer.drawCard();
                if (drawnCard.getValue() == value) {
                    updateDisplay(this.compPlayer.getUser().getName() + " drew a card.");
                    if (this.compPlayer.getHand().isHandEmpty()) {
                        this.winner = this.compPlayer;
                        updateDisplay(this.compPlayer.getUser().getName() + "'s hand is empty!");
                        break;
                    }
                    updateDisplay(this.compPlayer.getUser().getName() + " asked for " + value + " and drew a card of that rank! It can ask for another card!");
                    continue;
                } else {
                    updateDisplay(compPlayer.getUser().getName() + " has " + compPlayer.hand.getAllCards().size() + " cards.");
                    updateDisplay("This ends " + compPlayer.getUser().getName() + "'s turn.\n\n");
                    compPlayer.nullAskedValue();
                    break;
                }
            }
        } while (true);
    }

    private getRandomPlayingValue(compPlayer: GoFishPlayer): PlayingValue {
        Random
        random = new Random();
        TreeSet < PlayingValue > values = compPlayer.getValuesInHand();
        ArrayList < PlayingValue > list = new ArrayList<>(values);
        return list.get(random.nextInt(list.size()));
    }

    private tryAskingForValue(): void {
        do {
            let value: PlayingValue = null;
            value = this.getPlayingValue(this.humanPlayer);
            if (this.humanPlayer.askForValue(this.compPlayer, value) > 0) {
                this.humanPlayer.takeCardsFromOther(this.compPlayer, value);
                if (this.humanPlayer.getHand().isHandEmpty()) {
                    this.winner = this.humanPlayer;
                    break;
                }
                this.displayHand(this.humanPlayer);
            } else {
                updateDisplay("They didn't have any of those, Go Fish!");
                let drawnCard: PlayingCard = this.humanPlayer.drawCard();
                updateDisplay("You draw a " + drawnCard.toString());
                if (drawnCard.getValue() == value) {
                    updateDisplay("You asked for " + value + " and drew a card of that rank! You can ask for another card!");
                    if (this.humanPlayer.getHand().isHandEmpty()) {
                        this.winner = this.humanPlayer;
                        break;
                    }
                    this.displayHand(this.humanPlayer);
                    continue;
                } else {
                    updateDisplay("This ends your turn.\n\n");
                    this.humanPlayer.nullAskedValue();
                    break;
                }
            }
        } while (true);
    }

    private getPlayingValue(player: GoFishPlayer): PlayingValue {
        let value: PlayingValue;
        do {
            value = Input.getPlayingValue("");
            if (player.checkIfHandHasValue(value) > 0) {
                break;
            } else {
                updateDisplay("Your hand doesn't have that value! Try another.");
                value = null;
            }
        } while (true);
        return value;
    }

    /* private GoFishPlayer switchPlayer() {
         if(nextPlayer == humanPlayer){
             return compPlayer;
         } else {
             return humanPlayer;
         }
     }*/

    endGame(): void {
        if (this.winner, this.humanPlayer) {
            updateDisplay("Congratulations, you won!");
        }
        else {
            updateDisplay("Awww, you loooooost.");
        }
    }

    private displayHand(player: GoFishPlayer): void {
        updateDisplay(this.compPlayer.getUser().getName() + " has " + this.compPlayer.getHand().getAllCards().length + " cards.");
        updateDisplay("Cards in your hand:");
        updateDisplay(player.getHand().toString());
        updateDisplay("\n\n What rank do you want to ask for?");
        let values: string = "";
        let valuesInHand: PlayingValue[] = player.getValuesInHand();
        for (let i = 0; i < valuesInHand.length; i++) {
            values += " [" + valuesInHand[i] + "] ";
        }

        updateDisplay(values);
    }

    public dealInitialHands(numberOfCards: number): void {
        for (let i = 0; i < numberOfCards; i++) {
            this.humanPlayer.addCard(this.deck.getAndRemoveCard());
            this.compPlayer.addCard(this.deck.getAndRemoveCard());
        }
    }


    class GoFishPlayer {

    private user: User;
    private hand: Hand;
    private askedValue: PlayingValue = null;

    constructor(user: User) {
        this.user = user;
        this.hand = new Hand();
    }

    getUser(): User {
        return this.user;
    }

    public getHand(): Hand {
        return this.hand;
    }

    private getAskedValue(): PlayingValue {
        return this.askedValue;
    }

    addCard(card: PlayingCard): void {
        this.hand.addCard(card);
        let four: PlayingValue = this.fourOfKindValue();
        if (four != null) {
            this.discardFourOfKind(four);
            updateDisplay("Completed a set of " + four + "!");
        }
    }

    askForValue(other: GoFishPlayer, value): number {
        this.askedValue = value;
        return other.checkIfHandHasValue(value);
    }

    checkIfHandHasValue(value: PlayingValue): number {
        return this.getAllOfValue(value).length;
    }

    private getAllOfValue(value: PlayingValue): PlayingCard[] {

        let cards: PlayingCard[] = this.getHand().getAllCards();
        let outCards: PlayingCard[] = new Array<PlayingCard>();

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].getValue() === value) {
                outCards.push(cards[i]);
            }
        }

        return outCards;
    }

    takeCardsFromOther(other: GoFishPlayer, value: PlayingValue): void {
        let movingCards: Array<PlayingCard> = other.getAllOfValue(value);
        updateDisplay(other.getUser().getName() + " had " + movingCards.length + " of " + value + "!");
        other.getHand().removeAllOf(movingCards);
        for (let i = 0; i < movingCards.length; i++) {
            this.addCard(movingCards[i]);
        }
    }

    nullAskedValue(): void {
        this.askedValue = null;
    }

    drawCard(): PlayingCard {
        let drawnCard: PlayingCard = PlayingDeck.getAndRemoveCard();
        this.addCard(drawnCard);
        return drawnCard;
    }

    fourOfKindValue(): PlayingValue {

        // Map<PlayingValue, Integer> count = new HashMap<>();
        let map: Map.prototype.constructor;
        let hasFour: PlayingValue = null;
        let cards: PlayingCard[] = this.getHand().getAllCards();
        for (let i = 0; i < cards.length; i++) {
            if (count.containsKey(card.getValue())) {
                count.put(card.getValue(), (count.get(card.getValue()) + 1));
                if (count.get(card.getValue()) == 4) {
                    hasFour = card.getValue();
                }
            } else {
                count.put(card.getValue(), 1);
            }
        }
        return hasFour;
    }

    discardFourOfKind(value: PlayingValue): void {
        let cards: PlayingCard[] = this.getHand().getAllCards();
        let movingCards: PlayingCard[] = new Array<PlayingCard>();
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].getValue() === value) {
                movingCards.push(cards[i]);
            }
        }
        this.getHand().removeAllOf(movingCards);
        // this.getHand().getAllCards().removeIf(card -> card.getValue() == value);
    }

    getValuesInHand(): PlayingValue[] {
        let cards: PlayingCard[] = this.hand.getAllCards();
        let values: PlayingValue[] = new Array<PlayingValue>();

        for (let i = 0; i < cards.length; i++) {
            values.push(cards[i].getValue());
        }
        return values;
        // return new TreeSet<>(this.hand.getAllCards().stream().map(PlayingCard::getValue).collect(Collectors.toList()));
    }

}
}