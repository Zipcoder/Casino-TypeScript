interface WheelDelegate{
    wheelDidChangeSymbol(Wheel, WheelSymbol): void;
    wheelDidStop(Wheel,WheelSymbol): void;
}