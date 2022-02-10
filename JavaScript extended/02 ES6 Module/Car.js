export default class Car {
    constructor(color, brand, horsepower = 100) {
        this.color = color;
        this.brand = brand;
        this.horsepower = horsepower;
    }

    printYourself() {
        console.log("I have color " + this.color);
    }

    printAmountOfWeehls() {
        console.log(this.amountOfWeehls)
    }
}