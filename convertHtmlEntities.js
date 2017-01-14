
function convertHTML(str) {
  // &colon;&rpar;

  return str.split('').map(function(val) {
    switch (val) {
      case '<':
        val = '&lt;';
        break;
      case '&':
        val = '&amp;';
        break;
      case '>':
        val = '&gt;';
        break;
      case '"':
        val = '&quot;';
        break;
      case "'":
        val = "&apos;";
        break;
    }
    return val;
  }).join('');
}

convertHTML("Dolce & Gabbana");
