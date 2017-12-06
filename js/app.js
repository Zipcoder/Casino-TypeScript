System.register("PlayingSuit", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function toString() {
        return this.symbol;
    }
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
            symbol = PlayingSuit.valueOf().toString();
        }
    };
});
System.register("PlayingValue", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function getValue() {
        return this.value;
    }
    function toString() {
        return this.value;
    }
    var PlayingValue, value;
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
            value = PlayingValue.valueOf().toString();
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
                function PlayingCard(suit, value) {
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
                    this.suit = suit;
                    this.value = value;
                }
                return PlayingCard;
            }());
            exports_3("PlayingCard", PlayingCard);
        }
    };
});
///<reference path="PlayingCard.ts"/>
System.register("PlayingDeck", ["enumValues", "PlayingSuit", "PlayingValue", "PlayingCard"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var enumValues_1, PlayingSuit_1, PlayingValue_1, PlayingCard_1, PlayingDeck;
    return {
        setters: [
            function (enumValues_1_1) {
                enumValues_1 = enumValues_1_1;
            },
            function (PlayingSuit_1_1) {
                PlayingSuit_1 = PlayingSuit_1_1;
            },
            function (PlayingValue_1_1) {
                PlayingValue_1 = PlayingValue_1_1;
            },
            function (PlayingCard_1_1) {
                PlayingCard_1 = PlayingCard_1_1;
            }
        ],
        execute: function () {///<reference path="PlayingCard.ts"/>
            PlayingDeck = /** @class */ (function () {
                function PlayingDeck() {
                }
                PlayingDeck.prototype.PlayingDeck = function () {
                    this.populate();
                };
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
                PlayingDeck.prototype.getAndRemoveCard = function () {
                    if (this.cards.length == 0) {
                        this.populate();
                        //shuffle();
                    }
                    return this.cards.shift();
                };
                PlayingDeck.prototype.populate = function () {
                    this.cards = new Array();
                    var suits = enumValues_1.EnumValues.getValues(PlayingSuit_1.PlayingSuit);
                    var values = enumValues_1.EnumValues.getValues(PlayingValue_1.PlayingValue);
                    for (var i = 0; i < suits.length; i++) {
                        for (var j = 0; j < values.length; i++) {
                            this.cards.push(new PlayingCard_1.PlayingCard(suits[i].valueOf(), values[j].valueOf()));
                        }
                    }
                };
                return PlayingDeck;
            }());
        }
    };
});
//# sourceMappingURL=app.js.map