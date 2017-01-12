
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter(function(obj) {
    for (var i = 0; i < Object.keys(source).length; i++) {
      if (!obj.hasOwnProperty(Object.keys(source)[i]) || obj[Object.keys(source)[i]] !== source[Object.keys(source)[i]]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
