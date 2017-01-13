
function translatePigLatin(str) {
  var regEx = (/^[aeiou]$/i);
  for (var i = 0; i <= str.length - 1; i++) {
    if (regEx.test(str[0])) {
      return str + 'way';
    } else if (regEx.test(str[i])) {
      return str.substring(i) + str.substring(0, i) + 'ay';
    }
  }
}

translatePigLatin("consonant");
