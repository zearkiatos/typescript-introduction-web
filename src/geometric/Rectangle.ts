import Color from "../enum/Color";
import IRectangle from "../interfaces/IRectangle";
class Rectangle implements IRectangle {
  width: number;
  height: number;
  color: Color;
  constructor(width: number, height: number, color?: Color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area(): number {
    return this.width * this.height;
  }

  toString(): string {
    return this.color ? `A ${this.color} rectangle` : "A rectangle";
  }
}

export default Rectangle;
