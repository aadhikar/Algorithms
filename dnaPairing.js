
function pairElement(str) {
  var A = ['A', 'T'];
  var T = ['T', 'A'];
  var G = ['G', 'C'];
  var C = ['C', 'G'];
  var res = [];
  for (var i = 0; i <= str.length - 1; i++) {
    switch (str[i]) {
      case 'A':
        res.push(A);
        break;
      case 'T':
        res.push(T);
        break;
      case 'G':
        res.push(G);
        break;
      default:
        res.push(C);
        break;
    }
  }
  return res;
}

pairElement("GCG");
