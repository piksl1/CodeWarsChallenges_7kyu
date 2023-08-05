//Growth of a Population

/* the function nb_year should return n number of entire years needed to get a population greater or equal to p. */

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    years++;
  }
  return years;
}

console.log(nbYear(1500, 5, 100, 5000));
