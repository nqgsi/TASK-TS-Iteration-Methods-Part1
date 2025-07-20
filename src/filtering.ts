/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// `greaterThanTwentyFive` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array containing numbers that are greater than or equal to 25.
// example:
// greaterThanTwentyFive(numbers); // => [38, 35, 40]
function greaterThanTwentyFive(numbers: number[]): number[] {
  let gNUM = numbers.filter((a) => a >= 25);
  return gNUM;
}

// `divisibleByFive` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return a new array containing numbers that are divisible by 5.
// example:
// divisibleByFive(numbers); // => [10, 20, 25, 35, 40]
function divisibleByFive(numbers: number[]): number[] {
  let dNUM = numbers.filter((b) => b % 5 === 0);

  return dNUM;
}

export { greaterThanTwentyFive, divisibleByFive };
