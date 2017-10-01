// Flattening
function flatten(array) {
  return array.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}

console.log(flatten([[1,2,3],[4,5,6],[7,8]]));
console.log(flatten([[],[7,5]]));
console.log(flatten([[],[]]));
console.log(flatten([]));

// Mother-child age-difference

var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};

ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//function MotherChildAgeDiff(person) {
//  if (person.parent in byName)
//    return byName[person.parent].born - person.born;
//}

function MotherChildAgeDiff(person) {
  if (person.mother in byName)
    return person.born - byName[person.mother].born;
}

//console.log(byName["Philibert Haverbeke"]);
console.log(MotherChildAgeDiff(byName["Philibert Haverbeke"])); // -> 31

var results = ancestry.filter(function(person) {
  return person.mother in byName;
});

//console.log(results);
//console.log(results.map(MotherChildAgeDiff));

function add(a,b) {
  return a + b;
}

function sum(array) {
  return array.reduce(add, 0);
}

function average(array) {
  return sum(array) / array.length;
} 

//console.log(sum([1,2,3,4])); // -> 10
console.log(average(results.map(MotherChildAgeDiff))); // 31.222

// Historical life expectancy

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element]; // initialize dictionary value for key
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

// -> 16: 43.5
// -> 17: 51.2
// -> 18: 52.78947368421053
// -> 19: 54.833333333333336
// -> 20: 84.66666666666667
// -> 21: 94

// Every and then some

function every(array, test) {
  if (array.length == 0) return true;
  return array.filter(test).length == array.length;
}

function some(array, test) {
  if (array.length == 0) return false;
  return array.filter(test).length > 0;
}

console.log(every([10,12,16,18], function(num) {
  return num > 10;
})) // -> false


console.log(some([10,12,9,18], function(num) {
  return num < 10;
})) // -> true


console.log(every([NaN, NaN, NaN], isNaN));
// -> true
console.log(every([NaN, NaN, 4], isNaN));
// -> false
console.log(some([NaN, 3, 4], isNaN));
// -> true
console.log(some([2, 3, 4], isNaN));
// -> false