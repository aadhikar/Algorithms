
function convertToRoman(num) {
  decToRoman = "";
  romanNumericals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  decimalNumericals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (var i = 0; i < romanNumericals.length; i++) {
    while (num >= decimalNumericals[i]) {
      decToRoman += romanNumericals[i];
      num -= decimalNumericals[i];
    }
  }
  return decToRoman;
}

convertToRoman(36);
