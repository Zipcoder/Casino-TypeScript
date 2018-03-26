class SlotMachine {
    wheels: Wheel[];
    private running: boolean;
    private stoppedWheels: number;

    constructor() {
        this.wheels = [
            new Wheel(this, 1, 100),
            new Wheel(this, 2, 200),
            new Wheel(this, 3, 300),
        ];
        this.running = false;
        this.stoppedWheels = 0;
    }

    // WheelDelegate interface implementation
    wheelDidChangeSymbol(wheel: Wheel, symbol: WheelSymbol): void {
        rotate(wheel.id, symbol);
        wheel.advance();
    }

    // WheelDelegate interface implementation
    wheelDidStop(wheel: Wheel, symbol: WheelSymbol): void {
        this.stoppedWheels++;
        if (this.stoppedWheels >= this.wheels.length) {
            this.running = false;
            for (let i: number = 0; i < this.wheels.length; i++) {
                // reshuffle the wheels or else they will have the same value on every spin
                this.wheels[i].shuffle();
            }
            this.stoppedWheels = 0;
            // check here for winner and reply
        }
    }

    run(): void {
        if (this.running) {
            return;
        }
        this.running = true;
        for (let i: number = 0; i < this.wheels.length; i++) {
            this.wheels[i].advance();
        }
    }
}
