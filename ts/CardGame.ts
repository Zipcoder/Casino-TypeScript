abstract class CardGame implements Game{
    static cardValueInterpret(valueToInterpret: string): number {
        if (valueToInterpret == 'J' || valueToInterpret == 'Q' || valueToInterpret == 'K') {
            return 10;
        } else if (valueToInterpret == 'A') {
            return 11;
        } else {
            return parseInt(valueToInterpret);
        }
    }

    static shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}