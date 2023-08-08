//Two to One
/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s */

function longest(s1, s2) {
  let combined = s1 + s2;
  let sorted = [...new Set(combined)].sort();
  return sorted.join("");
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
