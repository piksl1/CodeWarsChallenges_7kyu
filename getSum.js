//Beginner Series #3 Sum of Numbers
/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */

function getSum(a, b) {
  let result = 0;
  if (a === b) {
    return a;
  } else if (a > b) {
    for (let i = a; i >= b; i--) {
      result += i;
    }
    return result;
  } else {
    for (let i = b; i >= a; i--) {
      result += i;
    }
    return result;
  }
}
console.log(getSum(5, -1));
