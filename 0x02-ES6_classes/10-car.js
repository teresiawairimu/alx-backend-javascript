export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CloneClass = this.constructor[Symbol.species] || this.contructor;
    return new CloneClass();
  }

  static get [Symbol.species]() {
    return this;
  }
}
