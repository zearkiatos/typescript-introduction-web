function sum(a: number, b: number): number {
  return a + b;
}

function sumCreator(a: number) {
  return function (b: number) {
    return b + a;
  };
}

function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

export default {
  sum,
  sumCreator,
  fullName,
};
