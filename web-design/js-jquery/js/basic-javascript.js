var today = new Date();
var hourNow = today.getDate();
var greeting;

if (hourNow > 18) {
  greeting = "Good evening";
} else if (hourNow > 12) {
  greeting = "Good afternoon";
} else if (hourNow > 0) {
  greeting = "Good morning";
} else {
  greeting = "Welcome";
}

document.write("Hello World!");
document.write('<h3>' + greeting + '</h3>');
