//Exes and Ohs
/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */
function XO(str) {
  if (str === null || str === undefined) {
    return true;
  }

  const regexX = /x/gi;
  const regexO = /o/gi;

  const matchX = str.match(regexX);
  const matchO = str.match(regexO);

  const countX = matchX ? matchX.length : 0;
  const countO = matchO ? matchO.length : 0;

  return countX === countO;
}

console.log(XO("xxxm"));
