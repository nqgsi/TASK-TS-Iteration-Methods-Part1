/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// `squaredNumbers` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array that contains each number squared.
// example:
// squaredNumbers(numbers); // => [100, 169, 400, 625, 1444, 1225, 1600]
function squaredNumbers(numbers: number[]): number[] {
  let sqr = numbers.map((a) => a ** 2);

  return sqr;
}

// `doubledNumbers` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array that contains each number multiplied by 2.
// example:
// doubledNumbers(numbers); // => [20, 26, 40, 50, 76, 70, 80]
function doubledNumbers(numbers: number[]): number[] {
  let Mnum = numbers.map((b) => b * 2);

  return Mnum;
}

export { squaredNumbers, doubledNumbers };
