export class Car {
    constructor(name, numberOfWheel, horn, frontColor, backColor) {
        this.carName = name;
        this.numberOfWheel = numberOfWheel;
        this.horn = horn;
        this.frontColor = frontColor;
        this.backColor = backColor;
    }

    canWork() {
        if ( this.numberOfWheel === 4) {
            console.log(`${this.carName} can work!`)
        } else if ( this.numberOfWheel > 4 ) {
            console.log(`${this.carName} can't have more than 4 wheels!`);
        } else {
            console.log(`${this.carName} can't work with just ${this.numberOfWheel} wheels!`)
        }
    } // metoda 1

    canHonk() {
        if( this.horn ) {
            console.log(`This ${this.carName} can honk because it has a horn!`);
        } else {
            console.log(`This ${this.carName} can not honk because it has no horn!`);
        }
    } // metoda 2

    colorOfCar() {
        console.log(`This car has two colors, ${this.frontColor} in front and ${this.backColor} on the back!`);
    } // metoda 3
}