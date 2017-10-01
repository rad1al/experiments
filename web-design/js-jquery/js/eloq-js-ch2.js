var ten = 10;
console.log(ten * ten);

var mood = "light";
console.log(mood);
mood = "dark"
console.log(mood);

var luigisdebt = 140;
luigisdebt = luigisdebt - 35;
console.log(luigisdebt);

var one = 1, two = 2;
console.log(one + two);

//alert("Good morning!");

var x = 30;
console.log("the value of x is", x);

console.log(Math.max(2,4));

console.log(Math.min(2,4) * 100);

// Returns true if user clicks OK and false if user clicks Cancel.
//var confirm_data = confirm("Shall we, then?");
//console.log(confirm_data); 

//var prompt_data = prompt("Tell me everything you know.", "...");
//console.log(prompt_data);

//var theNumber = Number(prompt("Pick a number", ""));
//alert("Your number is the square root of " + theNumber * theNumber);

// Conditional execution
/*
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " + theNumber * theNumber);
else
  alert("Hey. Why didn't you give me a number?");

var theNumber = Number(prompt("Pick a number", "0"));

if (num < 10)
  alert("Small");
else if (num < 100)
  alert("Medium");
else
  alert("Large");
*/

// While loops
//var number = 0;
//while (number <= 12) {
//  console.log(number);
//  number += 2;
//}

// For loops
//for (var number = 0; number <= 12; number += 2) {
//  console.log(number);
//}

//for (var current = 20; ; current++) {
//  if (current % 7 == 0)
//    break;
//}
//console.log(current);

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

