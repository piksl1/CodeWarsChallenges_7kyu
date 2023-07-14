//Mumbling

/* This time no story, no theory. The examples below show you how to write function accum:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
 */

function accum(s) {
  return s
    .split("")
    .map((l, i) => l.toUpperCase() + l.charAt(0).toLowerCase().repeat(i))
    .join("-");
}
console.log(accum("abcd"));
