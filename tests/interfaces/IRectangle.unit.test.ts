import IRectangle from '../../src/interfaces/IRectangle';
import Color from '../../src/enum/Color';
describe("Suite test for interface Rectangle", () => {
  test("Should declarate a rectangle with its weights", () => {
    const expectWidth:number = 4;
    const expectHeight:number = 6;

    const rectangle:IRectangle = {
        width: 4,
        height: 6
    };

    expect(rectangle.width).toBe(expectWidth);
    expect(rectangle.height).toBe(expectHeight);
  });
});