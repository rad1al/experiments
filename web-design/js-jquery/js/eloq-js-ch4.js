var listOfNumbers = [2,3,5,7,11];

console.log(listOfNumbers[2]);

//console.log(null.length); // -> TypeError: Cannot read property 'length' of null

var doh = "Doh";
console.log(typeof doh.toUpperCase); // -> function
console.log(doh.toUpperCase()); // -> DOH

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);

var descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

console.log(descriptions);
console.log(descriptions.wolf); // -> undefined

var anObject = {left: 1, right: 2};
console.log(anObject.left); // -> 1
delete anObject.left;
console.log(anObject.left); // -> undefined
console.log("left" in anObject); // -> false
console.log("right" in anObject); // -> true

//var journal = [
//  {events: ["work", "touched tree", "pizza", 
//            "running", "television"],
//   squirrel: false},
//  {events: ["work", "ice cream", "cauliflower", 
//            "lasagna", "touched tree", "brushed teeth"],
//   squirrel: false},
//  {events: ["weekend", "cycling", "break", 
//            "peanuts", "bear"],
//   squirrel: true}
//];

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2) // -> true
console.log(object1 == object3) // -> false

object1.value = 15;
console.log(object2.value); // -> 15
console.log(object3.value); // -> 10

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  })
}

addEntry(["work", "touched tree", "pizza", 
          "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", 
          "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", 
          "peanuts", "bear"], true);

//console.log(journal[0]); // -> (events: Array(5), squirrel: false)

// Computing correlation

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
         Math.sqrt((table[2] + table[3]) *
                   (table[0] + table[1]) *
                   (table[1] + table[3]) *
                   (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL)); // -> [76, 9, 4, 1]
//console.log(JOURNAL.length); -> 90

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.079);
storePhi("touched tree", -0.081);
console.log("pizza" in map); // -> true
console.log(map["touched tree"]); // -> -0.081

for (var event in map)
  console.log("The correlation for '" + event +
              "' is " + map[event]);

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza); // -> 0.068599434

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlations[event]);
}

for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2)); // -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // -> 3

console.log([0, 1, 2, 3, 4].slice(2, 4)); // -> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); // -> [2, 3, 4]

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2)) // -> ["a","b","d","e"]

var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty); // -> undefined

console.log("coconuts".slice(4,7)); // -> nut
console.log("coconuts".indexOf("u")); // -> 5

console.log("one two three".indexOf("ee")); // -> 11

console.log(" okay \n ".trim()); // -> okay

var string = "abc";
console.log(string.length); // -> 3
console.log(string.charAt(0)); // -> a
console.log(string[1]); // -> b

function noArguments() {}
noArguments(1, 2, 3); // This is okay
function threeArguments(a, b, c) {}
threeArguments(); // and so is this
 
function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}

argumentCounter("Straw man", "Tautology", "Ad hominem"); // -> You gave me 3 arguments.

// alternative addEntry function
function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal.push(entry);
}
addEntry(true, "work", "touched tree", "pizza", "running", "television");

function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return {x : radius * Math.cos(angle),
          y : radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));

console.log(Math.floor(Math.random() * 10));

// the global object
var myVar = 10;
console.log("myVar" in window); // -> true
console.log(window.myVar); // -> 10
console.log("JOURNAL" in window); // -> true, if jacques_journal.js is loaded before this script
