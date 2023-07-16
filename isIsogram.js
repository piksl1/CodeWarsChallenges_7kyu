//Isograms
/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str) {
  letters = str.toLowerCase().split("");
  uniLetters = new Set(letters);
  return letters.length === uniLetters.size;
}

console.log(isIsogram("Dermatoglyphics"));
