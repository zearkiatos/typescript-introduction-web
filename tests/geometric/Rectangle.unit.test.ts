import Rectangle from '../../src/geometric/Rectangle';
import Color from '../../src/enum/Color';
describe("Suite test for class Rectangle", () => {
  test("Should receive the weight of a rectangle and calculate its area", () => {
    const expectResult:number = 24;
    const expectString:string = 'A Green rectangle';

    const rectangle:Rectangle = new Rectangle(4, 6, Color.Green);
    const area = rectangle.area();
    const rectangleString = rectangle.toString();

    expect(expectResult).toBe(area);
    expect(expectString).toBe(rectangleString);
  });

  test("Should receive the weight of a rectangle and calculate its area without color", () => {
    const expectResult:number = 5;
    const expectString:string = 'A rectangle';

    const rectangle:Rectangle = new Rectangle(5, 1);
    const area = rectangle.area();
    const rectangleString = rectangle.toString();

    expect(expectResult).toBe(area);
    expect(expectString).toBe(rectangleString);
  });
});