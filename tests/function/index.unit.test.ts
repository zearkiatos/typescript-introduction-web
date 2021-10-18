import functions from "../../src/function/index";
describe("Suite test for functions", () => {
  test("Should return the sum of two numbers", () => {
    const expectedResult: number = 4;

    const sum = functions.sum(2, 2);

    expect(expectedResult).toBe(sum);
  });

  test("Should return a function with the sum of another number", () => {
    const expectedResult: number = 6;

    const addFour = functions.sumCreator(4);
    const fourPlusTwo = addFour(2);

    expect(expectedResult).toBe(fourPlusTwo);
  });

  test("Should return the full name", () => {
    const expectedResult: string = "Pedro Capriles";

    const fullName = functions.fullName('Pedro', 'Capriles');

    expect(expectedResult).toBe(fullName);
  });

  test("Should return the full name without lastName", () => {
    const expectedResult: string = "Pedro undefined";

    const fullName = functions.fullName('Pedro');

    expect(expectedResult).toBe(fullName);
  });

  
});