class HtmlObjectCreation {

    constructor() {}

    public static createHTMLButtonObject(parentDiv, objectType, label, idName, method) {
        let parentHTMLDiv = document.getElementById(parentDiv);
        let newButton = document.createElement(objectType);
        newButton.innerText = label;
        newButton.setAttribute('class', "btn btn-primary");
        newButton.setAttribute('id', idName);
        newButton.setAttribute('onclick', method);
        newButton.setAttribute('style', "display: block");
        parentHTMLDiv.appendChild(newButton);
    }

    public static createHTMLInputObject(parentDiv, labelText, inputId) {
        let parentHTMLDiv = document.getElementById(parentDiv);
        let newLabel = document.createElement("label");
        let newInput = document.createElement("input");
        newLabel.innerText = labelText;
        newInput.setAttribute('id', inputId);
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('style', "display: block");
        parentHTMLDiv.appendChild(newLabel);
        parentHTMLDiv.appendChild(newInput);
    }

    public static clearHTMLDiv(divToClear) {
        document.getElementById(divToClear).innerHTML = "";
    }

}