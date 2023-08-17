//Regex validate PIN code
/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false. */

function validatePIN(pin) {
  let regex = /^(?:\d{4}|\d{6})$/;
  return regex.test(pin);
}

console.log(validatePIN("1234"));
