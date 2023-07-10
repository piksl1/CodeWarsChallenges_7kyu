/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

 */
function getMiddle(s) {
  let middleIndex = Math.floor(s.length / 2);
  return s.length % 2 == 0
    ? [...s.slice(middleIndex - 1, middleIndex + 1)].join("")
    : s.length % 2 == 1
    ? s[middleIndex]
    : s;
}
console.log(getMiddle("testing"));
