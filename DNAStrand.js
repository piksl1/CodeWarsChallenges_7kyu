//Complementary DNA
/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). */

function DNAStrand(dna) {
  return dna
    .split("")
    .map((l) => {
      if (l === "A") {
        return (l = "T");
      } else if (l === "T") {
        return (l = "A");
      } else if (l === "G") {
        return (l = "C");
      } else {
        return (l = "G");
      }
    })
    .join("");
}

console.log(DNAStrand("AAAA"));
