/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];
// `filteredAndSquared` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return an array containing the squares of all numbers that are 20 or greater.
// example:
// filteredAndSquared(numbers); // => [400, 625, 1444, 1225, 1600]
function filteredAndSquared(numbers: number[]): number[] {
  let FMnum = numbers.filter((a) => a >= 20).map((a) => a ** 2);
  return FMnum;
}
console.log(filteredAndSquared(numbers));

// `filteredAndTripled` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return an array of numbers, where each number is tripled if it is divisible by 5.
// example:
// filteredAndTripled(numbers); // => [30, 60, 75, 105, 120]
function filteredAndTripled(numbers: number[]): number[] {
  let FT = numbers.filter((b) => b % 5 === 0).map((b) => b * 3);

  return FT; // replace empty array with what you see is fit
}

export { filteredAndSquared, filteredAndTripled };
