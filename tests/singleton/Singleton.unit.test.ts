import Singleton from '../../src/singleton/Singleton';
describe("Suite test for Singleton pattern example", () => {
  test("Should keep only one instance", () => {
    const firstInstance = Singleton.getInstance();
    const secondInstance = Singleton.getInstance();

    const areEquals = firstInstance === secondInstance;


    expect(areEquals).toBeTruthy();
  });
});