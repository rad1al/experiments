// The sum of a range
function range(start, end) {
  var array = [];
  var step = 1
  if (arguments.length == 3) {
    var step = arguments[2];
    if (step < 0) {
      for (var i = start; i >= end; i += step)
      array.push(i);
    }
    return array;
  }
  for (var i = start; i <= end; i += step)
    array.push(i);
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

console.log(range(1, 10)); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); // -> [5, 4, 3, 2]
console.log(sum(range(1, 10))); // -> 55

// Reversing an array

function reverseArray(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
  return reversedArray
}

console.log(reverseArray([1,2,3,4,5])); // -> [5, 4, 3, 2, 1]

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    var temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  return array
}

console.log(reverseArrayInPlace([1,2,3,4,5,6])); // -> [6, 5, 4, 3, 2, 1]

// A list

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

console.log(arrayToList([1,2,3])); // -> {value: 1, rest: {...}}


function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

console.log(listToArray(arrayToList([1,2,3]))); // -> [1, 2, 3]

function prepend(elem, list) {
  return {value: elem, rest: list};
}

console.log(prepend(3, prepend(5, null)));
//console.log(prepend(5, null));
//console.log(prepend(3, {value: 5, rest: null}));

function nth(list, n) {
  if (list == null) 
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n-1);
}

console.log(nth(arrayToList([1,2,3,4,5]), 3)) // -> 4

function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;
  var properties_in_a = 0, properties_in_b = 0;
  for (var property in a)
    properties_in_a += 1;
  for (var property in b) {
    properties_in_b += 1;
    if (!(property in a) || !deepEqual(a[property], b[property]))
    return false;
  }
  return properties_in_a == properties_in_b;
}


var obj = {This: {is: "a"}, test: "case"};
console.log(deepEqual(obj, obj));
// -> true
console.log(deepEqual(obj, {This: 1, test: "case"}));
// -> false
console.log(deepEqual(obj, {This: {is: "a"}, test: "case"}));
// -> true