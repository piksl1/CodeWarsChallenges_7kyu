function disemvowel(str) {
  return [...str].filter((x) => x.match(/[^aieou]/gi)).join("");
}

console.log(disemvowel("This website is for losers LOL!"));
