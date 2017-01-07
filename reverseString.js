
function reverseString(str) {
  var splitedString = [];
  var reversedString = [];
  splitedString = str.split("");
  reversedString = splitedString.reverse();
  return reversedString.join("");
}

reverseString("hello");
reverseString("Greetings from Earth");
