// Minimum

function minimum(a, b) {
  if (a <= b)
    return a;
  else
    return b;
}

console.log(minimum(1000, 37));

// Recusion

function isEven(x) {
  if (x >= 2)
    return isEven(x - 2);
  if (x < 0)
    return isEven(-x);
  if (x == 1)
    return false;
  else if (x == 0)
    return true;
}

console.log(isEven(50)); // -> true
console.log(isEven(75)); // -> false
console.log(isEven(-3)); // -> false

// Bean counting

//function countBs(s) {
//  var count = 0;
//  for (var i = 0; i < s.length; i++) {
//    if (s.charAt(i) == "B")
//      count += 1;
//  }
//  return count;
//}
//
//console.log(countBs("BOBBLE")); // -> 3

function countChar(s, char) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == char)
      count += 1;
  }
  return count;
}

console.log(countChar("ALPHABET", "A")); // -> 2

function countBs(s) {
  return countChar(s, "B");
}

console.log(countBs("BOBBLE")); // -> 3