class WebPageInteraction {
    displayElement: any;
    userInputElement: any;
    verifyEntry: boolean = false;

    private static instance: WebPageInteraction;

    private constructor() {
        this.displayElement = document.getElementById("display");
        this.userInputElement = document.getElementById("submit");
    }

    static getInstance() {
        if (!WebPageInteraction.instance) {
            WebPageInteraction.instance = new WebPageInteraction();
            // ... any one time initialization goes here ...
        }
        return WebPageInteraction.instance;
    }


    displayToWebpage(input: string): void {
        this.displayElement = document.getElementById("display");
        this.displayElement.innerHTML += input;
        this.displayElement.innerHTML += "<br/>";
        this.displayElement.scrollTop = this.displayElement.scrollHeight*2;

    }

    addElement(parentId, elementTag, elementId, html) {
        // Adds an element to the document
        var p = document.getElementById(parentId);
        var newElement = document.createElement(elementTag);
        newElement.setAttribute('id', elementId);
        newElement.innerHTML = html;
        p.appendChild(newElement);
    }
}