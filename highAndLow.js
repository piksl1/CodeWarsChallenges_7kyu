/* // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. */

function highAndLow(numbers) {
  let toNumber = numbers.split(" ").map((x) => parseInt(x));
  console.log(toNumber);
  return `${Math.max(...toNumber)} ${Math.min(...toNumber)}`;
}

console.log(highAndLow("1 2 3 4 5"));
