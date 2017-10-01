//var square = function(x) {
//  return x * x;
//};

console.log(square(12));

var makeNoise = function() {
  console.log("Pling!");
}

makeNoise();

//var power = function(base, exponent) {
//  var result = 1;
//  for (var count = 0; count < exponent; count++)
//    result *= base;
//  return result;
//};

console.log(power(2, 10));

var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'"
    result += "\\";
  }
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());

function square(x) {
  return x * x;
}

console.log(square(11));

console.log("The future say:", future());

function future() {
  return "We STILL have no flying cars.";
}

function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");

//alert("Hello", "Good Evening", "How do you do?");

function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
console.log(power(4,3));

console.log("R", 2, "D", 2);

// Closures

function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));

function recursive_power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * recursive_power(base, exponent - 1)
}

console.log(recursive_power(2, 5));

function findSolution(target) {
  function find(current, history) {
    if (current == target)
      return history;
    else if (current > target)
      return null;
    else
      return find(current + 5, "(" + history + " + 5") ||
             find(current * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

//console.log(zeroPad(7, 3));

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);

// Create a function value f
var f = function(a) {
  console.log(a + 2)
}

// Declare g to be a function
function g(a,b) {
  return a * b * 3.5;
}
