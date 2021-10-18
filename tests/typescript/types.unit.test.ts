import utils from "../../src/typescript/index";
describe("Suite test for types", () => {
  test("Should declarate and return a boolean", () => {
    let muted:boolean = true;
    muted = false;

    expect(muted).toBeFalsy();
  });

  test("Should declarate and return a number", () => {
    const age:number = 6;

    expect(age).toBe(6);
  });

  test("Should declarate and return a string", () => {
    const expectResult = 'My name is Richard';
    const name:string = 'Richard';
    const greet:string = `My name is ${name}`;

    expect(greet).toBe(expectResult);
  });

  test("Should declarate and return a string array", () => {
    const expectResult = 'Raul';
    let people:string[] = [];
    people = ["Isabel", "Nicole", "Raul"];

    expect(people.length).toBe(3);
    expect(people[2]).toBe(expectResult);
  });

  test("Should declarate and return a array", () => {
    const expectResult = 'Pedro';
    let peopleAndNumbers:Array<string | number> = [];
    peopleAndNumbers.push('Pedro');
    peopleAndNumbers.push(32);

    expect(peopleAndNumbers.length).toBe(2);
    expect(peopleAndNumbers[0]).toBe(expectResult);
    expect(peopleAndNumbers[1]).toBe(32);
  });

  test("Should declarate and return an enum", () => {
    const expectResult = `My Favorite Color is Green`;
    enum Colors {
        Red = 'Red',
        Green = 'Green',
        Blue = 'Blue',
        Yellow = 'Yellow'
    };
    let myFavoriteColor:Colors = Colors.Green;
    
    const result = `My Favorite Color is ${myFavoriteColor}`;

    expect(expectResult).toBe(result);
  });

  test("Should declarate and return an any variable", () => {
    const expectResult = {type: "Wildcard"};
    let option: any ="Joker";
    option = {type: "Wildcard"}

    expect(expectResult).toEqual(option);
  });

  test("Should declarate and return an any variable", () => {
    const expectResult = {type: "Wildcard"};
    let option:object = {type: "Wildcard"}

    expect(expectResult).toEqual(option);
  });
});