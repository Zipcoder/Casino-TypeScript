# TypeScript-Casino
* **Objective:**
  * To create a casino simulation.

## Minimum Viable Product (MVP)
* Your application must have at the very least 4 games:
  * Go Fish a card game
  * BlackJack a card game
  * Craps a dice game
  * Slots a mechanical game

## Specs
* The project should include some concept of each of the following classes.

### `Profile` class
* **Description:**
* `Profile` stores a casino-visitor's `id`, `name`, and `balance`.
* `Profile` objects should be created within the context of a casino.
* `Profile` objects store `profileId`, `username`, and `balance`.

### `PlayerInterface` interface
* **Description:**
	* `PlayerInterface` is a contract to ensure that all players have reference to a `profile`, `name`, and `id`.

* `PlayerInterface` should declare 3 methods
	* `Profile getProfile()`
	* `String getName()`
	* `Long getId()`


### `Player` class
* **Description:**
	* Represents a player within the context of a game.
 	* should [cease to exist](https://stackoverflow.com/questions/3798424/what-is-the-garbage-collector-in-java) upon termination of a game.
* `Player` should implement `PlayerInterface`
* `Player` objects should be created within the context of a game.

### `GameInterface` interface
* **Description:**
	* Represents a game which handles some type of player.
* should implement `Runnable`
* should be parameterized with a generic type whose upper bound is `PlayerInterface` that enforces the types of players this game can interact with.
* `GameInterface` should enforce an aspect of
	* `TypeOfPlayer[] getPlayers()`
	* `TypeOfPlayer getPlayer(Long playerId)`
	* `void addPlayer(TypeOfPlayer player)`
	* `void removePlayer(TypeOfPlayer player)`
	* `Boolean contains(TypeOfPlayer player)`


### `GameEngineInterface` interface
* **Description:**
	* `GameEngineInterface` is a contract which ensures all `GameEngine` can perform basic `GameEngine` operations.

* should be parameterized with two generic types
	* `GameTypePlayer` a sub class of `PlayerInterface`
	* `GameType` a sub class of `GameInterface<GameTypePlayer>`

* should declare three method signatures
	* `GameType getGame()`
		* return the composite Game object to the client.
	* `void evaluateTurn(GameTypePlayer player)`
		* evaluate the turn of a player,
	* `void run()`
		* begin game


### `GameEngine` abstract class
* **Description**
	* `GameEngine` ensures all sub-classes provide a `Game` object upon instantiation.
* should be parameterized with two generic types
	* `GameTypePlayer` a sub class of `PlayerInterface`
	* `GameType` a sub class of `GameInterface<GameTypePlayer>`
* should implement a `GameEngineInterface<GameType, GameTypePlayer>`
* should defer the definition of `evaluateTurn` and `run` to sub-classes.



### `Gamble` interface
* **Description**
	* Contract which ensures that a class enforces some aspect of _waging money_.
  
 

## Developmental Notes
* Go fish is a friendly game and should not involve gambling.
* `BlackJack` and `GoFish` are both Card Games and should therefore inherit from a common `CardGame`.
* Any common logic or fields between the games should live CardGame class, **not** BlackJack **nor** GoFish.
* You must have a completed and approved UML diagram before you proceed to do any development
* You can either work by yourself, or in a group no bigger than 3.
* All public methods should be tested.
