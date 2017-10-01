// Looping a triangle
//var s = "#";
//for (var row = 1; row <= 7; row++) {
//  console.log(s);
//  s += "#";
//}

// FizzBuzz
//for (var num = 1; num <= 100; num++) {
//  if (num % 3 == 0 && num % 5 == 0)
//    console.log("FizzBuzz");
//  else if (num % 3 == 0) 
//    console.log("Fizz");
//  else if (num % 5 == 0)
//    console.log("Buzz");
//  else 
//    console.log(num);
//}

//Chess board
var size = 8;
var board = ""
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);