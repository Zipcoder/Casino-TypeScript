System.register("PlayingSuit", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlayingSuit, symbol;
    return {
        setters: [],
        execute: function () {
            (function (PlayingSuit) {
                PlayingSuit["HEART"] = "\u2661";
                PlayingSuit["DIAMOND"] = "\u2662";
                PlayingSuit["CLUB"] = "\u2667";
                PlayingSuit["SPADE"] = "\u2664";
            })(PlayingSuit || (PlayingSuit = {}));
            exports_1("PlayingSuit", PlayingSuit);
            symbol = PlayingSuit.valueOf();
            toString = function () {
                return symbol;
            };
        }
    };
});
System.register("PlayingValue", [], function (exports_2, context_2) {
    "use strict";
    _this = this;
    var __moduleName = context_2 && context_2.id;
    function getValue() {
        return this.value;
    }
    var _this, PlayingValue, value;
    return {
        setters: [],
        execute: function () {
            (function (PlayingValue) {
                PlayingValue["TWO"] = "2";
                PlayingValue["THREE"] = "3";
                PlayingValue["FOUR"] = "4";
                PlayingValue["FIVE"] = "5";
                PlayingValue["SIX"] = "6";
                PlayingValue["SEVEN"] = "7";
                PlayingValue["EIGHT"] = "8";
                PlayingValue["NINE"] = "9";
                PlayingValue["TEN"] = "10";
                PlayingValue["JACK"] = "J";
                PlayingValue["QUEEN"] = "Q";
                PlayingValue["KING"] = "K";
                PlayingValue["ACE"] = "A";
            })(PlayingValue || (PlayingValue = {}));
            exports_2("PlayingValue", PlayingValue);
            value = PlayingValue.valueOf();
            toString = function () {
                return _this.value;
            };
        }
    };
});
///<reference path="PlayingSuit.ts" />
///<reference path="PlayingValue.ts" />
System.register("PlayingCard", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var PlayingCard;
    return {
        setters: [],
        execute: function () {///<reference path="PlayingSuit.ts" />
            ///<reference path="PlayingValue.ts" />
            PlayingCard = /** @class */ (function () {
                function PlayingCard() {
                    var _this = this;
                    this.toString = function () {
                        return "" + _this.value + _this.suit;
                    };
                    this.getSuit = function () {
                        return _this.suit;
                    };
                    this.getValue = function () {
                        return _this.value;
                    };
                }
                PlayingCard.prototype.PlayingCard = function (suit, value) {
                    this.suit = suit;
                    this.value = value;
                };
                return PlayingCard;
            }());
        }
    };
});
///<reference path="PlayingCard.ts"/>
System.register("PlayingDeck", ["enum-values", "PlayingSuit", "PlayingValue"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var enum_values_1, PlayingSuit_1, PlayingValue_1, PlayingDeck;
    return {
        setters: [
            function (enum_values_1_1) {
                enum_values_1 = enum_values_1_1;
            },
            function (PlayingSuit_1_1) {
                PlayingSuit_1 = PlayingSuit_1_1;
            },
            function (PlayingValue_1_1) {
                PlayingValue_1 = PlayingValue_1_1;
            }
        ],
        execute: function () {///<reference path="PlayingCard.ts"/>
            //import { Card } from "ts/PlayingCard";
            PlayingDeck = /** @class */ (function () {
                function PlayingDeck() {
                    var _this = this;
                    // public void shuffle(){
                    //     Collections.shuffle(cards);
                    // }
                    //
                    // public ArrayList<PlayingCard> getAllCards(){
                    //     return cards;
                    // }
                    //
                    // public Integer countLeft(){
                    //     return cards.size();
                    // }
                    this.getAndRemoveCard = function () {
                        if (_this.cards.length == 0) {
                            populate();
                            //shuffle();
                        }
                        card = cards.get(0);
                        cards.remove(0);
                        return card;
                    };
                    this.populate = function () {
                        cards = new Array < PlayingCard > [];
                        var suits = enum_values_1.EnumValues.getValues(PlayingSuit_1.PlayingSuit);
                        var values = enum_values_1.EnumValues.getValues(PlayingValue_1.PlayingValue);
                        for (var i = 0; i < suits.length; i++) {
                            for (var j = 0; j < values.length; i++) {
                                cards.add(new PlayingCard(suits[i], values[j]));
                            }
                        }
                    };
                }
                PlayingDeck.prototype.PlayingDeck = function () {
                    this.populate();
                };
                return PlayingDeck;
            }());
        }
    };
});
//# sourceMappingURL=app.js.map