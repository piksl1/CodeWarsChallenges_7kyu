//Shortest Word
/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
  let wordLength = s.split(" ").map((w) => w.length);
  return Math.min(...wordLength);
}

console.log(findShort("Let's travel abroad shall we"));
