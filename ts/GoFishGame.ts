// /// <reference path="CardGame.ts" />
// /// <reference path="CardPlayer.ts" />
// /// <reference path="Deck.ts" />
// /// <reference path="GoFIshPlayer.ts" />
//
// class GoFish extends CardGame {
//
//         constructor(){
//             super();
//         }
//
//         goFishStart() {
//             var goFish = new GoFish();
//             var dealer = new CardPlayer();
//             var player = new CardPlayer();
//
//             goFish.addCardPlayer(dealer);
//             goFish.addCardPlayer(player);
//             goFish.deal(7);
//
//             console.log("Let's play some GoFish!");
//             console.log("player hand");
//             goFish.showPlayerHand();
//             console.log("dealer hand");
//             goFish.showDealerHand();
//         //     boolean playing = true;
//         //     while (playing) {
//         //         playerTurn();
//         //         dealerTurn();
//         //         playing = checkForWin();
//         //     }
//         //     gameOptions();
//         // }
//         }
//
//         // private boolean checkForWin() {
//         //     if (deck.getAllCards().size() == 0) {
//         //         compareBooks();
//         //         return false;
//
//         //     }
//         //     return true;
//         // }
//
//         // private void playerTurn() {
//         //     boolean playing = true;
//         //     checkHandSize(player);
//         //     while (playing) {
//         //         checkForBooks(player);
//         //         Console.print(player.getStringDisplayHand());
//         //         String askCard;
//         //         do {
//         //             askCard = Console.getString("Enter card you are looking for: ");
//         //         } while (!isCardInHand(askCard.toUpperCase(), player.getHand()));
//
//         //         if (isCardInHand(askCard.toUpperCase(), dealer.getHand())) {
//         //             swapCard(dealer, player, askCard);
//         //             Console.print("You got a match!");
//         //         } else {
//         //             Console.print("GO FISH!");
//         //             giveCard(player);
//         //             playing = false;
//         //         }
//         //     }
//         // }
//
//
//         // private void dealerTurn() {
//         //     boolean playing = true;
//         //     checkHandSize(dealer);
//         //     while (playing) {
//         //         checkForBooks(dealer);
//         //         Console.print("Opponent looking for card...");
//         //         Card dealerCard = dealerFindCard();
//         //         Console.print("Do you have any: " + dealerCard.getGoFishValue() + "'S ?");
//         //         if (isCardInHand(dealerCard.getGoFishValue(), player.getHand())) {
//         //             swapCard(player, dealer, dealerCard.getGoFishValue());
//         //         } else {
//         //             Console.print("Guess I'll go fish...");
//         //             giveCard(dealer);
//         //             playing = false;
//         //         }
//         //     }
//         // }
//
//         // private Card dealerFindCard() {
//         //     Random r = new Random();
//         //     int x = r.nextInt(dealer.getHand().size() - 1);
//         //     return dealer.getHand().get(x);
//         // }
//
//         // public boolean isCardInHand(String askCard, ArrayList<Card> hand) {
//         //     for (Card card : hand) {
//         //         if (card.getGoFishValue().equals(askCard)) {
//         //             return true;
//         //         }
//         //     }
//         //     return false;
//         // }
//
//         // private void swapCard(CardPlayer fromPlayer, CardPlayer toPlayer, String cardValue) {
//         //     ArrayList<Card> newHand = new ArrayList<>();
//         //     for (Card card : fromPlayer.getHand()) {
//         //         if (cardValue.equalsIgnoreCase(card.getGoFishValue())) {
//         //             toPlayer.addCard(card);
//         //         } else {
//         //             newHand.add(card);
//         //         }
//         //     }
//         //     fromPlayer.setHand(newHand);
//         // }
//
//         // public void checkForBooks(GoFishPlayer player) {
//         //     for (Map.Entry<String, Integer> entry : getHandMap(player).entrySet()) {
//         //         if (entry.getValue() == 4) {
//         //             player.addBookCounter(1);
//         //             removeBooks(player, entry.getKey());
//         //         }
//         //     }
//         // }
//
//         // public HashMap<String, Integer> getHandMap(GoFishPlayer player) {
//         //     HashMap<String, Integer> handMap = new HashMap<>();
//         //     for (Card card : player.getHand()) {
//         //         if (!handMap.containsKey(card.getGoFishValue())) {
//         //             handMap.put(card.getGoFishValue(), 1);
//         //         } else {
//         //             handMap.put(card.getGoFishValue(), handMap.get(card.getGoFishValue()) + 1);
//         //         }
//         //     }
//         //     return handMap;
//         // }
//
//         // public void removeBooks(GoFishPlayer player, String cardValue) {
//         //     ArrayList<Card> newHand = new ArrayList<>();
//         //     for (Card card : player.getHand()) {
//         //         if (!cardValue.equals(card.getGoFishValue())) {
//         //             newHand.add(card);
//         //         }
//         //     }
//         //     player.setHand(newHand);
//         // }
//
//
//         // private void compareBooks() {
//         //     if (player.getBookCounter() > dealer.getBookCounter()) {
//         //         System.out.println("You win!");
//         //     } else if (player.getBookCounter() < dealer.getBookCounter()) {
//         //         System.out.println("You lose!");
//         //     } else {
//         //         System.out.println("LET US FIGHT TO THE DEATH " + player.name.toUpperCase());
//         //     }
//         // }
//
//         // private void checkHandSize(CardPlayer player) {
//         //     if (player.getHand().size() < 1) {
//         //         giveCard(player);
//         //     }
//         // }
//
//
//     }
//
//     var goFish = new GoFish();
//     goFish.goFishStart();
//