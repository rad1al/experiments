function logEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

//[1,2,3,4,5].forEach(function(num) {
//  console.log(num);
//});

var numbers = [1,2,3,4,5], sum = 0;

forEach(numbers, function(number) {
  sum += number;
})

console.log(sum); // -> 15

// Higher order functions

function greaterThan(n) {
  return function(m) { return m > n; };
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // -> true

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0) // -> calling with 0
                  // -> called with 0 - got false

function unless(test, then) {
  if (!test) then();
}

function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}


repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});
// -> 0 is even
// -> 2 is even

function transparentWrapping(f) {
  return function() {
    return f.apply(null, arguments);
  };
}

var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length); // -> 39

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
})); // -> (3) [{name : "Philibert Haverbeke", ...}, ...]

console.log(ancestry.filter(function(person) {
  return person.father == "Carel Haverbeke";
})); // -> [{name: "Carolus Haverbeke", ...}]

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
  return person.name;
})); // -> (3) ["Clara Aernoudts", "Emile Haverbeke", "Maria Haverbeke"]

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1,2,3,4], function(a, b) {
  return a + b;
}, 0)); // -> 10

console.log(ancestry.reduce(function(min, cur) {
  if (cur.born < min.born) return cur;
  else return min;
})) // -> {name: "Pauwels van Haverbeke", ...}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

console.log(average([1,2,3,4])); // -> 2.5

function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }
console.log(average(ancestry.filter(male).map(age))); // -> 61.667
console.log(average(ancestry.filter(female).map(age))); // -> 54.556

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]); // -> {name: "Philibert Haverbeke" ...}

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4); // -> 0.00048828125

// Find the percentage of a person's known ancestors who lived past 70

function countAncestors(person, test) {
  function combine(current, fromMother, fromFather) {
    var thisOneCounts = current != person && test(current);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}

function longLivingPercentage(person) {
  var all = countAncestors(person, function(person) {
    return true;
  });
  var longLiving = countAncestors(person, function(person) {
    return (person.died - person.born) >= 70;
  });
  return longLiving / all;
}

console.log(longLivingPercentage(byName["Emile Haverbeke"])); // -> 0.129629

// Binding

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));
// -> [{name: "Maria van Brussel", ...}, {name: "Carel Haverbeke", ...}]

console.log(ancestry.filter(isInSet.bind(null, theSet)));
