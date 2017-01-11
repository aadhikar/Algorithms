
function rot13(str) { // LBH QVQ VG!
  var char = '';
  var decryptedStr = '';
  for (var i = 0; i <= str.length - 1; i++) {
    if (str[i]) {
      var charCode = str.charCodeAt(i);
      if ((charCode >= 65) && (charCode <= 90)) {
        char = String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      } else if ((charCode >= 97) && (charCode <= 122)) {
        char = String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
      } else if (charCode) {
        char = String.fromCharCode(charCode);
      }
      decryptedStr += char;
    }
  }
  return decryptedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
