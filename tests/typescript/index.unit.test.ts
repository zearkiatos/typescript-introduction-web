import utils from "../../src/typescript/index";
describe("Suite test for index", () => {
  test("Should return the sum of two numbers", () => {
    const expectedResult: number = 4;

    const sum = utils.sum(2, 2);

    expect(expectedResult).toBe(sum);
  });
});
