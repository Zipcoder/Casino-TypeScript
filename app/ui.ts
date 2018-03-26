export class UI {

    constructor() {

    }

    display(someString: string) {
        document.getElementById("display")!.innerHTML = someString;
    }


}