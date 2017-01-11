
function sumAll(arr) {
  var arrSeq = [];
  for(var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++){
    arrSeq.push(i);
  }
  return arrSeq.reduce(function(acc, pre){
    return acc + pre;
  }, 0);
}

sumAll([1, 4]);
