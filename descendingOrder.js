//Descending Order
/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

function descendingOrder(n) {
  const digits = String(n).split("");
  const sortedDigits = digits.sort((a, b) => b - a);
  return Number(sortedDigits.join(""));
}

console.log(descendingOrder(42145));
