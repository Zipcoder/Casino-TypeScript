function rotate(idx: number, next: WheelSymbol): void {
    const x: any = document.getElementById("wheel"+String(idx));
    switch (next) {
        case WheelSymbol.Spade:
            x.style.backgroundImage = "url(../images/spadesAce@2x.png)";
            break;
        case WheelSymbol.Diamond:
            x.style.backgroundImage = "url(../images/diamondsAce@2x.png)";
            break;
        case WheelSymbol.Club:
            x.style.backgroundImage = "url(../images/clubsAce@2x.png)";
            break;
        case WheelSymbol.Heart:
            x.style.backgroundImage = "url(../images/heartsAce@2x.png)";
            break;
        case WheelSymbol.Cherry:
            x.style.backgroundImage = "url(../images/heartsQueen@2x.png)";
            break;
    }
}

const slotMachine: SlotMachine = new SlotMachine();